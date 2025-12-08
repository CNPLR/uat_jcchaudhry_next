import GenerateMetadata from '@/app/components/MetaGenerator';
import Banner from '@/app/components/ui/Banner'
import CommonGallery from '@/app/components/ui/CommonGallery'
import MainHeading from '@/app/components/ui/MainHeading'
import { getImages } from '@/app/services/getImages'
import { headers } from 'next/headers';

export const metadata =  GenerateMetadata({
            title: "Numerology Awards to Dr Dr. J C Chaudhry | Best Numerologist Award",
            description: "Dr. J C Chaudhry has been honored with national and international awards for his work in numerology, education, motivation, and other fields.",
            keywords: "numerologist in india, numerology by jc chaudhry, vaastu shastra expert, motivational speaker, motivational speakers in india",
            pagePath: '/gallery/speech',
            banner: "/allbanners/Gallery-of-Dr-J-C-Chaudhry’s-awards.webp",
            headers: headers,
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