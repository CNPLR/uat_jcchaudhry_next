import VastuMeditationOthers from './VastuMeditationOthers'
import GenerateMetadata from '../components/MetaGenerator'
import { headers } from 'next/headers'

export const metadata = GenerateMetadata({
    banner: "/allbanners/Vastu-consultancy-of-Home-and-Office-by-Dr-J-C-Chaudhry.webp",
    title: "Vastu Shastra Expert in India | Dr. JC Chaudhry",
    description: "Get expert Vastu consultation for your home, office and workplace with practical remedies, meditation guidance and positive energy solutions.",
    keywords: "vastu consultant online, vastu shastra expert, online vastu consultant, vastu consultation, online vastu, online vastu consultation, vastu consultation in india, vastu consultant, vastu online, online vastu shastra, home vastu consultancy, vastu consultan",
    pagePath: "/vastu-meditation-others",
})
const page = () => {
  return (
    <VastuMeditationOthers/>
  )
}

export default page