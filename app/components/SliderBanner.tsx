"use client";

import { useRef, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import ImgLink from "./ui/ImgLink";

import type { Swiper as SwiperType } from "swiper";

export default function SliderBanner() {
  const token = useMemo(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("token");
    }
    return null;
  }, []);

  const swiperRef = useRef<SwiperType | null>(null);

  const handleMouseEnter = () => {
    swiperRef.current?.autoplay?.stop();
  };

  const handleMouseLeave = () => {
    swiperRef.current?.autoplay?.start();
  };

  return (
    <div
      className="home_page_slider"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        navigation
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
      >
        <SwiperSlide>
          <ImgLink
            style="w-full"
            to="/top-numerologist-india"
            alt="Dr. J C Chaudhry's Guinness World Record achievement in Numerology and his exceptional contribution to the field"
            path="/allbanners/Dr-J-C-Chaudhrys-Guinness-World-Record-achievement-in-Numerology-and-his-exceptional-contribution-to-the-field-1920.webp"
            loading="eager"
            path1="/allbanners/Dr-J-C-Chaudhrys-Guinness-World-Record-achievement-in-Numerology-and-his-exceptional-contribution-to-the-field-1440.webp"
            path2="/allbanners/Dr-J-C-Chaudhrys-Guinness-World-Record-achievement-in-Numerology-and-his-exceptional-contribution-to-the-field-1024.webp"
            path3="/allbanners/Dr-J-C-Chaudhrys-Guinness-World-Record-achievement-in-Numerology-and-his-exceptional-contribution-to-the-field-768.webp"
          />
        </SwiperSlide>

        <SwiperSlide>
          <ImgLink
            style="w-full"
            to="/about/biography"
            alt="Dr. J C Chaudhry's incredible biography and journey"
            path="/allbanners/Dr-J-C-Chaudhrys-incredible-biography-and-journey-1920.webp"
            path1="/allbanners/Dr-J-C-Chaudhrys-incredible-biography-and-journey-1440.webp"
            path2="/allbanners/Dr-J-C-Chaudhrys-incredible-biography-and-journey-1040.webp"
            path3="/allbanners/Dr-J-C-Chaudhrys-incredible-biography-and-journey-768.webp"
          />
        </SwiperSlide>

        <SwiperSlide>
          <ImgLink
            style="w-full"
            to={token ? "/dashboard" : "/numerology/signup"}
            alt="Numerology services and consultations by Dr. J C Chaudhry."
            path="/allbanners/Numerology-services-and-consultations-by-Dr-J-C-Chaudhry-1920.webp"
            path1="/allbanners/Numerology-services-and-consultations-by-Dr-J-C-Chaudhry-1440.webp"
            path2="/allbanners/Numerology-services-and-consultations-by-Dr-J-C-Chaudhry-1024.webp"
            path3="/allbanners/Numerology-services-and-consultations-by-Dr-J-C-Chaudhry-768.webp"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
