import GenerateMetadata from '../components/MetaGenerator'
import { headers } from 'next/headers'
import NumerologyLifePathCalculator from './NumerologyLifePathCalculator'

export const metadata = GenerateMetadata({
    banner: "/allbanners/life-path-numerology-calculator.webp",
    title: "Unlock Your Life’s Purpose with Our Life Path Number Calculator",
    description: "Delve into your Life Path Number with our free easy to use calculator and uncover insights about your life’s purpose and journey!",
    keywords: "Free numerology calculator, name numerology calculator, numerology number calculator, destiny  number calculator, how to calculate numerology, indian numerology calculator, chaldean numerology  calculator, numerology calculator date of birth",
    pagePath: "/numerology-life-path-calculator",
})
const page = () => {
  return (
    <NumerologyLifePathCalculator />
  )
}

export default page