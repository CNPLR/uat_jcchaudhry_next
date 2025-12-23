import React from 'react'
import CareerNumerologyReading from './CareerNumerologyReading'
import GenerateMetadata from '../components/MetaGenerator'
import { headers } from 'next/headers'

export const metadata = GenerateMetadata({
    banner: "/allbanners/Career-numerology-reading-services-by-Dr-J-C-Chaudhry.webp",
    title: "Career Prediction by Date of Birth: Career Numerology",
    description: "Career Numerology:  Career prediction by Date of Birth for your life path number 1 to 9. Get your detailed numerology reading to know the right career path.",
    keywords: "Career numerology reading, numerology for career, numerology for job, which career to choose numerology, career selection by numerology, career by life path number, best career for number 1 2 3 4 5 6 7 8 9",
    pagePath: "/career-numerology-reading",
})
const page = () => {
  return (
    <CareerNumerologyReading />
  )
}

export default page