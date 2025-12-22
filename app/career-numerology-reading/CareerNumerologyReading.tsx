'use client';
import Link from 'next/link'
import React, { use, useEffect, useState } from 'react'
import Banner from '../components/ui/Banner'
import CommonBookAppointSolution from '../components/ui/CommonBookAppointSolution'
import CommonForm from '../components/ui/CommonForm'
import CommonNumberSolutions from '../components/ui/CommonNumberSolutions'
import MainHeading from '../components/ui/MainHeading'
import NormalButton from '../components/ui/NormalButton'
import NumerologyServicesCard from '../components/ui/NumerologyServicesCard'
import Para from '../components/ui/Para'
import Question from '../components/ui/Question'
import SubHeading from '../components/ui/SubHeading'
import SubHeading2 from '../components/ui/SubHeading2'

const CareerNumerologyReading = () => {

    const [token, setToken] = useState('')

    useEffect(() => {
        let token = localStorage.getItem('token')
        if (token) {
            setToken(token)
        }
        
    })

    let bgImg = {
        backgroundImage: 'url(../../images_folder/career_numerology_bg.webp)',
        backgroundPosition: 'center',
        backgroundRepeat: 'noRepeat',
        backgroundSize: 'cover',
    }

  return (
     <div>
            <Link href={token ? '/dashboard' : '/numerology/signup'}>
                <Banner alttag="Career numerology reading services by Dr. J C Chaudhry" path="/allbanners/Career-numerology-reading-services-by-Dr-J-C-Chaudhry.webp" />
            </Link>
            <MainHeading style="text-center my-10" mainHeading="Numerology Advice for Career and Job by Dr. J C Chaudhry" />
            <div className='mx-10 space-y-5'>
                <Para style='text-justify' para="Your numbers rule your life and influence your career. One must choose a career as per his/her interests, but he/she should also take the help of numerologist to decide their best career options. Your destiny number or life path number can help you select the best profession in life." />
                <Para style='text-justify' para="It is common for individuals to face problems in their career path and job. Knowing the best-suited career options as per one’s numerology number can guide people to make the right decisions. If you are facing problems in life related to your job or are confused about which profession to choose, you may consult Dr. J C Chaudhry, a numerologist with 40 years of experience, for career advice based on your date of birth." />
                <Para style='text-justify' para="Below are some of the common questions that we receive regarding career problems. If you can relate to them or have any other career questions in mind, consult Dr. J C Chaudhry for numerology solutions." />
                <Link href={token ? '/dashboard' : '/numerology/signup'}>
                    <NormalButton style="w-52 m-auto lg:ml-auto" text="Book Appointment" />
                </Link>
            </div>
            <div style={bgImg} className='flex py-10 items-start justify-evenly my-10'>
                <div className='z-40 lg:w-[50%] w-full px-10 lg:px-0'>
                    <SubHeading style="text-white" subHeading="Common Questions & Queries" />
                    <div className='space-y-5 mt-5'>
                        <Question para="I cannot decide which career to pursue. Can I get help from numerology?" num="1" />
                        <Question para="I have completed my studies. What would be most suitable for me: a job or business?" num="2" />
                        <Question para="I am working in a company but have an interest in a different field. If I change my job due to my interest, will I be successful?" num="3" />
                        <Question para="I have graduated from a reputable university, but not getting any job." num="4" />
                        <Question para="I am not satisfied with my current job. Can I get the desired job and salary with the help of numerology?" num="5" />
                        <Question para="I am not getting a promotion irrespective of all the hard work I do at my workplace." num="6" />
                        <Question para="How can I check compatibility with my seniors with numerology?" num="7" />
                        <Question para="My colleagues are jealous of me. Please advise." num="8" />
                        <Question para="I do not bond well with my colleagues. Please advise." num="9" />
                        <Question para="I want to work abroad. If I apply for a job abroad, are there any chances of getting selected?" num="10" />
                    </div>
                </div>
                <div className='z-40 w-[30%] hidden lg:block'>
                    <CommonForm style="mx-auto border text-black" />
                </div>
            </div>
            <div className='lg:hidden'>
                <CommonForm style="mx-auto border my-10" />
            </div>
            <div className='luck-business px-10 my-10'>
                <div className='flex justify-evenly items-center text-white'>
                    <div className='w-fit m-auto text-center'>
                        <SubHeading style="my-5" subHeading="Numerology Predictions for Career by Dr. J C Chaudhry" />
                        <SubHeading2 style="" subHeading="ONE OF THE MOST FAMOUS NUMEROLOGISTS IN INDIA, Dr. J C Chaudhry ADVICES THE LUCKY CAREER OPTIONS ACCORDING TO DATE OF BIRTH (DOB)." />
                        <Para style="my-5" para="You can also share your Destiny Number or Life Path Number for career advice for:" />
                        <div className='flex justify-center lg:justify-start items-start flex-wrap'>
                            <CommonNumberSolutions classes='mb-[-8px]' para="Numerology Number 1 Career" num="1" />
                            <CommonNumberSolutions classes='mb-[-8px]' para="Numerology Number 2 Career" num="2" />
                            <CommonNumberSolutions classes='mb-[-8px]' para="Numerology Number 3 Career" num="3" />
                            <CommonNumberSolutions classes='mb-[-8px]' para="Numerology Number 4 Career" num="4" />
                            <CommonNumberSolutions classes='mb-[-8px]' para="Numerology Number 5 Career" num="5" />
                            <CommonNumberSolutions classes='mb-[-8px]' para="Numerology Number 6 Career" num="6" />
                            <CommonNumberSolutions classes='mb-[-8px]' para="Numerology Number 7 Career" num="7" />
                            <CommonNumberSolutions classes='mb-[-8px]' para="Numerology Number 8 Career" num="8" />
                            <CommonNumberSolutions classes='mb-[-8px]' para="Numerology Number 9 Career" num="9" />
                        </div>
                    </div>
                </div>
            </div>
            <CommonBookAppointSolution
                subHeading="Looking for Numerology Reading for your Career and Job?"
                subHeading2="Book Appointment with Dr. J C Chaudhry"
            />
            <NumerologyServicesCard />
        </div>
  )
}

export default CareerNumerologyReading