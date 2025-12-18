'use client';
import CommonForm from '@/app/components/ui/CommonForm'
import ImageContent from '@/app/components/ui/ImageContent'
import SubHeading from '@/app/components/ui/SubHeading'
import { redirect } from 'next/navigation'
import React, { useEffect } from 'react'

const BookAppointment = () => {

  useEffect(() => {
    let token = localStorage.getItem('token')
    if (token) {
      redirect('/dashboard')
    }
  }, [])

  let bgImg = {
    backgroundImage: 'url(../../allbanners/Book-Appointment-Dr.J-C-Chaudhry-Numerology-Register.webp)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  }

  return (
    <div className=''>

      <div className='relative xl:flex hidden xl:h-[105vh] 2xl:h-[80vh]' style={bgImg}>
        <div className='ml-auto my-auto'>
          <CommonForm style="mr-14 border " />
        </div>
      </div>
      <div className='xl:hidden'>
        <img className='' src="/allbanners/Book-Appointment-Dr.J-C-Chaudhry-Numerology-Register.webp" alt="Book Appointment Dr. J C Chaudhry Numerology Register" />
      </div>
      <div className='xl:hidden'>
        <CommonForm style="mx-auto border my-10" />
      </div>
      <div className='px-10'>
        <SubHeading style="text-center py-5" subHeading="Our Numerology Solutions" />
        <ImageContent
                  alt="Sign up for numerology consultations and insights"
                  path="/images_folder/Sign-up-for-numerology-consultations-and-insights.webp"
                  subHeading="Business Numerology"
                  para="Get numerology advice to start your new business, to check the company name compatibility, partners’ compatibility, Vastu for your business & other queries."
                  style="bg-gray-100 rounded-md" about={''}        />
        <ImageContent
                  path="/images_folder/Sign-up-for-personalized-numerology-consultations.webp"
                  alt="Sign up for personalized numerology consultations"
                  subHeading="Career Numerology"
                  para="Get career and job advice, to select your career, to know the good time of promotion in job, job in abroad, chances of government job & other queries."
                  style="bg-gray-100 rounded-md" about={''}        />
        <ImageContent
                  path="/images_folder/Sign-up-for-numerology-consultation-sessions.webp"
                  alt="Sign up for numerology consultation sessions."
                  subHeading="​Relationship Numerology"
                  para="Get numerology advice for your love relationship, to begin with a new relationship, divorce from your husband/wife, court case or any other queries."
                  style="bg-gray-100 rounded-md" about={''}        />
        <ImageContent
                  path="/images_folder/Join-numerology-sessions-for-personalized-insights.webp"
                  alt="Join numerology sessions for personalized insights"
                  subHeading="​Marriage Numerology"
                  para="Get numerology advice to check your marriage compatibility, lucky time for marriage, how will be the life after marriage, 2nd marriage advice or other queries."
                  style="bg-gray-100 rounded-md" about={''}        />
        <ImageContent
                  path="/images_folder/Numerology-appointment-signup-for-accurate-readings.webp"
                  alt="Numerology appointment signup for accurate readings"
                  subHeading="​Personal Numerology"
                  para="Get numerology advice for your name compatibility, chances of success in life, lucky career or business for you, marriage, divorce or other issues."
                  style="bg-gray-100 rounded-md" about={''}        />
        <ImageContent
                  path="/images_folder/Book-a-numerology-session-for-guidance.webp"
                  alt='Book a numerology session for guidance'
                  subHeading="New Born Numerology"
                  para="Get numerology advice for lucky baby name, child name Compatibility with date of birth, lucky delivery date in case of Caesarean & other queries."
                  style="bg-gray-100 rounded-md" about={''}          
        />
      </div>
    </div>
  )
}

export default BookAppointment