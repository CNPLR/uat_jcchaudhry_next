// app/sitemap/page.tsx
import Link from "next/link";
import route from "../../lib/staticRoutes.json";

const apiUrl = "https://api.jcchaudhry.com";
type Blog = {
  title: string;
  slug: string;
};

async function getBlogs(): Promise<Blog[]> {
  const res = await fetch(`${apiUrl}/api/blog`, {
    cache: "no-store",
  });

  return res.json();
}

async function getPages(): Promise<Blog[]> {
  const res = await fetch(`${apiUrl}/api/page`, {
    cache: "no-store",
  });

  return res.json();
}


export default async function Page() {
  const res: any = await getBlogs();
  const pages: any = await getPages();
  const staticPages = route.map((route) => ({
    slug: `${route}`

  }))
  const blogs = await [...route , ...res?.data , ...pages?.data] || [];

  return (
    <main className="max-w-9/12 mx-auto px-5 py-10">
      <h1 className="text-3xl font-bold mb-6">XML Sitemap</h1>

      {/* Blog Pages */}
      <section>
        {/* <h2 className="text-xl font-semibold mb-3">Articles</h2> */}
        <div className="w-full">

          {/* <!-- Header --> */}
          <div className="grid grid-cols-[80px_1fr_220px] p-5 bg-gray-100 border-b font-semibold">
            <div>No.</div>
            <div>Sitemap</div>
            <div>Last Modified</div>
          </div>

          {/* <!-- Body --> */}
          <div className="[&>*:nth-child(odd)]:bg-white
              [&>*:nth-child(even)]:bg-gray-100">
            {
              blogs.map((item: any, i: number) => {
                if (item.slug !== undefined && !item.slug.includes("/")) {
                  return (
                    <div key={i} className="grid grid-cols-[80px_1fr_220px] px-5 py-3 border-b">
                      <div>{i + 1}.</div>
                      <div className="break-all hover:text-blue-500 hover:underline"><Link href={`/article/${item.slug}`}>{item.slug}</Link></div>
                      <div>{item && new Date(item?.updatedAt ).toLocaleString('en-GB')}</div>
                    </div>
                  )
                }
                else if(item?.slug?.includes("/") && item.slug !== "/") {
                  return (
                    <div key={i} className="grid grid-cols-[80px_1fr_220px] px-5 py-3 border-b">
                      <p>{i + 1}.</p>
                      <p className="break-all hover:text-blue-500 hover:underline"><Link href={`/${item.slug}`}>{item.slug.replace("/", "")}</Link></p>
                      <p>{item && new Date(item?.updatedAt ).toLocaleString('en-GB')}</p>
                    </div>
                  )
                }
              })
            }



          </div>
        </div>
      </section>
    </main>
  );
}

export function pathToPascalTitle(path: string): string {
  return path?.split("/")                 // split segments
    .filter(Boolean)            // remove empty items
    .map(segment =>
      segment
        .split("-")             // split kebab-case
        .map(word =>
          word.charAt(0).toUpperCase() + word.slice(1)
        )
        .join(" ")
    )
    .join(" ");
}