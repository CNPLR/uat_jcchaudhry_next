import React from 'react'
import NumerologyCalculator from './NumerologyCalculator'
import GenerateMetadata from '../components/MetaGenerator'
import { headers } from 'next/headers';

export const metadata = GenerateMetadata({
    banner: "/allbanners/General-numerology-calculator.webp",
    title: "Numerology Calculator – Calculate your Name Number, Destiny &amp; Psychic Number",
    description: "One of the best numerology calculators to find your name and date of birth numbers, life path number and check if your mobile number is friendly with your psychic number of not.",
    keywords: "Free numerology calculator, name numerology calculator, numerology number calculator, destiny  number calculator, how to calculate numerology, indian numerology calculator, chaldean numerology  calculator, numerology calculator date of birth",
    headers: headers
});
const page = () => {
  return (
   <NumerologyCalculator/>
  )
}

export default page