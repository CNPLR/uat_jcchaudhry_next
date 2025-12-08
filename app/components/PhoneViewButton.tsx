"use client";

import NormalButton from "./ui/NormalButton";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function PhoneViewButton() {
  const router = useRouter();
  const [token, setToken] = useState<string | null>(null);

  // ✅ localStorage safe access
  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  const path = token ? "/dashboard" : "/numerology/signup";

  return (
    <div className="bg-white z-50 rounded-t-lg flex justify-center w-full h-[50px] items-center shadow-5xl fixed bottom-0 space-x-2">
      <NormalButton onClick={() => router.push(path)} text="Book Appointment" />
      <NormalButton
        onClick={() => router.push("/ask-your-question")}
        text="Ask Your Question"
      />
    </div>
  );
}
