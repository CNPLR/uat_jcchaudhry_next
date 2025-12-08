"use client";

import SubHeading2 from "./SubHeading2";
import SubHeading from "./SubHeading";
import Para from "./Para";
import SmallButton from "./SmallButton";
import Img from "./Img";
import Link from "next/link";
import "../../../app/styles/common.css";



export default function BookDetails({
  subHeading1,
  subHeading2,
  subHeading3,
  subHeading4,
  path1,
  para1,
  para2,
  para3,
  list,
  list1,
  list2,
  text,
  onClick,
  link,
  alt,
}: BookDetailsProps) {
  return (
    <div className="px-10 my-10">
      <SubHeading style="mb-5 text-center" subHeading={subHeading1} />

      <div className="flex flex-col lg:flex-row justify-between items-start shadow-md p-5 border border-gray-200 rounded-md">
        {/* Left */}
        <div className="lg:w-[40%] w-full space-y-5">
          <SubHeading2 style="text-justify" subHeading={subHeading2} />
          <Para style="text-justify" para={para1 as string} />
           <div className="space-y-1 ml-4">
              {/* <Para para={list1} /> */}
              {
                 list1 && list1.map((item: string, index: number) => (
                    <div key={index} className={`para`}><li>{item}</li></div>
                  ))
                }
            </div>
          <SubHeading2 style="text-justify" subHeading={subHeading4 as string} />
           <div className="space-y-1 ml-4">
          
            {/* <Para para={list2} /> */}
            {
               list2 && list2.map((item: string, index: number) => (
                  <div key={index} className={`para`}><li>{item}</li></div>
                ))
              }
          </div>
          <Para style="text-justify" para={para2} />
          <Para style="text-justify" para={para3 as string} />
        </div>

        {/* Table of Contents */}
        <div className="lg:w-[25%] w-full my-5 lg:my-0">
          <SubHeading2 style="mb-2" subHeading="Table of contents" />
          <div className="space-y-1 ml-4">
            {/* <Para para={list} /> */} 

            {
              list.map((item: string, index: number) => (
                <div key={index} className={`para`}><li>{item}</li></div>
              ))
            }

            

            {text && (
              <button onClick={onClick} className="underline text-blue-600">
                {text}
              </button>
            )}

            {/* <List para={list} /> */}
          </div>
        </div>

        {/* Right */}
        <div className="lg:w-[20%] w-full">
          <div className="border border-gray-200 p-5">
            <Img style="mx-auto" alt={alt as string} path={path1  as string} />

            <SubHeading2 style="text-center my-2" subHeading={subHeading3} />

            <Link href={link as string}>
              <SmallButton style="m-auto" text="Order Now" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export interface BookDetailsProps {
  subHeading1: string;
  subHeading2: string;
  subHeading3: string;
  subHeading4?: string;

  path1: string;

  para1: string;
  para2: string;
  para3?: string;

  list: string[];
  list1: string[];
  list2: string[];

  onClick?: () => void;

  text?: string;
  link?: string;
  alt?: string;
}
