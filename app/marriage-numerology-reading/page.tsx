import React from 'react'
import MarriageNumerologyReading from './MarriageNumerologyReading'
import GenerateMetadata from '../components/MetaGenerator'
import { headers } from 'next/headers'

export const metadata = GenerateMetadata({
    banner: "/allbanners/Marriage-numerology-reading-by-Dr-J-C-Chaudhry.webp",
    title: "Marriage Numerology | Compatibility by Date of Birth & Name",
    description: "Find your ideal life partner with numerology. Check compatibility, marriage timing, and avoid mismatched relationships for long-term happiness.",
    keywords: "date of birth matching for marriage, marriage compatibility, marriage numerology reading, marriage compatibility numerology, marriage compatibility by date of birth, birth date compatibility for marriage, date match for marriage, how to know about marriag",
    pagePath: "/marriage-numerology-reading",
})
const page = () => {
  return (
    <MarriageNumerologyReading />
  )
}

export default page