import { headers } from "next/headers";
import GenerateMetadata from "../components/MetaGenerator";
import Numerology from "./Numerology";

export const metadata = GenerateMetadata({
    banner: "/allbanners/Comprehensive-numerology-services-by-Dr-J-C-Chaudhry-Book-Now.webp",
        title: "Best Numerology Consultation in India | Dr. JC Chaudhry",
        description: "Consult Dr. JC Chaudhry for expert numerology solutions including name numerology, career, business, marriage, relationships and Lo Shu Grid.",
        keywords: "name numerology, numerologist, numerology number, numerology reading, numerology, numerology for name, numerology numbers, numerology services, name numerology, best numerologist, number 1 numerologist in india, top numerologist in india",
    pagePath: "/numerology",
})
const page = () => {

   return (<Numerology  />)
}

export default page