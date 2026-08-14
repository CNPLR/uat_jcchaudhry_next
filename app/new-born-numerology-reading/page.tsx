import React from 'react'
import NewBornNumerologyReading from './NewBornNumerologyReading'
import GenerateMetadata from '../components/MetaGenerator'
import { headers } from 'next/headers'

export const metadata = GenerateMetadata({
    banner: "/allbanners/Baby-Name-Numerology-Baby-Names-Starting-with-any-Alphabet-Numerology.webp",
    title: "Lucky Baby Name by Numerology | Dr. JC Chaudhry",
    description: "Book a newborn baby name consultation with Dr. JC Chaudhry. Get numerology-based name suggestions aligned with your baby's birth details.",
    keywords: "Numerology for baby name, new born numerology reading, lucky name for new born numerology, baby boy name numerology, baby girl name numerology, name by numerology, lucky name as per date of birth",
    pagePath: "/new-born-numerology-reading",
})

const page = () => {
  return (
   <NewBornNumerologyReading  />
  )
}

export default page