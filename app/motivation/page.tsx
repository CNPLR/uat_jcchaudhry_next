import React from 'react'
import Motivation from './Motivation'
import GenerateMetadata from '../components/MetaGenerator'
import { headers } from 'next/headers'

export const metadata = GenerateMetadata({
    banner: "/allbanners/Motivational-speaker-Dr-J-C-Chaudhry.webp",
    title: "Motivational Speaker Delhi, India | Leadership and Positive Motivational Speaking | Dr. J C Chaudhry",
    description: "40 years’ experienced Motivational speaker, Dr. J C Chaudhry is one of the well-known spiritual and education motivational speakers. Check out his top motivational lectures on positive thinking, self-confidence &amp; career guidance.",
    keywords: "motivational speaker in delhi, motivational trainer, best motivational speaker in delhi, motivation india, motivational speech india, motivation speak, motivational speaker, best motivational speaker on youtube in india, best motivational in india",
    headers: headers
})
const page = () => {
  return (
    <Motivation/>
  )
}

export default page