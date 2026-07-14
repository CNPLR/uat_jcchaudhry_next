import React from 'react'
import NewBornNumerologyReading from './NewBornNumerologyReading'
import GenerateMetadata from '../components/MetaGenerator'
import { headers } from 'next/headers'

export const metadata = GenerateMetadata({
    banner: "/allbanners/Baby-Name-Numerology-Baby-Names-Starting-with-any-Alphabet-Numerology.webp",
    title: "Baby Name Numerology | Find Lucky Names for Your Newborn",
    description: "Find the perfect baby name with numerology. Get lucky, compatible name suggestions for your newborn based on date of birth and numerology principles.",
    keywords: "Numerology for baby name, new born numerology reading, lucky name for new born numerology, baby boy name numerology, baby girl name numerology, name by numerology, lucky name as per date of birth",
    pagePath: "/new-born-numerology-reading",
})

const page = () => {
  return (
   <NewBornNumerologyReading  />
  )
}

export default page