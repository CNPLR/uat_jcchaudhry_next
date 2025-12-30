'use client';
import Link from 'next/link'
import Banner from '../components/ui/Banner'
import CommonBookAppointSolution from '../components/ui/CommonBookAppointSolution'
import CommonForm from '../components/ui/CommonForm'
import { CommonNumberSolutionsIcon } from '../components/ui/CommonNumberSolutions'
import MainHeading from '../components/ui/MainHeading'
import NormalButton from '../components/ui/NormalButton'
import NumerologyServicesCard from '../components/ui/NumerologyServicesCard'
import Para from '../components/ui/Para'
import Question from '../components/ui/Question'
import SubHeading from '../components/ui/SubHeading'
import { useEffect, useState } from 'react';

const PersonalNumerologyReading = () => {

    const [token, setToken] = useState('')

    useEffect(() => {
        let token = localStorage.getItem('token')
        if (token) {
            setToken(token)
        }
    })

    let bgImg = {
        backgroundImage: 'url(../../images_folder/personal_numerology_bg.webp)',
        backgroundPosition: 'center',
        backgroundRepeat: 'noRepeat',
        backgroundSize: 'cover',
    }
    
  return (
     <div>

            <Link href={token ? '/dashboard' : '/numerology/signup'}>
                <Banner alttag="Personal numerology reading by Dr. J C Chaudhry" path="/allbanners/Personal-numerology-reading-by-Dr-J-C-Chaudhry.webp" />
            </Link>
            <MainHeading style="text-center my-10 px-4" mainHeading="Numerology Reading for You" />
            <div className='mx-10 space-y-5'>
                <Para style='text-justify' para="Most important person in your life should be you yourself. Our self-worth is the value we give to self. This value is about how we see ourselves and how treat ourselves. If you are continuously struggling despite of hard work, you might be missing out onto something." />
                <Para style='text-justify' para="Hard work and luck go hand in hand. Nothing is pre-fixed. Everything is subject to change. The only thing required is to have the desire, determination, and the will to change it. You might be working very hard but you need to consider other factors also which affect your success. Numbers play very crucial role in life; Your Psychic Number, Destiny Number and Name Number should always be in harmony. Even these days your email address and phone number has become integral part of your identity. In order to achieve what your heart desires make sure you have everything in sync." />
                <Para style='text-justify' para="Numerology Compatibility Test" />
                <Para style='text-justify' para="With the help of numerology compatibility test, Dr. J C Chaudhry creates your complete numerology report and explains you the best dates, years, months to start anything new; business, job, family, marriage, etc. You can book appointment for your personal numerology reading report if facing any similar issues given below or anything else you want to ask about yourself." />
                <Link href={token ? '/dashboard' : '/numerology/signup'}>
                    <NormalButton style="w-52 m-auto lg:ml-auto" text="Book Appointment" />
                </Link>
            </div>
            <div style={bgImg} className='flex py-10 items-start justify-evenly my-10'>
                <div className='z-40 lg:w-[50%] w-full px-10 lg:px-0'>
                    <SubHeading style="text-white" subHeading="Common Questions & Queries" />
                    <div className='space-y-5 mt-5'>
                        <Question para="I want to check my name numerology, if my name is suitable for me or not?" num="1" />
                        <Question para="I am facing a lot of struggle in my life. Do I need a name correction?" num="2" />
                        <Question para="My husband has filed a divorce case, but I don’t want to divorce him. Is there any solution for me?" num="3" />
                        <Question para="Is our new house not lucky for us? Since when we have shifted here, our child is not keeping well." num="4" />
                        <Question para="I want to know if my new business will be compatible for me or not. I had already started two other businesses and shut them as I went into losses." num="5" />
                        <Question para="I want to know my future reading with numerology. Can you help?" num="6" />
                        <Question para="I want to marry with a girl/boy. Please suggest with my numerology reading, if he/she is compatible for me or not." num="7" />
                        <Question para="Which career is best for me as per my numerology report?" num="8" />
                        <Question para="I want to become a model/actor. Is this profession compatible for me?" num="9" />
                        <Question para="I have a property dispute from the last 3 years. When I can get free from this? Will I get the property or not?" num="10" />
                    </div>
                </div>
                <div className='z-40 w-[30%] hidden lg:block'>
                    <CommonForm style="mx-auto border text-black" />
                </div>
            </div>
            <div className='lg:hidden'>
                <CommonForm style="mx-auto border my-10" />
            </div>

            <SubHeading style="text-center my-10" subHeading="Our Personal Compatibility Numerology Solutions" />
            <div className='flex flex-wrap justify-center px-10'>
                <CommonNumberSolutionsIcon alt="Your Personalized Numerology Report" para="Your Personalized Numerology Report" path="/images_folder/Your-Personalized-Numerology-Report.webp" />
                <CommonNumberSolutionsIcon alt="Life Reading Through Numerology" para="Life Reading Through Numerology" path="/images_folder/Life-Reading-Through-Numerology.webp" />
                <CommonNumberSolutionsIcon alt="Your and your Partner’s Compatibility Report" para="Your and your Partner’s Compatibility Report" path="/images_folder/Your-and-your-Partners-Compatibility-Report.webp" />
                <CommonNumberSolutionsIcon alt="Your Business Compatibility Report" para="Your Business Compatibility Report" path="/images_folder/Your-Business-Compatibility-Report.webp" />
                <CommonNumberSolutionsIcon alt="Career Numerology Reading" para="Career Numerology Reading" path="/images_folder/Career-Numerology-Reading-.webp" />
                <CommonNumberSolutionsIcon alt="Marriage Compatibility Report" para="Marriage Compatibility Report" path="/images_folder/Marriage-Compatibility-Report.webp" />
            </div>

            <CommonBookAppointSolution
                subHeading="Personal Compatibility Numerology Services?"
                subHeading2="Book Appointment with Dr. J C Chaudhry"
            />
            <NumerologyServicesCard />
        </div>
  )
}

export default PersonalNumerologyReading