"use client";

import SubHeading2 from "./SubHeading2";
import Para from "./Para";
import Img from "./Img";
import Link from "next/link";

interface OurSolutionCardProps {
  path: string;
  subHeading: string;
  para: string;
  link: string;
  alt: string;
  style?: string;
}

export default function OurSolutionCard({
  path,
  subHeading,
  para,
  style,
  link,
  alt,
}: OurSolutionCardProps) {
  return (
    <div
      className={`${style} mb-10 w-72 text-center shadow-md hover:shadow-xl md:mr-12 transition bg-white p-5 rounded-md`}
    >
      <Link href={link} className="">
        <Img alt={alt as string} path={path as string} />
        <div className="">
          <SubHeading2 style="mt-4" subHeading={subHeading} />
          <Para style="mt-4" para={para} />
        </div>
      </Link>
    </div>
  );
}
