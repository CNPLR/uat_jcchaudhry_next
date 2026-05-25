import { headers } from "next/headers";
import GenerateMetadata from "../components/MetaGenerator";
import Numerology from "./Numerology";

export const metadata = GenerateMetadata({
    banner: "/allbanners/Comprehensive-numerology-services-by-Dr-J-C-Chaudhry-Book-Now.webp",
        title: "Online Numerology Consultation | Dr. J C Chaudhry India",
        description: "Consult Dr. J C Chaudhry for accurate online numerology readings. Get personalised insights on career, marriage compatibility, business success, and name numerology based on your date of birth.",
        keywords: "name numerology, numerologist, numerology number, numerology reading, numerology, numerology for name, numerology numbers, numerology services, name numerology, best numerologist, number 1 numerologist in india, top numerologist in india",
    pagePath: "/numerology",
})
const page = () => {

   return (<Numerology  />)
}

export default page