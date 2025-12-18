'use client'

import Link from "next/link"
import Banner from "../components/ui/Banner"
import CommonBookAppointSolution from "../components/ui/CommonBookAppointSolution"
import CommonForm from "../components/ui/CommonForm"
import CommonNumberSolutions, { CommonNumberSolutionsIcon } from "../components/ui/CommonNumberSolutions"
import MainHeading from "../components/ui/MainHeading"
import NormalButton from "../components/ui/NormalButton"
import NumerologyServicesCard from "../components/ui/NumerologyServicesCard"
import Para from "../components/ui/Para"
import Question from "../components/ui/Question"
import SubHeading from "../components/ui/SubHeading"
import SubHeading2 from "../components/ui/SubHeading2"
import { useEffect, useState } from "react"

const MarriageNumerologyReading = () => {
     let bgImg = {
        backgroundImage: 'url(../../images_folder/marriage_numerology_bg.webp)',
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
                <Banner alttag="Marriage numerology reading by Dr. J C Chaudhry" path="/allbanners/Marriage-numerology-reading-by-Dr-J-C-Chaudhry.webp" />
            </Link>
            <MainHeading style="text-center my-10" mainHeading="Marriage Compatibility Check by Dr. J C Chaudhry" />
            <div className='mx-10 space-y-5'>
                <Para style='text-justify' para="Marriage is a beautiful union. However, constant problems in a marriage give rise to the question: How do you make a marriage work? The answer to this question lies in numerology. For a happy marriage, the couples need to check number compatibility before marriage for a harmonious relationship." />
                <Para style='text-justify' para="Many times, boys and girls get married without checking their numbers and select a marriage date that is unfriendly to their numbers, all of which become the reason for unhappy marriages. Numerology guidance can help couples check number compatibility, select a lucky marriage date, an auspicious time for marriage, etc. for a successful marriage." />
                <Para style='text-justify' para="If you are getting married or facing marriage problems, get your numbers checked and solutions based on your date of birth and name from numerologist Dr. Dr. J C Chaudhry. Read some of the marriage-related questions we get, and if you have similar queries, consult us for marriage numerology solutions." />
                <Link href={token ? '/dashboard' : '/numerology/signup'}>
                    <NormalButton style="w-52 m-auto lg:ml-auto" text="Book Appointment" />
                </Link>
            </div>
            <div style={bgImg} className='flex py-10 items-start justify-evenly my-10'>
                <div className='z-40 lg:w-[50%] w-full px-10 lg:px-0'>
                    <SubHeading style="text-white" subHeading="Common Questions & Queries" />
                    <div className='space-y-5 mt-5'>
                        <Question para="Confused about how to predict the correct time for marriage?" num="1" />
                        <Question para="Will I be happy after my marriage?" num="2" />
                        <Question para="When will I get married?" num="3" />
                        <Question para="Will it be an arranged marriage or a love marriage?" num="4" />
                        <Question para="Will I have an early or late marriage in life?" num="5" />
                        <Question para="How will my married life be?" num="6" />
                        <Question para="Why is my marriage getting delayed?" num="7" />
                        <Question para="Long time in Love, Shall I go for Marriage with this Boy/Girl?" num="8" />
                        <Question para="How will be our marriage compatibility?" num="9" />
                        <Question para="What is the exact month and year I shall be married?" num="10" />
                        <Question para="I want to marry my friend but my parents do not want this, what does my numbers say about marriage with my friend?" num="11" />
                        <Question para="I am going to get divorced, is there a 2nd marriage in my destiny? How will be my 2nd marriage life - will I be happy?" num="12" />
                        <Question para="My DOB numbers don’t complement my partner’s DOB numbers, can we marry?" num="13" />
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
                        <SubHeading style="my-5" subHeading="Marriage Numerology by Dr. J C Chaudhry" />
                        <SubHeading2 style="" subHeading="40 years EXPERIENCED NUMEROLOGIST, Dr. J C Chaudhry ADVICES THE PEOPLE ACCORDING TO DATE OF BIRTH (DOB) AND NAME ON MARRIAGE COMPATIBILITY." />
                        <Para style="my-5" para="You can share your and your partner’s name and Destiny Number or Life Path Number for Marriage date advice for:" />
                        <div className='flex justify-center lg:justify-start items-start flex-wrap'>
                            <CommonNumberSolutions classes="mb-[-8px]" para="Marriage Compatibility for number 1" num="1" />
                            <CommonNumberSolutions classes="mb-[-8px]" para="Marriage Compatibility for number 2" num="2" />
                            <CommonNumberSolutions classes="mb-[-8px]" para="Marriage Compatibility for number 3" num="3" />
                            <CommonNumberSolutions classes="mb-[-8px]" para="Marriage Compatibility for number 4" num="4" />
                            <CommonNumberSolutions classes="mb-[-8px]" para="Marriage Compatibility for number 5" num="5" />
                            <CommonNumberSolutions classes="mb-[-8px]" para="Marriage Compatibility for number 6" num="6" />
                            <CommonNumberSolutions classes="mb-[-8px]" para="Marriage Compatibility for number 7" num="7" />
                            <CommonNumberSolutions classes="mb-[-8px]" para="Marriage Compatibility for number 8" num="8" />
                            <CommonNumberSolutions classes="mb-[-8px]" para="Marriage Compatibility for number 9" num="9" />
                        </div>
                    </div>
                </div>
            </div>
            <SubHeading style="text-center my-10" subHeading="Our Marriage Numerology Solutions" />
            <div className='flex flex-wrap justify-center px-10'>
                <CommonNumberSolutionsIcon alt="Lucky date for marriage" para="Lucky date for marriage" path="/images_folder/Lucky-date-for-marriage.webp" />
                <CommonNumberSolutionsIcon alt="Timing of marriage through numerology" para="Timing of marriage through numerology" path="/images_folder/Timing-of-marriage-through-numerology.webp" />
                <CommonNumberSolutionsIcon alt="Marriage compatibility with date of birth" para="Marriage compatibility with date of birth" path="/images_folder/Marriage-compatibility-with-date-of-birth.webp" />
                <CommonNumberSolutionsIcon alt="Marriage compatibility by name" para="Marriage compatibility by name" path="/images_folder/Marriage-compatibility-by-name.webp" />
                <CommonNumberSolutionsIcon alt="Marriage compatibility by Destiny Number" para="Marriage compatibility by Destiny Number" path="/images_folder/Marriage-compatibility-by-Destiny-Number.webp" />
                <CommonNumberSolutionsIcon alt="Marriage compatibility by Psychic Number" para="Marriage compatibility by Psychic Number" path="/images_folder/Marriage-compatibility-by-Psychic-Number.webp" />
                <CommonNumberSolutionsIcon alt="Marriage match compatibility" para="Marriage match compatibility" path="/images_folder/Marriage-match-compatibility.webp" />
            </div>

            <CommonBookAppointSolution
                subHeading="Marriage Compatibility Numerology Services?"
                subHeading2="Book Appointment with Dr. J C Chaudhry"
            />
            <NumerologyServicesCard />
        </div>
)
}

export default MarriageNumerologyReading