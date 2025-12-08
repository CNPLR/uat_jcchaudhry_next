export interface Blog {
  _id: string

  // URL & Identity
  slug: string
  pageTitle: string
  tag: string

  // SEO
  metaTitle: string
  metaDescription: string
  keywords: string
  alttag: string

  // Content
  pageContent: string
  headerBanner: string
  thumbnail: string

  // Dates
  createdAt: string
  updatedAt: string
  blogPublishDate: string
  blogUpdateDate: string

  // Status
  blogIsActive: boolean

  // Meta display
  readTime: string | number

  // FAQ
  faqInput: FAQ[]

}


interface FAQ {
  question: string
  answer: string
}