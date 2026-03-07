import { Link, useLocation } from "react-router-dom";
import { Telescope, Calendar, Heart, Shuffle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { getRandomDate } from "@/services/apodApi";

const tabs = [
  { path: "/", label: "Today", icon: Telescope },
  { path: "/archive", label: "Archive", icon: Calendar },
  { path: "/favorites", label: "Favorites", icon: Heart },
];

export default function Header() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleRandom = () => {
    navigate(`/archive?date=${getRandomDate()}`);
  };

  return (
    <header className="sticky top-0 z-50 header-gradient backdrop-blur-xl border-b border-border">
      <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-xl">🌌</span>
          <h1 className="font-display text-lg font-bold text-foreground">APOD Explorer</h1>
        </Link>
        <nav className="flex gap-1">
          {tabs.map((t) => {
            const active = pathname === t.path;
            return (
              <Link
                key={t.path}
                to={t.path}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                  active
                    ? "bg-primary/15 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                <t.icon className="w-4 h-4" />
                <span className="hidden sm:inline">{t.label}</span>
              </Link>
            );
          })}
          <button
            onClick={handleRandom}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
            title="Random APOD"
          >
            <Shuffle className="w-4 h-4" />
            <span className="hidden sm:inline">Random</span>
          </button>
        </nav>
      </div>
    </header>
  );
}
