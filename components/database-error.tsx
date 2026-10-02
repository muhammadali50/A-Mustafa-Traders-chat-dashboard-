"use client";

import { useEffect } from "react";
import Image from "next/image";
import type { DatabaseQueryErrorDetails } from "@/lib/data";

export function DatabaseError({ error }: { error: DatabaseQueryErrorDetails }) {
  useEffect(() => {
    console.error("[Supabase query error]", JSON.stringify(error, null, 2));
  }, [error]);

  return (
    <div className="grid h-full place-items-center p-8 text-center">
      <div className="max-w-md rounded-3xl border border-red-100 bg-white p-8 shadow-panel">
        <Image
          src="/brand/amt-logo.png"
          alt="A Mustafa Traders"
          width={84}
          height={84}
          className="mx-auto"
        />
        <h1 className="mt-5 text-xl font-extrabold text-stone-900">Unable to load conversations</h1>
        <p className="mt-2 text-sm leading-6 text-stone-500">
          Please check the Supabase connection details. The exact query error is available in the
          browser console.
        </p>
      </div>
    </div>
  );
}
