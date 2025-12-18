'use client'
import React, { useEffect, useState } from 'react'
import SmallButton from '../components/ui/SmallButton'
import Link from 'next/link'
import Banner from '../components/ui/Banner'
import ImgHeadingContent from '../components/ui/ImgHeadingContent'
import Para from '../components/ui/Para'
import SubHeading from '../components/ui/SubHeading'
import VastuListAndImg from '../components/ui/VastuListAndImg'
import CommonVideos from '../components/ui/CommonVideos'

const VastuMeditationOthers = () => {
  const [videos, setVideos] = useState<any[]>()
      let path = process.env.NEXT_PUBLIC_URI
    const url = path + 'getvideosbycategory/category/Vastu'
    useEffect(() => {
        fetch(url).then((res) => res.json()).then((data) => {
            setVideos(data?.data.slice(0, 3))
        }).catch((err) => console.log(err.message));
    }, [])

    return (
        <div className=''>

            <Link href="/contact-us">
                <Banner alttag="Vastu consultancy of Home/Office by Dr. J C Chaudhry" path="/allbanners/Vastu-consultancy-of-Home-and-Office-by-Dr-J-C-Chaudhry.webp" />
            </Link>
            <SubHeading style="text-center my-10" subHeading="Vastu Shastra Expert" />
            <div className='lg:px-10 px-5'>
                <ImgHeadingContent
                    alt="Vastu meditation techniques for peace and harmony"
                    path="/images_folder/Vastu-meditation-techniques-for-peace-and-harmony.webp"
                    para="Vastu Shastra is an ancient science that helps people to live harmoniously with their surroundings. The basic principle of Vastu lies in the free flow of energy throughout the home and creates good vibrations and positive feelings among the inhabitant of the home. It is a scientific theory based on the principles and laws of nature. If followed correctly, people can definitely derive benefits and lead a well-balanced and comfortable life in their homes."
                    para1="It is often noticed that while purchasing a house, people are lured by the interiors, flooring, modular kitchen, beautiful bathroom fittings, and other facilities. They do not take into account the principles of Vastu. As a result, in spite of having a huge and beautiful house, they do not feel very comfortable or peaceful."
                    nstyle="w-52"
                    nbutton="Book Appointment"
                    style="bg-gray-100 lg:p-10 p-5 rounded-md"
                />
                <ImgHeadingContent
                    alt="Vastu for health and peaceful living spaces"
                    path="/images_folder/Vastu-for-health-and-peaceful-living-spaces.webp"
                    para="On the contrary, a person with the knowledge of Vastu can live very happily in a home that may be a low-cost budget house but is beaming with better energy flow. It is therefore essential that while a person is planning for a home, he/she should at least know the basics of Vastu Shastra to make life comfortable and pleasant."
                    para1="Dr. J C Chaudhry with years of experience in Vastu Shastra & Numerology helps you easily plan the Vastu for your home and office. Vastu consultation by Dr. Chaudhry doesn’t need any reconstruction, even he advises the best Vastu remedies to bring luck and positivity in your home and business."
                    nstyle="w-52"
                    nbutton="Book Appointment"
                    style="bg-gray-100 lg:p-10 p-5 rounded-md"
                />
            </div>
            <div className='lg:px-10 px-5 my-10'>
                <ImgHeadingContent
                    alt="Vastu Shastra for harmonious living and spaces"
                    path="/images_folder/Vastu-Shastra-for-harmonious-living-and-spaces.png"
                    para="Dr. J C Chaudhry, a Vastu specialist is there to help you plan the Vastu for your plot, residential project, and office space."
                    nstyle="w-52"
                    sbutton="Contact Us"
                    style="bg-gray-100 lg:p-10 p-5 rounded-md"
                    subHeading="So, why worry?"
                    subHeading2="Contact one of the well-known Vastu Consultants in Delhi India."
                    styleimg="w-60 mx-auto"
                    subhs="text-center lg:text-left"
                />
            </div>

            <div className='text-center space-y-5 px-5'>
                <SubHeading style="text-center" subHeading="Vastu Consultation Services" />
                <Para para="We help you to get the best Vastu done in every aspect of your life by providing simple and easy Vastu remedies for luck, prosperity and positivity." />
            </div>

            <div className='my-10 lg:px-10 px-5'>
                <VastuListAndImg
                    alt="Vastu principles for a balanced, healthy home"
                    subHeading="Vastu for Home / Residential Vastu"
                    path="/images_folder/Vastu-principles-for-a-balanced-healthy-home.webp"
                    para="Vastu for Bedroom"
                    para1="Vastu for Pooja Room"
                    para2="Vastu for Guest Room"
                    para3="Vastu for Living Room"
                    para4="Vastu for Children Room"
                    para5="Vastu for Kitchen"
                    para6="Vastu for Bathroom"
                    para7="Vastu for Dining Room"
                    para8="Vastu for Plot"
                    para9="Complete Vastu House plan"
                    nstyle="w-52"
                    nbutton="Book Appointment"
                    style="bg-gray-100 lg:p-10 p-5 rounded-md" content={''}                />
                <VastuListAndImg
                    alt="Personalized vastu solutions for work"
                    subHeading="Commercial Vastu / Business Vastu"
                    path="/images_folder/Personalized-vastu-solutions-for-work.webp"
                    para="Vastu for Office"
                    para1="Vastu for Working Space"
                    para2="Vastu for Office Desk"
                    para3="Vastu for Office Cabins"
                    nstyle="w-52"
                    nbutton="Book Appointment"
                    style="bg-gray-100 lg:p-10 p-5 rounded-md" content={''}                />
                <VastuListAndImg
                    alt="Vastu expert consultation for growth"
                    subHeading="Vastu Advice"
                    path="/images_folder/Vastu-expert-consultation-for-growth.webp"
                    para="Vastu for Wealth"
                    para1="Vastu for Health"
                    para2="Vastu for Career"
                    para3="Vastu for Finance"
                    para4="Vastu for Peace at Home"
                    para5="Vastu for Happy Married Life"
                    nstyle="w-52"
                    nbutton="Book Appointment"
                    style="bg-gray-100 lg:p-10 p-5 rounded-md" content={''}                />
            </div>
            <div className='lg:px-10 px-5 pb-10 mt-10'>
                <SubHeading style="text-center" subHeading="Learn Vastu and Meditation" />
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
                <Link href="/video/vastu">
                    <SmallButton text="View More" style="m-auto" />
                </Link>
            </div>
        </div>
    )
}

export default VastuMeditationOthers