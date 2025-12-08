"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Img from "./Img";
import LinkText from "./LinkText";
import SubHeading2 from "./SubHeading2";
import Para from "./Para";
import { FaCalendarAlt, FaRegPlayCircle } from "react-icons/fa";
import "../../styles/common.css";

/* ---------------- BLOG CARD ---------------- */

type CommonBlogProps = {
  predictions: string;
  para: string;
  date: string;
  path: string;
  href: string;
  alt: string;
};

export function CommonBlog({
  predictions,
  para,
  date,
  path,
  href,
  alt,
}: CommonBlogProps) {
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "long",
    year: "numeric",
  };

  const upDate = new Date(date);

  return (
    <Link href={href} className="block">
      <div className="border border-gray-200 w-[270px] pb-2 bg-white md:mr-7 mb-6 shadow-md rounded-md overflow-hidden transition hover:shadow-lg cursor-pointer">
        
        <Img path={path as string} alt={alt as string} />
        
        <div className="mx-3">

          <p className="text-xs mt-1 bg-slate-200 px-2 pt-1 inline-block rounded-sm">
            {predictions}
          </p>

          <div className="flex justify-between flex-col h-[120px]">

            {/* ✅ No inner Link */}
            <LinkText style="my-1" para={para} />

            <div className="flex items-center">
              <FaCalendarAlt size={10} />
              <p className="text-xs ml-2">
                {upDate.toLocaleDateString("en-GB", options)}
              </p>
            </div>

          </div>
        </div>
      </div>
    </Link>
  );
}

/* ---------------- COMMON VIDEOS ---------------- */

type CommonVideosProps = {
  para: string;
  path: string;
  url: string;
};

export function CommonVideos({ para, path, url }: CommonVideosProps) {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="w-[270px] md:mr-7 mb-7 relative bg-white">
      <div className="shadow-lg rounded-md overflow-hidden border border-gray-200">
        <div className="cursor-pointer relative" onClick={() => setShowModal(true)}>
          <Img path={path  as string} alt={para as string} />

          <button
            className="absolute inset-0 flex items-center justify-center"
            aria-label="Play Video"
          >
            <FaRegPlayCircle color="#fd7e14" size={40} />
          </button>
        </div>

        <div className="mx-3">
          <Para style="my-2 text_over" para={para} />
        </div>
      </div>

      {showModal && (
        <div
          ref={modalRef}
          className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50"
        >
          <div className="relative bg-white rounded-lg shadow p-4">
            <button
              onClick={() => setShowModal(false)}
              className="absolute right-\[-20px] top-\[-20px] bg-[#490099] text-white p-2 rounded-full"
            >
              ✕
            </button>

            <div
              className="videoModal"
              dangerouslySetInnerHTML={{ __html: url }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

/* ---------------- HOME VIDEOS ---------------- */

type HomeVideosProps = {
  para: string;
  url: string;
  path: string;
  heading: string;
  itemKey?: number;
};

export function HomeVideos({
  para,
  url,
  path,
  heading,
  itemKey,
}: HomeVideosProps) {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const [showModal, setShowModal] = useState(false);

  return (
    <div
      className="w-[270px] mb-6 md:mr-7 text-center shadow-md transition hover:shadow-lg"
      key={itemKey}
    >
      <div className="relative rounded-md overflow-hidden">
        <Img path={path  as string} alt={heading} />

        <button
          className="absolute inset-0 flex items-center justify-center"
          onClick={() => setShowModal(true)}
        >
          <FaRegPlayCircle size={40} color="#fd7e14" />
        </button>

        <div className="mx-4 h-24">
          <SubHeading2 subHeading={heading} style="my-1" />
          <Para para={para} />
        </div>
      </div>

      {showModal && (
        <div
          ref={modalRef}
          className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50"
        >
          <div className="relative bg-white rounded-lg shadow p-4">
            <button
              onClick={() => setShowModal(false)}
              className="absolute right-\[-10px] top-\[-10px] bg-[#490099] text-white p-2 rounded-full"
            >
              ✕
            </button>

            <div
              className="videoModal"
              dangerouslySetInnerHTML={{ __html: url }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

/* ---------------- CNPL ---------------- */

type CNPLProps = {
  url: string;
  path: string;
  itemKey?: number;
};

export function CNPL({ url, path, itemKey }: CNPLProps) {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="text-center transition" key={itemKey}>
      <div className="relative">
        <div onClick={() => setShowModal(true)}>
          <Img style="w-full" path={path  as string} alt="numerology-image" />
        </div>

        <button
          className="absolute inset-0 flex items-center justify-center"
          onClick={() => setShowModal(true)}
        >
          <FaRegPlayCircle size={40} color="#fd7e14" />
        </button>

        {showModal && (
          <div
            ref={modalRef}
            className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50"
          >
            <div className="relative bg-white rounded-lg shadow p-4">
              <button
                onClick={() => setShowModal(false)}
                className="absolute right-\[-20px] top-\[-20px] bg-[#490099] text-white p-2 rounded-full"
              >
                ✕
              </button>

              <div
                className="videoModal"
                dangerouslySetInnerHTML={{ __html: url }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
