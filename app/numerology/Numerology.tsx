'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Banner from '../components/ui/Banner'
import { CommonVideos } from '../components/ui/BlogVideos'
import CommonBgImage from '../components/ui/CommonBgImage'
import CommonBookAppointSolution from '../components/ui/CommonBookAppointSolution'
import Img from '../components/ui/Img'
import ImgHeadingBox from '../components/ui/ImgHeadingBox'
import ImgHeadingContent from '../components/ui/ImgHeadingContent'
import Para from '../components/ui/Para'
import SmallButton from '../components/ui/SmallButton'
import SubHeading from '../components/ui/SubHeading'
import SubHeading2 from '../components/ui/SubHeading2'

const Numerology = () => {
    const [token, setToken] = useState<string | null>(null);

    const [videos, setVideos] = useState<any[]>()
    let path = process.env.NEXT_PUBLIC_URI
    const url = path + 'getvideosbycategory/category/Numerology'
    useEffect(() => {
        fetch(url).then((res) => res.json()).then((data) => {
            setVideos(data?.data.slice(0, 3))
        }).catch((err) => console.log(err.message));

        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            setToken(storedToken);
        }
    }, [])

    return (
        <div className=''>

            <Link href={token ? '/dashboard' : '/numerology/signup'}>
                <Banner
                    alttag="Comprehensive numerology services by Dr. J C Chaudhry Book Now"
                    path="/allbanners/Comprehensive-numerology-services-by-Dr-J-C-Chaudhry-Book-Now.webp"
                />
            </Link>

            <div className='lg:px-10 px-5'>
                <ImgHeadingContent
                    alt="Dr. J C Chaudhry, expert in numerology"
                    path="/images_folder/Dr.-J-C-Chaudhry-expert-in-numerology.webp"
                    para="Dr. Dr. J C Chaudhry, a numerology expert with more than three decades of experience (40 years), provides numerology services and solutions worldwide. He has done name correction for thousands of people and has offered numerology guidance to people facing downfalls in business, compatibility issues, or poor health. Many of his predictions have come true, such as the 2023 numerology predictions, etc. You can consult Dr. Chaudhry for a detailed numerology reading and report."
                    nbutton="Book Appointment"
                    subHeading="Numerology Services"
                    nstyle="w-52"
                    styleimg=""
                    style="mx-auto"
                    subhs="text-center mt-2"
                />
            </div>
            <div className='my-10 bg-gray-100 py-5 px-5 lg:px-0'>
                <SubHeading style="text-center" subHeading="Numerology Report, by Famous Numerologist Dr. J C Chaudhry" />
                <div className='my-5 flex justify-center flex-wrap'>
                    <ImgHeadingBox
                        alt="Business Company Name Numerology"
                        path="/images_folder/Business-Company-Name-Numerology.webp"
                        heading="Business Company Name Numerology"
                        para="To conduct a numerology audit of the company or corporation to determine the percentage of lucky and unlucky employees."
                        link="/business-name-numerology"
                        style='px-10 pb-4'
                    />
                    <ImgHeadingBox
                        alt="Business Partner Compatibility"
                        path="/images_folder/Business-Partner-Compatibility.webp"
                        heading="Business Partner Compatibility"
                        para="To check the compatibility of the owner of the business with the existing or new partners."
                        link="/business-partnership-numerology"
                        style='px-10 pb-4'
                    />
                    <ImgHeadingBox
                        alt="Right Time of Investment"
                        path="/images_folder/Right-Time-of-Investment.webp"
                        heading="Right Time of Investment"
                        para="To find out the best dates, period, and time for investment for greater ROI."
                        link="/business-numerology-reading"
                        style='px-10 pb-4'
                    />
                    <ImgHeadingBox
                        alt="Business Name Compatibility"
                        path="/images_folder/Business-Name-Compatibility.webp"
                        heading="Business Name Compatibility"
                        para="To check the compatibility of the name and to suggest the lucky name of the brand that benefits the owner and other people."
                        link="/business-numerology-reading"
                        style='px-10 pb-4'
                    />
                    <ImgHeadingBox
                        alt="Marriage Love Compatibility Service by Dr J C Chaudhry"
                        path="/images_folder/Marriage-Love-Compatibility-Service-by-Dr-J-C-Chaudhry.webp"
                        heading="Marriage Love Compatibility"
                        para="To find out the compatibility between two people for a harmonious relationship or marriage."
                        link="/marriage-numerology-reading"
                        style='px-10 pb-4'
                    />
                    <ImgHeadingBox
                        alt="Numerology for Name Change"
                        path="/images_folder/Numerology-for-Name-Change.webp"
                        heading="Change of Name Numerology"
                        para="To check the suitability of the name for a person and to suggest a name that vibrates harmoniously with the person’s date of birth."
                        link="/name-correction-in-numerology"
                        style='px-10 pb-4'
                    />
                    <ImgHeadingBox
                        alt="Numerology Guide for Choosing a Baby's Name"
                        path="/images_folder/Numerology-Guide-for-Choosing-a-Baby's-Name.webp"
                        heading="Naming Newly Born Baby"
                        para="To suggest initial letters and names for a newborn baby in harmony with the date of birth to attract luck in the future."
                        link="/new-born-numerology-reading"
                        style='px-10 pb-4'
                    />
                    <ImgHeadingBox
                        alt="Numerology for House and Office Compatibility"
                        path="/images_folder/Numerology-for-House-and-Office-Compatibility.webp"
                        heading="House/Office Compatibility"
                        para="To tell whether the house or office number is compatible with the owners or people who wish to rent it out."
                        link="/house-number-numerology"
                        style='px-10 pb-4'
                    />
                    <ImgHeadingBox
                        alt="Numerology for Calculating Engagement and Marriage Dates"
                        path="/images_folder/Numerology-for-Calculating-Engagement-and-Marriage-Dates.webp"
                        heading="Engagement/Marriage Dates Calculation"
                        para="To identify the best dates for engagement and marriage that are lucky for both partners."
                        link="/marriage-numerology-reading"
                        style='px-10 pb-4'
                    />
                </div>
            </div>
            <CommonBookAppointSolution subHeading="Looking for Personal Numerology Reading?" subHeading2="Consult Dr. J C Chaudhry" />
            <div className='my-10 lg:px-10 px-5 space-y-5'>
                <SubHeading style="text-center" subHeading="How Numerology Works?" />
                <Para para="Every number in numerology has a significance. Numerology calculations help numerologists infer the hidden meanings of the numbers and make predictions. Name and date of birth numbers in numerology are considered to be the core numbers extensively used for numerology calculations and predictions." />
                <Para para="For good fortune, it is important to have compatibility between the name number, psychic number or birth number, and destiny number or life path number. All these should be compatible for a great numerology chart." />
            </div>
            <div>
                <div className='lg:hidden'>
                    <div className='text-center m-auto w-[90%] space-y-2 bg-gray-100 p-5'>
                        <div className='bg-[#490099]'>
                            <Link href="/numerology-calculator">
                                <Img alt="numerology calculator" style="w-40 m-auto" path="/images_folder/calculator-image-services.png" />
                            </Link>
                        </div>
                        <div className=''>
                            <SubHeading2 subHeading="JC Nummerro Calculator" />
                            <Para para="Numerology Reading is done using three important numbers. The Psychic number, Destiny number, and Name Number. Calculate your Numbers using JC Nummerro Calculator" />
                        </div>
                    </div>
                </div>
                <div className='hidden lg:block px-10'>
                    <CommonBgImage
                        alt="numerology calculator"
                        position="bg-bottom"
                        style="h-[22rem] flex items-center"
                        style2="ml-[5%] w-[50%]"
                        url="/images_folder/calcbanner.png"
                        mainHeading="JC Nummerro Calculator"
                        para="Numerology Reading is done using three important numbers. The Psychic number, Destiny number, and Name Number. Calculate your Numbers using JC Nummerro Calculator"
                    />
                </div>
            </div>
            <div className='lg:px-10 px-5 pb-10 mt-10'>
                <SubHeading style="text-center" subHeading="Learn Numerology" />
                <Para style="text-center" para="Videos by Dr. J C Chaudhry" />
                <div className='flex justify-center flex-wrap my-10'>
                    {videos && videos?.map((ele, i) =>
                        <CommonVideos key={i}
                            para={ele.title}
                            path={`https://newcnpl.s3.ap-south-1.amazonaws.com/public/jccms/videosthumbnail/${ele.category}/${ele.thumbnail}`}
                            url={ele.videoUrl}
                        />
                    )}
                </div>
                <Link href="/video/numerology">
                    <SmallButton text="View More" style="m-auto" />
                </Link>
            </div>
        </div>
    )
}

export default Numerology