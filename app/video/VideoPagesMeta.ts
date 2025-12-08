const VideoMetaData : VideoPageMetaCollectionType= {

    numerology:{
        banner: "/allbanners/Learn-and-Grow-through-Numerology.webp",
        title: "Numerology Videos | Name Numerology | Life Path Numerology",
        description: "Watch numerology videos by Dr. J C Chaudhry to understand numbers better. Learn more about name numerology, marriage compatibility, your predictions, etc.",
        keywords: "numerologist in india, numerology by jc chaudhry, vaastu shastra expert, motivational speaker, motivational speakers in india",
        videoUrl: "getvideosbycategory/category/Numerology",
        alt: "Learn and Grow through Numerology",
        heading: "Numerology Videos by Dr. J C Chaudhry"
    },

    "motivational-podcasts":{
        banner: "/allbanners/Numerology-video-lessons-by-Dr-J-C-Chaudhry.webp",
        title: "Motivational Podcasts by Dr Dr. J C Chaudhry | Best Advice for Life",
        description: "Motivational videos by Dr. J C Chaudhry motivating students, entrepreneurs, and people about life and success. Podcasts for self-development.",
        keywords: "nnumerologist in india, numerology by jc chaudhry, vaastu shastra expert, motivational speaker, motivational speakers in india",
        videoUrl: "getvideosbycategory/category/Motivation",
        alt:"Numerology video lessons by Dr. J C Chaudhry",
        heading:"Motivational Videos by Dr. J C Chaudhry"
    },

    vastu:{
        banner: "/allbanners/Vastu-video-lessons-by-Dr-J-C-Chaudhry.webp",
        title: "Vastu Shastra Videos in Hindi | Learn Vastu Online | Free Vastu Tips, Remedies",
        description: "Learn Vastu Vidya and tips; best Vastu videos by Dr. J C Chaudhry to remove negativity from home, office, shop. Positivity in house by Vastu; special learning videos to do Vastu yourself.",
        keywords: "numerologist in india, numerology by jc chaudhry, vaastu shastra expert, motivational speaker, motivational speakers in india",
        videoUrl: "getvideosbycategory/category/Vastu",
        alt:"Vastu video lessons by Dr. J C Chaudhry",
        heading:"Vastu Videos by Dr. J C Chaudhry"
    },

    gemstones:{
        banner: "/allbanners/Gemstone-and-Their-benefits-videos-by-Dr-J-C-Chaudhry.webp",
        title: "Gemstones Recommendation | Gemstone Expert - Dr Dr. J C Chaudhry",
        description: "Find gemstones by month and date of birth lucky for you. Discover the gemstones types, name, benefits by gem expert Dr. J C Chaudhry.",
        keywords: "numerologist in india, numerology by jc chaudhry, vaastu shastra expert, motivational speaker, motivational speakers in india",
        videoUrl: "getvideosbycategory/category/Gemstones",
        alt:"Gemstone and Their benefits videos by Dr J C Chaudhry",
        heading:"Gemstone Videos by Dr. J C Chaudhry"
    },

    "lo-shu":{
        banner: "/allbanners/Identify-missing-numbers-and-remedies-for-balance.webp",
        title: "Lo Shu Grid | JC Chaudhry",
        description: "Lo Shu Grid",
        keywords: "numerologist in india, numerology by jc chaudhry, vaastu shastra expert, motivational speaker, motivational speakers in india",
        videoUrl: "getvideosbycategory/category/LoShu Grid",
        alt:"Identify missing numbers and remedies for balance",
        heading:"Lo Shu Grid Videos by Dr. J C Chaudhry"

    },

    "2024-numerology-predictions":{
        banner: "/allbanners/2024-Predictions-by-Dr-JC-Chaudhry.webp",
        title: "2024 Predictions | Numerology Predictions Video for Number 1, 2, 3, 4, 5, 6, 7, 8, 9",
        description: "Check your yearly numerology predictions for the year 2021. Numerology Videos by Dr. J C Chaudhry for 2024 predictions for the Psychic number 1, 2, 3, 4, 5, 6, 7, 8, 9.",
        keywords: "numerologist in india, numerology by jc chaudhry, vaastu shastra expert, motivational speaker, motivational speakers in india",
        videoUrl: "getvideosbycategory/category/Predictions",
        alt:"2024 Predictions by Dr. JC Chaudhry",
        heading:"2024 Predictions Videos by Dr. J C Chaudhry"

    }


};

interface VideoPageMetaCollectionType {
    [key: string]: VideoPagesMetaType
}

export default VideoMetaData;

interface VideoPagesMetaType {
    banner: string,
    title: string,
    description: string,
    keywords: string,
    videoUrl:string,
    heading:string,
    alt:string,

}