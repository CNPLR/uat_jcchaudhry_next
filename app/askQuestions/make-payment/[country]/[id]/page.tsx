import GenerateMetadata from "@/app/components/MetaGenerator"
import MakeAskPayment from "./MakeAskPayment"
import { redirect } from "next/navigation";
import AuthGuard from "@/app/components/AuthGuard";

export const metadata = GenerateMetadata({
    pagePath: "/askQuestions/make-payment",
    banner: "/images_folder/jclogo.png",
        title: "Numerologist &amp; Motivational Speaker | JC Chaudhry",
        description: "With more than 34 years of experience, JC Chaudhry is one of the top Numerologist and Motivational speaker in India. Explore the website for Vaastu tips, Numerology videos, Motivational speeches and more.",
        keywords: "numerologist in india, numerology by jc chaudhry, vaastu shastra expert, motivational speaker, motivational speakers in india",
    // headers: headers
});


const page = async ({ params }: { params: { country: string, id: string } }) => {
      const { country, id } = await params;
      
  return (
    // <AuthGuard>
      <MakeAskPayment country={country} id={id}/>
    // </AuthGuard>
  )
}

export default page