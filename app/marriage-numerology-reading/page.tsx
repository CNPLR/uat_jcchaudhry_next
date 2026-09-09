import React from 'react'
import MarriageNumerologyReading from './MarriageNumerologyReading'
import GenerateMetadata from '../components/MetaGenerator'
import { headers } from 'next/headers'

export const metadata = GenerateMetadata({
    banner: "/allbanners/Marriage-numerology-reading-by-Dr-J-C-Chaudhry.webp",
    title: "Marriage Numerology by Name, DOB | Dr. JC Chaudhry",
    description: "Check your marriage compatibility with numerology based on your name and date of birth. Get accurate insights from Dr. J C Chaudhry.",
    keywords: "date of birth matching for marriage, marriage compatibility, marriage numerology reading, marriage compatibility numerology, marriage compatibility by date of birth, birth date compatibility for marriage, date match for marriage, how to know about marriag",
    pagePath: "/marriage-numerology-reading",
})
const page = () => {
  return (
    <MarriageNumerologyReading />
  )
}

export default page