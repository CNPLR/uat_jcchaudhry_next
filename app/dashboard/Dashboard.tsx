'use client';
import Link from 'next/link';
import Img from '../components/ui/Img';
import OflineAppointment from '../components/ui/OflineAppointment';
import OnlineAppointment from '../components/ui/OnlineAppointment';
import Para from '../components/ui/Para';
import SmallButton from '../components/ui/SmallButton';
import SubHeading from '../components/ui/SubHeading';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';

const Dashboard = () => {
   const navigate = useRouter()
   const pathName = usePathname();

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            navigate.push('/numerology/login')
        }
        localStorage.setItem('paymentPath', pathName);
    }, [])

    return (
        <div>
            {/* <Banner alttag="Login Page of website" path="/allbanners/Login-Page-of-website.jpg" /> */}
            <div className='my-10 mx-auto max-w-[1200px]'>
                <SubHeading style="text-center" subHeading="Book An Appointment" />
                <div className='flex justify-between lg:items-start items-center my-10 flex-col lg:flex-row space-y-10 lg:space-y-0'>
                    <OnlineAppointment />
                    <OflineAppointment />
                </div>

                <div className='my-10 bg-gray-100 py-10 text-center font-semibold'>
                    <p>Please Email us if you are facing any issues with Appointment Booking.</p>
                    <Link className='text-blue-600 underline underline-offset-4' href="mailto:support@jcchaudhry.com">support@jcchaudhry.com</Link>
                </div>
                <div className='space-y-10 bg-gray-100 py-10'>
                    <SubHeading style="text-center" subHeading="Numerology Helped many – Know How" />
                    <div className='flex flex-wrap justify-center items-center'>
                        <div className='mx-5 mb-5'>
                            <div className="md:w-80 md:h-72 bg-gradient-to-l from-slate-300 to-slate-100 text-slate-600 border border-slate-300 justify-center p-3 rounded-lg shadow-md space-y-2">
                                <Img style="w-20" path='/images_folder/BKT_Media.png' alt={''} />
                                <p className='text-[24px] font_family font-semibold text-[#490099]'>Mr. Siddhant Sahib Ji</p>
                                <Para para="I am Siddhant Saheb Ji, Chairman and Director of BKT Media Pvt. Ltd. We were working since long in this line but were not getting the speed that we were looking for." style="" />
                            </div>
                        </div>
                        <div className='mx-5 mb-5'>
                            <div className="md:w-80 md:h-72 bg-gradient-to-l from-slate-300 to-slate-100 text-slate-600 border border-slate-300 justify-center p-3 rounded-lg shadow-md space-y-2">
                                <Img style="w-20" path='/images_folder/Harish_Gulati.png'  alt=''/>
                                <p className='text-[24px] font_family font-semibold text-[#490099]'>Mr. Harish Gulati</p>
                                <Para para="Myself Harish Gulati, resident of Delhi and Engineer by profession. I would like to tell something about my daughter Yamini Gualti." style="" />
                            </div>
                        </div>
                        <div className='mx-5 mb-5'>
                            <div className="md:w-80 md:h-72 bg-gradient-to-l from-slate-300 to-slate-100 text-slate-600 border border-slate-300 justify-center p-3 rounded-lg shadow-md space-y-2">
                                <Img style="w-20" path='/images_folder/Manoj_Kumar.png' alt={''} />
                                <p className='text-[24px] font_family font-semibold text-[#490099]'>Mr. Manoj Kumar</p>
                                <Para para="My Name is Manoj Kumar and by profession I am Swimming Instructor. In many Five star hotels in Delhi, I am teaching Aqua Yoga, Aqua fitness & Swimming to people of all age" style="" />
                            </div>
                        </div>
                    </div>
                    <Link href="/testimonials">
                        <SmallButton text="Read more" style="mx-auto" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Dashboard