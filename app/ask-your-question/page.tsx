import React from 'react'
import GenerateMetadata from '../components/MetaGenerator'
import { headers } from 'next/headers'
import AskQuestions from './AskQuestions'
import { apiFetch } from '@/lib/api'

export const metadata = GenerateMetadata({
  pagePath: "/ask-your-question",
    banner: "/allbanners/Ask-your-question-for-personalized-numerology-insights.webp",
    title: "Ask Your Question: Personalized Numerology Answer, Guidance",
    description: "Ask your numerology question and get a personalized answer. Check Name and Date of Birth compatibility and discover solutions to your concerns.",
    keywords: "Numerology advice, numerology consultation, numerology exert, numerology specialist, numerology  guidance, numerology report, numerology problems || numerologist in india, numerology by jc chaudhry, vaastu shastra expert, motivational speaker, motivational speakers in india",
    // headers: headers
})
const page = async () => {

    let path = process.env.NEXT_PUBLIC_URI;
    let res = await apiFetch<any>(`${path}ask`, { revalidate: 3600, tags: ["ask-question"] }); 

  return (
    <AskQuestions Questions={res}/>
  )
}

export default page