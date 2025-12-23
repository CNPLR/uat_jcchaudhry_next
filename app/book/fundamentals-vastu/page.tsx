import FundamentalsVastu from './FundamentalsVastu'
import GenerateMetadata from '@/app/components/MetaGenerator'

export const metadata = GenerateMetadata({
    banner: "/allbanners/Fundamentals-of-vastu-book-by-Dr-J-C-Chaudhry.webp",
    title: "Fundamentals of Vastu |  Vastu Tips for Home | Dr Dr. J C Chaudhry",
    description: "Fundamentals of Vastu is a vastu shastra book by Dr. J C Chaudhry. The book includes basic principles of vastu shastra for building home and office.",
    keywords: "numerologist in india, numerology by jc chaudhry, vaastu shastra expert, motivational speaker, motivational speakers in india",
    pagePath: "/book/fundamentals-vastu",
})

const page = () => {
  return (
    <FundamentalsVastu />
  )
}

export default page