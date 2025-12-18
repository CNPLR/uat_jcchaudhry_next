import { redirect } from "next/navigation";

const slugRedirectMap: Record<string, string> = {
  "lo-shu-grid-mssing-number-1": "/lo-shu-grid-missing-number-1",
  "lo-shu-grid-mssing-number-2": "/lo-shu-grid-missing-number-2",
  "lo-shu-grid-mssing-number-3": "/lo-shu-grid-missing-number-3",
  "lo-shu-grid-mssing-number-4": "/lo-shu-grid-missing-number-4",
  "lo-shu-grid-mssing-number-5": "/lo-shu-grid-missing-number-5",
  "lo-shu-grid-mssing-number-6": "/lo-shu-grid-missing-number-6",
  "lo-shu-grid-mssing-number-7": "/lo-shu-grid-missing-number-7",
  "lo-shu-grid-mssing-number-8": "/lo-shu-grid-missing-number-8",
  "lo-shu-grid-mssing-number-9": "/lo-shu-grid-missing-number-9",
};

export async function usePageData(slug: string, path: string): Promise<PageDataResult> {
  // ✅ Redirect handling
  if (slugRedirectMap[slug]) {
    redirect(slugRedirectMap[slug]);
  }

  // ✅ Fetch page data
  const response = await fetch(`${path}page/slug/${slug}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch page data");
  }

  const result = await response.json();

  if (!result?.data?.length) {
    redirect("/");
  }

  const firstData = result.data[0];

  let footerData = [];
  let footerHeading = null;

  // ✅ Fetch footer data if category exists
  if (firstData.category) {
    const footerRes = await fetch(`${path}footers/category/${firstData.category}`, {
      cache: "no-store",
    });

    if (footerRes.ok) {
      const footerJson = await footerRes.json();
      const rawFooter = footerJson?.data[0]?.footer || [];

      footerData = rawFooter.filter((item: any) => item.link !== slug);
      footerHeading = footerJson?.data[0]?.footerHeading;
    }
  }

  // ✅ Return same structure your component expects
  return {
    pageData: result.data,
    boxData: firstData.box,
    cardData: firstData.cardData,
    horizontalData: firstData.horizontalCardData,
    footerData,
    footerHeading,
    cardHeading: firstData.cardHeading,
    category: firstData.category,
  } as PageDataResult;
}


export interface PageDataResult {
 pageData:any,
  boxData:any,
  cardData:any,
  horizontalData:any,
  footerData: any,
cardHeading:any,
footerHeading:any,
category:any,
loading:any,
error:any,
retryFetch: any,
}
