import React from 'react'
import PersonalNumerologyReading from './PersonalNumerologyReading'
import GenerateMetadata from '../components/MetaGenerator'
import { headers } from 'next/headers'

export const metadata = GenerateMetadata({
    banner: "/allbanners/Personal-numerology-reading-by-Dr-J-C-Chaudhry.webp",
    title: "Personal Numerology Reading | Name & Date of Birth Report",
    description: "Get your personal numerology reading by name and date of birth. Know life path, personality, and future insights for better decisions and growth.",
    keywords: "Numerology reading, personalized numerology report, numerology report for life, future numerology reading, personalized numerology report, numerology report by numerologist, numerology chart reading, name numerology compatibility test,",
    pagePath: "/personal-numerology-reading",
})
const page = () => {
  return (
    <PersonalNumerologyReading />
  )
}

export default page