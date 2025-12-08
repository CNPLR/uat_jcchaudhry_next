import GenerateMetadata from '@/app/components/MetaGenerator'
import Client from './Client'
import { headers } from 'next/headers';

export const metadata = GenerateMetadata({
    banner: "/allbanners/Practical-numerology-book-by-Dr-J-C-Chaudhry.webp",
    title: "Prractical Numerology | Numerology Book by Dr. J C Chaudhry",
    description: "Learn numerology with Dr. J C Chaudhry. Buy his prractical numerology book on Amazon to understand relationship of numbers, how to calculate numbers, etc.",
    keywords: "numerologist in india, numerology by jc chaudhry, vaastu shastra expert, motivational speaker, motivational speakers in india",
    headers: headers,
  });
const page = () => {
  return (
    <Client />
  )
}

export default page