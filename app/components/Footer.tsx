"use client";

import "../styles/common.css";
import Img from "./ui/Img";
import Para from "./ui/Para";
import ImgLink from "./ui/ImgLink";
import SubHeading2 from "./ui/SubHeading2";
import Link from "next/link";

export default function Footer() {
  return (
    <div className='w-full bg_purple text-white lg:px-10 pt-5'>
      <div className='lg:flex justify-between py-3 mx-auto max-w-[1440px] space-y-5 md:space-y-0'>
        <div className='w-72 mx-auto lg:mx-0'>
          <div className='mb-2'>
            <Img path="/logos/logo_white.png" style="w-[75px] h-[76px]" alt="logo" />
          </div>
          <Para style="pb-2 text-justify" para="Dr. J C Chaudhry is a first-ever Guinness World Record-winning numerologist with 40 years of experience. He provides services such as lo shu grid reading, business numerology, name correction, marriage numerology, and remedies for lifestyle betterment." />
          <div className='flex items-center justify-center lg:justify-start space-x-3'>
            <ImgLink style="hover:scale-[1.1] w-7" to="https://twitter.com/jc_chaudhry" path="/socialmedia/06.png" alt="twitter" />
            <ImgLink style="hover:scale-[1.1] w-7" to="https://www.facebook.com/NumerologistAndMotivator/" path="/socialmedia/02.png" alt="facebook" />
            <ImgLink style="hover:scale-[1.1] w-7" to="https://www.instagram.com/jc_chaudhrynumerology/" path="/socialmedia/03.png" alt="instagram" />
            <ImgLink style="hover:scale-[1.1] w-7" to="https://www.youtube.com/channel/UCkGRccoFIazt6GZUcdq6Byg/" path="/socialmedia/01.png" alt="youtube" />
          </div>
        </div>
        <div className='text-center lg:text-left space-y-2'>
          <SubHeading2 subHeading="Quick Links" />
          <div>
            <Link href="/about">
              <Para para="About" style="hover:underline underline-offset-8" />
            </Link>
          </div>
          <div>
            <Link href="/contact-us">
              <Para para="Contact" style="hover:underline underline-offset-8" />
            </Link>
          </div>
          <div>
            <Link href="/faqs">
              <Para para="FAQ" style="hover:underline underline-offset-8" />
            </Link>
          </div>
          <div>
            <Link href="/testimonials">
              <Para para="Testimonials" style="hover:underline underline-offset-8" />
            </Link>
          </div>
          <div>
            <Link href="/books">
              <Para para="Books" style="hover:underline underline-offset-8" />
            </Link>
          </div>
          <div>
            <Link href="/blogs">
              <Para para="Blog" style="hover:underline underline-offset-8" />
            </Link>
          </div>
          <div>
            <Link href="/investor">
              <Para para="Investor" style="hover:underline underline-offset-8" />
            </Link>
          </div>
        </div>
        <div className='text-center lg:text-left space-y-2'>
          <SubHeading2 subHeading="Our Presence" />
          {/* <div>
            <Link href="/top-numerologist-of-the-world" className='hover:underline underline-offset-8'>
              <Para para="World Numerologist" style="" />
              <Para para="Dr. J C Chaudhry" style="" />
            </Link>
          </div> */}
          <div>
            <Link href="/chaudhry-nummero-dubai">
              <Para para="Dubai" style="hover:underline underline-offset-8" />
            </Link>
          </div>
          {/* <div>
            <Link href="/numerologist-in-canada">
              <Para para="Canada" style="hover:underline underline-offset-8" />
            </Link>
          </div>
          <div>
            <Link href="/numerologist-in-malaysia">
              <Para para="Malaysia" style="hover:underline underline-offset-8" />
            </Link>
          </div>
          <div>
            <Link href="/numerologist-in-amsterdam">
              <Para para="Netherland" style="hover:underline underline-offset-8" />
            </Link>
          </div>
          <div>
            <Link href="/numerologist-in-usa">
              <Para para="USA" style="hover:underline underline-offset-8" />
            </Link>
          </div> */}
          <div>
            <Link href="/numerologist-in-uk">
              <Para para="United Kingdom" style="hover:underline underline-offset-8" />
            </Link>
          </div>
          {/* <div>
            <Link href="/numerologist-in-Australia">
              <Para para="Australia" style="hover:underline underline-offset-8" />
            </Link>
          </div>
          <div>
            <Link href="/numerologist-in-singapore">
              <Para para="Singapore" style="hover:underline underline-offset-8" />
            </Link>
          </div>
          <div>
            <Link href="/numerologist-in-south-africa">
              <Para para="South Africa" style="hover:underline underline-offset-8" />
            </Link>
          </div> */}
        </div>
        <div className='text-center lg:text-left space-y-2'>
          <SubHeading2 subHeading="Services" />
          <div>
            <Link href="/business-numerology-reading">
              <Para para="Business Numerology" style="hover:underline underline-offset-8" />
            </Link>
          </div>
          <div>
            <Link href="/career-numerology-reading">
              <Para para="Career Numerology" style="hover:underline underline-offset-8" />
            </Link>
          </div>
          <div>
            <Link href="/relationship-numerology-reading">
              <Para para="Relationship Numerology" style="hover:underline underline-offset-8" />
            </Link>
          </div>
          <div>
            <Link href="/marriage-numerology-reading">
              <Para para="Marriage Numerology" style="hover:underline underline-offset-8" />
            </Link>
          </div>
          <div>
            <Link href="/new-born-numerology-reading">
              <Para para="New Born Numerology" style="hover:underline underline-offset-8" />
            </Link>
          </div>
          <div>
            <Link href="/personal-numerology-reading">
              <Para para="Personal Numerology" style="hover:underline underline-offset-8" />
            </Link>
          </div>
        </div>
        <div className=''>
          <ImgLink
            alt-="numerology calculator"
            to="/numerology-calculator"
            path="/images_folder/calculator.png"
            style="w-56 mt-5 md:mt-0 mx-auto border border-white"
            alt="calculators"
          />
          <div className='flex items-center space-x-1 mt-4 justify-center'>
            <ImgLink to="https://play.google.com/store/apps/details?id=jc.nummerro.app" path="/images_folder/google-play.png" style="w-[112px] h-[41px] border  border-white" alt="play-store" />
            <ImgLink to="https://apps.apple.com/us/app/jc-nummerro-app/id1529437444" path="/images_folder/app-store.png" style="w-[112px] h-[41px] border  border-white" alt="app-store" />
          </div>
        </div>
      </div>
      <hr />
      <div className='flex flex-col md:flex-row justify-between items-center py-5 px-2 mx-auto max-w-[1440px]'>
        <div className='flex space-x-2'>
          <div>
            <div>
              <Link href="/terms-and-conditions">
                <Para style="" para="Terms & Conditions" />
              </Link>
            </div>
            <Para style="" para="India | UAE | Other" />
          </div>
          <div>
            <div>
              <Link href="/privacy-policy">
                <Para style="" para="Privacy Policy" />
              </Link>
            </div>
            <Para style="" para="India | UAE | Other" />
          </div>
        </div>
        <div>
          <Para style="text-center mt-5 md:mt-0" para="© 2025 All Rights Reserved by jcchaudhry.com" />
        </div>
      </div>
    </div>
  );
}
