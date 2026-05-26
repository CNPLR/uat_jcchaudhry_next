import VastuMeditationOthers from './VastuMeditationOthers'
import GenerateMetadata from '../components/MetaGenerator'
import { headers } from 'next/headers'

export const metadata = GenerateMetadata({
    banner: "/allbanners/Vastu-consultancy-of-Home-and-Office-by-Dr-J-C-Chaudhry.webp",
    title: "Best Vastu Consultant in India | Home & Office Vastu Tips",
    description: "Consult Dr. J C Chaudhry, a trusted Vastu expert in India. Get effective Vastu tips for home, office, and business to attract positive energy and growth. Book online consultation.",
    keywords: "vastu consultant online, vastu shastra expert, online vastu consultant, vastu consultation, online vastu, online vastu consultation, vastu consultation in india, vastu consultant, vastu online, online vastu shastra, home vastu consultancy, vastu consultan",
    pagePath: "/vastu-meditation-others",
})
const page = () => {
  return (
    <VastuMeditationOthers/>
  )
}

export default page