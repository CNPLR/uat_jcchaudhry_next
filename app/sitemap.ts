import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Sitemap {
  return [{
    url: `${process.env.DOMAIN}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 1
  }];
}