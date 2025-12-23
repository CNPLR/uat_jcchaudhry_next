import GenerateMetadata from '@/app/components/MetaGenerator'
import { headers } from 'next/headers'
import UpdatePassword from './Updatepassword'
export const metadata = GenerateMetadata({
    banner: "/logos/jclogo.png",
    title: "Forgot | Update Password | JCChaudhry.com",
    description: "Update or recover your password at jcchaudhry.com. Appointment booking for your personal numerology, life numerology, future numerology reading.",
    keywords: "numerologist in india, numerology by jc chaudhry, vaastu shastra expert, motivational speaker, motivational speakers in india",
    pagePath: "/numerology/updatepassword",
})
const page = () => {
  return (
    <UpdatePassword /> 
  )
}

export default page