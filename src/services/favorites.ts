import { ApodData } from "./apodApi";

const STORAGE_KEY = "apod-favorites";

export function getFavorites(): ApodData[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function addFavorite(apod: ApodData): void {
  const favs = getFavorites();
  if (!favs.find((f) => f.date === apod.date)) {
    favs.unshift(apod);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favs));
  }
}

export function removeFavorite(date: string): void {
  const favs = getFavorites().filter((f) => f.date !== date);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(favs));
}

export function isFavorite(date: string): boolean {
  return getFavorites().some((f) => f.date === date);
}
