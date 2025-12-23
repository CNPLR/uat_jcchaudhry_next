import React from 'react'
import AbcVastuShastra from './AbcVastuShastra'
import GenerateMetadata from '@/app/components/MetaGenerator'
import { headers } from 'next/headers'

export const metadata = GenerateMetadata({
    pagePath: "/book/abc-vastu-shastra",
    banner: "/allbanners/ABC-Vastu-Shastra-book-by-Dr-J-C-Chaudhry.webp",
    title: "ABC - Vastu Shastra Book | Vastu Expert - Dr Dr. J C Chaudhry",
    description: "ABC of Vastu Shastra is written by Vastu expert Dr Dr. J C Chaudhry. The book layout the benefits of vastu shastra, direction of plot, location of house as per Vastu.",
    keywords: "numerologist in india, numerology by jc chaudhry, vaastu shastra expert, motivational speaker, motivational speakers in india",
    // headers: headers
})
const page = () => {
   return( <AbcVastuShastra />)
}

export default page