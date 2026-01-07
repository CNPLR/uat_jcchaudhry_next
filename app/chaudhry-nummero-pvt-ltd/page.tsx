import SubHeading from '../components/ui/SubHeading'
import Img from '../components/ui/Img'
import Para from '../components/ui/Para'
import CommonAbout from '../components/ui/CommonAbout'
import Banner from '../components/ui/Banner'
import { CommonVideos } from '../components/ui/BlogVideos'
import GenerateMetadata from '../components/MetaGenerator'
import ImgHeadingContent from '../components/ui/ImgHeadingContent'
import { getVideos } from '../services/getVideos'
import { headers } from 'next/headers'
import Image from 'next/image'
import { link } from 'fs'
import Link from 'next/link'

export const metadata = GenerateMetadata({
    banner: "/allbanners/Chaudhry-Numerology-Pvt-Ltd-services.webp",
    title: "Chaudhry Nummero Pvt. Ltd | Dr. J C Chaudhry | Numerology Auditing Firm",
    description: "Chaudhry Nummero Pvt. Ltd (CNPL) is a Numerology Auditing company by top numerologist Dr. J C Chaudhry. Contact us for business and personal numerology reading.",
    keywords: "numerology company, best numerology company in India, numerology auditing company, jc chaudhry, famous numerology firm in India, top numerology company, world famous numerology, numerology in India, India numerology company, numerology audit firm",
    pagePath: "/chaudhry-nummero-pvt-ltd",
});



const page = async () => {

    const cnpl:any = await getVideos('getvideosbycategory/category/CNPL');
    const pridiction:any = await getVideos('getvideobyid/id/66d04093b339edc1a648849d');
  return (
    <div>

            <Banner alttag="Chaudhry Numerology Pvt Ltd services" path="/allbanners/Chaudhry-Numerology-Pvt-Ltd-services.webp" />
            <CommonAbout
                mainHeading="Chaudhry Nummero Pvt. Ltd."
                subHeading2="Top Numerology Consultation and Auditing Firm of India, offers Business and Personal Numerology Solutions"
                path="/images_folder/Numerology-services-by-Chaudhry-Numerology-Pvt-Ltd.jpg"
                alt="Numerology services by Chaudhry Numerology Pvt Ltd"
                subHeading="About CNPL"
                para="Chaudhry Nummero Pvt. Ltd. (CNPL) is a Numerology Auditing firm providing businessmen/entrepreneurs with Business Numerology Auditing services. Chaudhry Nummero Pvt. Ltd. came into existence on 20th September 2018. Dr. J C Chaudhry, one of the famous Numerologists of India is the founder of CNPL."
                para1="Numerology believes that there is a divine, mystical relationship between numbers and the projection of life and all life events. Everything in the universe has an energy and vibration- and numbers are no different. In fact, in Numerology, all numbers and letters have their own unique vibrations that influence our life stories."
                para2="The foundation of Chaudhry Nummero Pvt. Ltd. is based on the belief that Numbers rule our life and favourable Numbers attract good luck and success. It is set up to make people aware of the “Power of Numbers” and alleviate people’s suffering through the wisdom of Numerology."
                para3="Here you get the expert Numerology solutions related to your Job, Career, Business, Property, Marriage, Children, Family and other issues."
                text="Contact us"
                link="/contact-us"
            />
            <div className='lg:flex justify-center items-start mt-7'>
                <div className='flex items-center gap-4  md:pl-7 pt-7 border border-slate-200 bg-slate-100 w-10/12 md:w-fit xl:w-fit m-auto rounded-md justify-center flex-wrap'>
                    {cnpl?.map((ele: any, index: number) =>
                        <CommonVideos
                            key={index}
                            path={`https://newcnpl.s3.ap-south-1.amazonaws.com/public/jccms/videosthumbnail/${ele.category}/${ele.thumbnail}`}
                            url={ele.videoUrl}
                            para={ele.title}
                        />
                    )}
                    {pridiction ?
                        <CommonVideos
                            path={`https://newcnpl.s3.ap-south-1.amazonaws.com/public/jccms/videosthumbnail/${pridiction?.category}/${pridiction?.thumbnail}`}
                            url={pridiction?.videoUrl}
                            para={pridiction?.title}
                        />
                        : ''
                    }
                </div>
            </div>

            <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  px-10 mt-4'>

              {
                  data?.map((ele: IData, index: number) => {
                      return (
                          <div key={index} className=' bg-slate-100 shadow-md p-5 rounded-md m-4 flex flex-col justify-between'>
                              <Image
                                  src={ele.imagePath}
                                  alt={ele.alt}
                                  width={1200} height={560}
                                  className='w-full'
                              />
                              <h2 className='subHeading font_bold text-center my-4'>{ele.subHeading}</h2>

                                <p className='para text-justify mb-4'>{ele.para}</p>

                                <div className={`mx-auto lg:mx-0 transition buttonHover buttonBackground p-2 shadow-2xl font-semibold h-10 rounded-md flex justify-center items-center`}>
                                    <Link href={ele.link} type='button' className='text-white'>{ele.buttonHeading}</Link>
                                </div>
                          </div>
                      )
                  })
              }
               

                {/* <ImgHeadingContent
                    path="/images_folder/--JC-Nummerro-Calculator-by-chaudhry-nummero.jpg"
                    alt="JC Nummerro Calculator by chaudhry nummero"
                    subHeading="JC Nummerro Calculator"
                    para="You can use the JC Nummero Calculator for calculating your Psychic Number, Destiny Number, Name Number and Friendly Mobile Number."
                    nstyle="w-52"
                    style="bg-slate-100 rounded-md md:p-10 p-5"
                    subhs="text-center lg:text-left"
                    nomore="JC Nummerro Calculator"
                    link="/numerology-calculator"
                />
                <ImgHeadingContent
                    path="/images_folder/Ask-Your-2002-min.jpg"
                    alt="Ask Your 2002 min"
                    subHeading="Ask Your Question"
                    para="Ask Questions from Dr. J C Chaudhry and get personalised answers from him. Use the Ask Your Question feature on the website."
                    nstyle="w-52"
                    style="bg-slate-100 rounded-md md:p-10 p-5"
                    subhs="text-center lg:text-left"
                    nomore="Ask Your Question"
                    link="/ask-your-question"
                />
                <ImgHeadingContent
                    path="/images_folder/Book-your-numerology-consultation-appointment-now.jpg"
                    alt="Book your numerology consultation appointment now"
                    subHeading="Book Appointment"
                    para="Book an Appointment with Dr. J C Chaudhry for Numerology solutions, you can use the Book Appointment feature on the website."
                    nbutton="Book Appointment"
                    nstyle="w-52"
                    style="bg-slate-100 rounded-md md:p-10 p-5"
                    subhs="text-center lg:text-left"
                />
                <ImgHeadingContent
                    path="/images_folder/Get-a-detailed-numerology-audit-today.jpg"
                    alt="Get a detailed numerology audit today"
                    subHeading="Numerology Audit"
                    para="Business Audit of companies by Dr. J C Chaudhry to realize the aim of growth and success."
                    nbutton="Book Appointment"
                    nstyle="w-52"
                    style="bg-slate-100 rounded-md md:p-10 p-5"
                    subhs="text-center lg:text-left"
                /> */}
            </div>
            <SubHeading style="text-center my-10" subHeading="Chaudhry Nummero Pvt. Ltd. - Prominent Developments" />
            <div className='my-10 px-10 flex flex-wrap'>
                <CN
                    subHeading="Guinness World Record"
                    path="/images_folder/Explore-numerology-services-with-Dr.-Chaudhry.jpg"
                    alt="Explore numerology services with Dr. Chaudhry"
                    para="Dr. J C Chaudhry is the first-ever Numerologist to get a Guinness World Record in Numerology for the most viewers on his YouTube LIVE Session on Numerology on 1st January 2022."
                />
                <CN
                    subHeading="Numerology Day"
                    path="/images_folder/Numerology-consultation-for-life-guidance.jpg"
                    alt="Numerology consultation for life guidance"
                    para="Dr. J C Chaudhry has also proposed the celebration of International Numerology Day on 18th November every year. It is a global initiative by him to spread the awareness of Numerology worldwide."
                />
                <CN
                    subHeading="Presence in Dubai"
                    path="/images_folder/Locate-our-numerology-services-in-Dubai.jpg"
                    alt="Locate our numerology services in Dubai"
                    para="Dr. J C Chaudhry, Chairman of CNPL, is expanding wings on the international frontiers to spread the Numerology wisdom globally. He has opened the first office - Chaudhry Nummero Management Consultancies LLC, in Dubai, UAE. Now, residents of Dubai and neighboring countries can seek and benefit from his Numerology expertise and guidance."
                />
                <CN
                    subHeading="Founded IIN and INF"
                    path="/images_folder/Consult-Dr.-Chaudhry-for-personalized-numerology.jpg"
                    alt="Consult Dr. Chaudhry for personalized numerology"
                    para="Dr. J C Chaudhry founded the Indian Institute of Numerology (IIN) and International Numerology Forum (INF) under the umbrella of Chaudhry Nummero Pvt. Ltd. (CNPL). Indian Institute of Numerology will be the first International level of Numerology Institute. INF will bring the worldwide Numerologists on a single platform."
                />
                <CN
                    subHeading="JC Nummerro App"
                    path="/images_folder/Numerology-solutions-for-personal-and-business-growth.jpg"
                    alt="Numerology solutions for personal and business growth"
                    para="Chaudhry Nummerro Pvt. Ltd. launched the JC Nummerro App in 2020 under the guidance of Dr. J C Chaudhry. This App is FREE to download on both Play Store and App Store. The app lets you check your compatibility with yourself, your company, relationships, house, etc. You can also Ask your Question or Book Appointment for Numerology Auditing Services via the App."
                />
            </div>
        </div>
  )
}

export default page

export function CN({ subHeading, path, para, alt }: any) {
    return (
        <>
            <div className='lg:w-[30%] shadow-md p-5 rounded-md bg-slate-100 mb-10 lg:mr-10'>
                <SubHeading style="text-center" subHeading={subHeading} />
                <Img alt={alt} style="mx-auto my-5 rounded-md" path={path} />
                <Para style="text-justify" para={para} />
            </div>
        </>
    )
}

interface IData {
    imagePath: string
    alt: string
    subHeading: string
    para: string
    buttonHeading: string
    link: string
}

const data = [{
    imagePath: "/images_folder/--JC-Nummerro-Calculator-by-chaudhry-nummero.jpg",
    alt: "JC Nummerro Calculator by chaudhry nummero",
    subHeading: "JC Nummerro Calculator",
    para: "You can use the JC Nummero Calculator for calculating your Psychic Number, Destiny Number, Name Number and Friendly Mobile Number.",
    buttonHeading: "JC Nummerro Calculator",
    link: "/numerology-calculator",
},
{
    imagePath: "/images_folder/Ask-Your-2002-min.jpg",
    alt: "Ask Your 2002 min",
    subHeading: "Ask Your Question",
    para: "Ask Questions from Dr. J C Chaudhry and get personalised answers from him. Use the Ask Your Question feature on the website.",
    buttonHeading: "Ask Your Question",
    link: "/ask-your-question",
},
{
    imagePath: "/images_folder/Book-your-numerology-consultation-appointment-now.jpg",
    alt: "Book your numerology consultation appointment now",
    subHeading: "Book Appointment",
    para: "Book an Appointment with Dr. J C Chaudhry for Numerology solutions, you can use the Book Appointment feature on the website.",
    buttonHeading: "Book Appointment",
    link: "/dashboard",
},
{
    imagePath: "/images_folder/Get-a-detailed-numerology-audit-today.jpg",
    alt: "Get a detailed numerology audit today",
    subHeading: "Numerology Audit",
    para: "Business Audit of companies by Dr. J C Chaudhry to realize the aim of growth and success.",
    buttonHeading: "Book Appointment",
    link : "/dashboard",
}]