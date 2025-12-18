'use client';
import React, { use, useEffect } from 'react'
import CommonBookAppointSolution from '../components/ui/CommonBookAppointSolution'
import Link from 'next/link'
import Banner from '../components/ui/Banner'
import CommonForm from '../components/ui/CommonForm'
import CommonNumberSolutions from '../components/ui/CommonNumberSolutions'
import ImageContent from '../components/ui/ImageContent'
import MainHeading from '../components/ui/MainHeading'
import NormalButton from '../components/ui/NormalButton'
import NumerologyServicesCard from '../components/ui/NumerologyServicesCard'
import Para from '../components/ui/Para'
import Question from '../components/ui/Question'
import SubHeading from '../components/ui/SubHeading'
import SubHeading2 from '../components/ui/SubHeading2'

const NewBornNumerologyReading = () => {

    const [token, setToken] = React.useState<string | null>(null);

    useEffect(() => {
        let token = localStorage.getItem('token');
        if (token) {
            setToken(token);
        }
        
    })

    let bgImg = {
        backgroundImage: 'url(../../images_folder/newborl_numerology_bg.webp)',
        backgroundPosition: 'center',
        backgroundRepeat: 'noRepeat',
        backgroundSize: 'cover',
    }


  return (
     <div>

            <Link href={token ? '/dashboard' : '/numerology/signup'}>
                <Banner alttag="Baby Name Numerology Baby Names Starting with any Alphabet Numerology" path="/allbanners/Baby-Name-Numerology-Baby-Names-Starting-with-any-Alphabet-Numerology.webp" />
            </Link>
            <MainHeading style="text-center my-10" mainHeading="New Born Numerology Reading by Dr. J C Chaudhry" />
            <div className='mx-10 space-y-5'>
                <Para style='text-justify' para="For parents, their new born is like a treasure for them. Any why not? God has given you a precious gift of life which they must value. When it comes to naming a new born baby, parents prefer to have a famous or a celebrity’s name for their child. That famous name can be good for that celebrity as per his/her date of birth but may not be for your child." />
                <Para style='text-justify' para="It is important to select a lucky name which will be compatible with the date of the birth of your child. So, there should be harmony between the name and date of birth. Baby name numerology calculation is the solution to it. Dr. J C Chaudhry with his 40 years of Numerology experience provides the best advice for naming new born." />
                <Para style='text-justify' para="Below we have listed a few common questions, parents usually ask. If you also have any of the similar questions or any other. Book appointment with Dr. J C Chaudhry for the right advice and a better future of your child." />
                <Link href={token ? '/dashboard' : '/numerology/signup'}>
                    <NormalButton style="w-52 m-auto lg:ml-auto" text="Book Appointment" />
                </Link>
            </div>
            <div style={bgImg} className='flex py-10 items-start justify-evenly my-10'>
                <div className='z-40 lg:w-[50%] w-full px-10 lg:px-0'>
                    <SubHeading style="text-white" subHeading="Common Questions & Queries" />
                    <div className='space-y-5 mt-5'>
                        <Question para="What is the lucky date of baby delivery?" num="1" />
                        <Question para="Lucky name for the child" num="2" />
                        <Question para="Starting alphabet for baby name" num="3" />
                        <Question para="Future of child based on date of birth" num="4" />
                        <Question para="Baby name compatibility with date of birth" num="5" />
                        <Question para="Girl baby name with numerology" num="6" />
                        <Question para="Boy baby name with numerology" num="7" />
                        <Question para="Baby name compatibility with parents" num="8" />
                        <Question para="Name change as per numerology" num="9" />
                        <Question para="New born future predictions" num="10" />
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
                    <div className='w-fit text-center'>
                        <SubHeading style="my-5" subHeading="Lucky Baby Name Numerology by Dr. J C Chaudhry" />
                        <SubHeading2 style="" subHeading="40 years EXPERIENCED NUMEROLOGIST, Dr. J C Chaudhry ADVICES THE LUCKY BABY NAME ACCORDING TO DATE OF BIRTH (DOB)." />
                        <Para style="my-5" para="You can also share your baby’s Destiny Number or Life Path Number for baby name advice for:" />
                        <div className='flex justify-center lg:justify-start items-start flex-wrap'>
                            <CommonNumberSolutions classes='mb-[-8px]' para="Baby Name With Numerology Number 1" num="1" />
                            <CommonNumberSolutions classes='mb-[-8px]' para="Baby Name With Numerology Number 2" num="2" />
                            <CommonNumberSolutions classes='mb-[-8px]' para="Baby Name With Numerology Number 3" num="3" />
                            <CommonNumberSolutions classes='mb-[-8px]' para="Baby Name With Numerology Number 4" num="4" />
                            <CommonNumberSolutions classes='mb-[-8px]' para="Baby Name With Numerology Number 5" num="5" />
                            <CommonNumberSolutions classes='mb-[-8px]' para="Baby Name With Numerology Number 6" num="6" />
                            <CommonNumberSolutions classes='mb-[-8px]' para="Baby Name With Numerology Number 7" num="7" />
                            <CommonNumberSolutions classes='mb-[-8px]' para="Baby Name With Numerology Number 8" num="8" />
                            <CommonNumberSolutions classes='mb-[-8px]' para="Baby Name With Numerology Number 9" num="9" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='px-10'>
                <ImageContent
                    alt="baby name change"
                    path="/images_folder/baby-name-change.png"
                    subHeading="Name Change of the Child"
                    para="Changing your child’s name doesn’t mean, we will change the complete name of the child. If your child’s name is Aryan for example and after his numerology check, we find it’s not suitable for him. We might change it to Aaryan by adding an extra “A” in the name to match the suitability with the date of birth."
                    about="So, don’t worry if you have already given a name to your child without his numerology check. By doing a minor spelling change in the name, we can create a positive impact of numbers in his life."
                    style="bg-gray-100"
                />
            </div>

            <CommonBookAppointSolution
                subHeading="Looking for Baby Name Numerology Services?"
                subHeading2="Book Appointment with Dr. J C Chaudhry"
            />
            <NumerologyServicesCard />
        </div>
  )
}

export default NewBornNumerologyReading