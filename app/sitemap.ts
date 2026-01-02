import { MetadataRoute } from "next";
import routes from "../lib/staticRoutes.json";
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://api.jcchaudhry.com";

  type RouteItem = {
  slug: string;
  updatedAt: string;
};

  // Static routes as fallback
 const staticRoutes: MetadataRoute.Sitemap = routes.map((route: RouteItem) => ({
    url: `${process.env.NEXT_PUBLIC_DOMAIN}${route.slug === "/" ? "" : route.slug}`,
    lastModified:route.updatedAt,
    changeFrequency: "monthly",
    priority: 1.0,
  }));
   

  try {
    const [blogRes, pageRes] = await Promise.all([
      fetch(`${baseUrl}/api/blog`, { next: { revalidate: 3600 } }),
      fetch(`${baseUrl}/api/page`, { next: { revalidate: 3600 } }),
    ]);

    if (!blogRes.ok || !pageRes.ok) {
      console.error("One of the API calls failed");
      return staticRoutes;
    }

    const blogsData = await blogRes.json();
    const pageResponse = await pageRes.json();
    
    // Validate that blogs is an array
    const blogs: any[] = Array.isArray(blogsData) ? blogsData : blogsData.data || [];

    // Validate that pages is an array
    const pages: any[] = Array.isArray(pageResponse) ? pageResponse : pageResponse.data || [];
    
    
    if (blogs.length === 0 || pages.length === 0) {
      console.warn("No blogs or pages found for sitemap");
      return staticRoutes;
    }


    const blogRoutes: MetadataRoute.Sitemap = blogs.map((blog) => ({
      url: `${process.env.NEXT_PUBLIC_DOMAIN}/article/${blog.slug}`,
      lastModified: blog?.updatedAt,
      changeFrequency: "weekly",
      priority: 0.7,
    }));

     const pageRoutes: MetadataRoute.Sitemap = pages.map((page) => ({
      url: `${process.env.NEXT_PUBLIC_DOMAIN}/${page.slug}`,
      lastModified: page?.updatedAt,
      changeFrequency: "weekly",
      priority: 0.7,
    }));

    return [...staticRoutes, ...blogRoutes, ...pageRoutes];
  } catch (error) {
    console.error("Error generating sitemap:", error);
    return staticRoutes;
  }
}

