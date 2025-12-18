import React from 'react'
import MarriageNumerologyReading from './MarriageNumerologyReading'
import GenerateMetadata from '../components/MetaGenerator'
import { headers } from 'next/headers'

export const metadata = GenerateMetadata({
    banner: "/allbanners/Marriage-numerology-reading-by-Dr-J-C-Chaudhry.webp",
    title: "Marriage Compatibility Test by Name &amp; Date of Birth | Marriage Numerology",
    description: "Get your marriage compatibility checked by Dr. J C Chaudhry, 40 years’ experienced numerologist. Birthday compatibility for marriage and boy &amp; girl compatibility check by name for a happy married life.",
    keywords: "date of birth matching for marriage, marriage compatibility, marriage numerology reading, marriage compatibility numerology, marriage compatibility by date of birth, birth date compatibility for marriage, date match for marriage, how to know about marriag",
    headers: headers
})
const page = () => {
  return (
    <MarriageNumerologyReading />
  )
}

export default page