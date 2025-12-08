import GenerateMetadata from '@/app/components/MetaGenerator'
import Banner from '@/app/components/ui/Banner'
import ImageContent from '@/app/components/ui/ImageContent'
import MainHeading from '@/app/components/ui/MainHeading'
import Para from '@/app/components/ui/Para'
import SubHeading from '@/app/components/ui/SubHeading'
import VastuListAndImg from '@/app/components/ui/VastuListAndImg'
import { headers } from 'next/headers'

export const metadata = GenerateMetadata({
    pagePath: "/about/experience",
    banner: "/allbanners/Dr-J-C-Chaudhry’s-extensive-numerology-experience.webp",
    title: "Teaching Experience | Experience as a Motivational Speaker | Dr. J C Chaudhry",
    description: "Dr. J C Chaudhry with more than 48 years of teaching experience has motivated lakhs of students as a teacher and motivational speaker. He is also experiencing numerology for the last 40 years and helping many people with his predictions.",
    keywords: "numerologist in india, numerology by jc chaudhry, vaastu shastra expert, motivational speaker, motivational speakers in india",
    headers: headers,
});

const page = () => {
  return (
    <div>
        <Banner alttag="Dr. J C Chaudhry’s extensive numerology experience" path="/allbanners/Dr-J-C-Chaudhrys-extensive-numerology-experience.webp" />

        <MainHeading style="text-center my-10" mainHeading="Experience" />

        <div className='lg:px-10 px-5'>
            <ImageContent
                alt="Dr. JC Chaudhry's Professional Experience"
                path="/images_folder/Dr.-JC-Chaudhry's-Professional-Experience.webp"
                para="Dr. Chaudhry strongly believes that for a country to progress, it is important for its people to be educated. Choosing to start his career as a teacher was not only because he was passionate about teaching but also because he wanted to make a difference in the lives of people through education."
                about="Dr. Chaudhry started his career as a teacher at Vaish College, one of the renowned and premier colleges in Bhiwani, Haryana. He taught there for a brief period of one year from 1972-1973. In 1973, he started teaching at Hansraj Model School, Punjabi Bagh, New Delhi. He also taught in Delhi Administration schools and was selected as a principal through UPSC. He contributed immensely towards school education and retired as a principal."
                subHeading="A Dedicated Teacher Who Touched & Inspired Many"
                style="bg-gray-100 rounded-md"
            />
            <ImageContent
                alt="Dr. J C Chaudhry's Career Milestones"
                path="/images_folder/Dr.-J-C-Chaudhry's-Career-Milestones.webp"
                para="Dr. J C Chaudhry has been instrumental in motivating lakhs of students and shaping their future careers. With an aim to infuse confidence in students, Dr. J C Chaudhry has been delivering motivational lectures through seminars and also through his YouTube channel."
                subHeading="The Dawn Of Aakash"
                style="bg-gray-100 rounded-md" about=''
            />
            <ImageContent
                alt="Dr. J C Chaudhry's Expertise in Numerology"
                path="/images_folder/Dr.-J-C-Chaudhry's-Expertise-in-Numerology.webp"
                para="His journey from a teacher to establishing AESL and the way he ushered innovation in the coaching industry making 'Aakash'- a standalone brand, is indeed praiseworthy and worth imitating."
                subHeading="Serving Mankind Through Aakash Healthcare"
                style="bg-gray-100 rounded-md" about={''}                />
            <ImageContent
                alt="Dr. J C Chaudhry's Career Highlights"
                path="/images_folder/Dr.-J-C-Chaudhry's-Career-Highlights.webp"
                para="For the last 40 years, Dr. Chaudhry has been practising Numerology and helping many people. His book ‘Advanced Numerology’ is an outcome of his years of experience in Numerology and is a must read for those who wish to know about the best time/period to plan their future in a better way. He also has a good knowledge of the Lo-Shu Grid. He has studied thousands of cases and provided possible solutions. From conducting numerological audit of corporate/companies, identifying best period/time for investment in business, giving suitable name to a brand/establishment/company, naming of a newly born child in harmony with date of birth so as to make his path in life smooth, progressive and more successful, to finding out compatibility between a boy and a girl for marriage or keeping a relationship healthy, Dr. Chaudhry has been helping people who seek his advice."
                subHeading="Shaping Destinies Through Numerology"
                style="bg-gray-100 rounded-md" about=''
            />
            <ImageContent
                alt="Dr. J C Chaudhry's Academic and Professional Journey"
                path="/images_folder/Dr.-J-C-Chaudhry's-Academic-and-Professional-Journey.webp"
                para="Dr. J C Chaudhry has been instrumental in motivating lakhs of students and shaping their future career. With an aim to infuse confidence in students, Dr. Chaudhry has been delivering motivational lectures through seminars and also through his YouTube channel. Through his motivational videos, he has been inspiring the masses and helping them see the world from a new perspective. In addition, he has been actively providing students with positive guidance and a sense of direction through his motivational seminars. This has not only boosted their spirit but also instilled in them the belief that they can achieve their goals. These seminars are conducted across the length and breadth of the country and are attended by both students and parents in large numbers. Even professionals have benefitted and gained an extra edge in their career after listening to his motivational speeches."
                subHeading="An Influential Motivational Speaker"
                style="bg-gray-100 rounded-md"about=''
            />
            <VastuListAndImg
                alt="Dr. Chaudhry's in-depth experience and expertise in numerology."
                path="/images_folder/Dr.-Chaudhry's-in-depth-experience-and-expertise-in-numerology.webp"
                content="Dr. Chaudhry is an eminent author and influencer. His publications include:"
                subHeading="An Eminent Author"
                style="bg-gray-100 rounded-md"
                para="Advanced Numerology"
                para1="Prractical Numerology"
                para2="ABC of Vastu Shastra"
                para3="Fundamentals Of Vastu"
                para4="Meditation & Subconscious Mind"
                para5="Chakras"
                para6="Mudra: Healthy Life at Your Fingertips"
                para7="Nature: The Best Cure"
                para8="I think: Poverty is no bar for Success"
                para9="Success A few Steps Away"
                para10="Rungs Of the Ladder"
                para11="You and Your Gems"
                nstyle="w-52"
            />
            <div className='my-5'>
                <Banner alttag="Dr. J.C. Chaudhry's Leadership and Achievements" path="/images_folder/Dr.-J.C.-Chaudhry's-Leadership-and-Achievements.webp" />
                <SubHeading style="text-center my-5" subHeading="An Ardent Philanthropist" />
                <Para para="Dr. Chaudhry is a philanthropist who has always believed in making a difference through his noble pursuits. He has set a number of precedents through his community building ventures such as Maa Vaishno Devi Dham and Aakash Healthcare. He has also significantly contributed to the overall cause of education and society at large. For the last 16 years, Dr. Chaudhry has been aiding 50 government school students every year so that they can accomplish their educational goals without financial constraints and benefit from quality education free of cost." />
                <Para style="my-5" para="Apart from that, Dr. Chaudhry has also made magnanimous contributions by donating to the ‘Army Central Welfare Fund’ during the Kargil War in 1999. He also announced ‘Free Coaching’ for the children of incredibly brave soldiers who sacrificed their lives while protecting the motherland during the Kargil War. In 2013, Dr. Chaudhry contributed altruistically towards the CM Relief Fund during the devastating floods and landslides that took place in Uttarakhand. In 2018, when severe floods affected Kerala, Dr. Chaudhry donated generously towards the CM Distress Relief Fund to aid people in distress." />
            </div>
        </div>
    </div>
  )
}

export default page