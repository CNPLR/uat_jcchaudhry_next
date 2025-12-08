export async function getImages(endpoint: string) {
  const path = process.env.NEXT_PUBLIC_URI;
  const url = path + endpoint;

  const res = await fetch(url, {
    cache: "no-store" 
  });

  if (!res.ok) throw new Error("Failed to fetch images");

  const json = await res.json();
  return json.data;
}