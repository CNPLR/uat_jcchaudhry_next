'use client';

import Para from './Para';
import SubHeading2 from './SubHeading2';
import Img from './Img';
import Link from 'next/link';

type ImgHeadingBoxProps = {
  path: string;
  heading: string;
  para: string;
  ps?: string;
  link: string;
  alt?: string;
  style?: string;
};

export default function ImgHeadingBox({
  path,
  heading,
  para,
  ps = '',
  link,
  alt = '',
  style= '',

}: ImgHeadingBoxProps) {
  console.log(style)
  return (
    <div className='text-center lg:w-[30%] w-64 border border-gray-200 p-5 space-y-5 md:mr-5 mb-5 rounded-md shadow-md bg-white'>
      <Link href={link}>
        <Img style={style + " m-auto"} path={path as string} alt={alt as string} />
      </Link>
      <SubHeading2 subHeading={heading} />
      <Para style={ps} para={para} />
    </div>
  );
}
