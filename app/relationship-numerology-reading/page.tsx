import React from 'react'
import RelationshipNumerologyReading from './RelationshipNumerologyReading'
import GenerateMetadata from '../components/MetaGenerator'
import { headers } from 'next/headers';

export const metadata = GenerateMetadata({
    banner: "/allbanners/Relationship-numerology-consultation-with-Dr-J-C-Chaudhry.webp",
    title: "Relationship, Love Compatibility Numerology | Life Path Number Compatibility",
    description: "Get your relationship compatibility checked with your love partner, child parent numerology compatibility, life path number relationship compatibility, friendship &amp; couples’ compatibility for numbers 1, 2, 3, 4, 5, 6, 7, 8, 9 by Dr. J C Chaudhry",
    keywords: "Relationship compatibility numerology, love numerology reading, love partner compatibility, compatibility with children, relationship compatibility with children, compatibility of life path number for relationship",
    pagePath: "/relationship-numerology-reading",
});

const page = () => {
  return (
    <RelationshipNumerologyReading />
  )
}

export default page