import GenerateMetadata from '@/app/components/MetaGenerator';
import Banner from '@/app/components/ui/Banner';
import CommonAbout from '@/app/components/ui/CommonAbout';
import Img from '@/app/components/ui/Img';
import ImgHeadingBox from '@/app/components/ui/ImgHeadingBox';
import Para from '@/app/components/ui/Para';
import SubHeading from '@/app/components/ui/SubHeading';
import { headers } from 'next/headers';


export const metadata = GenerateMetadata({
    pagePath: "/about/biography",
    banner: "/allbanners/Biography-of-Dr-J-C-Chaudhry.webp",
    title: "Dr. J C Chaudhry Biography | The Incredible Aakash Story",
    description: "Biography of Dr. J C Chaudhry, the Chairman of Aakash Educational Services Limited (AESL) and a renowned Numerologist of India.",
    keywords: "Jc chaudhry, biography of JC chaudhry, aakash institute story, book about aakash education",
    headers: headers,
});

const page = () => {
  return (
    <div>

            <Banner alttag="Biography of Dr. J C Chaudhry" path="/allbanners/Biography-of-Dr-J-C-Chaudhry.webp" />
            <CommonAbout
                mainHeading="Biography Dr. J C Chaudhry"
                subHeading2="The Incredible Aakash Story - Journey from an educator to one of India’s most successful academic entrepreneurs"
                path="/images_folder/Biography-Dr.-J-C-Chaudhry.webp"
                alt="Biography Dr. J C Chaudhry"
                subHeading="The Incredible Aakash Story"
                para="Dr. J C Chaudhry has been closely associated with the field of teaching and education for 48 years, motivating lakhs of students and shaping their future careers. Dr. J C Chaudhry: The Incredible Aakash Story traces his journey from an educator to one of India’s most successful academic entrepreneurs. He established Aakash Educational Services Limited (AESL) in 1988 and redefined the Indian test-preparatory coaching industry. Aakash excels as a standalone brand today."
                para1="With more than 33 years of operational experience, a strong selection track record in Medical and Engineering entrance exams and Foundation level exams, a pan-India network of over 200 Aakash Centres, and a student count of more than 2,50,000, Aakash has become the most trusted name in the country for focused learning. This book is a fascinating account of Dr. J C Chaudhry’s life story. It highlights his determination and grit, and his abiding commitment to students, which helped him turn his dream into reality."
                para2="He has successfully played the roles of a dedicated teacher, an entrepreneur, a numerologist, a philanthropist, a motivational speaker, a family man and a brilliant investor over the years. His experiences and beliefs, shared candidly in Dr. J C Chaudhry: The Incredible Aakash Story are an invaluable source of inspiration to students, entrepreneurs and business leaders of all stripes."
                text="Order on Amazon"
                link="https://www.amazon.in/dp/9391258794/"
                para3=''
            />

            <Img style="mx-auto" alt="Table of contents" path="/images_folder/Table-of-contents.png" />

            <SubHeading style="text-center" subHeading="Dr. J C Chaudhry's Village and School" />
            <div className='flex flex-wrap md:space-x-5 my-5 justify-center bg-gray-100 py-10'>
                <ImgHeadingBox
                    alt="Dr. J C Chaudhry spent his boyhood in a forgotten village in the heart of Haryana"
                    ps="text-justify"
                    heading=''
                    link=''
                    path="/images_folder/Dr.-J-C-Chaudhry-house.webp"
                    para="Dr. J C Chaudhry spent his boyhood in a forgotten village in the heart of Haryana. His father ran a small grocery store and the family lived in a small, one-room house in sevli. Every member of the family including his mother and sister worked hard to contribute to the family kitty. @Dr. J C Chaudhry"
                />
                <ImgHeadingBox
                    alt="n 1996 Dr. J C Chaudhry completed his matriculation in Hathin and moved to Palwal to complete"
                    path="/images_folder/Dr.-J-C-Chaudhry-collage.webp"
                    ps="text-justify"
                    heading=''
                    link=''
                    para="In 1996 Dr. J C Chaudhry completed his matriculation in Hathin and moved to Palwal to complete his pre-university and pre-medical at G.G.D.S.D. Collage. He was very excited about living in a bigger city with a cinema hall. @Dr. J C Chaudhry"
                />
                <ImgHeadingBox
                    alt="The primary school in hathin where Dr. J C Chaudhry studied up to class"
                    path="/images_folder/Dr.-J-C-Chaudhry-school.webp"
                    ps="text-justify"
                    heading=''
                    link=''
                    para="The primary school in hathin where Dr. J C Chaudhry studied up to class 5. @Dr. J C Chaudhry"
                />
            </div>

            <SubHeading style="text-center" subHeading="Dr. J C Chaudhry and Sons" />
            <div className='flex flex-wrap my-5 justify-center bg-gray-100 py-10 md:space-x-5'>
                <ImgHeadingBox
                    path="/images_folder/Dr.-J-C-Chaudhry-sons.webp"
                    alt="Jagdish Chand Chaudhry, founder of Aakash Educational Services"
                    ps="text-justify"
                    heading=''
                    link=''
                    para="Jagdish Chand Chaudhry, founder of Aakash Educational Services (AESL), is a self-mode millionaire who turned his modest mon-and-pop enterprise into a multi-million empire with interest raging from education to healthcare. (Roy Henderson)"
                />
                <ImgHeadingBox
                    path="/images_folder/Dr.-J-C-Chaudhry-sons-.webp"
                    alt="Dr. J C Chaudhry and his sons, Aashish (Left) and Aakash (Right), speak in one voice."
                    ps="text-justify"
                    heading=''
                    link=''
                    para="Dr. J C Chaudhry and his sons, Aashish (Left) and Aakash (Right), speak in one voice. Once their father charts a path and approves it, the two follow his commands. (Roy Henderson)"
                />
            </div>

            <SubHeading style="text-center" subHeading="Dr. J C Chaudhry's Vision" />
            <div className='flex flex-wrap my-5 justify-center bg-gray-100 py-10 md:space-x-5'>
                <ImgHeadingBox
                    path="/images_folder/Dr.-J-C-Chaudhry-vision.webp"
                    alt="A techer at heart, Dr. J C Chaudhry has the brain and brawn of an entrepreneur."
                    ps="text-justify"
                    heading=''
                    link=''
                    para="A techer at heart, Dr. J C Chaudhry has the brain and brawn of an entrepreneur. He had the vision to monetise his teaching skills and turn his gift into a business opportunity. (Roy Henderson)"
                />
                <ImgHeadingBox
                    path="/images_folder/Dr.-J-C-Chaudhry-vision-.webp"
                    alt="The motto 'no guts no glory' exemplifies Dr. J C Chaudhry"
                    ps="text-justify"
                    heading=''
                    link=''
                    para="The motto 'no guts no glory' exemplifies Dr. J C Chaudhry, a remarkable teacher role model and one of india's most successful entrepreneurs. (Roy Henderson)"
                />
            </div>

            <div className='flex justify-center flex-wrap items-start my-10'>
                <Card para="AS A STUDENT, DR CHAUDHRY RAN AWAY FROM MATHEMATICS, YET, NUMBERS WENT ON TO BECOME HIS BEST FRIENDS." />
                <Card para="THE MAGNIFICENT STATUE AT THE MAA VAISHNO DEVI DHAM EARNED DR JC CHAUDHRY A NAMEIN THE LIMCA BOOK OF RECORDS." />
                <Card para="DR. CHAUDHRY IS A SELF-CONFESSED MOVIE BUFF AND USED TO WATCH ALL MOVIES" />
                <Card para="DR. CHAUDHRY HAD STEPPED OUT TO BUY CLOTHES AND ENDED UP BUYING HIMSELF A BUILDING AND THAT’S HOW THE FAMOUS SOUTH EXTENSION AAKASH CENTRE WAS BORN." />
            </div>
        </div>
  )
}

export default page



export function Card({ para }: { para: string }) {
    return (
        <div className='w-72 h-96 border p-5 shadow-md md:mr-5 rounded-md space-y-5 bg-gray-100 mb-5'>
            <div className='w-20'>
                <img alt='Did You Know' src='/images_folder/Did-You-Know.webp' />
            </div>
            <SubHeading subHeading="Did You Know?" />
            <Para para={para} />
        </div>
    )
}