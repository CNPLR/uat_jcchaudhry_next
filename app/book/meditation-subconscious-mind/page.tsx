import React from 'react'
import MeditationSubconsciousMind from './MeditationSubconsciousMind'
import GenerateMetadata from '@/app/components/MetaGenerator'
import { headers } from 'next/headers';

export const metadata = GenerateMetadata({
    banner: "/allbanners/Meditation-and-subconscious-mind-book.webp",
    title: "Meditation & Subconscious Mind | Meditation Book | Dr Dr. J C Chaudhry",
    description: "Meditation and subconscious mind book is written by Dr. J C Chaudhry. The book explains meditation types, how to meditate, and explains power of subconscious mind.",
    keywords: "numerologist in india, numerology by jc chaudhry, vaastu shastra expert, motivational speaker, motivational speakers in india",
    headers: headers
});
const page = () => {
  return (
    <MeditationSubconsciousMind/>
  )
}

export default page