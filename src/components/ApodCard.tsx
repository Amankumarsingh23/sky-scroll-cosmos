import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Share2, ExternalLink, Calendar } from "lucide-react";
import { ApodData } from "@/services/apodApi";
import { addFavorite, removeFavorite, isFavorite } from "@/services/favorites";
import { Button } from "@/components/ui/button";

interface Props {
  apod: ApodData;
  onFavChange?: () => void;
}

export default function ApodCard({ apod, onFavChange }: Props) {
  const [fav, setFav] = useState(isFavorite(apod.date));
  const [expanded, setExpanded] = useState(false);

  const toggleFav = () => {
    if (fav) {
      removeFavorite(apod.date);
    } else {
      addFavorite(apod);
    }
    setFav(!fav);
    onFavChange?.();
  };

  const handleShare = async () => {
    const text = `🌌 ${apod.title} — NASA APOD (${apod.date})\n${apod.url}`;
    if (navigator.share) {
      await navigator.share({ title: apod.title, text, url: apod.url });
    } else {
      await navigator.clipboard.writeText(text);
    }
  };

  const wikiUrl = `https://en.wikipedia.org/wiki/${encodeURIComponent(apod.title.replace(/ /g, "_"))}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="rounded-lg overflow-hidden bg-card card-glow"
    >
      {apod.media_type === "image" ? (
        <motion.img
          src={apod.hdurl || apod.url}
          alt={apod.title}
          className="w-full object-cover max-h-[70vh]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          loading="lazy"
        />
      ) : (
        <iframe
          src={apod.url}
          title={apod.title}
          className="w-full aspect-video"
          allowFullScreen
        />
      )}

      <div className="p-6 space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="font-display text-xl font-bold text-foreground">{apod.title}</h2>
            <p className="flex items-center gap-1.5 text-sm text-muted-foreground mt-1">
              <Calendar className="w-3.5 h-3.5" />
              {apod.date}
              {apod.copyright && <span> · © {apod.copyright}</span>}
            </p>
          </div>
          <div className="flex gap-2 shrink-0">
            <Button size="icon" variant="ghost" onClick={toggleFav} className="hover:bg-secondary">
              <Heart className={`w-5 h-5 ${fav ? "fill-primary text-primary" : "text-muted-foreground"}`} />
            </Button>
            <Button size="icon" variant="ghost" onClick={handleShare} className="hover:bg-secondary">
              <Share2 className="w-5 h-5 text-muted-foreground" />
            </Button>
          </div>
        </div>

        <p className={`text-sm text-muted-foreground leading-relaxed ${!expanded ? "line-clamp-4" : ""}`}>
          {apod.explanation}
        </p>
        {apod.explanation.length > 200 && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-sm text-primary hover:underline"
          >
            {expanded ? "Show less" : "Read more"}
          </button>
        )}

        <a
          href={wikiUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
        >
          <ExternalLink className="w-3.5 h-3.5" />
          Learn More on Wikipedia
        </a>
      </div>
    </motion.div>
  );
}
