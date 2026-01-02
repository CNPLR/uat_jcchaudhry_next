import GenerateMetadata from '../../components/MetaGenerator'
import MotivationalSeminaar from './MotivationalSeminaar'

export const metadata = GenerateMetadata({
        pagePath: "/business-numerology-audit",
        banner: "/allbanners/Motivational-Videos-and-Seminars-for-students-entrepreneurs.webp",
        title: "Motivational Videos | Seminars for students &amp; entrepreneurs",
        description: "Learn and grow through motivational seminars and videos by Dr. J C Chaudhry. His motivational videos talks about leadership tips, success mantras for students.",
        keywords: "numerologist in india, numerology by jc chaudhry, vaastu shastra expert, motivational speaker, motivational speakers in india"
    
})
export default function page() {
  return (
    <MotivationalSeminaar />
  )
}
