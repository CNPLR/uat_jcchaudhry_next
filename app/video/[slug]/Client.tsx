'use client';

import Banner from "../../components/ui/Banner";
import { CommonVideos } from "../../components/ui/BlogVideos";
import CommonPagination from "../../components/ui/CommonPagination";
import MainHeading from "../../components/ui/MainHeading";


const Client = ({videos, alt, BannerPath, heading}: ClientProps) => {
  return (
    <div>
        <Banner alttag={alt} path={BannerPath} />
        <MainHeading style="text-center my-10" mainHeading={heading} />
        <CommonPagination
            data={videos && videos?.map((ele: any) =>
                <CommonVideos
                    para={ele.title}
                    path={`https://newcnpl.s3.ap-south-1.amazonaws.com/public/jccms/videosthumbnail/${ele.category}/${ele.thumbnail}`}
                    url={ele.videoUrl}
                />
            )}
        />
    </div>
  )
}

export default Client

interface ClientProps {
  videos:any, 
  alt:string, 
  BannerPath:string, 
  heading: string
}