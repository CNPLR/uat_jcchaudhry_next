'use client';
import Link from 'next/link'
import React, { use, useEffect, useState } from 'react'
import Banner from '../components/ui/Banner'
import CommonBookAppointSolution from '../components/ui/CommonBookAppointSolution'
import CommonNumberSolutions, { CommonNumberSolutionsIcon } from '../components/ui/CommonNumberSolutions'
import Img from '../components/ui/Img'
import ImgHeadingBox from '../components/ui/ImgHeadingBox'
import ImgHeadingContent from '../components/ui/ImgHeadingContent'
import Para from '../components/ui/Para'
import SmallButton from '../components/ui/SmallButton'
import SubHeading from '../components/ui/SubHeading'
import CommonVideos from '../components/ui/CommonVideos'
import { usePathname } from 'next/navigation';

const LoShuGrid = () => {
    const pathName = usePathname();
    const [token, setToken] = useState<string | null>(null);
    
    const [videos, setVideos] = useState<any[]>()
    let path = process.env.NEXT_PUBLIC_URI
    const url = path + 'getvideosbycategory/category/LoShu Grid'
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
                <Banner alttag="Lo Shu Grid numerology" path="/allbanners/Lo-Shu-Grid-numerology.webp" />
            </Link>
            <SubHeading style="text-center my-10" subHeading="Lo Shu Grid Numerology" />
            <div className='lg:px-10 px-5 bg-gray-100 py-5'>
                <ImgHeadingContent
                    path="/images_folder/Lo-Shu-grid-for-numerology-calculations-and-placement.png"
                    para1="To find your missing or repeat numbers in the Lo shu grid, consult Dr. J C Chaudhry."
                    para="Lo shu grid numerology has its origin in China. Lo shu grid is also referred to as a magic square. The date of birth numbers is analysed in the Lo shu grid to find out active planes, missing and repeat numbers."
                    nbutton="Book Appointment"
                    alt="Lo Shu grid for numerology calculations and placement"
                    nstyle="w-52"
                    subHeading2="Placements of Digits in Birth Chart"
                    subhs="lg:mt-0 mt-5"
                />
            </div>
            <div className='my-10 bg-gray-100 py-5 px-5 lg:px-10 space-y-5'>
                <SubHeading style="text-center" subHeading="Horizontal lines or Planes in Lo Shu Grid" />

                <Img alt="Horizontal Lo Shu grid layout for numerology" style="w-[510px]  m-auto" path="/images_folder/Horizontal-Lo-Shu-grid-layout-for-numerology.png" />

                <div className='my-5 flex justify-center flex-wrap'>
                    <ImgHeadingBox  style={"w-[252px]"} alt="Numerology Lo Shu grid for personal growth" path="/images_folder/Numerology-Lo-Shu-grid-for-personal-growth.webp" heading="Mind (Intellectual Plane)" para="The first horizontal line of the grid is the mind plane. It represents the thinking capabilities of an individual. It is concerned with psychological factors such as memory, concentration and analyzing power." link={pathName} />
                    <ImgHeadingBox  style={"w-[252px]"} alt="Lo Shu grid analysis for balanced life" path="/images_folder/Lo-Shu-grid-analysis-for-balanced-life.webp" heading="Soul or (Spiritual or Emotional Plane)" para="The second horizontal line of the grid is the soul plane. It denotes feelings, love, emotions, and spiritual inclination. The plane also represents intuitive powers of a person." link={pathName} />
                    <ImgHeadingBox  style={"w-[252px]"} alt="Achieving balance in life with Lo Shu grid" path="/images_folder/Achieving-balance-in-life-with-Lo-Shu-grid.webp" heading="Practical (or Physical Plane)" para="The third horizontal line of the grid is the practical plane. It represents practical abilities and mindset. It denotes a person’s verbal expression or the ability to do physical tasks." link={pathName} />
                </div>
            </div>
            <div className='my-10 bg-gray-100 py-5 px-5 lg:px-10 space-y-5'>

                <SubHeading style="text-center" subHeading="Vertical lines or Planes in Lo Shu Grid" />

                <Para style="text-center" para="Every chart also consists of three vertical rows or planes as well. These are the Plane of Order (A), Plane of Determination (B) and the Plane of Action (C)." />

                <Img alt="Lo Shu grid for insights into personal development" style="w-[242px] mb-5 m-auto" path="/images_folder/Lo-Shu-grid-for-insights-into-personal-development.png" />

                <Para style="text-center" para="Every Number in an individual’s birth chart conveys a meaning. The main work of any numerologist is to understand the potential created by each number individually and thus the total strength or weakness inherent in a chart. This strength or weakness in a chart (3 × 3 grid) is collectively accumulated by all the numbers present (or missing in the 3 × 3 grid) in any individual’s date of birth." />

                <Para style="text-center" para="The higher the numbers in square, the stronger and positive impact it makes on the person." />

                <div className='my-5 flex justify-center flex-wrap '>
                    <ImgHeadingBox style='w-[252px]' alt="Lo Shu grid for aligning life path energies" path="/images_folder/Lo-Shu-grid-for-aligning-life-path-energies.webp" heading="Plane of Thought" para="The left line of the grid is known as the plane of thought. It reflects the person’s ability to think about new ideas and orderly habits. Therefore, it is also referred to as the Planner Plane." link={pathName} />
                    <ImgHeadingBox style='w-[252px]' alt="Numerology Lo Shu grid with personalized placements" path="/images_folder/Numerology-Lo-Shu-grid-with-personalized-placements.webp" heading="Plane of Determination or Will" para="The middle line of the grid is known as the plane of determination. It reflects the person’s will to achieve goals. It represents the individual’s persistence or determination to succeed." link={''} />
                    <ImgHeadingBox style='w-[252px]' alt="Numerology insights and placements using Lo Shu grid" path="/images_folder/Numerology-insights-and-placements-using-Lo-Shu-grid.webp" heading="Plane of Action" para="The right line of the grid is known as the plane of action. The plane refers to a person’s ability to take action and effectively execute one’s thoughts. Therefore, the plane is also referred to as the plane of action or activity." link={''} />
                </div>

            </div>
            <div className='text-white luck-business p-10 my-10'>
                <SubHeading style="my-5 text-center" subHeading="Elements of 9 Numbers in Lo shu grid" />
                <div className='flex justify-center items-start flex-wrap'>
                    <CommonNumberSolutionsIcon alt="Lo Shu grid for aligning life path energies" para="Number 1 represents the Water Element" path="/images_folder/Lo-Shu-grid-for-aligning-life-path-energies-.webp" />
                    <CommonNumberSolutionsIcon alt="Balancing life through Lo Shu grid analysis" para="Number 2,5,8 represent the Earth Element" path="/images_folder/Balancing-life-through-Lo-Shu-grid-analysis.webp" />
                    <CommonNumberSolutionsIcon alt="Lo Shu grid for precise numerology placement and analysis" para="Number 3,4 represent the Wood Element" path="/images_folder/Lo-Shu-grid-for-precise-numerology-placement-and-analysis.webp" />
                    <CommonNumberSolutionsIcon alt="Lo Shu grid wisdom by JC Chaudhry for harmony" para="Number 6,7 represent the Metal Element" path="/images_folder/Lo-Shu-grid-wisdom-by-JC-Chaudhry-for-harmony.webp" />
                    <CommonNumberSolutionsIcon alt="Lo Shu grid analysis for a harmonious life" para="Number 9 represents the FIre Element" path="/images_folder/Lo-Shu-grid-analysis-for-a-harmonious-life.webp" />
                </div>
            </div>
            <div className='text-white luck-business p-10 my-10'>
                <SubHeading style="my-5 text-center" subHeading="Lo shu grid Numbers Meaning" />
                <div className='flex justify-center items-start flex-wrap'>
                    <CommonNumberSolutions classes='mb-[-8px]' para="Number 1 is related to career and planning." num="1" />
                    <CommonNumberSolutions classes='mb-[-8px]' para="Number 2 is related to marriage, happiness and initiative." num="2" />
                    <CommonNumberSolutions classes='mb-[-8px]' para="Number 3 is related to Health and Education." num="3" />
                    <CommonNumberSolutions classes='mb-[-8px]' para="Number 4 is related to wealth and prosperity." num="4" />
                    <CommonNumberSolutions classes='mb-[-8px]' para="Number 5 is related to strength, stability and communication." num="5" />
                    <CommonNumberSolutions classes='mb-[-8px]' para="Number 6 people are helpful by nature, having more friends, foreign contacts, getting new opportunities and Luxury in life." num="6" />
                    <CommonNumberSolutions classes='mb-[-8px]' para="Number 7 is related to mental peace, creativity and children." num="7" />
                    <CommonNumberSolutions classes='mb-[-8px]' para="Number 8 is related to knowledge, prosperity and memory." num="8" />
                    <CommonNumberSolutions classes='mb-[-8px]' para="Number 9 is related to name, fame, energy and recognition." num="9" />-
                </div>
            </div>
            <div className=''>
                <CommonBookAppointSolution subHeading="Lo shu grid Consultation" subHeading2="Consult Dr. J C Chaudhry for Lo shu grid missing and repeat number remedies." />
            </div>
            <div className='lg:px-10 px-5 pb-10 mt-10'>
                <SubHeading style="text-center" subHeading="Learn Lo-Shu Grid Numerology" />
                <Para style="text-center" para="Videos by Dr. J C Chaudhry - Lo shu grid specialist" />
                <div className='flex justify-center flex-wrap my-10'>
                    {videos && videos?.map((ele, index) =>
                        <CommonVideos key={index}
                            para={ele.title}
                            path={`https://newcnpl.s3.ap-south-1.amazonaws.com/public/jccms/videosthumbnail/${ele.category}/${ele.thumbnail}`}
                            url={ele.videoUrl}
                        />
                    )}
                </div>
                <Link href="/video/lo-shu">
                    <SmallButton text="View More" style="m-auto" />
                </Link>
            </div>
        </div>
    )
}

export default LoShuGrid