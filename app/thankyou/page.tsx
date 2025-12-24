import Link from 'next/link'
import React from 'react'
import Img from '../components/ui/Img'
import LinkText from '../components/ui/LinkText'
import MainHeading from '../components/ui/MainHeading'
import Para from '../components/ui/Para'
import SubHeading1 from '../components/ui/SubHeading1'
import GenerateMetadata from '../components/MetaGenerator'
import { headers } from 'next/headers'

export const metadata = GenerateMetadata({
    banner: "/logos/jclogo.png",
    title: "Thank you | JC Chaudhry",
    keywords: "numerologist in india, numerology by jc chaudhry, vaastu shastra expert, motivational speaker, motivational speakers in india",
    description: "Thanks for contacting us! We will get back to you soon.",
    pagePath: "/thankyou",
});
const page = () => {
  return (
     <div className='my-10 space-y-5 mx-auto md:w-[50%]'>
            <Img style="mx-auto w-32" path="/logos/logo2.png" alt=''/>
            <MainHeading mainHeading="Thanks for contacting us!" style="text-center" />
            <SubHeading1 subHeading="We will get back to you soon." style="text-center" />
            <hr />
            <div>
                <Link href="/ask-your-question">
                    <LinkText para="Ask Your Question" style="text-center" />
                </Link>
            </div>

            <Para style="text-center" para="If you need Numerology advice related to your personal and professional life, name correction, business, marriage or child Numerology, you can Ask Your Question here." />
            
            <div>
                <Link href="/numerology/signup">
                    <LinkText para="Book Online or Face to Face Appointment" style="text-center" />
                </Link>
            </div>
            <Para style="text-center" para="For your appointment booking with Mr. J C Chaudhry, click here" />
            <Para style="text-center" para="Email Id : support@jcchaudhry.com" />
        </div>
  )
}

export default page