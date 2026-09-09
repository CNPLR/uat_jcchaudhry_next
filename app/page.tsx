import GenerateMetadata from "./components/MetaGenerator"
import HomePage from "./HomePage";

export const metadata = GenerateMetadata({
        banner: "/images_folder/numerology-calculator.jpg",
        title: "Best Numerologist in India | Dr. JC Chaudhry",
        description: "Consult Dr. JC Chaudhry for Name, Business, Career, Marriage, Mobile Number Numerology, Lo Shu Grid and Vastu guidance. Book online today.",
        keywords: "Numerologist, Numerology, JC chaudhry, top numerologist, JC chaudhry numerology, jc chaudhary numerologist, best numerologist in india, famous numerologist in india, top ten numerologist, numerologist india, numerologist in Delhi NCR,numerology prediction",
        pagePath: "/",
      }); 

const page = async () => {

    return (
       <HomePage />
    )
}

export default page