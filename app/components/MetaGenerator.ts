
interface MetaGeneratorProps {
  title: string;
  description: string;
  keywords: string;
  pagePath?: string;
  blogSchema?: Record<string, any>;
  banner: string;
  blogFaqSchema?: Record<string, any>;
  isCanonical?: boolean;
  headers: () => Promise<Headers>;
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
  headers
}: MetaGeneratorProps): Promise< Record<string, any> > {
  const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN || '';
  const imgUrl = banner && banner.includes('http') ? `${DOMAIN}${banner}` : banner;

  const headersList = await headers()
  const fullURL = headersList.get('referer')


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
