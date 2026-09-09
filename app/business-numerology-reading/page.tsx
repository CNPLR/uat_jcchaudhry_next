import React from 'react'
import BusinessNumerologyReading from './BusinessNumerologyReading'
import GenerateMetadata from '../components/MetaGenerator'
import { headers } from 'next/headers'

export const metadata = GenerateMetadata({
    banner: "/allbanners/Numerology-readings-for-new-borns-by-Dr-J-C-Chaudhry.webp",
    title: "Best Business Numerology Expert | Dr. JC Chaudhry",
    description: "Consult Dr. JC Chaudhry for business numerology, brand name analysis, partner compatibility and lucky dates to support business growth.",
    keywords: "Business name numerology, company name numerology, brand name numerology, lucky name for business, lucky business by date of birth, business name suitability with date of birth, numerology for business success, numerology business name",
    pagePath: "/business-numerology-reading",
})
const page =async () => {
  return (
   <BusinessNumerologyReading/>
  )
}

export default page