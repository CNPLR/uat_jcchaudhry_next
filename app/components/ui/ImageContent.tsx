'use client';

import React from 'react';
import '../../styles/common.css';
import Img from './Img';
import SubHeading from './SubHeading';
import Para from './Para';

type ImageContentProps = {
  path: string;
  subHeading: string;
  para: string;
  about: string;
  style?: string;
  alt?: string;
};

export default function ImageContent({
  path,
  subHeading,
  para,
  about,
  style = '',
  alt = ''
}: ImageContentProps) {
  return (
    <div className={`${style} flex flex-col lg:flex-row w-full justify-start items-start lg:p-10 p-3 mb-5`}>
      <div className='w-\[100%] lg:w-[30%]'>
        <Img path={path as string} alt={alt as string} style='w-[100%] lg:w-[100%] rounded-lg' />
      </div>

      <div className='w-\[100%] lg:w-[65%] lg:ml-10 mt-2 lg:mt-0'>
        <SubHeading subHeading={subHeading} style="text-center lg:text-left" />
        <Para para={para} style="mt-5 text-center md:text-left" />
        <Para para={about} style="mt-5 text-center md:text-left" />
      </div>
    </div>
  );
}
