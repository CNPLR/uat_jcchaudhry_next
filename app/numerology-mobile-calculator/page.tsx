import React from 'react'
import NumerologyMobileCalculator from './NumerologyMobileCalculator'
import GenerateMetadata from '../components/MetaGenerator'
import { headers } from 'next/headers'

export const metadata = GenerateMetadata({
    banner: "/allbanners/Mobile-numerology-calculator.webp",
        title: "Discover Your Mobile Number&#39;s Significance with free calculator.",
        description: "Find out what your mobile number reveals about you with our Mobile Number Calculator. Discover your single-digit mobile number &amp; see what it means for you!",
        keywords: "Free numerology calculator, name numerology calculator, numerology number calculator, destiny  number calculator, how to calculate numerology, indian numerology calculator, chaldean numerology  calculator, numerology calculator date of birth",
    pagePath: "/numerology-mobile-calculator",
})
const page = () => {
  return (
    <NumerologyMobileCalculator />
  )
}

export default page