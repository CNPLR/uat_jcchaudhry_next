"use client";

import SubHeading from "./SubHeading";
import Img from "./Img";
import NormalButton from "./NormalButton";
import SmallButton from "./SmallButton";
import List from "./List";
import Para from "./Para";
import Link from "next/link";

interface VastuListAndImgProps {
  path: string;
  alt?: string;
  subHeading: string;
  content: string;

  para?: string;
  para1?: string;
  para2?: string;
  para3?: string;
  para4?: string;
  para5?: string;
  para6?: string;
  para7?: string;
  para8?: string;
  para9?: string;
  para10?: string;
  para11?: string;
  para12?: string;

  nbutton?: string;
  sbutton?: string;
  nstyle?: string;
  style?: string;
}

export default function VastuListAndImg({
  path,
  nbutton,
  sbutton,
  subHeading,
  content,
  para,
  para1,
  para2,
  para3,
  para4,
  para5,
  para6,
  para7,
  para8,
  para9,
  para10,
  para11,
  para12,
  nstyle,
  style,
  alt,
}: VastuListAndImgProps) {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;

  return (
    <div className={`${style} flex flex-col lg:flex-row justify-start items-start my-10`}>
      <Img alt={alt as string} style="w-96 mx-auto lg:mx-0" path={path as string} />
      <div className="lg:ml-10 space-y-1">
        <SubHeading style="my-5 lg:my-0" subHeading={subHeading} />
        <Para para={content} />

        <List para={para  || ""} />
        <List para={para1 || ""} />
        <List para={para2 || ""} />
        <List para={para3 || ""} />

        {para4 && <List para={para4} />}
        {para5 && <List para={para5} />}
        {para6 && <List para={para6} />}
        {para7 && <List para={para7} />}
        {para8 && <List para={para8} />}
        {para9 && <List para={para9} />}
        {para10 && <List para={para10} />}
        {para11 && <List para={para11} />}
        {para12 && <List para={para12} />}

        {nbutton && (
          <Link href={token ? "/dashboard" : "/numerology/signup"} className="">
            <NormalButton text={nbutton} style={`${nstyle}`} />
          </Link>
        )}

        {sbutton && <SmallButton text={sbutton} style="lg:mx-0 mx-auto" />}
      </div>
    </div>
  );
}
