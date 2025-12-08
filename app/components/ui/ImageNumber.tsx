'use client';

import '../../common.css';
import Img from './Img';
import Para from './Para';
import Link from 'next/link';

type BaseProps = {
  path: string;
  para: string;
  link: string;
  alt?: string;
};

export function ImageNumber({ path, para, link, alt = '' }: BaseProps) {
  return (
    <Link href={`/${link}`}>
      <div className='border py-2 rounded-lg transition hover:shadow-lg bg-white mb-2 mr-2 text-center w-28'>
        <Img style="m-auto transition hover:scale-[1.1]" alt={alt as string} path={path as string} />
        <Para style="mt-2" para={para} />
      </div>
    </Link>
  );
}

export function ImageLife({ path, para, link, alt = '' }: BaseProps) {
  return (
    <Link href={`/${link}`}>
      <div className='border my-2 p-2 rounded-md transition shadow-md mr-3 hover:shadow-xl bg-white text-center w-48'>
        <Img style="m-auto rounded-md transition hover:scale-[1.1]" alt={alt as string} path={path as string} />
        <hr className='mt-1' />
        <Para style="mt-1" para={para} />
      </div>
    </Link>
  );
}

export function OurPresenceImage({ path, para, link, alt = '' }: BaseProps) {
  return (
    <Link href={`/${link}`}>
      <div className='rounded-lg transition hover:shadow-lg bg-white mb-2 mr-2 text-center w-28'>
        <Img style="m-auto transition hover:scale-[1.1]" alt={alt as string} path={path as string} />
        <Para style="mt-2" para={para} />
      </div>
    </Link>
  );
}

type CalculatorNumberProps = {
  num: number;
  handleClick: () => void;
  activeTab: number;
  setActiveTab: (num: number) => void;
};

export function CalculatorNumber({
  num,
  handleClick,
  activeTab,
  setActiveTab,
}: CalculatorNumberProps) {
  return (
    <div>
      <button
        onClick={() => {
          setActiveTab(num);
          handleClick();
        }}
        className={`font_family text-5xl text-white border border-white w-16 h-16 shadow-md rounded-full mb-5 md:mb-0 flex justify-center items-center mx-3 cursor-pointer bg-[#CC66CC] ${
          activeTab === num && " bg-purple-600"
        }`}
      >
        <p className='pt-2'>{num}</p>
      </button>
      <p className='text-xs my-2 text-[#490099] text-center'>Click Here!</p>
    </div>
  );
}
