import GenerateMetadata from "./components/MetaGenerator"
import HomePage from "./HomePage";

export const metadata = GenerateMetadata({
        banner: "/images_folder/numerology-calculator.jpg",
        title: "Dr. J C Chaudhry Numerology Expert Delhi, Mumbai India",
        description: "Dr. J C Chaudhry a top Numerologist and Vastu Expert in Delhi India with 39+ years of experience. Book Appointment for personal, business or career numerology (अंकज्योतिष) consultation.",
        keywords: "Numerologist, Numerology, JC chaudhry, top numerologist, JC chaudhry numerology, jc chaudhary numerologist, best numerologist in india, famous numerologist in india, top ten numerologist, numerologist india, numerologist in Delhi NCR,numerology prediction",
        pagePath: "/",
      }); 

const page = async () => {

    return (
       <HomePage />
    )
}

export default page