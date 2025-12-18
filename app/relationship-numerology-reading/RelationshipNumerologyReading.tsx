'use client';
import React, { use, useEffect, useState } from 'react'
import { CommonNumberSolutionsIcon } from '../components/ui/CommonNumberSolutions'
import Link from 'next/link'
import Banner from '../components/ui/Banner'
import CommonBookAppointSolution from '../components/ui/CommonBookAppointSolution'
import CommonForm from '../components/ui/CommonForm'
import MainHeading from '../components/ui/MainHeading'
import NormalButton from '../components/ui/NormalButton'
import NumerologyServicesCard from '../components/ui/NumerologyServicesCard'
import Para from '../components/ui/Para'
import Question from '../components/ui/Question'
import SubHeading from '../components/ui/SubHeading'

const RelationshipNumerologyReading = () => {

    let bgImg = {
        backgroundImage: 'url(../../images_folder/relationship_numerology_bg.webp)',
        backgroundPosition: 'center',
        backgroundRepeat: 'noRepeat',
        backgroundSize: 'cover',
    }
    
    const [token, setToken] = useState<string | null>(null);

    useEffect(() => {
        let token = localStorage.getItem('token');
        if(token){
            setToken(token);
        }
    })
  return (
    <div>

            <Link href={token ? '/dashboard' : '/numerology/signup'}>
                <Banner alttag="Relationship numerology consultation with Dr. J C Chaudhry" path="/allbanners/Relationship-numerology-consultation-with-Dr-J-C-Chaudhry.webp" />
            </Link>
            <MainHeading style="text-center my-10" mainHeading="Relationship Compatibility Test by Dr. J C Chaudhry" />
            <div className='mx-10 space-y-5'>
                <Para style='text-justify' para="Relationship problems are not uncommon. People experience failed relationships for numerous reasons, one of which is compatibility issues. When the number of partners does not vibrate harmoniously, couples suffer from relationship compatibility issues. For example, if a number 2 person is in a relationship with a number 5 person, they can experience incompatibility in the relationship because number 2 and number 5 are not friendly to each other. Similarly, numerology compatibility can be checked between business partners, mother-daughter-in-law relationships, parent-child relationships, or any other relationship or association." />
                <Para style='text-justify' para="Relationship numerology can help people select for themselves compatible partners for marriage or business, helping them have a stronger bond. Also, checking number compatibility ensures people make the right choices, minimises discord, and maximises happiness in human relationships." />
                <Para style='text-justify' para="Below, we have listed a few questions and queries that people have in mind related to relationship compatibility. If you have similar queries in mind, book a consultation with Dr. Dr. J C Chaudhry for numerology solutions and remedies for compatible relationships." />
                <Link href={token ? '/dashboard' : '/numerology/signup'}>
                    <NormalButton style="w-52 m-auto lg:ml-auto" text="Book Appointment" />
                </Link>
            </div>
            <div style={bgImg} className='flex py-10 items-start justify-evenly my-10'>
                <div className='z-40 lg:w-[50%] w-full px-10 lg:px-0'>
                    <SubHeading style="text-white" subHeading="Common Questions & Queries" />
                    <div className='space-y-5 mt-5'>
                        <Question para="Why so many breakups in my life and I am not able to a find good relationship?" num="1" />
                        <Question para="Since when I have done partnership with a friend, my business is not growing. Is he not compatible for me?" num="2" />
                        <Question para="I am always wondering why my child never listens to me, may be numerology can help me?" num="3" />
                        <Question para="Why my parents are always unhappy with me?" num="4" />
                        <Question para="Our son is handling our family business now. But he and my husband always have conflicts in business. Why?" num="5" />
                        <Question para="My in-laws are rude and unfriendly. Can numerology help me?" num="6" />
                        <Question para="My mother in-law tries to turn me and my spouse against each other. Kindly help?" num="7" />
                        <Question para="My boss is always unhappy with me. Can numerology help me?" num="8" />
                        <Question para="Since when I have joined a new company, I have started health problems. Is this company not good for me?" num="9" />
                        <Question para="One of my employees is making losses in new deals. Is he unlucky for me?" num="10" />
                    </div>
                </div>
                <div className='z-40 w-[30%] hidden lg:block'>
                    <CommonForm style="mx-auto border text-black" />
                </div>
            </div>
            <div className='lg:hidden'>
                <CommonForm style="mx-auto border my-10" />
            </div>
            <SubHeading style="text-center" subHeading="Our Relationship Compatibility Numerology Solutions" />
            <Para style="text-center my-5" para="Consult Dr. J C Chaudhry, 40 years experienced Numerologist to resolve your compatibility issues with others." />
            <div className='flex flex-wrap justify-center px-10'>
                <CommonNumberSolutionsIcon alt="Husband Wife Compatibility Check" para="Husband Wife Compatibility Check" path="/images_folder/Husband-Wife-Compatibility-Check.webp" />
                <CommonNumberSolutionsIcon alt="Compatibility Check for Boyfriend Girlfriend" para="Compatibility Check for Boyfriend Girlfriend" path="/images_folder/Compatibility-Check-for-Boyfriend-Girlfriend.webp" />
                <CommonNumberSolutionsIcon alt="Parent Child Compatibility Test" para="Parent Child Compatibility Test" path="/images_folder/Parent-Child-Compatibility-Test.webp" />
                <CommonNumberSolutionsIcon alt="Compatibility with Business Partner" para="Compatibility with Business Partner" path="/images_folder/Compatibility-with-Business-Partner.webp" />
                <CommonNumberSolutionsIcon alt="Compatibility with In-Laws" para="Compatibility with In-Laws" path="/images_folder/Compatibility-with-In-Laws.webp" />
                <CommonNumberSolutionsIcon alt="Compatibility with Company or Boss" para="Compatibility with Company or Boss" path="/images_folder/Compatibility-with-Company-or-Boss.webp" />
                <CommonNumberSolutionsIcon alt="Compatibility with Employees" para="Compatibility with Employees" path="/images_folder/Compatibility-with-Employees.webp" />
                <CommonNumberSolutionsIcon alt="Compatibility with Co-workers" para="Compatibility with Co-workers" path="/images_folder/Compatibility-with-Co-workers.webp" />
            </div>

            <CommonBookAppointSolution
                subHeading="Know your bond with your loved ones better with our Numerology Services?"
                subHeading2="Book Appointment with Dr. J C Chaudhry"
            />
            <NumerologyServicesCard />
        </div>
  )
}

export default RelationshipNumerologyReading