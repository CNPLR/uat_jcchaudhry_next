
interface MetaGeneratorProps {
  title: string;
  description: string;
  keywords: string;
  pagePath?: string;
  blogSchema?: Record<string, any>;
  banner: string;
  blogFaqSchema?: Record<string, any>;
  isCanonical?: boolean;
  // headers: () => Promise<Headers>;
}

export async function GenerateMetadata({
  title,
  description,
  keywords,
  pagePath,
  blogSchema,
  banner,
  blogFaqSchema,
  isCanonical,
  // headers
}: MetaGeneratorProps): Promise< Record<string, any> > {
  const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN || '';
  const imgUrl = banner && banner.includes('http') ?  banner : `${DOMAIN}${banner}`;
  const fullURL =   isCanonical ? `https://www.jcchaudhry.com${pagePath}` : `https://www.jcchaudhry.com${pagePath}`
 
  return {
    title: title,
    description: description,

    keywords: keywords,

    alternates: {
      canonical: fullURL,
    },

    metadataBase: new URL("https://www.jcchaudhry.com"),

    openGraph: {
      locale: "en_US",
      type: "website",
      url: fullURL,
      siteName: "J C Chaudhry",

      title: title,
      description: description,

      images: [
        {
          url: imgUrl,
          width: 1200,
          height: 630,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      site: "@jc_chaudhry",
      url: fullURL,
      title: title,
      description: description,
      images: imgUrl,
    },

    icons: {
      icon: "/favicon_0.ico",
    },

    other: {
      'article:publisher': 'https://www.facebook.com/NumerologistAndMotivator/',
    },
  };
  

};

export default GenerateMetadata;

export function buildArticleJsonLd(blogPost: Record<string, any> | undefined, fullUrl: string | null, domain: string) {
  if (!blogPost || !fullUrl) return null;

  const imageUrl = blogPost.headerBanner
    ? `https://newcnpl.s3.ap-south-1.amazonaws.com/public/blogs/banners/${blogPost.headerBanner}`
    : '';

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": fullUrl
    },
    "headline": blogPost.metaTitle || blogPost.title || '',
    "description": blogPost.metaDescription || '',
    "image": imageUrl,
    "author": {
      "@type": "Person",
      "name": "J C Chaudhry",
      "url": domain
    },
    "publisher": {
      "@type": "Organization",
      "name": "Chaudhry Nummero Pvt. Ltd.",
      "logo": {
        "@type": "ImageObject",
        "url": `${domain}/logos/jclogo.png`
      }
    },
    "datePublished": blogPost.createdAt ? new Date(blogPost.createdAt).toISOString() : undefined,
    "dateModified": blogPost.updatedAt ? new Date(blogPost.updatedAt).toISOString() : undefined
  };

  return JSON.stringify(articleSchema);
}
