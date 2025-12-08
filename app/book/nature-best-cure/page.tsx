import React from 'react'
import NatureBestCure from './NatureBestCure'
import GenerateMetadata from '@/app/components/MetaGenerator'
import { headers } from 'next/headers'

export const metadata = GenerateMetadata({
    banner: "/allbanners/Nature’s-best-cure-book-by-Dr-J-C-Chaudhry.webp",
    title: "Nature - The Best Cure | Healthy Living Guide | Dr Dr. J C Chaudhry",
    description: "Nature - The best cure is a book for healthy life. It explains about the home remedies, benefits and usage of 35 herbs and spices.",
    keywords: "numerologist in india, numerology by jc chaudhry, vaastu shastra expert, motivational speaker, motivational speakers in india",
    headers:headers
})
const page = () => {
  return (
    <NatureBestCure />
  )
}

export default page