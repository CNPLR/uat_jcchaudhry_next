import GenerateMetadata from '@/app/components/MetaGenerator'
import { headers } from 'next/headers'
import Login from './Login'
export const metadata = GenerateMetadata({
     banner: "/logos/jclogo.png",
        title: "Login | Dr. J C Chaudhry Numerology Consultation",
        description: "Login to your account and get access to the numerology consultation booking with Dr. J C Chaudhry. You can book personal / face to face or online appointment.",
        keywords: "numerologist in india, numerology by jc chaudhry, vaastu shastra expert, motivational speaker, motivational speakers in india",
    headers: headers
})

const page = () => {
  return (
    <Login />
  )
}

export default page
