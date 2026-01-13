import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function proxy(req: NextRequest) {
  const token = req.cookies.get("token")?.value;

  const request: any = await fetch(`${process.env.URI}validateUser/${token}`)
  const  response = await request.json();

  const protectedRoutes = ['/askQuestions', '/dashboard', '/mybookings', '/profile', '/report-payment'];

  const isProtected = protectedRoutes.some(route =>
    req.nextUrl.pathname.startsWith(route)
  );

  if (isProtected && !token && !response?.success) {
    return NextResponse.redirect(new URL("/numerology/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/profile/:path*", "/admin/:path*"],
};
