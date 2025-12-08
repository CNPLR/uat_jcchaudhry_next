"use client";

import "../styles/common.css";
import Para from "./ui/Para";
import ImgLink from "./ui/ImgLink";
import SubHeading2 from "./ui/SubHeading2";

export default function MobileApp() {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-end w-full bgImg py-10 px-5 max-w-[1300px] mx-auto h-[80vh]">
      <div className="w-56">
        <Para style="lg:text-left text-center text-white" para="JC NUMMERRO APP" />

        <SubHeading2
          style="text-center text-white lg:text-left"
          subHeading="India’s Most Reliable Free Numerology App"
        />
      </div>

      <div className="flex lg:justify-start justify-center items-center space-x-5 lg:mx-40 mt-10">
        <ImgLink
          alt=""
          path="/images_folder/google-play.png"
          style="w-36"
          to="https://play.google.com/store/apps/details?id=jc.nummerro.app"
        />
        <ImgLink
          alt=""
          path="/images_folder/app-store.png"
          style="w-36"
          to="https://apps.apple.com/us/app/jc-nummerro-app/id1529437444"
        />
      </div>

      <Para
        style="my-5 lg:text-right w-56 text-white"
        para="J C Nummerro App provides the future predictions based on your Name and Date of Birth"
      />
    </div>
  );
}
