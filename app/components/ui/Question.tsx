"use client";

import Para from "./Para";

interface QuestionProps {
  para: string;
  num: number | string;
}

export default function Question({ para, num }: QuestionProps) {
  return (
    <div className="text-white flex items-start">
      <div className="bg-[#490099] min-w-8 max-w-8 max-h-8 min-h-8 rounded-full flex justify-center items-center">
        <span className="text-center">{num}</span>
      </div>
      <Para style="ml-2" para={para} />
    </div>
  );
}
