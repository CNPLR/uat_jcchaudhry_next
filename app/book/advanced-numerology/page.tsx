
import AdvancedNumerology from './AdvancedNumerology'
import GenerateMetadata from '@/app/components/MetaGenerator'
import { headers } from 'next/headers'

export const metadata = GenerateMetadata({
  banner: "/allbanners/Advanced-numerology-book-by-Dr-J-C-Chaudhry.webp",
  title: "Advanced Numerology | Best Numerology Book | Dr Dr. J C Chaudhry",
  description: "Advanced numerology book is authored by numerologist Dr. J C Chaudhry. The book explains lo shu grid, power of name, calculation of friendly and anti-numbers, etc.",
  keywords: "numerologist in india, numerology by jc chaudhry, vaastu shastra expert, motivational speaker, motivational speakers in india",
  headers: headers,
});

const page = () => {
    
  return (
   <AdvancedNumerology />
  )
}

export default page