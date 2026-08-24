import Banner from '@/app/components/ui/Banner'
import CommonGallery from '@/app/components/ui/CommonGallery'
import MainHeading from '@/app/components/ui/MainHeading'
import { getImages } from '@/app/services/getImages'
import GenerateMetadata from '@/app/components/MetaGenerator';
import { headers } from 'next/headers';
export const metadata = GenerateMetadata({
    pagePath: "/gallery/dham",
    banner: "/allbanners/Gallery-of-Dr-Chaudhry’s-Dham-ceremonies.webp",
    title: "Maa Vaishno Devi Dham Vrindavan: Photos, Temple Gallery",
    description: "Explore Maa Vaishno Devi Dham Vrindavan through photos of the temple, gufa, Mata idols, ashram, lawns and ongoing construction work.",
    keywords: "numerologist in india, numerology by jc chaudhry, vaastu shastra expert, motivational speaker, motivational speakers in india",
    // headers: headers,
});

const page = async () => {

    const images: string[] =  await getImages('/getImages/category/Dham');

  return (
    <div>
            <Banner alttag="Gallery of Dr. Chaudhry’s Dham ceremonies" path="/allbanners/Gallery-of-Dr-Chaudhry’s-Dham-ceremonies.webp" />
            <MainHeading style="text-center my-10" mainHeading="Dham" />
            <div className='px-10 flex flex-wrap justify-center bg-white'>
                {images && images?.map((ele: any, index: number) =>
                    <CommonGallery key={index}
                        path={`https://newcnpl.s3.ap-south-1.amazonaws.com/public/gallery/Dham/${ele.image}`}
                        para={ele.title}
                        alt={ele.alttag}
                    />
                )}
            </div>
        </div>
  )
}

export default page