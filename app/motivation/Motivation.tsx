'use client';

import Link from "next/link";
import { useState, useEffect } from "react";
import SliderMotivation from "../components/SliderMotivation";
import Banner from "../components/ui/Banner";
import Img from "../components/ui/Img";
import NormalButton from "../components/ui/NormalButton";
import Para from "../components/ui/Para";
import SmallButton from "../components/ui/SmallButton";
import SubHeading from "../components/ui/SubHeading";
import SubHeading2 from "../components/ui/SubHeading2";
import CommonVideos from "../components/ui/CommonVideos";

const Motivation = () => {
  const [videos, setVideos] = useState<any[]>()
      let path = process.env.NEXT_PUBLIC_URI
    const url = path + 'getvideosbycategory/category/Motivation'
    useEffect(() => {
        fetch(url).then((res) => res.json()).then((data) => {
            setVideos(data?.data.slice(0, 3))
        }).catch((err) => console.log(err.message));
    }, [])

    return (
        <div className=''>
            <Link href='/contact-us'>
                <Banner alttag="Motivational speaker Dr. J C Chaudhry" path="/allbanners/Motivational-speaker-Dr-J-C-Chaudhry.webp" />
            </Link>
            <div className='flex items-center justify-center lg:space-x-10 bg-gray-100 lg:flex-row flex-col'>
                <div className='lg:w-96 w-80 space-y-5 text-center lg:text-left'>
                    <SubHeading subHeading="Recent Awards" />
                    <Para para="National and International awards received by Dr. J C Chaudhry" />
                    <div className="flex items-center">
                        <Link href="/awards/national">
                            <NormalButton style="" text="National Awards" />
                        </Link>
                        <Link href='/awards/international'>
                            <NormalButton style="lg:ml-5 ml-4" text="International Awards" />
                        </Link>
                    </div>
                </div>
                <div className='flex items-center text-center my-10 lg:space-x-10 lg:flex-row flex-col justify-center'>
                    <div className='w-60 border border-gray-200 p-5 h-80 bg-white rounded-md shadow-md mb-5'>
                        <Img alt="Distinguished Entrepreneurship Award 2020 for Dr. J C Chaudhry" style="m-auto w-fit h-[200px]" path="/images_folder/Distinguished-Entrepreneurship-Award-2020-for-Dr.-J-C-Chaudhry.png" />
                        <Para para="Distinguished Entrepreneurship Award 2020" />
                    </div>
                    <div className='w-60 border border-gray-200 p-5 h-80 bg-white rounded-md shadow-md mb-5'>
                        <Img alt="Hall of Fame 2014 Recognition for Dr. J.C. Chaudhry" style="m-auto w-fit h-[200px]" path="/images_folder/Hall-of-Fame-2014-Recognition-for-Dr.-J.C.-Chaudhry.png" />
                        <Para para="Hall of Fame 2014’" />
                    </div>
                    <div className='w-60 border border-gray-200 p-5 h-80 bg-white rounded-md shadow-md mb-5'>
                        <Img alt="Vasundhara Ratan Award of Excellence 2013" style="m-auto w-fit h-[200px]" path="/images_folder/Vasundhara-Ratan-Award-of-Excellence-2013.png" />
                        <Para para="Vasundhara Ratan Award of Excellence 2013" />
                    </div>
                </div>
            </div>
            <SliderMotivation />
            <div className='my-10 lg:px-10 px-5 space-y-5'>
                <SubHeading style="text-center" subHeading="Motivation for Students and Entrepreneurs" />
                <Para para="Dr. J C Chaudhry’s life is a source of inspiration for students, entrepreneurs, and generations. He is an inspirator who has been motivating students and people through his motivational seminars, lectures, and podcasts. His YouTube channel features inspirational videos that have over a million views." />
            </div>
            <div className='flex justify-center bg-gray-100 lg:p-10 p-5 lg:flex-row flex-col items-center'>
                <div className='space-y-5 lg:w-[40%] w-full'>
                    <SubHeading style="text-center lg:text-left" subHeading="Positivity, Inspiration & Motivation" />
                    <Para style="text-center lg:text-left" para="Best Motivational Playlists on YouTube by Dr. J C Chaudhry to find you a better life path." />
                    <div className='flex items-center justify-center lg:justify-start'>
                        <div className=''>
                            <Img alt="" path="/images_folder/Icons.png" style="w-[38px]" />
                        </div>
                        <div className='ml-5'>
                            <SubHeading2 subHeading="Motivational Seminars" />
                            <Para para="Addressing students for a career path" />
                        </div>
                    </div>
                    <div className='flex items-center justify-center lg:justify-start'>
                        <div>
                            <Img alt="" path="/images_folder/ability.png" style="w-[38px]"/>
                        </div>
                        <div className='ml-5'>
                            <SubHeading2 subHeading="Life Mantras" />
                            <Para para="Life motivation and inspiration videos" />
                        </div>
                    </div>
                    <div className='flex items-center justify-center lg:justify-start'>
                        <div>
                            <Img alt="" path="/images_folder/success.png" style="w-[38px]"/>
                        </div>
                        <div className='ml-5'>
                            <SubHeading2 subHeading="Motivation for Success" />
                            <Para para="Life changing success mantras" />
                        </div>
                    </div>
                </div>
                <div className='mt-5 lg:mt-0'>
                    <Link href="https://www.youtube.com/channel/UCkGRccoFIazt6GZUcdq6Byg">
                        <Img alt="Subscribe for Dr. Chaudhry's motivational insights" style="w-96 " path="/images_folder/Subscribe-for-Dr.-Chaudhrys-motivational-insights.png" />
                    </Link>
                </div>
            </div>
            <div className='lg:px-10 px-5 pb-10 mt-10'>
                <SubHeading style="text-center" subHeading="Motivation for You" />
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
                <Link href="/video/motivational-podcasts">
                    <SmallButton text="View More" style="m-auto" />
                </Link>
            </div>
        </div>
    )
}

export default Motivation