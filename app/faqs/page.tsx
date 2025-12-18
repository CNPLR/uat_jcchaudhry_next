import GenerateMetadata from '../components/MetaGenerator'
import { headers } from 'next/headers';
import Faqs from './Faqs';

export const metadata = GenerateMetadata({
    banner: "/allbanners/FAQs-page-banner-image.webp",
        title: "Numerology FAQs | Question &amp; Answer | Dr Dr. J C Chaudhry",
        description: "Have queries in mind? Get answer to your numerology questions, lo shu grid, vastu gemstone query, etc. in our frequently asked question section.",
        keywords: "numerologist in india, numerology by jc chaudhry, vaastu shastra expert, motivational speaker, motivational speakers in india",
    headers: headers
});

 const page = () => {
  return (
    <Faqs />
  )
}

export default page
