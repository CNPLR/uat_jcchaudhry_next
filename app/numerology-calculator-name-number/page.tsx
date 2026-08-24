import React from 'react'
import NumerologyCalculatorNameNumber from './NumerologyCalculatorNameNumber'
import GenerateMetadata from '../components/MetaGenerator'
import { headers } from 'next/headers'

export const metadata = GenerateMetadata({
    banner: "/allbanners/Numerology-calculator-for-personalized-insights-and-guidance.webp",
    title: "Name Number Calculator: Chaldean Numerology, Name Insights",
    description: "Calculate your Name Number using Chaldean numerology. Discover your number's traits, personality, career insights and life guidance.",
    keywords: "Free numerology calculator, name numerology calculator, numerology number calculator, destiny  number calculator, how to calculate numerology, indian numerology calculator, chaldean numerology  calculator, numerology calculator date of birth",
    pagePath: "/numerology-calculator-name-number",
})
const page = () => {
  return (
    <NumerologyCalculatorNameNumber />
  )
}

export default page