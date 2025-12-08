import GenerateMetadata from '@/app/components/MetaGenerator';
import { Books } from '@/app/components/ui/Books';
import { headers } from 'next/headers';
import React from 'react'

export const metadata = GenerateMetadata({
    banner: "/allbanners/You-and-Your-Gems-book-by-Dr-J-C-Chaudhry.webp",
    title: "You & Your Gems | Gemstone Types & Benefits | Dr Dr. J C Chaudhry",
    description: "You and Your Gems book by Dr. J C Chaudhry explains different gems, gemstones colours, significance and how it can bring happiness in life.",
    keywords: "numerologist in india, numerology by jc chaudhry, vaastu shastra expert, motivational speaker, motivational speakers in india",
    headers: headers
})
const page = () => {
    let arr = [
        "The Organic Gems",
        "Precious and Semi - Precious Gems",
        "Varieties of Gems",
        "Properties of Gems",
        "How Gems are made",
        "The Planets & their Gemstones",
        "How to use Gemstones",
        "Healing Power of Gemstones",
        "Diseases & Gems Recommended",
        "Gems for Old Age Disease",
        "Effects of Colours",
    ]


    return (
        <div>

            <Books
                path="/allbanners/You-and-Your-Gems-book-by-Dr-J-C-Chaudhry.webp"
                alttag="You and Your Gems book by Dr. J C Chaudhry"
                alt="You and Your Gems Book by J C Chaudhry"
                path1="/images_folder/You-and-Your-Gems-Book-by-J-C-Chaudhry.webp"
                para1="This book is supposed to bring happiness in the lives of the people by protecting them from ill effects of planet, and protecting them from the unforeseen situations, if it is read perceptively and followed prudently under the guidance of some expert."
                para2="Gemstones have a great significance in numerology and astrology. Each gemstone belongs to a particular planet and carry a vibration and effect with itself. What if, we know the best for us and also the worse for us. We, will have a winning situation mostly. This book explains about different gemstones, their origin and relationship with the human body."
                subHeading1="A Book on Gemstones"
                subHeading2=""
                subHeading3="₹ 600.00"
                list={arr}
                link="https://www.amazon.in/dp/B08HN568XZ?ref=myi_title_dp" text={''}            
            />
        </div>
    )
}

export default page