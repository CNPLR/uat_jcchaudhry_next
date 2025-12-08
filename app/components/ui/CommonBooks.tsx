"use client";

import Img from "./Img";
import SubHeading2 from "./SubHeading2";
import SmallButton from "./SmallButton";
import Link from "next/link";

interface CommonBooksProps {
  path: string;
  bookName: string;
  style?: string;
  wh?: string;
  link: string;
  alt?: string;
}

export default function CommonBooks({
  path,
  bookName,
  style = "",
  wh = "",
  link,
  alt = "Book cover",
}: CommonBooksProps) {
  return (
    <div className="bg-gray-100 rounded-md w-[240px] m-auto p-5">
      <Img alt={alt as string} style={`${wh} m-auto`} path={path as string} />
      <SubHeading2
        style={`${style} text-center my-5`}
        subHeading={bookName}
      />
      <Link href={link}>
        <SmallButton style="m-auto" text="Buy Now" />
      </Link>
    </div>
  );
}
