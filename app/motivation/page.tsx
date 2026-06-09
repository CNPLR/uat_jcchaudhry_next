import React from 'react'
import Motivation from './Motivation'
import GenerateMetadata from '../components/MetaGenerator'
import { headers } from 'next/headers'

export const metadata = GenerateMetadata({
    banner: "/allbanners/Motivational-speaker-Dr-J-C-Chaudhry.webp",
    title: "Motivational Speaker in India | Dr. J C Chaudhry",
    description: "Get daily motivation and success insights from Dr. J C Chaudhry, a leading motivational speaker in India. Explore powerful talks on mindset, confidence, and growth.",
    keywords: "motivational speaker in delhi, motivational trainer, best motivational speaker in delhi, motivation india, motivational speech india, motivation speak, motivational speaker, best motivational speaker on youtube in india, best motivational in india",
    pagePath: "/motivation",
})
const page = () => {
  return (
    <Motivation/>
  )
}

export default page