
import GenerateMetadata from '../components/MetaGenerator';
import { headers } from 'next/headers';
import Dashboard from './Dashboard';
import AuthGuard from '../components/AuthGuard';

export const metadata = GenerateMetadata({
     banner: "/allbanners/Login-Page-of-website.jpg",
        title: "Numerologist & Motivational Speaker | JC Chaudhry",
        description: "With more than 34 years of experience, JC Chaudhry is one of the top Numerologist and Motivational speaker in India. Explore the website for Vaastu tips, Numerology videos, Motivational speeches and more.",
        keywords: "numerologist in india, numerology by jc chaudhry, vaastu shastra expert, motivational speaker, motivational speakers in india",
    pagePath: "/dashboard",
})
const page = () => {
   return (
   //  <AuthGuard>
       <Dashboard />
   // </AuthGuard>
)
}

export default page