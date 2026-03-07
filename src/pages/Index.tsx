import { useQuery } from "@tanstack/react-query";
import { fetchApod } from "@/services/apodApi";
import ApodCard from "@/components/ApodCard";
import ShimmerCard from "@/components/ShimmerCard";
import { AlertCircle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TodayPage() {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["apod-today"],
    queryFn: () => fetchApod(),
    staleTime: 10 * 60 * 1000,
  });

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="font-display text-2xl font-bold text-foreground">Astronomy Picture of the Day</h2>
        <Button size="icon" variant="ghost" onClick={() => refetch()} className="hover:bg-secondary">
          <RefreshCw className="w-4 h-4 text-muted-foreground" />
        </Button>
      </div>

      {isLoading && <ShimmerCard />}

      {isError && (
        <div className="rounded-lg bg-card p-8 text-center card-glow space-y-3">
          <AlertCircle className="w-10 h-10 text-destructive mx-auto" />
          <p className="text-muted-foreground">Failed to load today's picture.</p>
          <Button variant="outline" onClick={() => refetch()}>Try Again</Button>
        </div>
      )}

      {data && <ApodCard apod={data} />}
    </div>
  );
}
