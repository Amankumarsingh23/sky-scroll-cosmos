import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchApod } from "@/services/apodApi";
import ApodCard from "@/components/ApodCard";
import ShimmerCard from "@/components/ShimmerCard";
import { Input } from "@/components/ui/input";
import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

function formatDate(d: Date) {
  return d.toISOString().split("T")[0];
}

export default function ArchivePage() {
  const [date, setDate] = useState(formatDate(new Date()));

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["apod", date],
    queryFn: () => fetchApod(date),
    staleTime: Infinity,
  });

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 space-y-4">
      <h2 className="font-display text-2xl font-bold text-foreground">Browse Archive</h2>
      <div className="flex gap-3 items-center">
        <Input
          type="date"
          value={date}
          max={formatDate(new Date())}
          min="1995-06-16"
          onChange={(e) => setDate(e.target.value)}
          className="bg-secondary border-border text-foreground w-auto"
        />
      </div>

      {isLoading && <ShimmerCard />}

      {isError && (
        <div className="rounded-lg bg-card p-8 text-center card-glow space-y-3">
          <AlertCircle className="w-10 h-10 text-destructive mx-auto" />
          <p className="text-muted-foreground">No data for this date.</p>
          <Button variant="outline" onClick={() => refetch()}>Try Again</Button>
        </div>
      )}

      {data && <ApodCard apod={data} />}
    </div>
  );
}
