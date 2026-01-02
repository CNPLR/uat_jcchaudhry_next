
import GenerateMetadata from '../components/MetaGenerator'
import GroupConsultation from './GroupConsultation';

export const metadata = GenerateMetadata({
        pagePath: "/numerology-consultation",
        banner: "/allbanners/Join-our-Numerology-Group-Consultation-for-personalized-insights-and-guidance.webp",
        title: "Numerology Group Consultation for Couples, Organizations | Dr. J C Chaudhry",
        description: "Book a Numerology consultation session for a group of people. Group consultation is available only on demand by corporates, universities, or any organization.",
        keywords: "numerology consultation, numerology for couples, numerology session, read numerology by Dr. J C Chaudhry, jc Chaudhry numerology session, numerology for corporates, numerology for university, numerology for organization"
    
});

export default function page() {
   return <GroupConsultation />
}
