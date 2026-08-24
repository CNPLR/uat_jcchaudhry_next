import React from 'react'
import NumerologyCalculator from './NumerologyCalculator'
import GenerateMetadata from '../components/MetaGenerator'
import { headers } from 'next/headers';

export const metadata = GenerateMetadata({
    banner: "/allbanners/General-numerology-calculator.webp",
    title: "Numerology Calculator: Psychic, Destiny, Name Number Guide",
    description: "Use the free Numerology Calculator to find your Psychic, Destiny and Name Numbers using your full name and date of birth for life insights.",
    keywords: "Free numerology calculator, name numerology calculator, numerology number calculator, destiny  number calculator, how to calculate numerology, indian numerology calculator, chaldean numerology  calculator, numerology calculator date of birth",
    pagePath: "/numerology-calculator",
});
const page = () => {
  return (
   <NumerologyCalculator/>
  )
}

export default page