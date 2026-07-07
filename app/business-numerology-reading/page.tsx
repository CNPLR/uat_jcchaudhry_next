import React from 'react'
import BusinessNumerologyReading from './BusinessNumerologyReading'
import GenerateMetadata from '../components/MetaGenerator'
import { headers } from 'next/headers'

export const metadata = GenerateMetadata({
    banner: "/allbanners/Numerology-readings-for-new-borns-by-Dr-J-C-Chaudhry.webp",
    title: "Lucky Business Name Numerology | Best Name for Business",
    description: "Find the perfect business name with expert numerology. Get a lucky, powerful company name aligned with your date of birth for success and growth.",
    keywords: "Business name numerology, company name numerology, brand name numerology, lucky name for business, lucky business by date of birth, business name suitability with date of birth, numerology for business success, numerology business name",
    pagePath: "/business-numerology-reading",
})
const page =async () => {
  return (
   <BusinessNumerologyReading/>
  )
}

export default page