import React from 'react'
import RelationshipNumerologyReading from './RelationshipNumerologyReading'
import GenerateMetadata from '../components/MetaGenerator'
import { headers } from 'next/headers';

export const metadata = GenerateMetadata({
    banner: "/allbanners/Relationship-numerology-consultation-with-Dr-J-C-Chaudhry.webp",
    title: "Relationship Compatibility Numerology | Dr. JC Chaudhry",
    description: "Check your relationship compatibility with numerology using your name and date of birth. Get accurate insights from Dr. J C Chaudhry.",
    keywords: "Relationship compatibility numerology, love numerology reading, love partner compatibility, compatibility with children, relationship compatibility with children, compatibility of life path number for relationship",
    pagePath: "/relationship-numerology-reading",
});

const page = () => {
  return (
    <RelationshipNumerologyReading />
  )
}

export default page