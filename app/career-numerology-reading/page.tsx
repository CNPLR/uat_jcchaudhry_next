import React from 'react'
import CareerNumerologyReading from './CareerNumerologyReading'
import GenerateMetadata from '../components/MetaGenerator'
import { headers } from 'next/headers'

export const metadata = GenerateMetadata({
    banner: "/allbanners/Career-numerology-reading-services-by-Dr-J-C-Chaudhry.webp",
    title: "Career Numerology Reading | Dr. J C Chaudhry",
    description: "Find the best career using numerology. Get accurate career prediction by date of birth and choose the right path for success, growth, and stability.",
    keywords: "Career numerology reading, numerology for career, numerology for job, which career to choose numerology, career selection by numerology, career by life path number, best career for number 1 2 3 4 5 6 7 8 9",
    pagePath: "/career-numerology-reading",
})
const page = () => {
  return (
    <CareerNumerologyReading />
  )
}

export default page