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
    title: "Dr. JC Chaudhry Mission: Education, Technology, Learning",
    description: "Discover Dr. JC Chaudhry's mission to provide quality education through technology, helping aspiring students learn beyond geographical barriers.",
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
                <Img path="/images_folder/mission.png" style="m-auto p-5" alt='' />
            </div>
        </div>
  )
}

export default page