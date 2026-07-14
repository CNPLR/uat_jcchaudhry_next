import React from 'react'
import RelationshipNumerologyReading from './RelationshipNumerologyReading'
import GenerateMetadata from '../components/MetaGenerator'
import { headers } from 'next/headers';

export const metadata = GenerateMetadata({
    banner: "/allbanners/Relationship-numerology-consultation-with-Dr-J-C-Chaudhry.webp",
    title: "Relationship Numerology Compatibility | Name & Life Path Match",
    description: "Check love and relationship compatibility using numerology. Analyze name and life path numbers to understand your partner match and relationship success.",
    keywords: "Relationship compatibility numerology, love numerology reading, love partner compatibility, compatibility with children, relationship compatibility with children, compatibility of life path number for relationship",
    pagePath: "/relationship-numerology-reading",
});

const page = () => {
  return (
    <RelationshipNumerologyReading />
  )
}

export default page