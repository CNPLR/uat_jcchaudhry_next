import GenerateMetadata from '@/app/components/MetaGenerator';
import Banner from '@/app/components/ui/Banner'
import { Desktop, Phone } from '@/app/components/ui/CommonMileston'
import MainHeading from '@/app/components/ui/MainHeading'
import { headers } from 'next/headers';


export const metadata = GenerateMetadata({
    pagePath: "/about/milestones",
    banner: "/allbanners/Key-milestones-in-Dr-Chaudhry’s-career.jpg",
    title: "Dr. J C Chaudhry Milestones Achieved | Achievements in Education Field",
    description: "The life journey of Dr. J C Chaudhry from 1949, completed education in 1972 and started his teaching journey itself. Established the Aakash institute in 1988, Aakash IIT-JEE in 2007, Aakash iTutor in 2012, Aakash Live in 2016, Launched Chaudhry Nummero Private Limited in 2018 and more.",
    keywords: "numerologist in india, numerology by jc chaudhry, vaastu shastra expert, motivational speaker, motivational speakers in india",
    headers: headers,
});


const page = () => {
  return (
    <div className='bg-white'>

            <Banner alttag="Key milestones in Dr. Chaudhry’s career" path="/allbanners/Key-milestones-in-Dr-Chaudhry’s-career.jpg" />
            <div className=''>
                <MainHeading style="text-center my-5" mainHeading="Milestones" />
                <div className='relative'>
                    <div className='my-10 hidden lg:block lg:w-[1200px] m-auto timeline space-y-5 lg:space-y-0'>
                        <Desktop
                            inDesktop="Honoured to receive the Greatest Brands and Leaders Awards 2021-2022 at the 18th Edition of Asia-Africa Business & Social Forum 2022"
                            path="/milestone/milestone_award_2022.png"
                            years="2022"
                            style="mr-auto"
                            side="leftArrow"
                            year="text-right"
                            img="ml-5"
                        />
                        <Desktop
                            style="flex-row-reverse ml-auto"
                            side="rightArrow"
                            year="text-left"
                            img="mr-5"
                            path="/milestone/Doctorate-award-jc-chaudhry.png"
                            years="2022"
                            inDesktop="Honoured with Doctorate Degree by the prestigious Mewar University Rajasthan."
                        />
                        <Desktop
                            path="/milestone/JC-chaudhry-biography-book-2022.png"
                            years="2022"
                            inDesktop="Launch of Dr. J C Chaudhry's Biography - The Incredible Aakash Story."
                            style="mr-auto"
                            side="leftArrow"
                            year="text-right"
                            img="ml-5"
                        />
                        <Desktop
                            path="/milestone/Guinness-world-record-in-numerology-by-jc-chaudhry.png"
                            years="2022"
                            inDesktop="Honoured with the first-ever Guinness World Record in Numerology for the most viewers on his YouTube LIVE Session on 1st January 2022."
                            style="flex-row-reverse ml-auto"
                            side="rightArrow"
                            year="text-left"
                            img="mr-5"
                        />
                        <Desktop
                            path="/milestone/proposed-international-numerology-day-by-jc-chaudhry.png"
                            years="2021"
                            inDesktop="Founded Indian Institute of Numerology (IIN) and International Numerology Forum (INF)."
                            style="mr-auto"
                            side="leftArrow"
                            year="text-right"
                            img="ml-5"
                        />
                        <Desktop
                            path="/milestone/Entrepreneurship-Award-2020-jc-chaudhry.png"
                            years="2021"
                            inDesktop="Proposed the idea of International Numerology Day to be celebrated on 18th November every year, to make humankind witness the benefits of Numerology."
                            style="flex-row-reverse ml-auto"
                            side="rightArrow"
                            year="text-left"
                            img="mr-5"
                        />
                        <Desktop
                            path="/milestone/1.png"
                            years="2020"
                            inDesktop="Honored with the prestigious “Distinguished Entrepreneurship Award 2020” by the PHD Chamber of Commerce"
                            style="mr-auto"
                            side="leftArrow"
                            year="text-right"
                            img="ml-5"
                        />
                        <Desktop
                            path="/milestone/2.png"
                            years="2019"
                            inDesktop="Partnered with Blackstone, one of the world's largest private equity companies to build country's largest education company"
                            style="flex-row-reverse ml-auto"
                            side="rightArrow"
                            year="text-left"
                            img="mr-5"
                        />
                        <Desktop
                            path="/milestone/3.png"
                            years="2019"
                            inDesktop="Presented with the ‘India’s Most Admired Business Leader’ award by White Page International in September 2019, New Delhi"
                            style="mr-auto"
                            side="leftArrow"
                            year="text-right"
                            img="ml-5"
                        />
                        <Desktop
                            path="/milestone/4.png"
                            years="2019"
                            inDesktop="Felicitated with the ‘Dr. APJ Abdul Kalam Award’ for Excellence in Education, Healthcare, Motivational Speech & Writing by Deshabhimani Charitable Society, an NGO Estd. 2001, at The Constitution Club of India, New Delhi on 12th October, 2019"
                            style="flex-row-reverse ml-auto"
                            side="rightArrow"
                            year="text-left"
                            img="mr-5"
                        />
                        <Desktop
                            path="/milestone/6.png"
                            years="2019"
                            inDesktop="‘Global Gandhi Award 2019’ was conferred by Khaddargram International Pvt. Ltd on 7th October, 2019 at The Parliament of United Kingdom Palace of Westminster London"
                            style="mr-auto"
                            side="leftArrow"
                            year="text-right"
                            img="ml-5"
                        />
                        <Desktop
                            path="/milestone/5.png"
                            years="2019"
                            inDesktop="Launched the National Eligibility & Scholarship Test ‘Aakash NEST’ for Class 9th to 12th"
                            style="flex-row-reverse ml-auto"
                            side="rightArrow"
                            year="text-left"
                            img="mr-5"
                        />
                        <Desktop
                            path="/milestone/7.png"
                            years="2018"
                            inDesktop="Launched the Website: www.jcchaudhry.com"
                            style="mr-auto"
                            side="leftArrow"
                            year="text-right"
                            img="ml-5"
                        />
                        <Desktop
                            path="/milestone/8.png"
                            years="2018"
                            inDesktop="Felicitated as Key Note Speaker at the ‘Indo- European Investors Meet - 2018’ for addressing the esteemed gathering on 'New Investment Opportunities available in India in Education Sector' at Portcullis House of Parliament, London"
                            style="flex-row-reverse ml-auto"
                            side="rightArrow"
                            year="text-left"
                            img="mr-5"
                        />
                        <Desktop
                            path="/milestone/9.png"
                            years="2018"
                            inDesktop="Recognized as the Global Asian of the Year for Life Time Achievement by Asian Business & Social Forum, Singapore"
                            style="mr-auto"
                            side="leftArrow"
                            year="text-right"
                            img="ml-5"
                        />
                        <Desktop
                            path="/milestone/10.png"
                            years="2018"
                            inDesktop="Presented with IEBF Excellence Award 2018 for 'Transforming Lives through Education' by Indo-European Business Forum (IEBF) during the Acceler8 Summit held in London"
                            style="flex-row-reverse ml-auto"
                            side="rightArrow"
                            year="text-left"
                            img="mr-5"
                        />
                        <Desktop
                            path="/milestone/11.png"
                            years="2018"
                            inDesktop="Launched Chaudhry Nummero Private Limited"
                            style="mr-auto"
                            side="leftArrow"
                            year="text-right"
                            img="ml-5"
                        />
                        <Desktop
                            path="/milestone/12.png"
                            years="2018"
                            inDesktop="Honoured with Global Education Leaders Award for ‘Shaping the Dreams of Millions of Medical & Engineering Aspirants’ at India-UAE Partnership Summit (IUPS) 2018 held at Atlantis, The Palm, Dubai"
                            style="flex-row-reverse ml-auto"
                            side="rightArrow"
                            year="text-left"
                            img="mr-5"
                        />
                        <Desktop
                            path="/milestone/13.png"
                            years="2018"
                            inDesktop="Felicitated as Key Note Speaker on 'Role of Numerology in Business Growth and Personal Life' at the Indo-European Investors Meet - 2018 at St. James Court, Taj Hotel, London"
                            style="mr-auto"
                            side="leftArrow"
                            year="text-right"
                            img="ml-5"
                        />
                        <Desktop
                            path="/milestone/14.png"
                            years="2017"
                            inDesktop="Honoured with ‘Life Time Achievement’ Award at India-UAE Business & Social Forum 2017"
                            style="flex-row-reverse ml-auto"
                            side="rightArrow"
                            year="text-left"
                            img="mr-5"
                        />
                        <Desktop
                            path="/milestone/15.png"
                            years="2017"
                            inDesktop="Founded Aakash Healthcare Super Speciality Hospital"
                            style="mr-auto"
                            side="leftArrow"
                            year="text-right"
                            img="ml-5"
                        />
                        <Desktop
                            path="/milestone/16.png"
                            years="2017"
                            inDesktop="'Advanced Numerology', a book on the power of numbers and how they can help shape the destiny of people was released on 13th June 2017"
                            style="flex-row-reverse ml-auto"
                            side="rightArrow"
                            year="text-left"
                            img="mr-5"
                        />
                        <Desktop
                            path="/milestone/17.png"
                            years="2017"
                            inDesktop="'Nature: The Best Cure', a book that reveals the goodness of nature and how it can help cure many diseases, was released on 17th Februrary 2017"
                            style="mr-auto"
                            side="leftArrow"
                            year="text-right"
                            img="ml-5"
                        />
                        <Desktop
                            path="/milestone/18.png"
                            years="2016"
                            inDesktop="Released the book 'Mudra: Healthy Life at Your Finger Tips' on 8th April 2016"
                            style="flex-row-reverse ml-auto"
                            side="rightArrow"
                            year="text-left"
                            img="mr-5"
                        />
                        <Desktop
                            path="/milestone/19.png"
                            years="2016"
                            inDesktop="Launched the digital e-learning program ‘Aakash Live’"
                            style="mr-auto"
                            side="leftArrow"
                            year="text-right"
                            img="ml-5"
                        />
                        <Desktop
                            path="/milestone/20.png"
                            years="2016"
                            inDesktop="Awarded the ‘Person of the Year Award 2016-17, 2015-16’ by Asia One at Abu Dhabi"
                            style="flex-row-reverse ml-auto"
                            side="rightArrow"
                            year="text-left"
                            img="mr-5"
                        />
                        <Desktop
                            path="/milestone/21.png"
                            years="2016"
                            inDesktop="Recognized as ‘The World’s Greatest Leaders- India 2015-16’ by Asia One at Abu Dhabi"
                            style="mr-auto"
                            side="leftArrow"
                            year="text-right"
                            img="ml-5"
                        />
                        <Desktop
                            path="/milestone/22.png"
                            years="2014"
                            inDesktop="Presented with the ‘Hall of Fame 2014’ award by Inc. India in recognition of his entrepreneurial zeal, growth & excellence"
                            style="flex-row-reverse ml-auto"
                            side="rightArrow"
                            year="text-left"
                            img="mr-5"
                        />
                        <Desktop
                            path="/milestone/23.png"
                            years="2013"
                            inDesktop="Released the book 'You & Your Gems' on 8th October 2013"
                            style="mr-auto"
                            side="leftArrow"
                            year="text-right"
                            img="ml-5"
                        />
                        <Desktop
                            path="/milestone/24.png"
                            years="2013"
                            inDesktop="Released the book 'ABC of Vastu Shastra' on 5th September 2013"
                            style="flex-row-reverse ml-auto"
                            side="rightArrow"
                            year="text-left"
                            img="mr-5"
                        />
                        <Desktop
                            path="/milestone/25.png"
                            years="2013"
                            inDesktop="Felicitated and awarded with the 'Vasundhara Ratan Award of Excellence 2013' by Respect Age International (RAI), India’s pioneer organization working for the Rights, Respect, Dignity, Service and Security of senior citizens worldwide since 1962"
                            style="mr-auto"
                            side="leftArrow"
                            year="text-right"
                            img="ml-5"
                        />
                        <Desktop
                            path="/milestone/26.png"
                            years="2012"
                            inDesktop="Launched the tablet-based digital learning program ‘Aakash iTutor’"
                            style="flex-row-reverse ml-auto"
                            side="rightArrow"
                            year="text-left"
                            img="mr-5"
                        />
                        <Desktop
                            path="/milestone/27.png"
                            years="2010"
                            inDesktop="Launched Aakash National Talent Hunt Exam (ANTHE), a national level scholarship exam that offers up to 100% scholarship & cash awards"
                            style="mr-auto"
                            side="leftArrow"
                            year="text-right"
                            img="ml-5"
                        />
                        <Desktop
                            path="/milestone/28.png"
                            years="2010"
                            inDesktop="Founded Maa Vaishno Devi Dham in Vrindavan, Mathura (U.P.)"
                            style="flex-row-reverse ml-auto"
                            side="rightArrow"
                            year="text-left"
                            img="mr-5"
                        />
                        <Desktop
                            path="/milestone/29.png"
                            years="2009"
                            inDesktop="Launched ‘Aakash Foundations’ to nurture the aspirations of junior class (9th and 10th) students"
                            style="mr-auto"
                            side="leftArrow"
                            year="text-right"
                            img="ml-5"
                        />
                        <Desktop
                            path="/milestone/30.png"
                            years="2007"
                            inDesktop="‘Aakash IIT-JEE’ started providing test preparatory services for engineering aspirants"
                            style="flex-row-reverse ml-auto"
                            side="rightArrow"
                            year="text-left"
                            img="mr-5"
                        />
                        <Desktop
                            path="/milestone/31.png"
                            years="2003"
                            inDesktop="Launched a National Test Series Program: All India Aakash Test Series (AIATS) at all India level"
                            style="mr-auto"
                            side="leftArrow"
                            year="text-right"
                            img="ml-5"
                        />
                        <Desktop
                            path="/milestone/32.png"
                            years="2002"
                            inDesktop="Honoured with one of the prestigious awards in the country, the 'Dr. S. Radhakrishnan Memorial National Teachers Award' for the services rendered to schools and community by Freedom Fighter Welfare Society in 2002"
                            style="flex-row-reverse ml-auto"
                            side="rightArrow"
                            year="text-left"
                            img="mr-5"
                        />
                        <Desktop
                            path="/milestone/33.png"
                            years="1988"
                            inDesktop="Started the first centre of Aakash Institute in 1988 with only 12 students"
                            style="mr-auto"
                            side="leftArrow"
                            year="text-right"
                            img="ml-5"
                        />
                        <Desktop
                            path="/milestone/34.png"
                            years="1973"
                            inDesktop="Started his career as a teacher at Vaish College, Bhiwani (1972-73). In 1973-1974 he taught at Hansraj Model School, Punjabi Bagh, New Delhi"
                            style="flex-row-reverse ml-auto"
                            side="rightArrow"
                            year="text-left"
                            img="mr-5"
                        />
                        <Desktop
                            path="/milestone/35.png"
                            years="1972"
                            inDesktop="Completed his M.Sc. in Botany from the Birla Institute of Technology and Science (BITS), Pilani, Rajasthan"
                            style="mr-auto"
                            side="leftArrow"
                            year="text-right"
                            img="ml-5"
                        />
                        <Desktop
                            path="/milestone/0.png"
                            years="1949"
                            inDesktop="A legend was born in: Sevli, a village in Haryana, on 1st August 1949. He attended a village school in Hathin, a town in Palwal District of Haryana"
                            style="flex-row-reverse ml-auto"
                            side="rightArrow"
                            year="text-left"
                            img="mr-5"
                        />
                    </div>
                    <div className='my-10 lg:hidden m-auto timeline space-y-5 lg:space-y-0'>
                        <Phone
                            inPhone="Honoured to receive the Greatest Brands and Leaders Awards 2021-2022 at the 18th Edition of Asia-Africa Business & Social Forum 2022"
                            path="/milestone/milestone_award_2022.png"
                            years="2022"
                            style="lg:mr-auto ml-[50px] lg:ml-0"
                            side="leftArrow"
                        />
                        <Phone
                            style="lg:mr-auto ml-[50px] lg:ml-0"
                            side="leftArrow"
                            path="/milestone/Doctorate-award-jc-chaudhry.png"
                            years="2022"
                            inPhone="Honoured with Doctorate Degree by the prestigious Mewar University Rajasthan."
                        />
                        <Phone
                            path="/milestone/JC-chaudhry-biography-book-2022.png"
                            years="2022"
                            inPhone="Launch of Dr. J C Chaudhry's Biography - The Incredible Aakash Story."
                            style="lg:mr-auto ml-[50px] lg:ml-0"
                            side="leftArrow"
                        />
                        <Phone
                            path="/milestone/Guinness-world-record-in-numerology-by-jc-chaudhry.png"
                            years="2022"
                            inPhone="Honoured with the first-ever Guinness World Record in Numerology for the most viewers on his YouTube LIVE Session on 1st January 2022."
                            style="lg:mr-auto ml-[50px] lg:ml-0"
                            side="leftArrow"
                        />
                        <Phone
                            path="/milestone/proposed-international-numerology-day-by-jc-chaudhry.png"
                            years="2021"
                            inPhone="Founded Indian Institute of Numerology (IIN) and International Numerology Forum (INF)."
                            style="lg:mr-auto ml-[50px] lg:ml-0"
                            side="leftArrow"
                        />
                        <Phone
                            path="/milestone/Entrepreneurship-Award-2020-jc-chaudhry.png"
                            years="2021"
                            inPhone="Proposed the idea of International Numerology Day to be celebrated on 18th November every year, to make humankind witness the benefits of Numerology."
                            style="lg:mr-auto ml-[50px] lg:ml-0"
                            side="leftArrow"
                        />
                        <Phone
                            path="/milestone/1.png"
                            years="2020"
                            inPhone="Honored with the prestigious “Distinguished Entrepreneurship Award 2020” by the PHD Chamber of Commerce"
                            style="lg:mr-auto ml-[50px] lg:ml-0"
                            side="leftArrow"
                        />
                        <Phone
                            path="/milestone/2.png"
                            years="2019"
                            inPhone="Partnered with Blackstone, one of the world's largest private equity companies to build country's largest education company"
                            style="lg:mr-auto ml-[50px] lg:ml-0"
                            side="leftArrow"
                        />
                        <Phone
                            path="/milestone/3.png"
                            years="2019"
                            inPhone="Presented with the ‘India’s Most Admired Business Leader’ award by White Page International in September 2019, New Delhi"
                            style="lg:mr-auto ml-[50px] lg:ml-0"
                            side="leftArrow"
                        />
                        <Phone
                            path="/milestone/4.png"
                            years="2019"
                            inPhone="Felicitated with the ‘Dr. APJ Abdul Kalam Award’ for Excellence in Education, Healthcare, Motivational Speech & Writing by Deshabhimani Charitable Society, an NGO Estd. 2001, at The Constitution Club of India, New Delhi on 12th October, 2019"
                            style="lg:mr-auto ml-[50px] lg:ml-0"
                            side="leftArrow"
                        />
                        <Phone
                            path="/milestone/5.png"
                            years="2019"
                            inPhone="‘Global Gandhi Award 2019’ was conferred by Khaddargram International Pvt. Ltd on 7th October, 2019 at The Parliament of United Kingdom Palace of Westminster London"
                            style="lg:mr-auto ml-[50px] lg:ml-0"
                            side="leftArrow"
                        />
                        <Phone
                            path="/milestone/6.png"
                            years="2019"
                            inPhone="Launched the National Eligibility & Scholarship Test ‘Aakash NEST’ for Class 9th to 12th"
                            style="lg:mr-auto ml-[50px] lg:ml-0"
                            side="leftArrow"
                        />
                        <Phone
                            path="/milestone/7.png"
                            years="2018"
                            inPhone="Launched the Website: www.jcchaudhry.com"
                            style="lg:mr-auto ml-[50px] lg:ml-0"
                            side="leftArrow"
                        />
                        <Phone
                            path="/milestone/8.png"
                            years="2018"
                            inPhone="Felicitated as Key Note Speaker at the ‘Indo- European Investors Meet - 2018’ for addressing the esteemed gathering on 'New Investment Opportunities available in India in Education Sector' at Portcullis House of Parliament, London"
                            style="lg:mr-auto ml-[50px] lg:ml-0"
                            side="leftArrow"
                        />
                        <Phone
                            path="/milestone/9.png"
                            years="2018"
                            inPhone="Recognized as the Global Asian of the Year for Life Time Achievement by Asian Business & Social Forum, Singapore"
                            style="lg:mr-auto ml-[50px] lg:ml-0"
                            side="leftArrow"
                        />
                        <Phone
                            path="/milestone/10.png"
                            years="2018"
                            inPhone="Presented with IEBF Excellence Award 2018 for 'Transforming Lives through Education' by Indo-European Business Forum (IEBF) during the Acceler8 Summit held in London"
                            style="lg:mr-auto ml-[50px] lg:ml-0"
                            side="leftArrow"
                        />
                        <Phone
                            path="/milestone/11.png"
                            years="2018"
                            inPhone="Launched Chaudhry Nummero Private Limited"
                            style="lg:mr-auto ml-[50px] lg:ml-0"
                            side="leftArrow"
                        />
                        <Phone
                            path="/milestone/12.png"
                            years="2018"
                            inPhone="Honoured with Global Education Leaders Award for ‘Shaping the Dreams of Millions of Medical & Engineering Aspirants’ at India-UAE Partnership Summit (IUPS) 2018 held at Atlantis, The Palm, Dubai"
                            style="lg:mr-auto ml-[50px] lg:ml-0"
                            side="leftArrow"
                        />
                        <Phone
                            path="/milestone/13.png"
                            years="2018"
                            inPhone="Felicitated as Key Note Speaker on 'Role of Numerology in Business Growth and Personal Life' at the Indo-European Investors Meet - 2018 at St. James Court, Taj Hotel, London"
                            style="lg:mr-auto ml-[50px] lg:ml-0"
                            side="leftArrow"
                        />
                        <Phone
                            path="/milestone/14.png"
                            years="2017"
                            inPhone="Honoured with ‘Life Time Achievement’ Award at India-UAE Business & Social Forum 2017"
                            style="lg:mr-auto ml-[50px] lg:ml-0"
                            side="leftArrow"
                        />
                        <Phone
                            path="/milestone/15.png"
                            years="2017"
                            inPhone="Founded Aakash Healthcare Super Speciality Hospital"
                            style="lg:mr-auto ml-[50px] lg:ml-0"
                            side="leftArrow"
                        />
                        <Phone
                            path="/milestone/16.png"
                            years="2017"
                            inPhone="'Advanced Numerology', a book on the power of numbers and how they can help shape the destiny of people was released on 13th June 2017"
                            style="lg:mr-auto ml-[50px] lg:ml-0"
                            side="leftArrow"
                        />
                        <Phone
                            path="/milestone/16.png"
                            years="2017"
                            inPhone="'Nature: The Best Cure', a book that reveals the goodness of nature and how it can help cure many diseases, was released on 17th Februrary 2017"
                            style="lg:mr-auto ml-[50px] lg:ml-0"
                            side="leftArrow"
                        />
                        <Phone
                            path="/milestone/18.png"
                            years="2016"
                            inPhone="Released the book 'Mudra: Healthy Life at Your Finger Tips' on 8th April 2016"
                            style="lg:mr-auto ml-[50px] lg:ml-0"
                            side="leftArrow"
                        />
                        <Phone
                            path="/milestone/19.png"
                            years="2016"
                            inPhone="Launched the digital e-learning program ‘Aakash Live’"
                            style="lg:mr-auto ml-[50px] lg:ml-0"
                            side="leftArrow"
                        />
                        <Phone
                            path="/milestone/20.png"
                            years="2016"
                            inPhone="Awarded the ‘Person of the Year Award 2016-17, 2015-16’ by Asia One at Abu Dhabi"
                            style="lg:mr-auto ml-[50px] lg:ml-0"
                            side="leftArrow"
                        />
                        <Phone
                            path="/milestone/21.png"
                            years="2016"
                            inPhone="Recognized as ‘The World’s Greatest Leaders- India 2015-16’ by Asia One at Abu Dhabi"
                            style="lg:mr-auto ml-[50px] lg:ml-0"
                            side="leftArrow"
                        />
                        <Phone
                            path="/milestone/22.png"
                            years="2014"
                            inPhone="Presented with the ‘Hall of Fame 2014’ award by Inc. India in recognition of his entrepreneurial zeal, growth & excellence"
                            style="lg:mr-auto ml-[50px] lg:ml-0"
                            side="leftArrow"
                        />
                        <Phone
                            path="/milestone/23.png"
                            years="2013"
                            inPhone="Released the book 'You & Your Gems' on 8th October 2013"
                            style="lg:mr-auto ml-[50px] lg:ml-0"
                            side="leftArrow"
                        />
                        <Phone
                            path="/milestone/24.png"
                            years="2013"
                            inPhone="Released the book 'ABC of Vastu Shastra' on 5th September 2013"
                            style="lg:mr-auto ml-[50px] lg:ml-0"
                            side="leftArrow"
                        />
                        <Phone
                            path="/milestone/25.png"
                            years="2013"
                            inPhone="Felicitated and awarded with the 'Vasundhara Ratan Award of Excellence 2013' by Respect Age International (RAI), India’s pioneer organization working for the Rights, Respect, Dignity, Service and Security of senior citizens worldwide since 1962"
                            style="lg:mr-auto ml-[50px] lg:ml-0"
                            side="leftArrow"
                        />
                        <Phone
                            path="/milestone/26.png"
                            years="2012"
                            inPhone="Launched the tablet-based digital learning program ‘Aakash iTutor’"
                            style="lg:mr-auto ml-[50px] lg:ml-0"
                            side="leftArrow"
                        />
                        <Phone
                            path="/milestone/27.png"
                            years="2010"
                            inPhone="Launched Aakash National Talent Hunt Exam (ANTHE), a national level scholarship exam that offers up to 100% scholarship & cash awards"
                            style="lg:mr-auto ml-[50px] lg:ml-0"
                            side="leftArrow"
                        />
                        <Phone
                            path="/milestone/28.png"
                            years="2010"
                            inPhone="Founded Maa Vaishno Devi Dham in Vrindavan, Mathura (U.P.)"
                            style="lg:mr-auto ml-[50px] lg:ml-0"
                            side="leftArrow"
                        />
                        <Phone
                            path="/milestone/29.png"
                            years="2009"
                            inPhone="Launched ‘Aakash Foundations’ to nurture the aspirations of junior class (9th and 10th) students"
                            style="lg:mr-auto ml-[50px] lg:ml-0"
                            side="leftArrow"
                        />
                        <Phone
                            path="/milestone/30.png"
                            years="2007"
                            inPhone="‘Aakash IIT-JEE’ started providing test preparatory services for engineering aspirants"
                            style="lg:mr-auto ml-[50px] lg:ml-0"
                            side="leftArrow"
                        />
                        <Phone
                            path="/milestone/31.png"
                            years="2003"
                            inPhone="Launched a National Test Series Program: All India Aakash Test Series (AIATS) at all India level"
                            style="lg:mr-auto ml-[50px] lg:ml-0"
                            side="leftArrow"
                        />
                        <Phone
                            path="/milestone/32.png"
                            years="2002"
                            inPhone="Honoured with one of the prestigious awards in the country, the 'Dr. S. Radhakrishnan Memorial National Teachers Award' for the services rendered to schools and community by Freedom Fighter Welfare Society in 2002"
                            style="lg:mr-auto ml-[50px] lg:ml-0"
                            side="leftArrow"
                        />
                        <Phone
                            path="/milestone/33.png"
                            years="1988"
                            inPhone="Started the first centre of Aakash Institute in 1988 with only 12 students"
                            style="lg:mr-auto ml-[50px] lg:ml-0"
                            side="leftArrow"
                        />
                        <Phone
                            path="/milestone/34.png"
                            years="1973"
                            inPhone="Started his career as a teacher at Vaish College, Bhiwani (1972-73). In 1973-1974 he taught at Hansraj Model School, Punjabi Bagh, New Delhi"
                            style="lg:mr-auto ml-[50px] lg:ml-0"
                            side="leftArrow"
                        />
                        <Phone
                            path="/milestone/35.png"
                            years="1972"
                            inPhone="Completed his M.Sc. in Botany from the Birla Institute of Technology and Science (BITS), Pilani, Rajasthan"
                            style="lg:mr-auto ml-[50px] lg:ml-0"
                            side="leftArrow"
                        />
                        <Phone
                            path="/milestone/0.png"
                            years="1949"
                            inPhone="A legend was born in: Sevli, a village in Haryana, on 1st August 1949. He attended a village school in Hathin, a town in Palwal District of Haryana"
                            style="lg:mr-auto ml-[50px] lg:ml-0"
                            side="leftArrow"
                        />
                    </div>
                </div>
            </div>
        </div>
  )
}

export default page