export interface Author {
  name: string;
  url: string;
}

export interface FAQInput {
    _id: string;
    question: string,
    answer: string,
}

export interface IBlog {
  author: Author;

  _id: string;
  slug: string;

  pageTitle: string;
  tag: string;

  metaTitle: string;
  metaDescription: string;

  headerBanner: string;
  thumbnail: string;

  pageContent: string;

  createdAt: string;
  updatedAt: string;

  blogPublishDate: string;
  blogUpdateDate: string;

  blogIsActive: boolean;

  readTime: string;

  keywords: string;
  alttag: string;

  faqInput: FAQInput[];

  __v: number;
}
