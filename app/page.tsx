import { headers } from "next/headers";
import GenerateMetadata from "./components/MetaGenerator"
import HomePage from "./HomePage";
import { apiFetch } from "@/lib/api";
import BlogPost from "./types/blog";

export const metadata = GenerateMetadata({
        banner: "/images_folder/numerology-calculator.jpg",
        title: "Dr. J C Chaudhry Numerology Expert Delhi, Mumbai India",
        description: "Dr. J C Chaudhry a top Numerologist and Vastu Expert in Delhi India with 39+ years of experience. Book Appointment for personal, business or career numerology (अंकज्योतिष) consultation.",
        keywords: "Numerologist, Numerology, JC chaudhry, top numerologist, JC chaudhry numerology, jc chaudhary numerologist, best numerologist in india, famous numerologist in india, top ten numerologist, numerologist india, numerologist in Delhi NCR,numerology prediction",
        pagePath: "/",
      }); 

const page = async () => {
     let path = process.env.NEXT_PUBLIC_URI

     let isMounted = false;
    const [videosData, cnplData, postsData] = await Promise.all([
        apiFetch(`${path}getvideosbycategory/category/HomePage`, {
            revalidate: 3600,
            tags: ["home-videos"],
        }),
        apiFetch(`${path}getvideosbycategory/category/CNPL`, {
            revalidate: 3600,
            tags: ["cnpl-videos"],
        }),
        apiFetch<BlogPost>(`${path}blog/`, {
            revalidate: 1800,
            tags: ["blogs"],
        }),
    ]);

    return (
       <HomePage videoData={videosData} cnplData={cnplData} postsData={postsData} isMounted={isMounted} />
    )
}

export default page