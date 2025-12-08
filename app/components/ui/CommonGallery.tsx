import Img from "./Img";
import Para from "./Para";

interface CommonGalleryProps {
  path: string;
  para: string;
  style?: string;
  alt?: string;
}

export default function CommonGallery({
  path,
  para,
  style = "",
  alt = "",
}: CommonGalleryProps) {
  return (
     <div className={`${style} border shadow-md rounded-md md:mr-8 mb-8 p-2 w-52`}>
            <Img style="m-auto rounded-md w-52 " path={path} alt={alt} />
            <div className='w-full h-[2px] bg-white mt-2'></div>
            <Para style="text-center" para={para} />
        </div>
  );
}
