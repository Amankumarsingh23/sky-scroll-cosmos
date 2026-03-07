import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchApod, getRandomDate } from "@/services/apodApi";
import ApodCard from "@/components/ApodCard";
import ShimmerCard from "@/components/ShimmerCard";
import ErrorState from "@/components/ErrorState";
import { Input } from "@/components/ui/input";
import { Shuffle } from "lucide-react";
import { Button } from "@/components/ui/button";

function formatDate(d: Date) {
  return d.toISOString().split("T")[0];
}

export default function ArchivePage() {
  const [date, setDate] = useState(formatDate(new Date()));

  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["apod", date],
    queryFn: () => fetchApod(date),
    staleTime: Infinity,
    retry: 2,
  });

  const handleRandom = () => {
    setDate(getRandomDate());
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 space-y-4">
      <h2 className="font-display text-2xl font-bold text-foreground">Browse Archive</h2>
      <div className="flex gap-3 items-center flex-wrap">
        <Input
          type="date"
          value={date}
          max={formatDate(new Date())}
          min="1995-06-16"
          onChange={(e) => setDate(e.target.value)}
          className="bg-secondary border-border text-foreground w-auto"
        />
        <Button onClick={handleRandom} variant="outline" className="gap-2">
          <Shuffle className="w-4 h-4" />
          Random APOD
        </Button>
      </div>

      {isLoading && <ShimmerCard />}
      {isError && <ErrorState error={error} onRetry={() => refetch()} />}
      {data && <ApodCard apod={data} />}
    </div>
  );
}
