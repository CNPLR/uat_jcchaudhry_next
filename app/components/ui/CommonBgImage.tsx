"use client";

import React from "react";
import MainHeading from "./MainHeading";
import SubHeading from "./SubHeading";
import SubHeading2 from "./SubHeading2";
import NormalButton from "./NormalButton";
import Para from "./Para";
import SmallButton from "./SmallButton";
import Img from "./Img";
import Link from "next/link";

interface CommonBgImageProps {
  url: string;
  position?: string;
  mainHeading?: string;
  subHeading?: string;
  subHeading2?: string;
  style?: string;
  style2?: string;
  para?: string;
  text?: string;
  path2?: string;
  condition?: boolean;
  alt?: string;
}

export default function CommonBgImage({
  url,
  position = "",
  mainHeading,
  subHeading,
  subHeading2,
  style = "",
  style2 = "",
  para,
  text,
  path2,
  condition,
  alt,
}: CommonBgImageProps) {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;

  return (
    <div
      className={`w-full bg-no-repeat bg-cover ${position} ${style}`}
      style={{ backgroundImage: `url(${url})` }}
    >
      {path2 && (
        <div className="mb-5 lg:mb-0">
          <Img alt={alt as string} style="lg:w-80 w-60" path={path2 as string} />
        </div>
      )}

      <div className={`${style2} space-y-5`}>
        {mainHeading && (
          <MainHeading
            style="text-center text-[#fd7e14]"
            mainHeading={mainHeading}
          />
        )}

        {para && <Para para={para} />}

        {subHeading2 && (
          <SubHeading2
            style="text-center text-white"
            subHeading={subHeading2}
          />
        )}

        {subHeading && (
          <SubHeading style="text-center text-white" subHeading={subHeading} />
        )}

        {condition ? null : text ? (
          <SmallButton style="m-auto" text={text} />
        ) : (
          <Link href={token ? "/dashboard" : "/numerology/signup"}>
            <NormalButton style="w-52 m-auto" text="Book Appointment" />
          </Link>
        )}
      </div>
    </div>
  );
}
