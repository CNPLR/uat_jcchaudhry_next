import GenerateMetadata from '@/app/components/MetaGenerator';
import Banner from '@/app/components/ui/Banner'
import CommonGallery from '@/app/components/ui/CommonGallery'
import MainHeading from '@/app/components/ui/MainHeading'
import { getImages } from '@/app/services/getImages'

export const metadata =  GenerateMetadata({
            title: "Dr. JC Chaudhry Speech Gallery: Motivational Talks, Seminars",
            description: "Explore Dr. JC Chaudhry's motivational speeches, student seminars and talks on learning, time management, education and personal growth.",
            keywords: "numerologist in india, numerology by jc chaudhry, vaastu shastra expert, motivational speaker, motivational speakers in india",
            pagePath: '/gallery/speech',
            banner: "/allbanners/Gallery-of-Dr-J-C-Chaudhry’s-awards.webp",
            // headers: headers,
         });
         
const  page = async () => {
   

    const images: string[] =  await getImages('/getImages/category/Speach');
        
    
  return (
     <div>
            <Banner alttag="Gallery of Dr. J C Chaudhry’s public speeches" path="/allbanners/Gallery-of-Dr-J-C-Chaudhry’s-public-speeches.webp" />
            <MainHeading style="text-center my-10" mainHeading="Speech" />
            <div className='px-10 flex flex-wrap justify-center bg-white'>
                {images && images?.map((ele: any, index: number) =>
                    <CommonGallery key={index}
                        path={`https://newcnpl.s3.ap-south-1.amazonaws.com/public/gallery/Speach/${ele.image}`}
                        para={ele.title}
                        alt={ele.alttag}
                    />
                )}
            </div>
        </div>
  )
}

export default page