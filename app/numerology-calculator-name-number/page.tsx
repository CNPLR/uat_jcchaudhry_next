import React from 'react'
import NumerologyCalculatorNameNumber from './NumerologyCalculatorNameNumber'
import GenerateMetadata from '../components/MetaGenerator'
import { headers } from 'next/headers'

export const metadata = GenerateMetadata({
    banner: "/allbanners/Numerology-calculator-for-personalized-insights-and-guidance.webp",
    title: "Find your Name number with our free Name number calculator.",
    description: "Use our free Name Number Calculator to find out what your name means in numerology. Discover your unique name insights today!",
    keywords: "Free numerology calculator, name numerology calculator, numerology number calculator, destiny  number calculator, how to calculate numerology, indian numerology calculator, chaldean numerology  calculator, numerology calculator date of birth",
    // headers: headers
})
const page = () => {
  return (
    <NumerologyCalculatorNameNumber />
  )
}

export default page