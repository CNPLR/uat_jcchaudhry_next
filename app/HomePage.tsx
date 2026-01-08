'use client';
import React, { Suspense, useEffect, useState } from 'react'
import SmallButton from './components/ui/SmallButton'
import Link from 'next/link'
import SubHeading from './components/ui/SubHeading'
import { CNPL, CommonBlog, HomeVideos } from './components/ui/BlogVideos'
import LearnGrow from './components/LearnGrow'
import Slider from './components/Slider'
import OurSolutionCard from './components/ui/OurSolutionCard'
import OnlineAppointment from './components/ui/OnlineAppointment'
import OflineAppointment from './components/ui/OflineAppointment'
import ImgLink from './components/ui/ImgLink'
import Para from './components/ui/Para'
import SliderBanner from './components/SliderBanner'
import Banner from './components/ui/Banner'
import MainHeading from './components/ui/MainHeading'
import SubHeading2 from './components/ui/SubHeading2'
import CardBox from './components/ui/CardBox'
import MobileApp from './components/MobileApp';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { fetchBlogs } from '@/lib/slices/blogSlice';
import { fetchHomeVideo } from '@/lib/slices/homeVideoSlice';
import { fetchCNPLVideo } from '@/lib/slices/CNPLVideoSlice';


interface ClientProps {
    headers: Headers;
}
const HomePage = ({isMounted}: any) => {
    const dispatch = useAppDispatch();

    const cnpl = useAppSelector((state) => state.CNPLVideo)
    
    const { blogs, loading, error } = useAppSelector((state) => state.blogs)
    const homeVideo = useAppSelector((state) => state.homeVideo)

    //  useEffect(() => {
    //     if(blogs.data.length === 0)
    //         dispatch(fetchBlogs());
    //     if(homeVideo.homeVideo.data.length === 0)
    //         dispatch(fetchHomeVideo());
    //     if(cnpl.CNPLVideo.data.length === 0)
    //         dispatch(fetchCNPLVideo());
    //  }, []);
   
  return (
     <div>
            <Suspense fallback={<div>Loading banner...</div>}>
                <SliderBanner />
            </Suspense>
            {/* <SliderBanner /> */}
            <Link href="/numerology-calculator">
                <Banner alttag="numerology calculator" path="/images_folder/numerology-calculator.jpg" />
            </Link>
            <div className=''>
                <div className='flex px-10 justify-between my-10 items-center flex-col lg:flex-row max-w-[1300px] mx-auto'>
                    <MainHeading style="lg:hidden" mainHeading="Chaudhry Nummero Pvt. Ltd." />
                    <div className='lg:w-[48%] w-\[100%] mt-5 lg:mt-0'>
                        {cnpl?.CNPLVideo?.data?.map((ele: any, index: number) =>
                            <Suspense key={index} fallback={<div>Loading banner...</div>}>
                                <CNPL
                                    key={index}
                                    itemKey={index}
                                    path={`https://newcnpl.s3.ap-south-1.amazonaws.com/public/jccms/videosthumbnail/${ele.category}/${ele.thumbnail}`}
                                    url={ele.videoUrl}
                                />
                            </Suspense>
                        )}
                    </div>
                    <div className='lg:w-[48%] w-\[100%]'>
                        <MainHeading style="hidden lg:block" mainHeading="Chaudhry Nummero Pvt. Ltd." />
                        <SubHeading2 style="text_purple mt-3 lg:mt-0" subHeading="(Know the Power of Numbers)" />
                        <div className='flex mt-3'>
                            <li></li>
                            <Para para="Chaudhry Nummero Pvt. Ltd., founded by Dr. J C Chaudhry in 2018 is the outcome of his more than 40 years of experience in Numerology." />
                        </div>
                        <div className='flex mt-3'>
                            <li></li>
                            <Para para="Here you get the expert Numerology solutions related to your Job, Career, Business, Property, Marriage, Children, Family and other issues" />
                        </div>
                        <div className='flex mt-3'>
                            <li></li>
                            <Para para="For personal and business Numerology consultation, you may either book an appointment or ask your question online from Dr. J C Chaudhry." />
                        </div>
                        <Link href="chaudhry-nummero-pvt-ltd">
                            <SmallButton text="Know More" style="mt-5 ml-auto mr-auto lg:ml-0 lg:mr-0" />
                        </Link>
                    </div>
                </div>
                <div className='homeservices px-10'>
                    <SubHeading style="text-center pt-10" subHeading="Our Services" />
                    <Para style="text-center mt-5 mb-10" para="Share your problem with Dr. J C Chaudhry and get the end to end solution." />
                    <div className='flex flex-wrap max-w-[1200px] mx-auto'>
                        <CardBox
                            alt1="numerology"
                            alt2="numerology"
                            hoverPath="/images_folder/services_Numerology.webp"
                            path="/images_folder/services_Numerology_1.webp"
                            para="Business , Career, Marriage, New Born Naming & Personal Numerology Reading."
                            SubHeading="Numerology"
                            link="/numerology"
                        />
                        <CardBox
                            alt1="lo-shu-grid"
                            alt2="lo-shu-grid"
                            hoverPath="/images_folder/services_losu_grid_1.webp"
                            path="/images_folder/services_losu_grid.webp"
                            para="Lo Shu Grid Numerology solutions for missing numbers in date of birth"
                            SubHeading="Lo-Shu Grid"
                            link="/lo-shu-grid"
                        />
                        <CardBox
                            alt1="vastu"
                            alt2="vastu"
                            hoverPath="/images_folder/services_Vastu.webp"
                            path="/images_folder/services_Vastu_1.webp"
                            para="Vastu for Home, Plot, Office, Shop, Hotel, Restaurant, Commercial Complex and Movie Halls"
                            SubHeading="Vastu"
                            link="/vastu-meditation-others"
                        />
                        <CardBox
                            alt1="motivation"
                            alt2="motivation"
                            hoverPath="/images_folder/services_Motivation1.webp"
                            path="/images_folder/services_motivation.webp"
                            para="Career path and guidance, Motivation for College students, Business Motivation and Seminars"
                            SubHeading="Motivation"
                            link="/motivation"
                        />
                    </div>
                </div>
                <div className='text-center mx-5 my-5 lg:hidden'>
                    <div className=''>
                        <Para style="lg:text-left text-center text-black" para="JC NUMMERRO APP" />
                        <SubHeading2 style="text-center text-black" subHeading="India’s Most Reliable Free Numerology App" />
                    </div>
                </div>
                <div className='px-5 lg:px-0'>
                    <div className='bg-img h-[45vh] lg:h-full rounded-md lg:rounded-none'>
                        <div className='hidden lg:block'>
                            <Suspense fallback={<div>Loading banner...</div>}>
                                <MobileApp />
                            </Suspense>
                            {/* <MobileApp /> */}
                        </div>
                    </div>
                </div>
                <div className='text-center mx-5 my-5 lg:hidden'>
                    <div className='flex lg:justify-start justify-center items-center space-x-5 lg:mx-40'>
                        <ImgLink path="/images_folder/google-play.png" style="w-[140px] h-[40px]" to="https://play.google.com/store/apps/details?id=jc.nummerro.app" alt="google-play" />
                        <ImgLink path="/images_folder/app-store.png" style="w-[140px] h-[40px]" to="https://apps.apple.com/us/app/jc-nummerro-app/id1529437444" alt="app-store" />
                    </div>
                    <Para style="my-5 text-black" para="J C Nummerro App provides the future predictions based on your Name and Date of Birth" />
                </div>
                <div className='my-10 mx-auto max-w-[1200px]'>
                    <SubHeading style="text-center" subHeading="Book An Appointment" />
                    <div className='flex justify-between lg:items-start items-center my-10 flex-col lg:flex-row space-y-10 lg:space-y-0'>
                        <Suspense fallback={<div>Loading banner...</div>}>
                            <OnlineAppointment />
                        </Suspense>
                        <Suspense fallback={<div>Loading banner...</div>}>
                            <OflineAppointment />
                        </Suspense>
                    </div>
                </div>
                
                {/* <NumerologyServicesCard /> */}
                <div className='homeservices'>
                    <SubHeading style="text-center pt-10" subHeading="Our Solutions" />
                    <div className='flex flex-wrap justify-center mx-10 mb-10 mt-10'>
                        <Suspense fallback={<div>Loading banner...</div>}>
                            <OurSolutionCard
                                alt="personal numerology reading"
                                link="/personal-numerology-reading"
                                path="/images_folder/personal-numerology-reading.webp"
                                subHeading="​Personal Numerology"
                                para="To find out the personal compatibility by name and date of birth"
                            />

                            <OurSolutionCard
                                alt="career numerology reading"
                                link="career-numerology-reading"
                                path="/images_folder/career-numerology-reading.webp"
                                subHeading="Career Numerology"
                                para="To predict the best career and growth for a successful future"
                            />

                            <OurSolutionCard
                                alt="relationship numerology reading"
                                link="/relationship-numerology-reading"
                                path="/images_folder/relationship-numerology-reading.webp"
                                subHeading="Relationship Numerology"
                                para="To check the relationship compatibility between any two persons"
                            />

                            <OurSolutionCard
                                alt="business numerology reading"
                                link="/business-numerology-reading"
                                path="/images_folder/business-numerology-reading.webp"
                                subHeading="Business Numerology"
                                para="To give suitable name to a Brand for luck and success"
                            />
                            <OurSolutionCard
                                alt="marriage numerology reading"
                                link="marriage-numerology-reading"
                                path="/images_folder/marriage-numerology-reading.webp"
                                subHeading="​Marriage Numerology"
                                para="To find out compatibility between a boy and a girl for Marriage"
                            />
                            <OurSolutionCard
                                alt="new-born-numerology-reading"
                                link="/new-born-numerology-reading"
                                path="/images_folder/new-born-numerology-reading.webp"
                                subHeading="New Born Numerology"
                                para="Naming of a Newly Born Child in harmony with date of birth"
                            />
                        </Suspense>
                    </div>
                </div>
                <Suspense fallback={<div>Loading banner...</div>}>
                    <Slider heading="Books Authored by Dr. J C Chaudhry" />
                </Suspense>
                <Suspense fallback={<div>Loading banner...</div>}>
                    <LearnGrow heading="Learn & Grow" />
                </Suspense>
                <div className='px-10 pb-10 mt-10'>
                    <SubHeading style="text-center" subHeading="See What People Say About Us !" />
                    <div className='flex justify-center flex-wrap my-10'>
                        {homeVideo?.homeVideo?.data?.map((ele:any, index: any) =>
                            <Suspense key={index} fallback={<div>Loading banner...</div>}>
                                <HomeVideos
                                    key={index}
                                    itemKey={index}
                                    heading={ele.name}
                                    para={ele.title}
                                    path={`https://newcnpl.s3.ap-south-1.amazonaws.com/public/jccms/videosthumbnail/${ele.category}/${ele.thumbnail}`}
                                    url={ele.videoUrl}
                                />
                            </Suspense>
                        )}
                    </div>
                    <Link href="/testimonials">
                        <SmallButton text="View More" style="m-auto" />
                    </Link>
                </div>
                <div className='px-10 py-10 homeservices'>
                    <SubHeading style="text-center" subHeading="Latest Blog Post" />
                    <div className='flex justify-center flex-wrap my-10'>
                        {blogs?.data?.length > 0 ? blogs?.data?.slice(0, 4).map((ele: any, index: number) =>
                            <Suspense key={index} fallback={<div>Loading banner...</div>}>
                                <CommonBlog
                                    href={`/article/${ele.slug}`}
                                    key={index}
                                    path={`https://newcnpl.s3.ap-south-1.amazonaws.com/public/blogs/thumbnails/${ele.thumbnail}`}
                                    para={ele.pageTitle}
                                    predictions={ele.tag}
                                    date={ele.updatedAt}
                                    alt={ele.alttag}
                                />
                            </Suspense>
                        ): <div className='text-center'>Loading...</div>}
                    </div>
                    <Link href="/blogs">
                        <SmallButton text="View More" style="m-auto" />
                    </Link>
                </div>
            </div>
        </div>
  )
}

export default HomePage