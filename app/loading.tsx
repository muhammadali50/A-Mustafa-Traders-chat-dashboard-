export default function Loading() {
  return (
    <div className="grid h-dvh place-items-center bg-[#f7f4ee]">
      <div className="relative h-12 w-12">
        <span className="absolute inset-0 animate-ping rounded-full bg-amber-500/20" />
        <span className="absolute inset-1 animate-spin rounded-full border-2 border-[#8f171d] border-t-transparent" />
      </div>
    </div>
  );
}

