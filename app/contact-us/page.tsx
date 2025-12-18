import React from 'react'
import GenerateMetadata from '../components/MetaGenerator'
import { headers } from 'next/headers';
import Contact from './Contact';

export const metadata = GenerateMetadata({
     banner: "/allbanners/Contact-Dr-J-C-Chaudhry-for-numerology.png",
        title: "Chaudhry Nummero Pvt. Ltd. | Dr. J C Chaudhry | Contact Address",
        description: "Chaudhry Nummero Pvt. Ltd. founded by Dr. J C Chaudhry, Chairman and Managing Director of Aakash Educational Services Ltd. (AESL). Contact Information Chaudhry Nummero Pvt. Ltd.",
        keywords: "numerologist in india, numerology by jc chaudhry, vaastu shastra expert, motivational speaker, motivational speakers in india",
    headers: headers
});
const page = () => {
  return (
    <Contact />
  )
}

export default page