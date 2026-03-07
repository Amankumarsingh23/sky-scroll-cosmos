import { useQuery } from "@tanstack/react-query";
import { fetchApod } from "@/services/apodApi";
import ApodCard from "@/components/ApodCard";
import ShimmerCard from "@/components/ShimmerCard";
import ErrorState from "@/components/ErrorState";
import { RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TodayPage() {
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["apod-today"],
    queryFn: () => fetchApod(),
    staleTime: 10 * 60 * 1000,
    retry: 2,
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
      {isError && <ErrorState error={error} onRetry={() => refetch()} />}
      {data && <ApodCard apod={data} />}
    </div>
  );
}
