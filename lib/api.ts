import type { ColumbusData } from "./types";

export async function getProducts(): Promise<ColumbusData> {
  const url = process.env.COLUMBUS_API_URL;
  const apiKey = process.env.COLUMBUS_API_KEY;

  if (!url) throw new Error("Missing environment variable: COLUMBUS_API_URL");
  if (!apiKey)
    throw new Error("Missing environment variable: COLUMBUS_API_KEY");

  const response = await fetch(url, {
    headers: { "x-api-key": apiKey },
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch products: HTTP ${response.status}`);
  }

  return (await response.json()) as ColumbusData;
}
