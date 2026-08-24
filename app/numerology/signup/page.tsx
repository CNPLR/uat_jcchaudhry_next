import GenerateMetadata from '@/app/components/MetaGenerator'
import { headers } from 'next/headers';
import React from 'react'
import BookAppointment from './BookAppointment';
export const metadata = GenerateMetadata({
    banner: "/allbanners/Book-Appointment-Dr.J-C-Chaudhry-Numerology-Register.webp",
    title: "Numerology Appointment: Register for Consultation",
    description: "Register for a numerology consultation with Dr. JC Chaudhry. Choose personal, career, business, marriage or relationship numerology.",
    keywords: "numerologist in india, numerology by jc chaudhry, vaastu shastra expert, motivational speaker, motivational speakers in india",
    pagePath: "/numerology/signup",
});
const page = () => {
  return (
    <BookAppointment />
  )
}

export default page