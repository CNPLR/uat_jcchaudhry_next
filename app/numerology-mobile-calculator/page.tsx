import React from 'react'
import NumerologyMobileCalculator from './NumerologyMobileCalculator'
import GenerateMetadata from '../components/MetaGenerator'
import { headers } from 'next/headers'

export const metadata = GenerateMetadata({
    banner: "/allbanners/Mobile-numerology-calculator.webp",
        title: "Mobile Number calculator : Check Your Lucky Number, Meaning",
        description: "Calculate your mobile number using numerology. Enter your name, Date of Birth and mobile number to discover its single-digit meaning and traits.",
        keywords: "Free numerology calculator, name numerology calculator, numerology number calculator, destiny  number calculator, how to calculate numerology, indian numerology calculator, chaldean numerology  calculator, numerology calculator date of birth",
    pagePath: "/numerology-mobile-calculator",
})
const page = () => {
  return (
    <NumerologyMobileCalculator />
  )
}

export default page