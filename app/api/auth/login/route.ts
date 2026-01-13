
import { NextResponse } from "next/server";

const path = process.env.URI;

export async function POST(req: Request) {
  const { mob, pass } = await req.json();

   const res = await fetch(path + "websiteuser/login", {
                method: "POST",
                headers:  { "content-Type": "application/json", "accept": "*/*" },
                body: JSON.stringify({  mob, pass })
            })

            const data = await res.json();

  
  // 🎟️ Generate token (JWT ideally)
  const token = data?.token;

  const response = NextResponse.json(data);

  response.cookies.set("token", token, {
    httpOnly: true,     // ❗ cannot be accessed by JS
    secure: process.env.NEXT_PUBLIC_NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 60 * 60 * 24 * 365, // 1 year
    path: "/",
  });

  return response;
}
