import React from 'react'
import ImgHeadingBox from '../../components/ui/ImgHeadingBox'
import Link from 'next/link'
import SmallButton from '../../components/ui/SmallButton'
import MainHeading from '../../components/ui/MainHeading'
import Banner from '../../components/ui/Banner'
import GenerateMetadata from '../../components/MetaGenerator'

export const metadata = GenerateMetadata({
    pagePath: "/about/education",
    banner: "/allbanners/Learn-about-Dr-J-C-Chaudhry’s-educational-journey.webp",
    title: "Dr. J C Chaudhry Education | Chairman Aakash Education Study, College, Teaching Experience",
    description: "Dr. J C Chaudhry Chairman &amp; Managing Director of AESL did his Master degree in Science (Botany) from the Birla Institute of Technology and Science from BITS Pilani in the year 1972.",
    keywords: "jc Chaudhry education, 	Dr. J C Chaudhry studies, Dr. J C Chaudhry knowledge, jc Chaudhry aakash chairman, Dr. J C Chaudhry aakash owner, jc Chaudhry college degree, Dr. J C Chaudhry science, jc Chaudhry from bits pilani",
    // headers: headers,
});

const education = () => {
  return (
     <div>
            {/* <HeadHelmet {...pageMetaData} /> */}

            <Banner alttag="Learn about Dr. J C Chaudhry’s educational journey" path="/allbanners/Learn-about-Dr-J-C-Chaudhry’s-educational-journey.webp" />
            <MainHeading style="text-center my-10" mainHeading="Education" />
            <div className='lg:px-10 px-5'>
                <div className='flex justify-center space-x-10'>
                    <ImgHeadingBox
                      alt="About Dr. J.C. Chaudhry’s educational journey"
                      path="/images_folder/About-Dr.-J.C.-Chaudhry’s-educational-journey.webp"
                      para="Dr. J C Chaudhry holds a Master's degree in Science (Botany) from the Birla Institute of Technology and Science (BITS), Pilani, Rajasthan (1972)." heading={''} link={''}                    />
                    <ImgHeadingBox
                        alt="Dr. J.C. Chaudhry’s educational journey"
                        path="/images_folder/Dr.-J.C.-Chaudhry’s-educational-journey.webp"
                        para="He has been very closely associated with the teaching field for 48 years extending his services across schools & colleges."
                        heading={''} link={''}
                    />
                </div>
                <div className='flex justify-center mt-10 space-x-10'>
                    <ImgHeadingBox
                        alt="To impart quality education to aspiring students"
                        path="/images_folder/To-impart-quality-education-to-aspiring-students-.webp"
                        para="Dr. J C Chaudhry has been instrumental in motivating lakhs of students and shaping their future careers. With an aim to infuse confidence in students, Dr. J C Chaudhry has been delivering motivational lectures through seminars and also through his YouTube channel."
                        heading={''} link={''}
                    />
                    <ImgHeadingBox
                        alt="Dr. J.C. Chaudhry's Academic Journey"
                        path="/images_folder/Dr.-J.C.-Chaudhry's-Academic-Journey.webp"
                        para="His journey from a teacher to establishing AESL and the way he ushered innovation in the coaching industry making 'Aakash'- a standalone brand, is indeed praiseworthy and worth imitating."
                        heading={''} link={''}
                    />
                </div>
                <Link href="/about">
                    <SmallButton style="mx-auto my-10" text="Know More" />
                </Link>
            </div>
        </div>
  )
}

export default education