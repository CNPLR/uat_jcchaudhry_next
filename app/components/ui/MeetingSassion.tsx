'use client';

import { useRef } from 'react';
import '../../common.css';
import Img from './Img';
import SubHeading2 from './SubHeading2';
import Para from './Para';
import SmallButton from './SmallButton';
import AppointmentDateTime from "./AppointmentDateTime";
import Link from 'next/link';

type MeetingSassionProps = {
  subHeading: string;
  mainPath: string;
  path: string;
  para: string;
  para1: string;
  category: (value: string) => void;
  time: (value: string) => void;
  country: (value: string) => void;
  paySubmit: any;
  apd: any;
  newDate: any;
};

export function MeetingSassion({
  subHeading,
  mainPath,
  path,
  para,
  para1,
  category,
  time,
  country,
  paySubmit,
  apd,
  newDate
}: MeetingSassionProps) {

  const modalRef = useRef<HTMLDivElement | null>(null);

  const showModal = (e: React.MouseEvent) => {
    e.preventDefault();
    if (modalRef.current?.classList.contains('hidden')) {
      modalRef.current.classList.replace('hidden', 'block');
    }
  };

  const closeModal = () => {
    if (modalRef.current?.classList.contains('block')) {
      modalRef.current.classList.replace('block', 'hidden');
    }
  };

  return (
    <>
      <div className='flex flex-col lg:flex-row'>
        <div>
          <Img style="w-72 mx-auto lg:mx-0 shadow-2xl rounded-md" path={mainPath as string} alt="Book and Appointment" />
        </div>

        <div className='lg:w-60 w-80 lg:ml-10 m-auto'>
          <SubHeading2 style="mt-3 lg:mt-0 lg:text-left text-center" subHeading={subHeading} />
          <Para style="my-1 lg:text-left text-center" para={para} />
          <Para style="my-1 lg:text-left text-center" para={para1} />
          <Para style="my-1 lg:text-left text-center font-bold" para="Book your Appointment for" />

          <div className='flex mt-5 lg:mt-5 justify-center lg:justify-start'>
            <div className='transition shadow-md w-32 h-20 bg-gray-100 my-auto hover:shadow-xl cursor-pointer' onClick={showModal}>
              <div className='flex items-baseline justify-center'>
                <div>
                  <span className='text-5xl font-bold text_orange'>3</span>
                </div>
                <Img style="w-9" path={path as string} alt="Image"/>
              </div>
              <Para para="Minutes" style="text-center" />
            </div>

            <div className='transition shadow-md w-32 h-20 bg-gray-100 my-auto hover:shadow-xl cursor-pointer' onClick={showModal}>
              <div className='flex items-baseline justify-center'>
                <div>
                  <span className='text-5xl font-bold text_orange'>6</span>
                </div>
                <Img style="w-9" path={path} alt={"Book and Appointment"} />
              </div>
              <Para para="Minutes" style="text-center" />
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <div
        id="default-modal"
        tabIndex={-1}
        aria-hidden="true"
        ref={modalRef}
        className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 
                   justify-center items-center w-full md:inset-0 
                   h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative p-4 w-[352px] max-w-2xl max-h-full m-auto">
          <div className="relative shadow">
            <div className="flex items-center justify-between rounded-t">
              <button
                type="button"
                onClick={closeModal}
                className="text-gray-400 bg-transparent hover:bg-gray-200 
                           hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto 
                           inline-flex justify-center items-center"
              >
                <svg className="w-3 h-3" viewBox="0 0 14 14">
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>

            <AppointmentDateTime
              category={category}
              time={time}
              country={country}
              paySubmit={paySubmit}
              apd={apd}
              newDate={newDate}
            />
          </div>
        </div>
      </div>
    </>
  );
}
