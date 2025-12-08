"use client";

import Link from "next/link";
import SubHeading from "./SubHeading";
import MainHeading from "./MainHeading";
import SubHeading2 from "./SubHeading2";
import Para from "./Para";
import Img from "./Img";
import NormalButton from "./NormalButton";

type CommonAboutProps = {
  mainHeading: string;
  subHeading2: string;
  path: string;
  subHeading: string;
  para: string;
  para1: string;
  para2: string;
  para3: string;
  text: string;
  link: string;
  alt: string;
};

export default function CommonAbout({
  mainHeading,
  subHeading2,
  path,
  subHeading,
  para,
  para1,
  para2,
  para3,
  text,
  link,
  alt,
}: CommonAboutProps) {
  return (
    <div>
      <div className="my-10 space-y-5">
        <MainHeading style="text-center" mainHeading={mainHeading} />
        <SubHeading2 style="text-center" subHeading={subHeading2} />
      </div>

      <div className="flex md:flex-row flex-col px-10">
        <Img alt={alt as string} style="w-96" path={path  as string} />

        <div className="lg:ml-10">
          <SubHeading
            style="lg:text-left text-center mb-5"
            subHeading={subHeading}
          />

          <div className="space-y-10 text-justify">
            <Para para={para} />
            <Para para={para1} />
            <Para para={para2} />
            <Para para={para3} />

            <Link href={link}>
              <NormalButton style="w-52 m-auto" text={text} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
