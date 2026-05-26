import GenerateMetadata from "./components/MetaGenerator"
import HomePage from "./HomePage";

export const metadata = GenerateMetadata({
        banner: "/images_folder/numerology-calculator.jpg",
        title: "Dr. J C Chaudhry – Best Numerologist in India | 40+ Years Experience",
        description: "Dr. J C Chaudhry is a renowned numerologist and Vastu expert in India with 40+ years of experience. Get accurate numerology insights for career, business, and relationships with online consultation available worldwide.",
        keywords: "Numerologist, Numerology, JC chaudhry, top numerologist, JC chaudhry numerology, jc chaudhary numerologist, best numerologist in india, famous numerologist in india, top ten numerologist, numerologist india, numerologist in Delhi NCR,numerology prediction",
        pagePath: "/",
      }); 

const page = async () => {

    return (
       <HomePage />
    )
}

export default page