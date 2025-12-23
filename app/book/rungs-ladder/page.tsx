import GenerateMetadata from '@/app/components/MetaGenerator'
import RaungsLadder from './RaungsLadder'

export const metadata = GenerateMetadata({
    banner: "/allbanners/Rungs-of-Ladder-book-by-Dr-J-C-Chaudhry.webp",
    title: "Rungs of the Ladder for Success Book | Small Steps Towards Success",
    description: "You need motivation and inspiration on different stages of life. This book explains how you can work on smaller parts and collect success formulas for you.",
    keywords: "Book on success tips, how to take steps for success, motivation for success book, book to create habits of being successful, how to get success easily, success formula by experts",
    pagePath: "/book/rungs-ladder",
})
const page = () => {
  return (
    <RaungsLadder/>
  )
}

export default page