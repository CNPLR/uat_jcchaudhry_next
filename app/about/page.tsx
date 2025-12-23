import React from 'react'
import CommonBookAppointSolution from '../components/ui/CommonBookAppointSolution'
import ImgHeadingContent from '../components/ui/ImgHeadingContent'
import MainHeading from '../components/ui/MainHeading'
import Banner from '../components/ui/Banner'
import GenerateMetadata from '../components/MetaGenerator'

export const metadata = GenerateMetadata({
        pagePath: "/about",
        banner: "/allbanners/Numerologist-Motivational-Speaker-Delhi-India.webp",
        title: "Numerologist &amp; Motivational Speaker Delhi, India | Business Numerology Expert | Dr. J C Chaudhry",
        description: "JC Chaudhry, Chairman &amp; Founder of Aakash Educational Services Ltd. (AESL) is also one of the popular numerologists of India offers life numerology reading services world-wide. Book Appointment Now!",
        keywords: "jc chaudhry, Dr. J C Chaudhry, Dr. J C Chaudhry, jc chaudhary, jc chaudhry house, jc chaudhry full name, aakash institute owner, j c chaudhary, owner of aakash institute, aakash founder, jc chaudhry biography, akash institute owner",
        // headers: headers,
});


const page = () => {
  return (
            <div>
            <Banner alttag="Numerologist Motivational Speaker Delhi, India" path="/allbanners/Numerologist-Motivational-Speaker-Delhi-India.webp" />
            <MainHeading style="text-center my-10" mainHeading="They Say It All Starts With One Man" />
            <div className='px-10 my-10'>
                <ImgHeadingContent
                    path="/images_folder/Founder-of-Aakash-Education.png"
                    alt="Founder of Aakash Education"
                    subHeading="Where Education Transforms Lives"
                    para="Dr. J C Chaudhry is a living legend and the man behind India’s leading test preparatory institute. He is the Chairman of Aakash Educational Services Limited (AESL)."
                    para1="If today, Aakash is a brand known for delivering focused and quality coaching, it is due to the outcome of persistent hard work compounded with perseverance and patience of this great visionary. His aim to provide quality education has helped many thousands of aspiring students to achieve their academic goals."
                    nstyle="w-32"
                    style="bg-gray-100 p-10 rounded-md"
                    subhs="text-center lg:text-left"
                    nomore="Know More"
                    link="https://www.aakash.ac.in/"
                />
                <ImgHeadingContent
                    path="/images_folder/Dr.-J-C-Chaudhry’s-vast-experience-in-numerology.png"
                    alt="Dr. J C Chaudhry’s vast experience in numerology"
                    subHeading="Where Numbers Can Change Destiny"
                    para="Dr. J C Chaudhry is an erudite numerologist with an experience of more than 40 years. To continue this journey, he founded Chaudhry Nummero Pvt. Ltd. (CNPL) in September 2018. Dr. Chaudhry’s sheer interest in Numerology has helped many in distress. He has also been associated with fields of Vastu Shastra, Gems and Stones, Nature and Mudras. He authored 2 books on numerology- “Advanced Numerology” & “Prractical Numerology”."
                    para1="His other publications include ABC of Vastu Shastra, You and Your Gems, Mudra-Healthy Life at your Fingertips, Nature-The Best Cure."
                    nstyle="w-32"
                    style="bg-gray-100 p-10 rounded-md"
                    subhs="text-center lg:text-left"
                    nomore="Know More"
                    link="/numerology"

                />
                <ImgHeadingContent
                    path="/images_folder/Dr.-J.C.-Chaudhry-is--a-prominent-figure-at-Akash-Healthcare..png"
                    alt="Dr. J.C. Chaudhry is a prominent figure at Akash Healthcare."
                    subHeading="Where Ethics Save Lives"
                    para="Dr. Chaudhry is also the Chairman of “Aakash Healthcare Pvt. Ltd”, which is a 230-bed super speciality hospital. Known for its leading care in the Orthopaedic and Joint replacement surgery, Aakash Healthcare Super Specialty Hospital also specializes in Cardiac Sciences, Ophthalmology, Nephrology & Urology, Neurology, Mother & Child and Minimal Invasive Surgery."
                    para1="Founded by Dr. J C Chaudhry, the hospital is equipped with state of the art infrastructure and latest technology and is being managed by highly qualified and trained experts from their respective fields and a unified team of healthcare experts to ensure 24x7 comprehensive patient care."
                    nstyle="w-32"
                    style="bg-gray-100 p-10 rounded-md"
                    subhs="text-center lg:text-left"
                    nomore="Know More"
                    link="https://aakashhealthcare.com/"
                />
                <ImgHeadingContent
                    alt="Maa Vaishno Devi Dham"
                    path="/images_folder/Maa-Vaishno-Devi-Dham.png"
                    subHeading="Where Devotees Seek Contentment"
                    para="Dr. Chaudhry believes in making a difference through his community building pursuit, Maa Vaishno Devi Dham at Vrindavan, District Mathura (U.P.), thereby distinguishing himself as a leading philanthropist in India."
                    para1="He is the Managing Trustee of “Maa Vaishno Devi Dham”. The Dham campus is spread over 12 acres area of land. The magnificent Maa Vaishno Devi Murti built under his shield is recognised by Limca Book of Records as the tallest statue (141 feet in height) in India in year 2013."
                    nstyle="w-32"
                    style="bg-gray-100 p-10 rounded-md"
                    subhs="text-center lg:text-left"
                    nomore="Know More"
                    link="https://www.chaardham.in/maa-vaishno-devi-dham"
                    target="_blank"
                />
                <CommonBookAppointSolution
                    subHeading="Don’t Be Shy. Get In Touch."
                    subHeading2="Contact Dr. J C Chaudhry, if you have any queries. We will get back to you as soon as possible"
                    text="Contact Us"
                />
            </div>
        </div>
  )
}

export default page