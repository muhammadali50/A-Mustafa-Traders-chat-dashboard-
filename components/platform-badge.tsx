import type { Platform } from "@/types/database";

export function PlatformBadge({
  platform,
  compact = false
}: {
  platform: Platform;
  compact?: boolean;
}) {
  const instagram = platform === "instagram";

  return (
    <span
      className={
        "inline-flex items-center gap-1.5 font-semibold capitalize " +
        (instagram ? "text-fuchsia-700" : "text-blue-700")
      }
    >
      <span
        className={
          "grid h-5 w-5 place-items-center rounded-md text-[10px] font-bold text-white shadow-sm " +
          (instagram
            ? "bg-gradient-to-br from-violet-600 via-pink-500 to-orange-400"
            : "bg-blue-600")
        }
      >
        {instagram ? "◎" : "f"}
      </span>
      {!compact && platform}
    </span>
  );
}

