'use client';

import Link from "next/link";
import { redirect, usePathname } from "next/navigation";
import { Suspense, useEffect, useMemo, useState } from "react";
import Banner from "../components/ui/Banner";
import Para from "../components/ui/Para";
import MainHeading from "../components/ui/MainHeading";
import ImageContent from "../components/ui/ImageContent";
import SubHeading from "../components/ui/SubHeading";
import { CN } from "../components/numerology/CN";
import ImgLink from "../components/ui/ImgLink";
import NumerologyServicesCard from "../components/ui/NumerologyServicesCard";
import { ConsultationCard } from "../components/numerology/ConsultationCard";
import { useRouter } from "next/router";
import { PageDataResult, usePageData } from "../components/numerology/UsePageData";
import { ErrorFallback } from "../components/numerology/ErrorFallback";
import { FooterSection } from "../components/numerology/FooterSection";
import { ComponentLoader } from "../components/numerology/ComponentLoader";
import HorizontalImgBox from "../components/ui/HorizontalImgBox";
import { useVideoData } from "../components/numerology/UseVideoData";
import Loader from "../components/Loader";
import { VideoSection } from "../components/numerology/VideoSection";
import { TestimonialCard } from "../components/numerology/TestimonialCard";
import { DynamicCard } from "../components/numerology/DynamicCard";
import { CardSkeleton } from "../components/numerology/CardSkeleton";
// import styles from './Numerology.module.css';
import "../styles/dynamicData.css"


const Numerology = ({slug, pagesData}: {slug: string, pagesData: PageDataResult}) => {
  const pathName = usePathname();

    const path = process.env.NEXT_PUBLIC_URI || '';
     const [token, setToken] = useState<string | null>(null);

    const {
        pageData, boxData, cardData, horizontalData, footerData,
        cardHeading, footerHeading, category, loading, error, retryFetch
    } = pagesData;

    const { videos, world }: {videos: any, world: any} = useVideoData(path);

    // Memoized values
    const firstPageData = useMemo(() => pageData?.[0], [pageData]);

    const isCountryNumerologist = useMemo(() => [
        'numerologist-in-canada', 'numerologist-in-malaysia', 'numerologist-in-amsterdam',
        'numerologist-in-usa', 'numerologist-in-uk', 'numerologist-in-Australia',
        'numerologist-in-singapore', 'numerologist-in-south-africa'
    ].includes(slug), [slug]);

    const testimonials = useMemo(() => [
        {
            imagePath: '/images_folder/BKT_Media.png',
            name: 'Mr. Siddhant Sahib Ji',
            testimonial: 'Our business was not progressing, and therefore we took Numerology consultation from Dr. J C Chaudhry. He told that number of all directors in the company do not match with the name of the company. He changed the name of the company and everything changed.',
            alt: 'BKT_Media'
        },
        {
            imagePath: '/images_folder/Harish_Gulati.png',
            name: 'Mr. Harish Gulati',
            testimonial: 'My daughter Yamini Gulati was suffering from Brain Meningitis. She started getting fits. I showed her to many good hospitals across India and got no cure. Then, I met with Dr. J C Chaudhry, and shared my problem with him. He changed my daughter\'s name as per Numerology, and after that I have noticed drastic changes in her health. She is perfectly fine now.',
            alt: 'Harish_Gulati'
        },
        // Add more testimonials...
    ], []);

    if (loading) {
        return (
            <Suspense fallback={<div>Loading...</div>}>
                <Loader />
            </Suspense>
        );
    }

    if (error) {
        return <ErrorFallback error={{ message: error }} resetError={retryFetch} />;
    }

    if (!firstPageData) {
        return null;
    }

    useEffect(() => {
        const storedToken = localStorage.getItem("token");
        setToken(storedToken);
    }, []);

    return (
        <div className='bg-white'>

            {pageData?.map((ele:any, index:number) => (
                <div key={index}>
                    <Link href={token ? '/dashboard' : '/numerology/signup'}>
                        <Suspense fallback={<ComponentLoader height="300px" />}>
                            <Banner
                                alttag={ele?.alttag}
                                path={`https://newcnpl.s3.ap-south-1.amazonaws.com/public/pages/banners/${ele?.headerBanner}`}
                            />
                        </Suspense>
                    </Link>
                    <div className='px-10'>
                        <div className='mt-5 titleData'>
                            <Suspense fallback={<ComponentLoader height="80px" />}>
                                <MainHeading mainHeading={ele.pageTitle} style="text-center" />
                                <Para style="text-center" para={ele.description} />
                            </Suspense>
                        </div>
                    </div>
                </div>
            ))}

            <div className='boxData'>
                {boxData?.map((ele:any, index:number) => (
                    <Suspense key={index} fallback={<ComponentLoader height="200px" />}>
                        <ImageContent
                            style=""
                            path={`https://newcnpl.s3.ap-south-1.amazonaws.com/public/pages/planetnumbers/${ele.imageKey}`}
                            alt={ele.heading}
                            subHeading={ele.heading}
                            para={ele.content} about={""}                        
                        />
                    </Suspense>
                ))}
            </div>

            <div className=''>
                {cardHeading && (
                    <Suspense fallback={<ComponentLoader height="40px" />}>
                        <SubHeading subHeading={cardHeading} style="text-center mb-5" />
                    </Suspense>
                )}
                <div className='flex justify-center items-start flex-wrap'>
                    {cardData?.length > 1 && cardData.map((content: any, index: number) => (
                        <DynamicCard key={index} content={content} slug={slug} />
                    ))}
                </div>
            </div>

            {/* Special sections based on slug */}
            {slug === 'jc-nummerro-app' && (
                <div>
                    <Suspense fallback={<ComponentLoader height="40px" />}>
                        <SubHeading style="text-center my-10" subHeading="Book An Appointment with Dr. J C Chaudhry" />
                    </Suspense>
                    <div className='my-10 px-10 flex flex-wrap'>
                        <Suspense fallback={<CardSkeleton />}>
                            <CN
                                subHeading="Numerology Audit"
                                path="/images_folder/FtoFap.jpg"
                                para="Book a Face to Face appointment in our Office. Two slots of Face to Face consultations are available: 30 minutes and 60 minutes."
                            />
                            <CN
                                subHeading="Online Consultation"
                                path="/images_folder/Onapp.jpg"
                                para="During this COVID-19 Pandemic, book a virtual appointment on Zoom for 30 minutes or 60 minutes from the comfort of your home."
                            />
                            <CN
                                subHeading="Face to Face Consultation"
                                path="/images_folder/audapp.jpg"
                                para="Want to run a successful business? Entrepreneurs book an appointment for a numerology audit of company and top management."
                            />
                        </Suspense>
                    </div>
                </div>
            )}

            {slug === 'top-numerologist-india' && videos && (
                <VideoSection
                    videos={videos}
                    title="Videos by Famous Numerologist Dr. J C Chaudhry"
                />
            )}

            {slug === 'top-numerologist-of-the-world' && world?.data && (
                <VideoSection videos={world.data} />
            )}

            {/* Country testimonials */}
            {category === "Country" && (
                <div className='space-y-10 py-10'>
                    <Suspense fallback={<ComponentLoader height="40px" />}>
                        <SubHeading style="text-center" subHeading="Client Testimonials and Experiences" />
                    </Suspense>
                    <div className='flex flex-wrap justify-center items-center'>
                        {testimonials.map((testimonial, index) => (
                            <TestimonialCard key={index} {...testimonial} />
                        ))}
                    </div>
                </div>
            )}

            {/* Country numerologist consultation cards */}
            {isCountryNumerologist && (
                <>
                    <div className='flex justify-center items-start flex-wrap'>
                        <ConsultationCard
                            title="Online Consultation"
                            description="Online Numerology Consultation by Dr. Chaudhry is a virtual meeting round conducted over Zoom. You can interact with him about your queries and get solutions to them. You can benefit from online numerology reading from any part of the country. There are two available consultation slots: a 30-minute session and a 60-minute session."
                            buttonText="Book Appointment"
                            link={token ? '/dashboard' : '/numerology/signup'}
                            token={token}
                            height="md:h-[80vh]"
                        />
                        <ConsultationCard
                            title="Ask Your Question"
                            description="Ask Your Question from Dr. Chaudhry related to health, motherhood, child, abroad, relationship, job, etc. via email & get a personalized solution for your problem. The numerology answers by him will be sent directly to your Email Address within a week's time."
                            buttonText="Ask Your Question"
                            link="/ask-your-question"
                            token={token}
                            height="md:h-[80vh]"
                        />
                    </div>

                    <div className='horizontal w-[90%] my-10 mx-auto'>
                        <div className='bg-slate-100 p-10 mx-auto shadow-md border rounded-md text-center'>
                            <h2>Fee Details:</h2>
                            <ul className='text-left'>
                                <li>Online Consultation: 60 minutes (985 USD) 30 minutes (650 USD)</li>
                                <li>Ask Your Question : 185 USD</li>
                            </ul>
                            <p className='text-left'>Book your session to receive personalized insights and tailored solutions to your queries.</p>
                        </div>
                    </div>
                </>
            )}

            {/* Horizontal data */}
            <div className=''>
                {horizontalData?.map((content: any, index: number) => (
                    <div key={index} className='horizontal w-[90%] my-10 mx-auto'>
                        <div className={' bg-slate-100 p-10 mx-auto shadow-md border border-gray-200 rounded-md'}
                            dangerouslySetInnerHTML={{ __html: content }} />
                    </div>
                ))}
            </div>

            {/* Download app section */}
            <Suspense fallback={<ComponentLoader height="150px" />}>
                <HorizontalImgBox
                    subHeading="DOWNLOAD JC Nummerro App"
                    path1="/images_folder/google-play.png"
                    path2="/images_folder/app-store.png"
                    para="Download the FREE JC Nummerro App to know everything about yourself with the help of Numerology."
                />
            </Suspense>

            {/* Social media section */}
            <div className='horizontal w-[90%] my-10 mx-auto'>
                <div className='bg-slate-100 p-10 mx-auto shadow-md border border-gray-200 rounded-md text-center'>
                    <h2 className='mb-5 social'>Follow us on Social Media</h2>
                    <div className='flex space-x-2 justify-center items-center'>
                        <Suspense fallback={<ComponentLoader height="40px" />}>
                            <ImgLink style="hover:scale-[1.1] w-10 shadow-xl rounded-full" alt="twitter" to="https://twitter.com/jc_chaudhry" path="/socialmedia/06.png" />
                            <ImgLink style="hover:scale-[1.1] w-10 shadow-xl rounded-full" alt="facebook" to="https://www.facebook.com/NumerologistAndMotivator/" path="/socialmedia/02.png" />
                            <ImgLink style="hover:scale-[1.1] w-10 shadow-xl rounded-full" alt="instagram" to="https://www.instagram.com/jc_chaudhrynumerology/" path="/socialmedia/03.png" />
                            <ImgLink style="hover:scale-[1.1] w-10 shadow-xl rounded-full" alt="youtube" to="https://www.youtube.com/channel/UCkGRccoFIazt6GZUcdq6Byg/" path="/socialmedia/01.png" />
                        </Suspense>
                    </div>
                </div>
            </div>

            {/* Numerology services card */}
            {slug === "top-numerologist-india" && (
                <Suspense fallback={<ComponentLoader height="200px" />}>
                    <NumerologyServicesCard text="Numerology Solutions by Dr. J C Chaudhry" />
                </Suspense>
            )}

            {/* Footer section */}
            <FooterSection
                category={category}
                footerData={footerData}
                footerHeading={footerHeading}
            />
        </div>
    );
}

export default Numerology