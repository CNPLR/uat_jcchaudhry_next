'use client';
import React, { useEffect, useState } from 'react'
import Banner from '../../components/ui/Banner'
import CommonPagination from '../../components/ui/CommonPagination'
import MainHeading from '../../components/ui/MainHeading'
import { CommonVideos } from '../../components/ui/BlogVideos'

export default function MotivationalSeminaar() {
  const [videos, setVideos] = useState<any[]>([])
    let path = process.env.NEXT_PUBLIC_URI
    const url = path + 'getvideosbycategory/category/motivational-seminars'
    useEffect(() => {
        fetch(url).then((res) => res.json()).then((data) => {
            setVideos(data?.data)
        }).catch((err) => console.log(err.message));
    }, [])

    return (
        <div>
            <Banner alttag="Motivational Videos Seminars for students entrepreneurs" path="/allbanners/Motivational-Videos-and-Seminars-for-students-entrepreneurs.webp" />
            <MainHeading style="text-center my-10" mainHeading="Numerology Videos by Dr. J C Chaudhry" />
            <CommonPagination
                data={videos.map((ele: any, idx: number) =>
                    <CommonVideos
                        key={idx}
                        para={ele.title}
                        path={`https://newcnpl.s3.ap-south-1.amazonaws.com/public/jccms/videosthumbnail/${ele.category}/${ele.thumbnail}`}
                        url={ele.videoUrl}
                    />
                )}
            />
        </div>
    )
}
