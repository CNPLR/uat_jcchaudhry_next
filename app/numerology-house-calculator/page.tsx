import React from 'react'
import GenerateMetadata from '../components/MetaGenerator'
import { headers } from 'next/headers'
import { NumerologyHouseCalculator } from './NumerologyHouseCalculator'
export const metadata = GenerateMetadata({
    banner: "/allbanners/Numerology-house-calculator.webp",
    title: "Reveal Your House Number&#39;s Significance with Our Free Calculator.",
    description: "Use our easy to use house number calculator to explore the numerological meaning of your house number. Discover its significance today!",
    keywords: "Free numerology calculator, name numerology calculator, numerology number calculator, destiny  number calculator, how to calculate numerology, indian numerology calculator, chaldean numerology  calculator, numerology calculator date of birth",
    headers: headers
})
const page = () => {
  return (
    <NumerologyHouseCalculator />
  )
}

export default page