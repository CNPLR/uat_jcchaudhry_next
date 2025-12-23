import React from 'react'
import GenerateMetadata from '../components/MetaGenerator'
import { headers } from 'next/headers'
import Testimonials from './Testimonials'

export const metadata = GenerateMetadata({
     banner: "/allbanners/Read-testimonials-of-Dr-J-C-Chaudhry's-clients.webp",
        title: "Numerology Testimonials | Numerology Calculation by Dr. J C Chaudhry",
        description: "Check out the testimonials shared by satisfied clients who have taken Numerology advice from Dr. J C Chaudhry for their Life, Health, Family, Relationship, Marriage, Business or Corporate.",
        keywords: "numerologist in india, numerology by jc chaudhry, vaastu shastra expert, motivational speaker, motivational speakers in india",
    // headers: headers
})
const page = () => {
  return (
   <Testimonials />
  )
}

export default page