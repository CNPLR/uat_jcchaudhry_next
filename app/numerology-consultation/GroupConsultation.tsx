'use client'
import React, { useRef } from 'react'
import Banner from '../components/ui/Banner'
import CountryModel from '../components/ui/CountryModel'
import Img from '../components/ui/Img'
import LinkText from '../components/ui/LinkText'
import MainHeading from '../components/ui/MainHeading'
import Para from '../components/ui/Para'
import SmallButton from '../components/ui/SmallButton'
import SubHeading1 from '../components/ui/SubHeading1'

export default function GroupConsultation() {
   const modelRef = useRef<any>(undefined)

    const showModal = () => {
        if (modelRef.current.classList.contains('hidden')) {
            modelRef.current.classList.replace('hidden', 'flex')
        }
    }

    const closeModal = () => {
        if (modelRef.current.classList.contains('flex')) {
            modelRef.current.classList.replace('flex', 'hidden')
        }
    }

    return (
        <div>

            <Banner alttag="Join our Numerology Group Consultation for personalized insights and guidance" path="/allbanners/Join-our-Numerology-Group-Consultation-for-personalized-insights-and-guidance.webp" />
            <MainHeading mainHeading="Numerology Group Consultation" style="text-center my-10" />
            <div>
                <div className='px-10 space-y-5 bg-gray-100 my-10 py-10'>
                    <SubHeading1 style="text-center" subHeading="Numerology Consultation for Corporates | Universities | Organization" />
                    <Para para="Numerology is a predictive science that shows you a path on how you should move forward for a better career, business, marriage, or personal growth." />
                    <Para para="Face-to-Face and Online Consultation are two of the popular Numerology consulting services offered by Dr. J C Chaudhry. In addition to this, now corporates, organizations and universities can also arrange numerology consultations for their employees/staff in small groups." />
                    <Para para="In this, Dr. J C Chaudhry will give a numerology talk collectively to a group of people. The group could be employees, university staff, or students. At the end of the lecture, he will take a doubt clearing session per couple or person. The time duration of each group session and doubt clearing session differs depending on the size of the group." />
                </div>
                <div className='px-10 bg-gray-100 my-10 py-10'>
                    <div className='flex items-center justify-center lg:flex-row flex-col'>
                        <div className='lg:w-[450px] w-[100%] mb-10 lg:mr-10 mr-0'>
                            <Img style="rounded-md" path='/images_folder/Numerology-group.jpg' alt={''} />
                        </div>
                        <div>
                            <div className='mb-4'>
                                <Para style="" para="A. Charges for Lecture for 5-8 couples (10-16 persons)." />
                                <SmallButton onClick={showModal} text="Know More" />
                            </div>
                            <div className='mb-4'>
                                <Para style="" para="B. Charges for Lecture for 9-15 couples (18-30 persons)." />
                                <SmallButton onClick={showModal} text="Know More" />
                            </div>
                            <div className='mb-4'>
                                <Para style="" para="C. Lecture at University or at any organized body." />
                                <SmallButton onClick={showModal} text="Know More" />
                            </div>
                            <div className='mb-4 flex space-x-1 flex-wrap'>
                                <Para style="" para="(For further clarifications, please call at" />
                                <LinkText para=" +91 9650797652" />
                                <Para style="" para="or email at " />
                                <LinkText para=" support@jcchaudhry.com)" />
                            </div>
                        </div>
                    </div>
                </div>
                <CountryModel closeModal={() => closeModal()} modelRef={modelRef} />
            </div>
        </div>
    )
}
