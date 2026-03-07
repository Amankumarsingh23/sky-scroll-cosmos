export default function ShimmerCard() {
  return (
    <div className="rounded-lg overflow-hidden bg-card card-glow">
      <div className="shimmer w-full aspect-video" />
      <div className="p-6 space-y-3">
        <div className="shimmer h-6 w-3/4 rounded" />
        <div className="shimmer h-4 w-1/3 rounded" />
        <div className="shimmer h-4 w-full rounded" />
        <div className="shimmer h-4 w-5/6 rounded" />
      </div>
    </div>
  );
}
