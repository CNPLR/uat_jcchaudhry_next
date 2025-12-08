import React from 'react';
import SubHeading from './SubHeading';
import SubHeading2 from './SubHeading2';
import Para from './Para';

type ListBoxProps = {
  subHeading: string;
  para1: string;
  para2: string;
  para3?: string;
  para4?: string;
  para5?: string;
};

export function ListBox({
  para1,
  para2,
  para3,
  para4,
  para5,
  subHeading
}: ListBoxProps) {
  return (
    <div className='w-full my-5'>
      <div className='px-10 py-10 shadow bg-white shadowrounded-lg w-[90%] m-auto'>
        <SubHeading style="hidden lg:block text-center" subHeading={subHeading} />
        <SubHeading2 style="lg:hidden text-center" subHeading={subHeading} />

        <div className='flex items-start'>
          <li></li>
          <Para style="" para={para1} />
        </div>

        <div className='flex items-start'>
          <li></li>
          <Para style="" para={para2} />
        </div>

        {para3 && (
          <div className='flex items-start'>
            <li></li>
            <Para style="" para={para3} />
          </div>
        )}

        {para4 && (
          <div className='flex items-start'>
            <li></li>
            <Para style="" para={para4} />
          </div>
        )}

        {para5 && (
          <div className='flex items-start'>
            <li></li>
            <Para style="" para={para5} />
          </div>
        )}

      </div>
    </div>
  );
}

type HorizontalContentBoxProps = {
  subHeading: string;
  para: string;
  para1: string;
  para2: string;
  para3?: string;
  para4?: string;
};

export function HorizontalContentBox({
  para,
  para1,
  para2,
  para3,
  para4,
  subHeading
}: HorizontalContentBoxProps) {
  return (
    <div className='w-full my-5'>
      <div className='px-10 py-10 bg-white shadow rounded-lg w-[90%] m-auto'>
        <SubHeading subHeading={subHeading} style="text-center" />

        <Para style="" para={para} />

        <div className='flex items-start'>
          <li></li>
          <Para style="" para={para1} />
        </div>

        <div className='flex items-start'>
          <li></li>
          <Para style="" para={para2} />
        </div>

        {para3 && <Para style="" para={para3} />}
        {para4 && <Para style="" para={para4} />}

      </div>
    </div>
  );
}
