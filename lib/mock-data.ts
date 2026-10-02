import type { Conversation, Message } from "@/types/database";

export const mockConversations: Conversation[] = [
  {
    id: "11111111-1111-4111-8111-111111111111",
    platform: "instagram",
    platform_user_id: "@ali.khan",
    username: "Ali Khan",
    user_avatar: null,
    last_message: "25kg AMT 1121 Steam Rice ka rate share kar dein.",
    last_message_at: "2026-10-02T15:42:00+05:00",
    created_at: "2026-10-02T15:30:00+05:00",
    updated_at: "2026-10-02T15:42:00+05:00",
    status: "active",
    unread_count: 2
  },
  {
    id: "22222222-2222-4222-8222-222222222222",
    platform: "facebook",
    platform_user_id: "fb_hamza_store",
    username: "Hamza General Store",
    user_avatar: null,
    last_message: "Thank you, delivery mil gayi hai.",
    last_message_at: "2026-10-02T14:18:00+05:00",
    created_at: "2026-10-01T11:30:00+05:00",
    updated_at: "2026-10-02T14:18:00+05:00",
    status: "resolved",
    unread_count: 0
  },
  {
    id: "33333333-3333-4333-8333-333333333333",
    platform: "instagram",
    platform_user_id: "@sarafoods",
    username: "Sara Foods",
    user_avatar: null,
    last_message: "Do you deliver wholesale orders to Lahore?",
    last_message_at: "2026-10-02T12:05:00+05:00",
    created_at: "2026-10-02T11:55:00+05:00",
    updated_at: "2026-10-02T12:05:00+05:00",
    status: "active",
    unread_count: 1
  },
  {
    id: "44444444-4444-4444-8444-444444444444",
    platform: "facebook",
    platform_user_id: "fb_usman_mart",
    username: "Usman Mart",
    user_avatar: null,
    last_message: "PK-386 aur Super Basmati mein kya difference hai?",
    last_message_at: "2026-10-01T18:28:00+05:00",
    created_at: "2026-10-01T18:20:00+05:00",
    updated_at: "2026-10-01T18:28:00+05:00",
    status: "active",
    unread_count: 0
  },
  {
    id: "55555555-5555-4555-8555-555555555555",
    platform: "instagram",
    platform_user_id: "@maham_caters",
    username: "Maham Caterers",
    user_avatar: null,
    last_message: "Please send your complete product catalogue.",
    last_message_at: "2026-09-30T16:10:00+05:00",
    created_at: "2026-09-30T16:00:00+05:00",
    updated_at: "2026-09-30T16:10:00+05:00",
    status: "active",
    unread_count: 0
  }
];

const conversationMessages: Array<{
  conversation: number;
  sender: "user" | "bot";
  message: string;
  createdAt: string;
}> = [
  {
    conversation: 0,
    sender: "user",
    message: "Assalam-o-Alaikum, mujhe AMT rice products ke bare mein information chahiye.",
    createdAt: "2026-10-02T15:31:00+05:00"
  },
  {
    conversation: 0,
    sender: "bot",
    message: "Wa Alaikum Assalam! A Mustafa Traders mein khush aamdeed. Hum premium Basmati, Steam aur Sella rice varieties offer karte hain. Aap kis product mein interested hain?",
    createdAt: "2026-10-02T15:32:00+05:00"
  },
  {
    conversation: 0,
    sender: "user",
    message: "Mujhe restaurant ke liye long grain steam rice chahiye.",
    createdAt: "2026-10-02T15:35:00+05:00"
  },
  {
    conversation: 0,
    sender: "bot",
    message: "AMT 1121 Steam Rice restaurant use ke liye behtareen choice hai. Is ka grain extra-long, aroma rich aur cooking result consistent hai.",
    createdAt: "2026-10-02T15:37:00+05:00"
  },
  {
    conversation: 0,
    sender: "user",
    message: "25kg AMT 1121 Steam Rice ka rate share kar dein.",
    createdAt: "2026-10-02T15:42:00+05:00"
  },
  {
    conversation: 1,
    sender: "user",
    message: "Order #AMT-2048 ka delivery update chahiye.",
    createdAt: "2026-10-02T13:56:00+05:00"
  },
  {
    conversation: 1,
    sender: "bot",
    message: "Aapka order aaj subah dispatch ho gaya tha aur delivery vehicle aapke area mein hai.",
    createdAt: "2026-10-02T14:02:00+05:00"
  },
  {
    conversation: 1,
    sender: "user",
    message: "Thank you, delivery mil gayi hai.",
    createdAt: "2026-10-02T14:18:00+05:00"
  },
  {
    conversation: 2,
    sender: "user",
    message: "Hello, we need 100 bags for our catering business.",
    createdAt: "2026-10-02T11:56:00+05:00"
  },
  {
    conversation: 2,
    sender: "bot",
    message: "Thank you for contacting A Mustafa Traders. Our wholesale team can help with bulk pricing and transport.",
    createdAt: "2026-10-02T11:58:00+05:00"
  },
  {
    conversation: 2,
    sender: "user",
    message: "Do you deliver wholesale orders to Lahore?",
    createdAt: "2026-10-02T12:05:00+05:00"
  },
  {
    conversation: 3,
    sender: "user",
    message: "PK-386 aur Super Basmati mein kya difference hai?",
    createdAt: "2026-10-01T18:28:00+05:00"
  },
  {
    conversation: 4,
    sender: "user",
    message: "Please send your complete product catalogue.",
    createdAt: "2026-09-30T16:10:00+05:00"
  }
];

export const mockMessages: Message[] = conversationMessages.map((item, index) => ({
  id: "message-" + (index + 1),
  conversation_id: mockConversations[item.conversation].id,
  sender_type: item.sender,
  message: item.message,
  created_at: item.createdAt
}));

