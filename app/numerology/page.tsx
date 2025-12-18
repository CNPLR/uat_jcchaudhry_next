import { headers } from "next/headers";
import GenerateMetadata from "../components/MetaGenerator";
import Numerology from "./Numerology";

export const metadata = GenerateMetadata({
    banner: "/allbanners/Comprehensive-numerology-services-by-Dr-J-C-Chaudhry-Book-Now.webp",
        title: "Name Numerology, Number Numerology Reading | Numerology by Date of Birth | Dr. J C Chaudhry",
        description: "Know about your Numerology Number and Compatibility with marriage, business partner. Future prediction by name and date of birth, new born baby name numerology calculation and more. Check out the numerology videos by Dr. J C Chaudhry.",
        keywords: "name numerology, numerologist, numerology number, numerology reading, numerology, numerology for name, numerology numbers, numerology services, name numerology, best numerologist, number 1 numerologist in india, top numerologist in india",
    headers: headers
})
const page = () => {

   return (<Numerology  />)
}

export default page