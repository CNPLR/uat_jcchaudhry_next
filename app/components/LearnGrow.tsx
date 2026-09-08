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
        <CommonLearnGrow title="Learn Numerology" alt="Learn Numerology with Dr. JC Chaudhry" link="/video/numerology" path="/images_folder/learn_numerology.webp" subHeading="Numerology" />
        <CommonLearnGrow title="Learn Lo Shu Grid" alt="Learn Lo Shu Grid with Dr. JC Chaudhry" link="/video/lo-shu" path="/images_folder/Learn_losu_grid.webp" subHeading="Lo Shu Grid" />
        <CommonLearnGrow title="Learn Vastu" alt="Learn Vastu with Dr. JC Chaudhry" link="/video/vastu" path="/images_folder/learn_Vastu.webp" subHeading="Vastu" />
        <CommonLearnGrow title="Learn Motivation" alt="Learn Motivation with Dr. JC Chaudhry" link="/video/motivational-seminars" path="/images_folder/learn_Motivation.webp" subHeading="Motivation" />
        <CommonLearnGrow title="Motivation Podcast" alt="Dr. JC Chaudhry Motivation Podcast" link="/video/motivational-podcasts" path="/images_folder/learn_motivation_podcast.webp" subHeading="Motivation Podcasts" />
        <CommonLearnGrow title="Numerology Predictions" alt="Dr. JC Chaudhry Numerology Predictions" link="/video/2024-numerology-predictions" path="/images_folder/learn_predication_2024.webp" subHeading="2024 Predictions" />
      </div>
    </div>
  );
}
