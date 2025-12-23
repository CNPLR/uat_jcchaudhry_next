
import { headers } from 'next/headers'
import GenerateMetadata from '../components/MetaGenerator'
import Client from './Client'

export const metadata = GenerateMetadata({
    pagePath: "/blogs",
    banner: "/allbanners/Numerology-Name-Number-Science-Explained-Motivation-Positive-Thinking-Blog.webp",
    title: "Numerology Name Number Science Explained | Motivation & Positive Thinking Blog",
    description: "Blog by Dr. J C Chaudhry, sharing Numerology tips for marriage compatibility, new born baby name predictions, business name and investment suggestions. Motivation for life, success, education and career.",
    keywords: "numerology blog, positive thinking blogs, numerology blogs, numerology articles, motivation blog, motivational articles, numerology help, numerology learning, motivational tip, motivation blog for students, motivation blog for business",
    // headers: headers,
})

const page = () => {
  return (
    <Client />
  )
}

export default page