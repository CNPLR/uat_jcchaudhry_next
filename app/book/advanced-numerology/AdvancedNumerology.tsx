'use client'
import { Books } from '@/app/components/ui/Books'
import React, { useState } from 'react'

const AdvancedNumerology = () => {
  let arr = [
         "Introduction",
         "Power of Name",
         "Number 1: The Sun",
         "Number 2: The Moon",
         "Number 3: The Jupiter",
         "Number 4: The Rahu",
         "Number 5: The Mercury",
         "Number 6: The Venus",
         "Number 7: The Ketu",
         "Number 8: The Saturn",
         "Number 9: The Mars",
         "The Compound Numbers",
         "The Karmic Dept Numbers",
         "Lo Shu Grid or 3x3 Grid",
         "Numbers & Gemstones",
         "Colours and Effects of Planets on them and Colours for Various Occasions",
         "Knowing about the Personal Year",
         "Relationships and Characteristics of Numbers",
     ]
 
     const [showMore, setShowMore] = useState(false)
 
     const onClick = () => {
         setShowMore(!showMore)
     }
   return (
     <div>
             <Books
                 alttag="Advanced numerology book by Dr. J C Chaudhry"
                 path="/allbanners/Advanced-numerology-book-by-Dr-J-C-Chaudhry.webp"
                 alt="Advanced numerology book by Dr. J C Chaudhry"
                 path1="/images_folder/Advanced-numerology-book-by-Dr.-J-C-Chaudhry.webp"
                 para1="This book opens up doors of information and insight into the study of numbers. For the believers in this science of numbers, it tells which number is ruled by which planet and their characteristics in detail. This book guides you to calculate your friendly and anti-numbers, your relationship compatibility with others."
                 para2="In his attempt to share knowledge and do better for others, Dr. J C Chaudhry has also explained karmic debt, colors and their effect on planets, how to know your personal year along with relationships and characteristics of numbers."
                 subHeading1="Advanced Numerology"
                 subHeading2="Advanced Numerology Book, Number Numerology and Relationship of Numbers Explained"
                 subHeading3="₹ 550.00"
                 onClick={onClick}
                 text={ showMore ? "Show Less" : "Show More"}
                 list={showMore ? arr : arr.slice(0, 15)}
                 link="https://www.amazon.in/dp/819395310X?ref=myi_title_dp"
                 
             />
         </div>
   )
}

export default AdvancedNumerology