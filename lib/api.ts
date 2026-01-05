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
    cache: "force-cache",
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


export async function getUserData(number: string, token: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URI}websiteuser/${number}`, {
    cache: 'no-store', // or use revalidate for caching
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  });
  console.log(res)
  const data = await res.json();
  return data;
}