"use client";

import { useState } from "react";
import { Sidebar } from "@/components/sidebar";

export function DashboardShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex h-dvh overflow-hidden bg-[#f7f4ee]">
      <Sidebar open={open} onToggle={() => setOpen((value) => !value)} />
      <main className="h-full min-h-0 min-w-0 flex-1 overflow-hidden">{children}</main>
    </div>
  );
}

