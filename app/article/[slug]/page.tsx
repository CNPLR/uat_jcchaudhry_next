import { notFound, redirect } from "next/navigation";

import ClientBlog from './Client'
import { Blog } from "@/app/models/blog";
import GenerateMetadata, { buildArticleJsonLd } from "@/app/components/MetaGenerator";
import { headers } from "next/headers";
import { apiFetch } from "@/lib/api";
import { Metadata, ResolvingMetadata } from "next";

const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN || '';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }>, parent: ResolvingMetadata }): Promise<Metadata>  {
  const { slug } = await params;

  const BACKEND = process.env.URI;
  const blogRes = await fetch(`${BACKEND}blog/slug/${slug}`, { next: { revalidate: 3600 }, });
  const blogJson = await blogRes.json();
  const blog: Blog = blogJson?.data?.[0];

  if (!blog) return {};

  return await GenerateMetadata({
    title: blog?.metaTitle,
    description: blog?.metaDescription,
    keywords: blog?.keywords,
    banner: `https://newcnpl.s3.ap-south-1.amazonaws.com/public/blogs/banners/${blog.headerBanner}`,
    pagePath: `/article/${blog?.slug}`,
    // headers: headers,
  });
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const BACKEND = process.env.URI;
  const blogRes = await fetch(`${BACKEND}blog/slug/${slug}`, {  next: { revalidate: 3600 }  });
  const blogJson = await blogRes.json();
  const blog: Blog = blogJson?.data?.[0];

    const path : any= process.env.URI;
  const domain = process.env.DOMAIN;

  if (!blog?.blogIsActive) notFound();

  if (!blog) return null

  // const headersList = await headers();
  // const allHeaders = Object.fromEntries(headersList.entries());

  const blogData:any = await getBlogData(slug, path);

  const bannerUrl = `https://newcnpl.s3.ap-south-1.amazonaws.com/public/blogs/banners/${blog.headerBanner}`

  const fullUrl = `${DOMAIN}/article/${slug}`;
  const jsonLd = buildArticleJsonLd(blog, fullUrl, DOMAIN);

  const faqItems = blog?.faqInput?.map((f) => ({
    "@type": "Question",
    "name": f.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": f.answer
    }
  }));

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems
  }

   GenerateMetadata({
    // pagePath: blog?.slug,
    banner: `https://newcnpl.s3.ap-south-1.amazonaws.com/public/blogs/banners/${blog.headerBanner}`,
    title: blog?.metaTitle,
    description: blog?.metaDescription,
    keywords: blog?.keywords,
    // headers: headers,
  });

  return (
    <>
      {jsonLdFaq && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdFaq)
          }}
          key="faq-schema"
        />
      )}

      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: jsonLd
          }}
          key="article-schema"
        />
      )}

      <ClientBlog slug={slug} initialBlog={blog} bannerUrl={bannerUrl} blogData={blogData} />
    </>
  )
}

export async function getBlogData(slug: string, path: string) {

  const [blogRes, commentsRes] = await Promise.all([
    apiFetch<any>(`${path}blog/slug/${slug}`, {next: { revalidate: 3600, tags: [slug] } }),
    apiFetch<any>(`${path}comment/approvedComments/${slug}`, {revalidate: 3600, tags: [`${slug}-comments`] }),
  ]);

  if (!blogRes || !commentsRes) {
    throw new Error("Failed to fetch data");
  }

  // const blogData = await blogRes.json();
  // const commentsData = await commentsRes.json();

  if (!blogRes?.data?.[0]?.blogIsActive) {
    redirect('/'); // ✅ Server redirect
  }

  return {
    pageData: blogRes.data,
    posts: commentsRes.data,
  };
}