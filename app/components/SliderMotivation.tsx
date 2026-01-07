"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Img from "./ui/Img";
import Para from "./ui/Para";

export default function SliderMotivation() {
  return (
    <div className="lg:px-10 px-5 w-fit lg:w-[50%]! mx-auto motivation_slider">
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        loop={true}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <div>
            <div className="text-white border">
              <Img
                alt="Dr. J C Chaudhry’s motivational quote for success"
                path="/images_folder/Dr.-J-C-Chaudhry’s-motivational-quote-for-success.png"
                style="m-auto"
              />
              <Para
                style="text-justify p-5 px-0 text-gray-500"
                para="Out of all the enemies of a person, greatest enemy of all is “FEAR”. When we are in fear, we accept injustice done to us. When in fear, we fill our minds with wrong notions about things. We start worrying about things, get in to mental struggle, our thinking ability gets impaired, bitterness comes in us, mind gets disturbed and our whole life gets destroyed. The entire happiness and pleasure of life goes away. Sat-Chit-Anand, the ultimate Parmatma pleasure is gone away due to our acceptance of fear. Though it is as difficult as lifting a mountain to not come in to fear of any but one must strive to do all efforts to stay away from fear."
              />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="text-white border">
            <Img
              alt="Inspirational awards for Dr. J.C. Chaudhry’s achievements"
              path="/images_folder/Inspirational-awards-for-Dr.-J.C.-Chaudhry’s-achievements.png"
              style="m-auto"
            />
            <Para
              style="text-justify p-5 px-0 text-gray-500"
              para="The most valuable thing, even more valuable than Kohinoor is TIME. It is advised to understand its value and importance as early as possible. Time management is a skill accompanied by vision of any person. Out of 24 hours, 10 hours can be used in sleep, in relaxation and miscellaneous activities and rest 14 hours can be spent in wise planning and actions. You must give 70% time in planning and 30% in execution. Don’t listen to the criticism people give you. Stay focused and never look back. You should focus only on important works and not on urgent works because that is the job of managers to manage crisis. If you will work like a manager neither you will ever have time for yourself nor for your family and cannot achieve your goals, which you aspire for in your life as an entrepreneur."
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="text-white border">
            <Img
              alt="Award-winning motivational speaker Dr. J C Chaudhry"
              path="/images_folder/Award-winning-motivational-speaker-Dr.-J-C-Chaudhry.png"
              style="m-auto"
            />
            <Para
              style="text-justify p-5 px-0 text-gray-500"
              para="Necessity is the mother not simply of invention but of success. The failure kindles a man to success by arousing his latent energy, by firing a dormant purpose, by awakening powers which were sleeping. Luther made his translation of the Bible while behind the bars whereas Sir walters Raleigh wrote the history of the world during his 13-year imprisonment. The burdens make us try harder to lift and we get stronger as a result. For any successful result, persistence and continuous efforts are very important."
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="text-white border">
            <Img
              alt="Dr. J C Chaudhry’s motivational quote for success"
              path="/images_folder/Dr.-J-C-Chaudhrys-motivational-quote-for-success-.png"
              style="m-auto"
            />
            <Para
              style="text-justify p-5 px-0 text-gray-500"
              para="If any of your plans fail or you get defeated in your endeavor, you tend to feel that everything is finished and there is nothing left now in life to look forward to. It is lack of wisdom, if you think like that, you must have heard a famous saying “Man proposes, God disposes”. God has disposed of one of your plans, but you are free to make more plans rather than giving up & going to depression and thinking this is the end of life."
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="text-white border">
            <Img
              alt="Powerful motivational quote from Dr. J C Chaudhry"
              path="/images_folder/Powerful-motivational-quote-from-Dr.-J-C-Chaudhry.png"
              style="m-auto"
            />
            <Para
              style="text-justify p-5 px-0 text-gray-500"
              para="A dream remains a dream unless it is written on paper and an appropriate action plan with well-defined targets is set. The paper with clear plan or goal should be pasted at an appropriate place which is visible to you at all times at your home or office, so as to remind you of your goal on daily basis. It is the consistency that makes the entire difference and not just the courage and will-power, to achieve your goals. Small achievements on regular basis will convert into a big achievement one day and make you a great achiever."
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
