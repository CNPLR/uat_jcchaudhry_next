
import GenerateMetadata from '@/app/components/MetaGenerator';
import { getVideos } from '@/app/services/getVideos';
import { headers } from 'next/headers';
import VideoMetaData from '../VideoPagesMeta';
import Client from './Client';

type Props = {
  params: { slug: string };
};


const page = async ({ params }: Props) => {
   const { slug } = await params; 

    const videos = await getVideos(VideoMetaData[slug]?.videoUrl);

  return (
    <Client videos={videos} alt={slug} BannerPath={VideoMetaData[slug]?.banner} heading={VideoMetaData[slug].heading} />
  )
}

export default page

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;

  const meta = VideoMetaData[slug];

  if (!meta) return {};

  return GenerateMetadata({
    banner: meta.banner,
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    pagePath: `/video/${slug}`,
  });
}
