import React from 'react'
import GenerateMetadata from '../components/MetaGenerator'
import { headers } from 'next/headers'
import { NumerologyHouseCalculator } from './NumerologyHouseCalculator'
export const metadata = GenerateMetadata({
    banner: "/allbanners/Numerology-house-calculator.webp",
    title: "House Number Calculator: Find Your Lucky House Number",
    description: "Calculate your lucky house number using numerology. Discover house number meanings, characteristics and how your home aligns with your goals.",
    keywords: "Free numerology calculator, name numerology calculator, numerology number calculator, destiny  number calculator, how to calculate numerology, indian numerology calculator, chaldean numerology  calculator, numerology calculator date of birth",
    pagePath: "/numerology-house-calculator",
})
const page = () => {
  return (
    <NumerologyHouseCalculator />
  )
}

export default page