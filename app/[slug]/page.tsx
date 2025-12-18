import React, { use } from 'react'
import Numerology from './Numerology'
import GenerateMetadata from '../components/MetaGenerator';
import { headers } from 'next/headers';
import { PageDataResult, usePageData } from '../components/numerology/UsePageData';

type Props = {
  params: { slug: string };
};


export async function  GMetadata({params}: Props) {  

  const { slug } = await params;

  const data: PageDataResult = await usePageData(slug, process.env.NEXT_PUBLIC_URI || "");

  const { pageData } = await data;
  return GenerateMetadata({
     title:pageData.metaTitle,
      description:pageData.metaDescription,
      keywords:pageData.keywords,
      banner:`https://newcnpl.s3.ap-south-1.amazonaws.com/public/pages/banners/${pageData.headerBanner}`,
    headers: headers,
  });
}
const page = async ({params}: Props) => {
  const { slug } = await params;

 const data: PageDataResult = await usePageData(slug, process.env.NEXT_PUBLIC_URI || "")

  return (
    <Numerology slug={slug} pagesData={data} />
  )
}

export default page
