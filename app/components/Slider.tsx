"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import SubHeading from "./ui/SubHeading";
import CommonBooks from "./ui/CommonBooks";
import "../styles/common.css";

interface SliderProps {
  heading: string;
}

export default function Slider({ heading }: SliderProps) {
  return (
    <div className="px-10 mb-10 mx-auto">
      <SubHeading style="text-center my-10" subHeading={heading} />

      <Swiper
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 },
          576: { slidesPerView: 2, spaceBetween: 15 },
          768: { slidesPerView: 3, spaceBetween: 20 },
          1024: { slidesPerView: 4, spaceBetween: 25 },
          1440: { slidesPerView: 5, spaceBetween: 30 },
          1800: { slidesPerView: 7, spaceBetween: 20 },
          2000: { slidesPerView: 8, spaceBetween: 15 },
          2560: { slidesPerView: 10, spaceBetween: 10 },
        }}
        spaceBetween={50}
        navigation
        modules={[Navigation, Pagination]}
      >
        <SwiperSlide>
          <CommonBooks
            link="https://www.amazon.in/dp/819395310X?ref=myi_title_dp"
            style="text_over"
            alt="Advanced numerology book by Dr. J C Chaudhry"
            path="/images_folder/Advanced-numerology-book-by-Dr.-J-C-Chaudhry.webp"
            bookName="Advanced Numerology"
          />
        </SwiperSlide>

        <SwiperSlide>
          <CommonBooks
            link="https://www.amazon.in/dp/819471267X"
            style="text_over"
            alt="Practical numerology book by Dr. J C Chaudhry"
            path="/images_folder/Practical-numerology-book-by-Dr.-J-C-Chaudhry.webp"
            bookName="Practical Numerology"
          />
        </SwiperSlide>

        <SwiperSlide>
          <CommonBooks
            link="https://www.amazon.in/dp/8192779408?ref=myi_title_dp"
            style="text_over"
            alt="Vastu Shastra ABC book by Dr. J C Chaudhry"
            path="/images_folder/Vastu-Shastra-ABC-book-by-Dr.-J-C-Chaudhry.webp"
            bookName="ABC of Vastu Shastra"
          />
        </SwiperSlide>

        <SwiperSlide>
          <CommonBooks
            link="https://www.amazon.in/dp/8194712629"
            style="text_over"
            alt="Fundamentals of numerology by Dr. J.C. Chaudhry."
            path="/images_folder/Fundamentals-of-numerology-by-Dr.-J.C.-Chaudhry.webp"
            bookName="Fundamentals Vastu"
          />
        </SwiperSlide>

        <SwiperSlide>
          <CommonBooks
            link="https://www.amazon.in/dp/8193953169"
            style="text_over"
            alt="Meditation and subconscious mind book by Dr. Chaudhry"
            path="/images_folder/Meditation-and-subconscious-mind-book-by-Dr.-Chaudhry.webp"
            bookName="Meditation & Subconscious Mind"
          />
        </SwiperSlide>

        <SwiperSlide>
          <CommonBooks
            link="https://www.amazon.in/dp/8193953185"
            style="text_over"
            alt="Chakras book by Dr. J C Chaudhry"
            path="/images_folder/Chakras-book-by-Dr.-J-C-Chaudhry.webp"
            bookName="Chakras"
          />
        </SwiperSlide>

        <SwiperSlide>
          <CommonBooks
            link="https://www.amazon.in/dp/8192779440?ref=myi_title_dp"
            style="text_over"
            alt="Nature’s Best Cure book by Dr. J C Chaudhry"
            path="/images_folder/Nature’s-Best-Cure-book-by-Dr.-J-C-Chaudhry.webp"
            bookName="Nature – The Best Cure"
          />
        </SwiperSlide>

        <SwiperSlide>
          <CommonBooks
            link="https://www.amazon.in/dp/8194712661"
            style="text_over"
            alt="Success A Few Steps Away Book by J C Chaudhry"
            path="/images_folder/Success-A-Few-Steps-Away-Book-by-J-C-Chaudhry.webp"
            bookName="Success A Few Steps Away"
          />
        </SwiperSlide>

        <SwiperSlide>
          <CommonBooks
            link="https://www.amazon.in/dp/8194712688"
            style="text_over"
            alt="Rungs of the Ladder Book by J C Chaudhry"
            path="/images_folder/Rungs-of-the-Ladder-Book-by-J-C-Chaudhry.webp"
            bookName="Rungs of the Ladder"
          />
        </SwiperSlide>

        <SwiperSlide>
          <CommonBooks
            link="https://www.amazon.in/dp/8194712653?ref=myi_title_dp"
            style="text_over"
            alt="I think.. Poverty is no bar for Success"
            path="/images_folder/I-think..-Poverty-is-no-bar-for-Success.webp"
            bookName="I think: Poverty is no bar for Success"
          />
        </SwiperSlide>

        <SwiperSlide>
          <CommonBooks
            link="https://www.amazon.in/dp/B08HN568XZ?ref=myi_title_dp"
            style="text_over"
            alt="You and Your Gems Book by J C Chaudhry"
            path="/images_folder/You-and-Your-Gems-Book-by-J-C-Chaudhry.webp"
            bookName="You & Your Gems"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
