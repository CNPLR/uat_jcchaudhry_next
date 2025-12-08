"use client";

import "../styles/common.css";
import SubHeading from "./ui/SubHeading";
import CommonLearnGrow from "./ui/CommonLearnGrow";

interface LearnGrowProps {
  heading: string;
}

export default function LearnGrow({ heading }: LearnGrowProps) {
  return (
    <div className="homeservices py-10">
      <SubHeading style="text-center mb-5" subHeading={heading} />

      <div className="flex flex-wrap px-10 justify-center">
        <CommonLearnGrow alt="learn numerology" link="/video/numerology" path="/images_folder/learn_numerology.webp" subHeading="Numerology" />
        <CommonLearnGrow alt="Learn losu grid" link="/video/lo-shu" path="/images_folder/Learn_losu_grid.webp" subHeading="Lo Shu Grid" />
        <CommonLearnGrow alt="learn Vastu" link="/video/vastu" path="/images_folder/learn_Vastu.webp" subHeading="Vastu" />
        <CommonLearnGrow alt="learn Motivation" link="/video/motivational-seminars" path="/images_folder/learn_Motivation.webp" subHeading="Motivation" />
        <CommonLearnGrow alt="learn motivation podcast" link="/video/motivational-podcasts" path="/images_folder/learn_motivation_podcast.webp" subHeading="Motivation Podcasts" />
        <CommonLearnGrow alt="learn predication 2024" link="/video/2024-numerology-predictions" path="/images_folder/learn_predication_2024.webp" subHeading="2024 Predictions" />
      </div>
    </div>
  );
}
