"use client";

import SubHeading2 from "./SubHeading2";
import Para from "./Para";
import MainHeading from "./MainHeading";
import NormalButton from "./NormalButton";
import SubHeading from "./SubHeading";
import Img from "./Img";
import SmallButton from "./SmallButton";
import { ReactNode } from "react";

type FormateProps = {
  para: string;
  para1: ReactNode;
};

export function Formate({ para, para1 }: FormateProps) {
  return (
    <div className="flex items-center md:flex-row flex-col">
      <div className="flex items-center">
        <Para style="font-bold md:w-32" para={para} />
        <Para style="font-bold" para=":" />
      </div>
      <div className="ml-5">{para1}</div>
    </div>
  );
}

export default function CommonAskPrice() {
  return (
    <div className="bg-white">
      <div className="rounded-lg flex lg:flex-row flex-col justify-between items-start p-10">
        <div>
          <SubHeading2 subHeading="Review your question" />

          <div className="border p-5">
            <Para para="Does my name vibrate harmoniously with my DOB? If not, can you please suggest changes" />
          </div>

          <div className="my-5">
            <Para
              style="font-semibold text-center lg:text-left"
              para="Your Details"
            />

            <div className="mt-2 space-y-3">
              <Formate para="Name" para1="Avanit Kumar Niraj" />
              <Formate para="Mobile Number" para1="9899668173" />
              <Formate para="Date of Birth" para1="986-12-07" />
              <Formate
                para="Email Address"
                para1="avanitkrniraj0000@gmail.com"
              />
              <Formate
                para="Time of Birth"
                para1={<input className="border" type="time" />}
              />
              <Formate
                para="Place of Birth"
                para1={<input className="border" type="text" />}
              />
            </div>
          </div>

          <div className="mb-5">
            <Para
              style="font-semibold"
              para="Describe your problem/issues in detail (Optional)"
            />
            <textarea
              className="border mt-5 w-full"
              rows={5}
              placeholder="Write here..."
            />
          </div>
        </div>

        <div className="border p-5 md:p-6 md:w-72 text-center flex justify-center items-center">
          <div className="space-y-2">
            <MainHeading mainHeading="INR 15000/-" />
            <Para para="After making the payment, your question will be answered by Dr. J C Chaudhry within 7 working days" />
            <NormalButton style="w-32 mx-auto" text="Make Payment" />
          </div>
        </div>
      </div>

      <div className="space-y-10 bg-gray-100 py-10">
        <SubHeading
          style="text-center"
          subHeading="Numerology Helped many – Know How"
        />

        <div className="flex flex-wrap justify-center items-center">
          {[
            {
              img: "/images_folder/BKT_Media.png",
              name: "Mr. Siddhant Sahib Ji",
              text:
                "We changed our company name to BKT Media Pvt. Ltd. as per the advice of Sir Dr. J C Chaudhry...",
            },
            {
              img: "/images_folder/Harish Gulati.png",
              name: "Mr. Harish Gulati",
              text:
                "My daughter was suffering from Brain Meningitis... suggested a new name which brought improvements.",
            },
            {
              img: "/images_folder/Manoj_Kumar.png",
              name: "Mr. Manoj Kumar",
              text:
                "We had no baby for more than 5 years of marriage... we were blessed with a baby boy.",
            },
          ].map((item, i) => (
            <div key={i} className="mx-5 mb-5">
              <div className="md:w-80 md:h-72 bg-gradient-to-l from-slate-300 to-slate-100 text-slate-600 border border-slate-300 p-3 rounded-lg shadow-md space-y-2">
                <Img style="w-20" path={item.img  as string} alt={item.img as string} />
                <p className="text-[24px] font_family font-semibold text-[#490099]">
                  {item.name}
                </p>
                <Para para={item.text} />
              </div>
            </div>
          ))}
        </div>

        <SmallButton text="Read more" style="mx-auto" />
      </div>
    </div>
  );
}
