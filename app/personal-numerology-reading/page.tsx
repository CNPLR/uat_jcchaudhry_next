import React from 'react'
import PersonalNumerologyReading from './PersonalNumerologyReading'
import GenerateMetadata from '../components/MetaGenerator'
import { headers } from 'next/headers'

export const metadata = GenerateMetadata({
    banner: "/allbanners/Personal-numerology-reading-by-Dr-J-C-Chaudhry.webp",
    title: "Personal Numerology by Name, DOB | Dr. JC Chaudhry",
    description: "Get a personalized Personal Numerology Reading by name and date of birth. Discover your strengths, life path, personality, and future guidance.",
    keywords: "Numerology reading, personalized numerology report, numerology report for life, future numerology reading, personalized numerology report, numerology report by numerologist, numerology chart reading, name numerology compatibility test,",
    pagePath: "/personal-numerology-reading",
})
const page = () => {
  return (
    <PersonalNumerologyReading />
  )
}

export default page