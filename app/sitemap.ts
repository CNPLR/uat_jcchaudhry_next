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
    url: `${process.env.DOMAIN}${route.slug === "/" ? "" : route.slug}`,
    lastModified:route.updatedAt,
    changeFrequency: "monthly",
    priority: 1.0,
  }));
   

  try {
    const response = await fetch(`${baseUrl}/api/blog`, {
       next: { revalidate: 3600 },
    });

    // Check if response is successful
    if (!response.ok) {
      console.error(`Failed to fetch blogs: ${response.status}`);
      return staticRoutes;
    }

    const res = await response.json();
    
    // Validate that blogs is an array
    const blogs: any[] = Array.isArray(res) ? res : res.data || [];
    
    if (blogs.length === 0) {
      console.warn("No blogs found for sitemap");
      return staticRoutes;
    }

    const blogRoutes: MetadataRoute.Sitemap = blogs.map((blog) => ({
      url: `${process.env.DOMAIN}/article/${blog.slug}`,
      lastModified: blog?.updatedAt,
      changeFrequency: "weekly",
      priority: 0.7,
    }));

    return [...staticRoutes, ...blogRoutes];
  } catch (error) {
    console.error("Error generating sitemap:", error);
    return staticRoutes;
  }
}

