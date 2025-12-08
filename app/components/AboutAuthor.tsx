"use client";

import SmallButton from "./ui/SmallButton";
import SubHeading from "./ui/SubHeading";
import Img from "./ui/Img";
import Para from "./ui/Para";
import Link from "next/link";
import "../../app/styles/common.css";

export default function AboutAuthor() {
  return (
    <div className="flex lg:flex-row flex-col justify-center items-center my-10 bg-gray-100 py-10">
      <div>
        <Img
          style="shadow-lg rounded-md w-[207px] h-[281px] "
          alt="J C Chaudhry, the Best Numerologist in Delhi, India"
          path="/images_folder/J-C-Chaudhry-the-Best-Numerologist-in-Delhi-India.png"
        />
      </div>

      <div className="lg:ml-10 lg:w-[50%] w-\[100%] px-10 lg:px-0">
        <SubHeading style="text-center lg:text-left" subHeading="About Author" />

        <Para
          style="mt-5 text-justify"
          para="Dr. J C Chaudhry is a renowned educationist and an accomplished entrepreneur. He earned his master’s degree from BITS Pilani. He is Founder and Chairman of Aakash Educational Services Ltd. (AESL), which has produced thousands of doctors and engineers for the country."
        />

        <Para
          style="mt-5"
          para="He is also a Numerologist with more than 40 years of experience in Numerology predictions and helping thousands of people alleviate their sufferings. Dr. Chaudhry has varied interests and hobbies. He writes books in a very simple and easy language, which is easy to understand is his best quality."
        />

        <Link href="/about">
          <SmallButton style="mt-5 m-auto lg:ml-auto" text="Know More" />
        </Link>
      </div>
    </div>
  );
}
