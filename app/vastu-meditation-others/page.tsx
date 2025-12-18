import VastuMeditationOthers from './VastuMeditationOthers'
import GenerateMetadata from '../components/MetaGenerator'
import { headers } from 'next/headers'

export const metadata = GenerateMetadata({
    banner: "/allbanners/Vastu-consultancy-of-Home-and-Office-by-Dr-J-C-Chaudhry.webp",
    title: "Vastu Consultant, Vastu Shastra Expert | Consultancy for Home &amp; Office",
    description: "Looking for Vastu advice for your home or corporate? Book appointment with Dr. J C Chaudhry for Vastu consultancy and Vastu solutions for home, office, shop and commercial space.",
    keywords: "vastu consultant online, vastu shastra expert, online vastu consultant, vastu consultation, online vastu, online vastu consultation, vastu consultation in india, vastu consultant, vastu online, online vastu shastra, home vastu consultancy, vastu consultan",
    headers: headers
})
const page = () => {
  return (
    <VastuMeditationOthers/>
  )
}

export default page