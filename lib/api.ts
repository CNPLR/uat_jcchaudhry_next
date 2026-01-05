'use server';

import { revalidateTag } from 'next/cache';

type FetchOptions = RequestInit & {
  revalidate?: number;
  tags?: string[];
};

export async function apiFetch<T>(
  url: string,
  options: FetchOptions = {}
): Promise<T> {
  const {
    revalidate = 3600,
    tags = [],
    ...fetchOptions
  } = options;

  const res = await fetch(url, {
    ...fetchOptions,
    next: {
      revalidate,
      tags,
    },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`API Error: ${res.status}`);
  }

  return res.json();
}

export async function invalidateCache(tags: string | string[]): Promise<void> {
  const tagsArray = Array.isArray(tags) ? tags : [tags];
  tagsArray.forEach(tag => revalidateTag(tag, "default"));
}

