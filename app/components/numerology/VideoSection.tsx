import { memo, Suspense } from "react";
import SubHeading from "../ui/SubHeading";
import { CommonVideos } from "../ui/BlogVideos";
import { VideoSkeleton } from "./VideoSkeleton";

 export const VideoSection = memo(({ videos, title }: { videos: any; title?: string }) => (
    <div className='border bg-slate-100 my-10 w-[90%] mx-auto rounded-md pt-7'>
        {title && <SubHeading style="text-center my-5" subHeading={title} />}
        <div className='flex items-center justify-center flex-wrap'>
            {videos?.map((video: any, index:number) => (
                <Suspense key={video._id || index} fallback={<VideoSkeleton />}>
                    <CommonVideos
                        para={video.title}
                        path={`https://newcnpl.s3.ap-south-1.amazonaws.com/public/jccms/videosthumbnail/${video.category}/${video.thumbnail}`}
                        url={video.videoUrl}
                    />
                </Suspense>
            ))}
        </div>
    </div>
));