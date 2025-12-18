import React from 'react'
import NewBornNumerologyReading from './NewBornNumerologyReading'
import GenerateMetadata from '../components/MetaGenerator'
import { headers } from 'next/headers'

export const metadata = GenerateMetadata({
    banner: "/allbanners/Baby-Name-Numerology-Baby-Names-Starting-with-any-Alphabet-Numerology.webp",
    title: "Baby Name Numerology | Baby Names Starting with any Alphabet Numerology",
    description: "Find the best compatible baby name as per numerology. Girl and boys baby name numerology compatibility check by Dr. J C Chaudhry Numerologist based on name and date of birth and numerology name starting with any alphabet.",
    keywords: "Numerology for baby name, new born numerology reading, lucky name for new born numerology, baby boy name numerology, baby girl name numerology, name by numerology, lucky name as per date of birth",
    headers: headers
})

const page = () => {
  return (
   <NewBornNumerologyReading  />
  )
}

export default page