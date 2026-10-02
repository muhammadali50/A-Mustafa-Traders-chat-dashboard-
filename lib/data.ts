import { mockConversations, mockMessages } from "@/lib/mock-data";
import { getSupabaseClient } from "@/lib/supabase";
import type { Conversation, Message } from "@/types/database";

export interface DatabaseQueryErrorDetails {
  query: string;
  status: number;
  code: string;
  message: string;
  details: string | null;
  hint: string | null;
}

export class DatabaseQueryError extends Error {
  constructor(public readonly info: DatabaseQueryErrorDetails) {
    super(info.message);
    this.name = "DatabaseQueryError";
  }
}

function throwQueryError(
  query: string,
  status: number,
  error: {
    code?: string;
    message: string;
    details?: string | null;
    hint?: string | null;
  }
): never {
  const info: DatabaseQueryErrorDetails = {
    query,
    status,
    code: error.code ?? "",
    message: error.message,
    details: error.details ?? null,
    hint: error.hint ?? null
  };

  console.error("[Supabase] " + query + " failed", info);
  throw new DatabaseQueryError(info);
}

export async function getConversations(): Promise<{
  data: Conversation[];
  demo: boolean;
}> {
  const supabase = getSupabaseClient();

  if (!supabase) {
    return { data: mockConversations, demo: true };
  }

  const { data, error, status } = await supabase
    .from("conversations")
    .select("*")
    .order("last_message_at", { ascending: false });

  if (error) throwQueryError("getConversations", status, error);

  return { data: data ?? [], demo: false };
}

export async function getMessages(conversationId: string): Promise<Message[]> {
  const supabase = getSupabaseClient();

  if (!supabase) {
    return mockMessages.filter((item) => item.conversation_id === conversationId);
  }

  const { data, error, status } = await supabase
    .from("messages")
    .select("*")
    .eq("conversation_id", conversationId)
    .order("created_at", { ascending: true });

  if (error) throwQueryError("getMessages", status, error);

  return data ?? [];
}

export function subscribeToMessages(onInsert: (message: Message) => void) {
  const supabase = getSupabaseClient();

  if (!supabase) return () => undefined;

  const channel = supabase
    .channel("amt-dashboard-messages")
    .on(
      "postgres_changes",
      { event: "INSERT", schema: "public", table: "messages" },
      (payload) => onInsert(payload.new as Message)
    )
    .subscribe();

  return () => {
    void supabase.removeChannel(channel);
  };
}

export function subscribeToConversations(
  onChange: (conversation: Conversation) => void
) {
  const supabase = getSupabaseClient();

  if (!supabase) return () => undefined;

  const channel = supabase
    .channel("amt-dashboard-conversations")
    .on(
      "postgres_changes",
      { event: "*", schema: "public", table: "conversations" },
      (payload) => {
        if (payload.eventType === "INSERT" || payload.eventType === "UPDATE") {
          onChange(payload.new as Conversation);
        }
      }
    )
    .subscribe();

  return () => {
    void supabase.removeChannel(channel);
  };
}

