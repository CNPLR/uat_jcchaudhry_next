"use client";

import Link from "next/link";
import SubHeading2 from "./SubHeading2";
import Img from "./Img";
import Para from "./Para";
import SmallButton from "./SmallButton";

type CardBoxProps = {
  para?: string;
  SubHeading: string;
  path: string;
  hoverPath?: string;
  link: string;
  alt1?: string;
  alt2?: string;
};

export default function CardBox({
  para,
  SubHeading,
  path,
  hoverPath,
  link,
  alt1,
  alt2,
}: CardBoxProps) {
  return (
    <div className="work opacity-100 w-[270px] h-[360px] shadow-lg border border-gray-200 m-auto mb-10 bg-white rounded-md">
            <div className='px-10'>
                <Link href={link} className="work-box text-center m-auto">
                    <Img alt={alt1 as string} style='w-48 m-auto' path={path} />
                    <SubHeading2 subHeading={SubHeading} style="my-2" />
                    <Para para={para as string} />
                    <div className="overlay">
                        <div className="overlay-caption">
                            <h5>
                                <span className="">
                                    <Img alt={alt2 as string} style='w-60 m-auto rounded-md' path={hoverPath as string} />
                                </span>
                            </h5>
                            <SubHeading2 subHeading={SubHeading} style="my-5 text-white" />
                            {/* <Link href={link}> */}
                                <SmallButton text="Know More" style="m-auto" />
                            {/* </Link> */}
                        </div>
                    </div>
                </Link>
            </div>
        </div>
  );
}
