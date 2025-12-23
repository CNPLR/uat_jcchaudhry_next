// utils/getPathname.ts
import { headers } from 'next/headers'

export async function getPathname(): Promise<string> {
  const headersList = await headers()  // ✅ Must await in Next.js 15+
  return headersList.get('x-pathname') || ''
}
