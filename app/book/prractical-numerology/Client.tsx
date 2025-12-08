'use client'
import { Books } from '@/app/components/ui/Books'
import React, { useState } from 'react'

const page = () => {
     let arr = [
        "Nomenclature/Naming System in Numerology",
        "Vowels and Consonants",
        "Basics of Numerology",
        "About Psychic Number",
        "Role and Characteristics of Destiny Number",
        "Compound Numbers",
        "How to Calculate Personal Year and its affects?",
        "How to Calculate Personal Month?",
        "How will be Today’s date for You for a Specific Action?",
        "The Karmic Debt Numbers",
        "Lo Shu Grid Magic Square",
        "Interrelation of Numbers with Five Elements",
        "Effects & Remedies of Missing Numbers",
        "Effects of Repetitions of Numbers",
        "Favourite Gemstone according to Numerological Calculation",
        "The Day, Time, Procedure, Daan, Mantra at the time of Wearing Gemstone",
        "Numbers Have a Lot to Say about Career",
        "Help of Numerology in Marriage",
        "Relationships and Characteristics of Numbers",
    ]
    const [showMore, setShowMore] = useState(false)

    const onClick = () => {
        setShowMore(!showMore)
    }

  return (
     <div>

            <Books
                path="/allbanners/Practical-numerology-book-by-Dr-J-C-Chaudhry.webp"
                alttag="Practical numerology book by Dr. J C Chaudhry"
                alt="Practical numerology book by Dr. J C Chaudhry"
                path1="/images_folder/Practical-numerology-book-by-Dr.-J-C-Chaudhry.webp"
                para1="“Prractical Numerology” A book about relationship of numbers."
                para2="This book takes you an easy, simple and a pleasant journey of understanding the effect and significance of numbers in your everyday life. You can learn how numbers have the power to rule your life and how you can get the best for you and your family."
                subHeading1="Prractical Numerology"
                subHeading2="Prractical Numerology Book, Learn Numerology, Future Predictions with Numerology"
                subHeading3="₹ 525.00"
                text={ showMore ? "Show Less" : "Show More"}
                list={showMore ? arr : arr.slice(0, 15)}
                onClick={onClick}
                link="https://www.amazon.in/dp/819471267X"
            />
        </div>
  )
}

export default page