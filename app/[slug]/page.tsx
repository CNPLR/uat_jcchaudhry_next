import React, { use } from 'react'
import Numerology from './Numerology'
import GenerateMetadata from '../components/MetaGenerator';
import { PageDataResult, usePageData } from '../components/numerology/UsePageData';
import { Metadata, ResolvingMetadata } from 'next';

type Props = {
  params: { slug: string };
};


export async function  generateMetadata({params}: Props, parent: ResolvingMetadata): Promise<Metadata> {  

  const { slug } = await params;

  const response = await fetch(`${process.env.NEXT_PUBLIC_URI}page/slug/${slug}`, {
    next: { revalidate: 3600 },
  });

  const data  = await response.json();
  const pageData = data?.data[0];
  return await GenerateMetadata({
     title:pageData?.metaTitle,
      description:pageData?.metaDescription,
      keywords:pageData?.keywords,
      banner:`https://newcnpl.s3.ap-south-1.amazonaws.com/public/pages/banners/${pageData?.headerBanner}`,
      pagePath:`/${slug}`,
    // headers: headers,
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
