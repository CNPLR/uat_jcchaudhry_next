import React from 'react'
import BusinessNumerologyReading from './BusinessNumerologyReading'
import GenerateMetadata from '../components/MetaGenerator'
import { headers } from 'next/headers'

export const metadata = GenerateMetadata({
    banner: "/allbanners/Numerology-readings-for-new-borns-by-Dr-J-C-Chaudhry.webp",
    title: "Business Name, Company Name Numerology | Best Name for Business",
    description: "The best business name numerology solution for your brand and company name which will be most compatible with your name and date of birth. Explore the Business Name Numerology reading by Dr. J C Chaudhry.",
    keywords: "Business name numerology, company name numerology, brand name numerology, lucky name for business, lucky business by date of birth, business name suitability with date of birth, numerology for business success, numerology business name",
    headers: headers
})
const page =async () => {
  return (
   <BusinessNumerologyReading/>
  )
}

export default page