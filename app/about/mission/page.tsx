import GenerateMetadata from '@/app/components/MetaGenerator'
import Banner from '@/app/components/ui/Banner'
import Img from '@/app/components/ui/Img'
import MainHeading from '@/app/components/ui/MainHeading'
import SubHeading1 from '@/app/components/ui/SubHeading1'
import SubHeading2 from '@/app/components/ui/SubHeading2'
import { headers } from 'next/headers'

export const metadata = GenerateMetadata({
    pagePath: "/about/mission",
    banner: "/allbanners/Our-mission-in-numerology-and-vastu.jpg",
    title: "Motivation, Teaching, Numerology by Dr. J C Chaudhry",
    description: "Dr. J C Chaudhry is working on his mission to educate students to build better doctors and engineers in India. Also, helping thousands of people to resolve their family, business and career problems with his numerology experience.",
    keywords: "numerologist in india, numerology by jc chaudhry, vaastu shastra expert, motivational speaker, motivational speakers in india",
    // headers: headers,
});
const page = () => {
  return (
    <div className=''>

            <Banner alttag="Our mission in numerology and vastu" path="/allbanners/Our-mission-in-numerology-and-vastu.jpg" />
            <div className='px-10'>
                <MainHeading style="text-center my-5" mainHeading="Mission" />
                <SubHeading1 style="text-center hidden lg:block" subHeading="To impart quality education to aspiring students beyond geographical barriers with the help of dedicated systems and technology" />
                <SubHeading2 style="text-center lg:hidden" subHeading="To impart quality education to aspiring students beyond geographical barriers with the help of dedicated systems and technology" />
                <Img path="/images_folder/mission.jpg" style="m-auto" alt='' />
            </div>
        </div>
  )
}

export default page