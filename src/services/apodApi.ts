const API_KEY = "YaeTkdGozgtqBzRQTn50IIxV4YZLxaGMr417d3cG";
const BASE_URL = "https://api.nasa.gov/planetary/apod";

export interface ApodData {
  date: string;
  title: string;
  explanation: string;
  url: string;
  hdurl?: string;
  media_type: string;
  copyright?: string;
}

export interface ApodError {
  type: "network" | "api" | "unknown";
  message: string;
  status?: number;
}

const cache = new Map<string, { data: ApodData; timestamp: number }>();
const CACHE_DURATION = 10 * 60 * 1000;

export function getRandomDate(): string {
  const start = new Date("1995-06-16").getTime();
  const end = new Date().getTime();
  const rand = new Date(start + Math.random() * (end - start));
  return rand.toISOString().split("T")[0];
}

export async function fetchApod(date?: string): Promise<ApodData> {
  const cacheKey = date || "today";
  const cached = cache.get(cacheKey);
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return cached.data;
  }

  const params = new URLSearchParams({ api_key: API_KEY });
  if (date) params.append("date", date);

  let res: Response;
  try {
    res = await fetch(`${BASE_URL}?${params}`);
  } catch (err) {
    const error: ApodError = {
      type: "network",
      message: "Unable to connect. Please check your internet connection and try again.",
    };
    throw error;
  }

  if (!res.ok) {
    const error: ApodError = {
      type: "api",
      message: res.status === 429
        ? "Too many requests. Please wait a moment and try again."
        : res.status === 403
        ? "API key issue. Please try again later."
        : `Something went wrong (Error ${res.status}). Please try again.`,
      status: res.status,
    };
    throw error;
  }

  const data: ApodData = await res.json();
  cache.set(cacheKey, { data, timestamp: Date.now() });
  return data;
}
