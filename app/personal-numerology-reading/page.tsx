import React from 'react'
import PersonalNumerologyReading from './PersonalNumerologyReading'
import GenerateMetadata from '../components/MetaGenerator'
import { headers } from 'next/headers'

export const metadata = GenerateMetadata({
    banner: "/allbanners/Personal-numerology-reading-by-Dr-J-C-Chaudhry.webp",
    title: "Numerology Chart Reading | Personalized Numerology Report by Name &amp; Date of Birth",
    description: "Get your numerology report by name and date of birth. Consult Dr. J C Chaudhry Numerologist for your future numerology reading chart.",
    keywords: "Numerology reading, personalized numerology report, numerology report for life, future numerology reading, personalized numerology report, numerology report by numerologist, numerology chart reading, name numerology compatibility test,",
    // headers: headers
})
const page = () => {
  return (
    <PersonalNumerologyReading />
  )
}

export default page