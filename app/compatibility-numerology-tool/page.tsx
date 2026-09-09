import { headers } from "next/headers"
import GenerateMetadata from "../components/MetaGenerator"
import CompatibilityNumerologyTool from "./CompatibilityNumerologyTool"

export const metadata = GenerateMetadata({
    banner: "/allbanners/Relationship-Compatibility-numerology-tool.webp",
    title: "Relationship Compatibility Calculator: Check Love Compatibility",
    description: "Check relationship compatibility using names and Dates of Birth. Discover your compatibility, relationship strengths, challenges and insights.",
    keywords: "Free numerology calculator, name numerology calculator, numerology number calculator, destiny  number calculator, how to calculate numerology, indian numerology calculator, chaldean numerology  calculator, numerology calculator date of birth",
    pagePath: "/compatibility-numerology-tool",
})
const page = () => {
  return (
    <CompatibilityNumerologyTool />
  )
}

export default page