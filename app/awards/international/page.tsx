import GenerateMetadata from "@/app/components/MetaGenerator";
import Banner from "@/app/components/ui/Banner"
import CommonFlipCard from "@/app/components/ui/CommonFlipCard"
import ImgHeadingContent from "@/app/components/ui/ImgHeadingContent"
import { headers } from "next/headers";

export const metadata = GenerateMetadata({
        pagePath: "/awards/international",
        banner: "/allbanners/National-awards-and-recognition-for-Dr-J-C-Chaudhry.webp",
        title: "Static National Awards Page | JC Chaudhry",
        description: "National Awards",
        keywords: "numerologist in india, numerology by jc chaudhry, vaastu shastra expert, motivational speaker, motivational speakers in india",
        headers: headers,
});

const page = async () => {
  return (
     <div>
            <div>
                <Banner alttag="Motivational speaker Dr. J C Chaudhry" path="/allbanners/Dr-J-C-Chaudhrys-international-awards-and-achievements.webp" />
            </div>
            <div className='px-10'>
                <ImgHeadingContent
                    path="/images_folder/Introduction-to-Dr.-J.C.-Chaudhry's-achievements.png"
                    alt="Introduction to Dr. J.C. Chaudhry's achievements"
                    para="Dr. J C Chaudhry is a living legend and the man behind India’s leading test preparatory institute. He is the Founder of Aakash Educational Services Limited (AESL). He is also the Founder & Chairman of “Aakash Healthcare Pvt. Ltd”, which is a 230-bed super specialty hospital."
                    para1="Dr. Chaudhry is also a well-known numerologist with an experience of more than 40 years. His book ‘Advanced Numerology’ is an outcome of his years of experience in Numerology and is a must-read for those who wish to know about the best time/period to plan their future in a better way."
                    sbutton="Read More"
                    subHeading="Dr. J C Chaudhry"
                />
                <CommonFlipCard
                    year="2023"
                    subHeading="Iconic Numerologist of the Year"
                    para="Dr. J C Chaudhry honoured with the title of Iconic Numerologist of the year 2022-2023 by AsiaOne in Bangkok, Thailand."
                    path="/images_folder/Global-recognition-of-Dr.-Chaudhry's-expertise.jpg"
                    path1="/images_folder/Global-recognition-of-Dr.-Chaudhry's-expertise.jpg"
                    alt="Global recognition of Dr. Chaudhry's expertise"
                    alt1="Global recognition of Dr. Chaudhry's expertise"
                />
                <CommonFlipCard
                    year="2019"
                    subHeading="Global Gandhi Award"
                    para="Global Gandhi Award 2019 was conferred for ‘Revolutionizing India with a different league towards Education’ by Khaddargram International Pvt. Ltd. on 7th October, 2019 at The Parliament of United Kingdom, Palace of Westminster, London"
                    path="/images_folder/Global-Gandhi-Award-received-by-Dr.-Chaudhry.png"
                    path1="/images_folder/Global-Gandhi-Award-received-by-Dr.-Chaudhry.png"
                    alt="Global Gandhi Award received by Dr. Chaudhry"
                    alt1="Global Gandhi Award received by Dr. Chaudhry"
                />
                <CommonFlipCard
                    year="2019"
                    subHeading="Key Note Speaker on Role of Numerology"
                    para="Felicitated as Key Note Speaker on ‘Role of Numerology in Business Growth and Personal Life’ at the ‘Indo-European Investors Meet - 2018’ at St. James Court, Taj Hotel, London"
                    path="/images_folder/keynoteaward.png"
                    path1="/images_folder/Dr.-Chaudhry-as-a-key-note-speaker.png"
                    alt="Dr. Chaudhry as a key-note speaker"
                    alt1="Dr. Chaudhry as a key-note speaker"
                />
                <CommonFlipCard
                    year="2018"
                    subHeading="Global Education Leader Award India-UAE"
                    para="Honoured with Global Education Leaders Award for ‘Shaping the Dreams of Millions of Medical & Engineering Aspirants’ at India-UAE Partnership Summit (IUPS) 2018 held at Atlantis, The Palm, Dubai"
                    path="/images_folder/Award-for-excellence-presented-to-Dr.-Chaudhry..png"
                    path1="/images_folder/Award-for-excellence-presented-to-Dr.-Chaudhry..png"
                    alt="Award for excellence presented to Dr. Chaudhry."
                    alt1="Award for excellence presented to Dr. Chaudhry."
                />
                <CommonFlipCard
                    year="2018"
                    subHeading="Appreciation Award IEBF 2018"
                    para="Felicitated as Key Note Speaker at the ‘Indo-European Investors Meet 2018’ for addressing the esteemed gathering on ‘New Investment Opportunities available in India in Education Sector’ at Portcullis House of Parliament, London"
                    path="/images_folder/keynoteaward.png"
                    path1="/images_folder/Dr.-Chaudhry-as-a-key-note-speaker.png"
                    alt="Dr. Chaudhry as a key-note speaker"
                    alt1="Dr. Chaudhry as a key-note speaker"
                />
                <CommonFlipCard
                    year="2018"
                    subHeading="Global Asian of the Year Award"
                    para="Recognized as the Global Asian of the Year for Life Time Achievement by Asian Business & Social Forum, Singapore"
                    path="/images_folder/Global-Award-of-the-Year-presented-to-Dr.-J-C-Chaudhry.png"
                    path1="/images_folder/Global-Award-of-the-Year-presented-to-Dr.-J-C-Chaudhry.png"
                    alt="Global Award of the Year presented to Dr. J C Chaudhry"
                    alt1="Global Award of the Year presented to Dr. J C Chaudhry"
                />
                <CommonFlipCard
                    year="2018"
                    subHeading="IEBF Excellence Award 2018"
                    para="Presented with IEBF Excellence Award 2018 for ‘Transforming Lives through Education’ by Indo-European Business Forum (IEBF) during the Acceler8 Summit held in London"
                    path="/images_folder/Excellence-award-given-to-Dr.-J-C-Chaudhry.png"
                    path1="/images_folder/abdul-kalam-award.png"
                    alt="Excellence award given to Dr. J C Chaudhry"
                    alt1="abdul kalam award"
                />
                <CommonFlipCard
                    year="2017"
                    subHeading="Life Time Achievement Award"
                    para="Honoured with Life Time Achievement Award at India-UAE Business and Social Forum 2017"
                    path="/images_folder/Lifetime-achievement-award-for-Dr.-J-C-Chaudhry..png"
                    path1="/images_folder/Lifetime-achievement-award-for-Dr.-J-C-Chaudhry..png"
                    alt="Lifetime achievement award for Dr. J C Chaudhry."
                    alt1="Lifetime achievement award for Dr. J C Chaudhry."
                />
                <CommonFlipCard
                    year="2016"
                    para="Awarded the Person of the Year Award 2016-17, 2015-16 by Asia One at Abu Dhabi"
                    subHeading="Asia One Person of the Year Award"
                    path="/images_folder/Asian-recognition-of-Dr.-J-C-Chaudhry-in-2016.png"
                    path1="/images_folder/asia-one-poy-award.png"
                    alt="Asian recognition of Dr. J C Chaudhry in 2016"
                    alt1="asia one poy award"
                />
                <CommonFlipCard
                    year="2016"
                    subHeading="Asia One Lifetime Achievement Award"
                    para="Recognized as The World’s Greatest Leaders- India 2015-16 by Asia One at Abu Dhabi"
                    path="/images_folder/Asian-Lifetime-Achievement-Award-given-to-Dr.-J-C-Chaudhry.png"
                    path1="/images_folder/Asian-Lifetime-Achievement-Award-given-to-Dr.-J-C-Chaudhry.png"
                    alt="Asian Lifetime Achievement Award given to Dr. J C Chaudhry"
                    alt1="Asian Lifetime Achievement Award given to Dr. J C Chaudhry"
                />
            </div>
        </div>
  )
}

export default page