import GenerateMetadata from '@/app/components/MetaGenerator';
import { Books } from '@/app/components/ui/Books';
import { headers } from 'next/headers';

export const metadata = GenerateMetadata({
    banner: "/allbanners/I-Think-book-by-Dr-J-C-Chaudhry.webp",
    title: "I Think | Motivational Quotes Book | Dr Dr. J C Chaudhry",
    description: "I Think- poverty is no bar for success book is a collection of inspirational quotes by Dr. J C Chaudhry for positive thinking and success in life.",
    keywords: "numerologist in india, numerology by jc chaudhry, vaastu shastra expert, motivational speaker, motivational speakers in india",
    headers: headers
})

const page = () => {
  let arr = [
        "Types of Meditation",
        "Methods of doing Meditation",
        "Swara Yoga",
        "The Happy Hormone 'Dopamine'",
        "The Power of Subconscious Mind",
        "Gemstones & Their Healing Power",
    ]

    return (
        <div>
            <Books
                path="/allbanners/I-Think-book-by-Dr-J-C-Chaudhry.webp"
                alttag="I Think book by Dr. J C Chaudhry"
                alt="I think.. Poverty is no bar for Success"
                path1="/images_folder/I-think..-Poverty-is-no-bar-for-Success.webp"
                para1="I think…Poverty is no bar for success” Is a clear concept, easily understandable book. And as The famous proverb is “It’s not your fault if you are born poor but if you die poor, it is only your fault”. This book portrays that motivation and continuous hard work are the only ways and keys to success."
                para2="In this book the primary essence is motivation. The author is trying to tell you that as a matter of fact, we humans, will find and always find ways to do what we want to do. So, this book wipes clean any excuse that gets used for failure or lack of success."
                para3="The author has written beautiful quotes for self-motivation that will inspire you to do something bigger and different at every step of life. The author of this book, Dr. J C Chaudhry, (Chairman of Aakash Educational Services Ltd.) is an achiever in the field of the education industry, he is also an Ace Numerologist and a powerful motivational speaker."
                subHeading1="I Think…"
                subHeading2="I think.. Poverty is no bar for Success Book, Everyday Motivational Quotes for Students and Entrepreneurs in Hindi and English"
                subHeading3="₹ 500.00"
                list={arr}
                link="https://www.amazon.in/dp/8194712653?ref=myi_title_dp" text={''}           
            />
        </div>
    )
}

export default page