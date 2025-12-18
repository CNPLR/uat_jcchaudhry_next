import React from 'react'
import { Books } from '../components/ui/Books'
import Slider from '../components/Slider';
import Banner from '../components/ui/Banner';
import Img from '../components/ui/Img';
import Para from '../components/ui/Para';
import SubHeading from '../components/ui/SubHeading';
import { headers } from 'next/headers';
import GenerateMetadata from '../components/MetaGenerator';

export const metadata = GenerateMetadata({
    banner: "/allbanners/Best-Numerology-Books.webp",
        title: "Best Numerology Books | Vastu Books | Dr Dr. J C Chaudhry",
        description: "Dr Dr. J C Chaudhry has written books on numerology, vastu, meditation. His numerology books such as Prractical, Advanced numerology etc. are available on Amazon.",
        keywords: "numerologist in india, numerology by jc chaudhry, vaastu shastra expert, motivational speaker, motivational speakers in india",
    headers: headers
});
const page = () => {

    return (
        <div>
            <Banner alttag="Best Numerology Books" path="/allbanners/Best-Numerology-Books.webp" />
            <div className='flex lg:flex-row flex-col justify-center items-start my-10 bg-gray-100 py-10'>
                <div className='mb-5 lg:mb-0 mx-auto lg:mx-0'>
                    <Img alt="Books by Dr. J.C. Chaudhry on numerology" style="shadow-lg rounded-md w-[267px] h-[444px]" path="/images_folder/Books-by-Dr.-J.C.-Chaudhry-on-numerology.png" />
                </div>
                <div className='lg:ml-10 lg:w-[50%] w-[100%] px-10 lg:px-0'>
                    <SubHeading style="text-center lg:text-left" subHeading="Eminent Author" />
                    <Para style="mt-5 text-justify" para="A spectacular experience of more than 40 years in the field of Numerology compelled Dr. J C Chaudhry to encapsulate his wide knowledge for the benefit of the common man. His books ‘Advanced Numerology and Prractical Numerology’ uncover the power of numbers and how they can help shape the destiny of people. Must-read books for those who wish to know about the best time/period to plan their future in a better way." />

                    <Para style="mt-5" para="Other than Numerology, he has also written various books such as: ABC of Vastu Shastra, fundamentals Of Vastu, Meditaion & Subconscious Mind, Chakras, Mudra: Healthy Life at Your Fingertips, Nature: The Best Cure, I think: Poverty is no bar for Success, Success A few Steps Away, Rungs Of the Ladder, You and Your Gems." />
                </div>
            </div>
            <Slider heading="Books Authored by Dr. J C Chaudhry" />
        </div>
    )
}

export default page