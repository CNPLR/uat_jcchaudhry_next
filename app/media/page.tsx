import { headers } from 'next/headers';
import GenerateMetadata from '../components/MetaGenerator';
import Banner from '../components/ui/Banner'
import CommonGallery from '../components/ui/CommonGallery'
import MainHeading from '../components/ui/MainHeading'
import { getImages } from '../services/getImages'

export const metadata = GenerateMetadata({
        pagePath: "/media",
        banner: "/allbanners/Dr-Chaudhry-featured-in-media.webp",
        title: "Media Coverage | News &amp; Recognition | Dr. J C Chaudhry",
        description: "Latest news about Dr. J C Chaudhry in education and numerology field.",
        keywords: "numerologist in india, numerology by jc chaudhry, vaastu shastra expert, motivational speaker, motivational speakers in india",
        
    });

const page = async () => {

    const images: string[] =  await getImages('/getImages/category/Media');

  return (
   <div>
            <Banner alttag="Dr. Chaudhry featured in media" path="/allbanners/Dr-Chaudhry-featured-in-media.webp" />
            <MainHeading style="text-center my-10" mainHeading="Media" />
            <div className='px-10 flex flex-wrap justify-center bg-white'>
                {images && images?.map((ele: any, index: number) =>
                    <CommonGallery key={index}
                        path={`https://newcnpl.s3.ap-south-1.amazonaws.com/public/gallery/Media/${ele.image}`}
                        para={ele.title}
                        alt={ele.alttag}
                    />
                )}
            </div>
        </div>
  )
}

export default page