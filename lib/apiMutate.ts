'use server';
import { revalidateTag } from "next/cache";
/**
 * Mutate data on the server by sending a request to the specified
 * URL. The response will be cached and revalidated according to the
 * options provided.
 *
 * @param {string} url - The URL to send the request to.
 * @param {RequestInit & {invalidateTags?: string[]}} options - An object containing
 * the request options and an optional array of tags to invalidate.
 * @returns {Promise<T>} - A promise that resolves with the response data.
 */
export async function apiMutate<T>(
  url: string,
  options: RequestInit & {
    invalidateTags?: string[];
  } = {}
): Promise<T> {
  const { invalidateTags = [], ...fetchOptions } = options;

  const res = await fetch(url, {
    ...fetchOptions,
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`API Error: ${res.status}`);
  }

  invalidateTags.forEach((tag) => {
    revalidateTag(tag, "default"); 
  });

  return res.json();
}
