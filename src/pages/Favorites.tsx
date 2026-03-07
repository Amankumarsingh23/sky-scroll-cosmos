import { useState, useCallback } from "react";
import { getFavorites } from "@/services/favorites";
import ApodCard from "@/components/ApodCard";
import { Heart } from "lucide-react";

export default function FavoritesPage() {
  const [favs, setFavs] = useState(getFavorites());

  const refresh = useCallback(() => {
    setFavs(getFavorites());
  }, []);

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 space-y-4">
      <h2 className="font-display text-2xl font-bold text-foreground">Favorites</h2>

      {favs.length === 0 ? (
        <div className="rounded-lg bg-card p-12 text-center card-glow space-y-3">
          <Heart className="w-12 h-12 text-muted-foreground mx-auto" />
          <p className="text-muted-foreground">No favorites yet. Tap the heart on any picture to save it.</p>
        </div>
      ) : (
        <div className="space-y-6">
          {favs.map((apod) => (
            <ApodCard key={apod.date} apod={apod} onFavChange={refresh} />
          ))}
        </div>
      )}
    </div>
  );
}
