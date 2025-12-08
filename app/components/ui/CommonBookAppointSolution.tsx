"use client";

import SubHeading from "./SubHeading";
import SubHeading2 from "./SubHeading2";
import NormalButton from "./NormalButton";
import Link from "next/link";

interface CommonBookAppointSolutionProps {
  subHeading: string;
  subHeading2: string;
  text?: string;
}

export default function CommonBookAppointSolution({
  subHeading,
  subHeading2,
  text,
}: CommonBookAppointSolutionProps) {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;

  return (
    <div className="space-y-5 lg:py-10 lg:px-10 px-5 py-10 bg-gray-100 rounded-md mt-10">
      <SubHeading style="text-center" subHeading={subHeading} />
      <SubHeading2 style="text-center" subHeading={subHeading2} />

      <Link href={text ? "/contact-us" : token ? "/dashboard" : "/numerology/signup"}>
        <NormalButton
          style="w-52 m-auto"
          text={text || "Book Appointment"}
        />
      </Link>
    </div>
  );
}
