import GenerateMetadata from '@/app/components/MetaGenerator'
import { headers } from 'next/headers';
import React from 'react'
import BookAppointment from './BookAppointment';
export const metadata = GenerateMetadata({
    banner: "/allbanners/Book-Appointment-Dr.J-C-Chaudhry-Numerology-Register.webp",
    title: "Book Appointment | Dr. J C Chaudhry Numerology | Register",
    description: "Register and book an appointment with Dr. J C Chaudhry for your numerology reading. Business, Marriage, Career, Name Numerology Services. Signup now!",
    keywords: "numerologist in india, numerology by jc chaudhry, vaastu shastra expert, motivational speaker, motivational speakers in india",
    headers: headers
});
const page = () => {
  return (
    <BookAppointment />
  )
}

export default page