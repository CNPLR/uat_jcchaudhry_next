'use client';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Banner from '../components/ui/Banner'
import CommonBookAppointSolution from '../components/ui/CommonBookAppointSolution'
import CommonForm from '../components/ui/CommonForm'
import CommonNumberSolutions, { CommonNumberSolutionsIcon } from '../components/ui/CommonNumberSolutions'
import MainHeading from '../components/ui/MainHeading'
import NormalButton from '../components/ui/NormalButton'
import NumerologyServicesCard from '../components/ui/NumerologyServicesCard'
import Para from '../components/ui/Para'
import Question from '../components/ui/Question'
import SubHeading from '../components/ui/SubHeading'
import SubHeading2 from '../components/ui/SubHeading2'

const BusinessNumerologyReading = () => {

    const [token, setToken] = useState<string | null>(null);

    // ✅ localStorage safe access
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token){
            setToken(token);
        }
    }, []);

    let bgImg = {
        backgroundImage: 'url(../../images_folder/business_numerology_bg.webp)',
        backgroundPosition: 'center',
        backgroundRepeat: 'noRepeat',
        backgroundSize: 'cover',
    }

  return (
     <div>

            <Link href={token ? '/dashboard' : '/numerology/signup'}>
                <Banner alttag="Numerology readings for new borns by Dr. J C Chaudhry." path="/allbanners/Numerology-readings-for-new-borns-by-Dr-J-C-Chaudhry.webp" />
            </Link>
            <MainHeading style="text-center my-5" mainHeading="Business Name Numerology" />
            <div className='mx-10 space-y-5'>
                <Para style='text-justify' para="The rapid escalation of startups and novel brands, highlight the increasing popularity of entrepreneurship as a career option. With budding companies in every niche, establishing their brand’s name and identity is of paramount importance for business owners. Business numerology facilitates business people with solutions focused on increasing business popularity, growth, and profitability." />
                <Para style='text-justify' para="One of the business numerology solutions is business name numerology, which suggests a lucky business name that resonates harmoniously with the date of birth (destiny number) of the owners or partners. Other company numerology factors include the selection of lucky dates to launch the business or project, numerology compatibility between partners, and favourable business numbers, all of which help maximise profits. An increase in profits assists entrepreneurs unlock the secret to success." />
                <Para style='text-justify' para="Many startup owners and businessmen do not get business numerology calculations done for their company; hence, in adverse times, they are unable to figure out the exact cause of losses or lack of business growth. Business name numerology compatibility provides the answer." />
                <Para style='text-justify' para="Dr. J C Chaudhry facilitates entrepreneurs, shop owners, and business individuals with brand name compatibility numerology, business numerology audit, company numerology service, etc., to help them leverage the power of numbers for entrepreneurial success." />
                <Link href={token ? '/dashboard' : '/numerology/signup'}>
                    <NormalButton style="w-52 m-auto lg:ml-auto" text="Book Appointment" />
                </Link>
            </div>
            <div style={bgImg} className="flex py-10 items-start justify-evenly my-10">
                <div className='z-40 lg:w-[50%] w-full px-10 lg:px-0'>
                    <SubHeading style="text-white" subHeading="Common Questions & Queries" />
                    <div className='space-y-5 mt-5'>
                        <Question para="In which field I should start my business?" num="1" />
                        <Question para="What would be profitable for me manufacturing or trading?" num="2" />
                        <Question para="I want to start my online shopping store, will that be good for me?" num="3" />
                        <Question para="I want to check the compatibility of a new brand name with my date of birth?" num="4" />
                        <Question para="My business is not showing good returns. Is there any issue with my brand name?" num="5" />
                        <Question para="I want to start a new business in partnership. Want to know if partnership with that person is good for me or not?" num="6" />
                        <Question para="I want numerology reading for my business." num="7" />
                        <Question para="What is the right time of investment for me?" num="8" />
                        <Question para="My business is facing some legal issues. By when I can get free from this?" num="9" />
                        <Question para="In which field I should start my business?" num="10" />
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
                    <div className='w-full'>
                        <SubHeading style="my-5" subHeading="Lucky Business Name Numerology by Dr. J C Chaudhry" />
                        <SubHeading2 style="" subHeading="40 years EXPERIENCED NUMEROLOGIST, Dr. J C Chaudhry ADVISES THE LUCKY BUSINESS NAME ACCORDING TO DATE OF BIRTH (DOB)." />
                        <Para style="my-5" para="You can also share your Destiny Number or Life Path Number for business name advice for:" />
                        <div className='flex justify-center lg:justify-start items-start flex-wrap'>
                            <CommonNumberSolutions classes='mb-[-8px]' para="Business Name Numerology 1" num="1" />
                            <CommonNumberSolutions classes='mb-[-8px]' para="Business Name Numerology 2" num="2" />
                            <CommonNumberSolutions classes='mb-[-8px]' para="Business Name Numerology 3" num="3" />
                            <CommonNumberSolutions classes='mb-[-8px]' para="Business Name Numerology 4" num="4" />
                            <CommonNumberSolutions classes='mb-[-8px]' para="Business Name Numerology 5" num="5" />
                            <CommonNumberSolutions classes='mb-[-8px]' para="Business Name Numerology 6" num="6" />
                            <CommonNumberSolutions classes='mb-[-8px]' para="Business Name Numerology 7" num="7" />
                            <CommonNumberSolutions classes='mb-[-8px]' para="Business Name Numerology 8" num="8" />
                            <CommonNumberSolutions classes='mb-[-8px]' para="Business Name Numerology 9" num="9" />
                        </div>
                    </div>
                </div>
            </div>
            <SubHeading style="text-center my-10" subHeading="Numerology Solutions for Business" />
            <div className='flex flex-wrap justify-center px-10'>
                <CommonNumberSolutionsIcon alt="Lucky Name for your Business" para="Lucky Name for your Business" path="/images_folder/Lucky-Name-for-your-Business.webp" />
                <CommonNumberSolutionsIcon alt="Lucky Numbers for your Business" para="Lucky Numbers for your Business" path="/images_folder/Lucky-Numbers-for-your-Business.webp" />
                <CommonNumberSolutionsIcon alt="Lucky Name and Numbers for your Shop" para="Lucky Name and Numbers for your Shop" path="/images_folder/Lucky-Name-and-Numbers-for-your-Shop.webp" />
                <CommonNumberSolutionsIcon alt="Business Name Compatibility with Date of Birth" para="Business Name Compatibility with Date of Birth" path="/images_folder/Business-Name-Compatibility-with-Date-of-Birth.webp" />
                <CommonNumberSolutionsIcon alt="Numerology for Business Success" para="Numerology for Business Success" path="/images_folder/Numerology-for-Business-Success.webp" />
                <CommonNumberSolutionsIcon alt="Business Partner Compatibility" para="Business Partner Compatibility" path="/images_folder/Business-Partner-Compatibility-.webp" />
                <CommonNumberSolutionsIcon alt="Business Numerology Audit" para="Business Numerology Audit" path="/images_folder/Business-Numerology-Audit.webp" />
            </div>

            <CommonBookAppointSolution
                subHeading="Company Name Numerology"
                subHeading2="Consult Dr. J C Chaudhry for your business /brand /company numerology solutions."
            />
            <NumerologyServicesCard />
        </div>
  )
}

export default BusinessNumerologyReading