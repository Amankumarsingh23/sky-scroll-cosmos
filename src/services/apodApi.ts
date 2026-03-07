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

const cache = new Map<string, { data: ApodData; timestamp: number }>();
const CACHE_DURATION = 10 * 60 * 1000; // 10 min

export async function fetchApod(date?: string): Promise<ApodData> {
  const cacheKey = date || "today";
  const cached = cache.get(cacheKey);
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return cached.data;
  }

  const params = new URLSearchParams({ api_key: API_KEY });
  if (date) params.append("date", date);

  const res = await fetch(`${BASE_URL}?${params}`);
  if (!res.ok) {
    throw new Error(`API error: ${res.status}`);
  }
  const data: ApodData = await res.json();
  cache.set(cacheKey, { data, timestamp: Date.now() });
  return data;
}
