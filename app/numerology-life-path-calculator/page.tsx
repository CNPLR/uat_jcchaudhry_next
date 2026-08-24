import GenerateMetadata from '../components/MetaGenerator'
import { headers } from 'next/headers'
import NumerologyLifePathCalculator from './NumerologyLifePathCalculator'

export const metadata = GenerateMetadata({
    banner: "/allbanners/life-path-numerology-calculator.webp",
    title: "Life Path Number Calculator: Meaning, Traits, Life Purpose",
    description: "Calculate your Life Path Number using your Date of Birth. Discover your personality traits, strengths, challenges, life purpose and direction.",
    keywords: "Free numerology calculator, name numerology calculator, numerology number calculator, destiny  number calculator, how to calculate numerology, indian numerology calculator, chaldean numerology  calculator, numerology calculator date of birth",
    pagePath: "/numerology-life-path-calculator",
})
const page = () => {
  return (
    <NumerologyLifePathCalculator />
  )
}

export default page