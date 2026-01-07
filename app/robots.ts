import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const apiUrl = process.env.NEXT_PUBLIC_URI
  const allow = apiUrl?.includes("staging") ?{disallow: "/"}:{allow: "/"};
  return {
    rules: [
      {
        userAgent: "*",
        ...allow
        // allow: "/",
        // disallow: "/",
      },
    ],
    // sitemap: process.env.DOMAIN + "/sitemap.xml",
  };
}