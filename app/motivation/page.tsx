import React from 'react'
import Motivation from './Motivation'
import GenerateMetadata from '../components/MetaGenerator'
import { headers } from 'next/headers'

export const metadata = GenerateMetadata({
    banner: "/allbanners/Motivational-speaker-Dr-J-C-Chaudhry.webp",
    title: "Success Motivation, Career Guidance | Dr. JC Chaudhry",
    description: "Discover motivational programs by Dr. JC Chaudhry designed to inspire students, professionals and business leaders to achieve success and personal growth.",
    keywords: "motivational speaker in delhi, motivational trainer, best motivational speaker in delhi, motivation india, motivational speech india, motivation speak, motivational speaker, best motivational speaker on youtube in india, best motivational in india",
    pagePath: "/motivation",
})
const page = () => {
  return (
    <Motivation/>
  )
}

export default page