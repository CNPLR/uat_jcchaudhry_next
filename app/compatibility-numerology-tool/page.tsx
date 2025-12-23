import { headers } from "next/headers"
import GenerateMetadata from "../components/MetaGenerator"
import CompatibilityNumerologyTool from "./CompatibilityNumerologyTool"

export const metadata = GenerateMetadata({
    banner: "/allbanners/Relationship-Compatibility-numerology-tool.webp",
    title: "Assess Your Partner Compatibility with Numerology Insights",
    description: "Find out how compatible you are with your partner using our free Numerology Compatibility Calculator. Get insights into your relationship!",
    keywords: "Free numerology calculator, name numerology calculator, numerology number calculator, destiny  number calculator, how to calculate numerology, indian numerology calculator, chaldean numerology  calculator, numerology calculator date of birth",
    pagePath: "/compatibility-numerology-tool",
})
const page = () => {
  return (
    <CompatibilityNumerologyTool />
  )
}

export default page