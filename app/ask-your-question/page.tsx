import React from 'react'
import GenerateMetadata from '../components/MetaGenerator'
import { headers } from 'next/headers'
import AskQuestions from './AskQuestions'
import { apiFetch } from '@/lib/api'

export const metadata = GenerateMetadata({
  pagePath: "/ask-your-question",
    banner: "/allbanners/Ask-your-question-for-personalized-numerology-insights.webp",
    title: "Numerology – Ask any Question from Numerologist Dr. J C Chaudhry || Ask your Question | Dr. J C Chaudhry Numerologist",
    description: "Ask your Question for any of your problems of marriage, career, business, house, children, divorce, court case from famous Numerologist Dr. J C Chaudhry. Numerology Questions answered here. || sk personal numerology questions related to your name &amp; date of birth compatibility, your lucky numbers and dates in life, best years in life, gemstones for you.",
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