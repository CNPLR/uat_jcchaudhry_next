"use client";

import SubHeading from "./SubHeading";
import Para from "./Para";
import Img from "./Img";

interface CommonFlipCardProps {
  year: string | number;
  subHeading: string;
  para: string;
  path: string;
  path1: string;
  alt?: string;
  alt1?: string;
}

export default function CommonFlipCard({
  year,
  subHeading,
  para,
  path,
  path1,
  alt = "Front Image",
  alt1 = "Back Image",
}: CommonFlipCardProps) {
  return (
    <div className="lg:my-28 lg:h-[350px] w-full mb-96">
      <div className="h-[350px] md:flex justify-center">
        <div className="bg-[#490099] lg:w-[700px] w-[300px] p-10 h-[350px] mx-auto md:mx-0">
          <p className="text-[#fd7e14] font-semibold text-7xl mt-[-80px]">
            {year}
          </p>
          <SubHeading style="text-white my-5" subHeading={subHeading} />
          <Para style="text-white" para={para} />
        </div>

        {/* Flip Card */}
        <div className="flip-card lg:ml-[-40px] lg:w-[400px] w-[300px] mx-auto md:mx-0">
          <div className="flip-card-inner">

            <div className="flip-card-front">
              <Img alt={alt as string} style="h-[300px]" path={path  as string} />
            </div>

            <div className="flip-card-back">
              <Img alt={alt1 as string} style="h-[300px]" path={path1  as string} />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
