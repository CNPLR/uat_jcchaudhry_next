import GenerateMetadata from '@/app/components/MetaGenerator';
import Banner from '@/app/components/ui/Banner'
import CommonFlipCard from '@/app/components/ui/CommonFlipCard'
import ImgHeadingContent from '@/app/components/ui/ImgHeadingContent'
import { headers } from 'next/headers';

export const metadata = GenerateMetadata({
        pagePath: "/awards/national",
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
                <Banner alttag="National awards and recognition for Dr. J C Chaudhry" path="/allbanners/National-awards-and-recognition-for-Dr-J-C-Chaudhry.webp" />
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
                    subHeading="Doctorate Degree by the GLA University"
                    para="Dr. J C Chaudhry conferred with the Doctor of Science (Honoris Causa) degree by the prestigious GLA University at Mathura, UP, India 2023."
                    path="/images_folder/Celebrating-Dr.-Chaudhry’s-national-achievements.jpg"
                    alt="Celebrating Dr. Chaudhry’s national achievements"
                    alt1="Celebrating Dr. Chaudhry’s national achievements"
                    path1="/images_folder/Celebrating-Dr.-Chaudhry’s-national-achievements.jpg"
                />
                <CommonFlipCard
                    year="2022"
                    subHeading="Distinguished Alumnus Award"
                    para="Dr. J C Chaudhry felicitated with Distinguished Alumnus Award by the prestigious BITS Pilani University for his outstanding contributions to the entrepreneurship."
                    path="/images_folder/Awarded-for-excellence-by-BITS-Pilani.jpg"
                    path1="/images_folder/Awarded-for-excellence-by-BITS-Pilani.jpg"
                    alt="Awarded for excellence by BITS Pilani"
                    alt1="Awarded for excellence by BITS Pilani"
                />
                <CommonFlipCard
                    year="2022"
                    subHeading="Bhartiya Mahantam Vikas Puraskar"
                    para="Dr. J C Chaudhry felicitated with AsiaOne Bhartiya Mahantam Vikas Puraskar and greatest Leaders Award 2021-22 at 18th Edition of Asia-Africa Business & Social Forum on 25th August 2022"
                    path="/images_folder/Bhartiya-Award-received-by-Dr.-Chaudhry.jpg"
                    path1="/images_folder/Bhartiya-Award-received-by-Dr.-Chaudhry.jpg"
                    alt="Bhartiya Award received by Dr. Chaudhry"
                    alt1="Bhartiya Award received by Dr. Chaudhry"
                />
                <CommonFlipCard
                    year="2022"
                    subHeading="Doctorate Degree by the Mewar University in Rajasthan"
                    para="Dr. J C Chaudhry conferred with the Doctor of Philosophy (Honoris Causa) degree at the sixth convocation ceremony of the prestigious Mewar University at Chittorgarh in Rajasthan in 2022."
                    path="/images_folder/Dr.-Chaudhry's-honorary-doctorate-recognition.jpg"
                    path1="/images_folder/Dr.-Chaudhry's-honorary-doctorate-recognition.jpg"
                    alt="Dr. Chaudhry's honorary doctorate recognition"
                    alt1="Dr. Chaudhry's honorary doctorate recognition"
                />
                <CommonFlipCard
                    year="2022"
                    subHeading="Guinness World Record in Numerology"
                    para="Dr. J C Chaudhry, one of the top Numerologists of India has been honoured with the first-ever Guinness World Record in Numerology for the most viewers on his YouTube LIVE Session on 1st January 2022."
                    path="/images_folder/Guinness-World-Record-achievement-by-Dr.-Chaudhry.jpg"
                    path1="/images_folder/Guinness-World-Record-achievement-by-Dr.-Chaudhry.jpg"
                    alt1="Guinness World Record achievement by Dr. Chaudhry"
                    alt="Guinness World Record achievement by Dr. Chaudhry"
                />
                <CommonFlipCard
                    year="2020"
                    subHeading="Entrepreneurship Award 2020"
                    para="Dr. J C Chaudhry, the national leader in test preparatory services, has been conferred with the prestigious and most sought after “Distinguished Entrepreneurship Award 2020” by apex industry body, Ph.D. Chamber of Commerce (PHDCCI) for his outstanding contribution in the field of Education."
                    path="/images_folder/Entrepreneurship-award-given-to-Dr.-Chaudhry.png"
                    path1="/images_folder/Entrepreneurship-award-given-to-Dr.-Chaudhry.png"
                    alt="Entrepreneurship award given to Dr. Chaudhry"
                    alt1="Entrepreneurship award given to Dr. Chaudhry"
                />
                <CommonFlipCard
                    year="2019"
                    subHeading="Dr. APJ Abdul Kalam Award"
                    para="Dr. Chaudhry has been felicitated with the ‘Dr. APJ Abdul Kalam Award’ for Excellence in Education, Healthcare, Motivational Speech & Writing. The award honours his contribution & accomplishment in the respective field, conducted to discuss the path ahead for our country as envisioned by our former President, Dr. APJ Abdul Kalam."
                    path1="/images_folder/apj-abdul-kalam-award.jpg"
                    path="/images_folder/APJ-award-honoring-Dr.-Chaudhry’s-work.png"
                    alt="APJ award honoring Dr. Chaudhry’s work"
                    alt1="apj abdul kalam award"
                />
                <CommonFlipCard
                    year="2019"
                    subHeading="India’s Most Admired Business Leader Award"
                    para="He has been felicitated with the ‘India’s Most Admired Business Leader’ award presented by White Page International in September, 2019. New Delhi. The Most Admired Brands and Leaders is a research based listing of 100 brands across 25 categories that also honours the entrepreneurs and leaders behind these brands and features the epic journey of prominent leaders across the country."
                    path="/images_folder/Award-for-business-leadership-to-Dr.-Chaudhry.png"
                    path1="/images_folder/Award-for-business-leadership-to-Dr.-Chaudhry.png"
                    alt="Award for business leadership to Dr. Chaudhry"
                    alt1="Award for business leadership to Dr. Chaudhry"
                />
                <CommonFlipCard
                    year="2014"
                    subHeading="Hall of Fame 2014"
                    para="He was also presented the ‘Hall of Fame 2014’ award by Inc. India in recognition of his entrepreneurial zeal, growth & excellence."
                    path="/images_folder/Dr.-Chaudhry-honored-in-the-Hall-of-Fame.png"
                    path1="/images_folder/Dr.-Chaudhry-honored-in-the-Hall-of-Fame.png"
                    alt="Dr. Chaudhry honored in the Hall of Fame"
                    alt1="Dr. Chaudhry honored in the Hall of Fame"
                />
                <CommonFlipCard
                    year="2013"
                    subHeading="Vasundhara Ratan Award of Excellence"
                    para="He was felicitated with the ‘Vasundhara Ratan Award of Excellence 2013’ by Respect Age International (RAI). RAI is the pioneer organization of India working for the Rights, Respect, Dignity, Service and Security of senior citizens worldwide since 1962."
                    path="/images_folder/Dr.-Chaudhry-receives-Vasundhara-Award.png"
                    path1="/images_folder/Dr.-Chaudhry-receives-Vasundhara-Award.png"
                    alt="Dr. Chaudhry receives Vasundhara Award"
                    alt1="Dr. Chaudhry receives Vasundhara Award"
                />
                <CommonFlipCard
                    year="2002"
                    subHeading="Dr. Radhakrishnan President’s Award"
                    para="He has been honoured with one of the prestigious awards in the country, the Dr. S. Radhakrishnan Memorial National Teachers Award in 2002 for the services rendered to schools and community."
                    path="/images_folder/Awarded-Radhakrishnan-President-Award-for-excellence.png"
                    path1="/images_folder/Awarded-Radhakrishnan-President-Award-for-excellence.png"
                    alt="Awarded Radhakrishnan President Award for excellence"
                    alt1="Awarded Radhakrishnan President Award for excellence"
                />
            </div>
        </div>
  )
}

export default page