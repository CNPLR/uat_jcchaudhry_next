'use client'

import { Books } from "@/app/components/ui/Books"
import { useState } from "react"

const NatureBestCure = () => {
     let arr = [
        "Ajwain (Carom Seeds)",
        "Almonds",
        "Amla",
        "Banana (Green)",
        "Banana (Yellow)",
        "Beetroot",
        "Bitter Gourd",
        "Cabbage",
        "Carrots",
        "Clove",
        "Fig (Anjeer)",
        "Flax Seeds",
        "Garlic",
        "Ginger",
        "Honey",
        "Isabgol",
        "Jaggery",
        "Jamun (Black Plum)",
        "Kalonji",
        "Lady Finger (Okra)",
        "Lemon",
        "Meethi (Fenugreek Seeds)",
        "Neem",
        "Olives",
        "Onion",
        "Orange",
        "Radish",
        "Spinach",
        "Taro Root",
        "Tulsi",
        "Turmeric",
        "Walnut",
        "Black Pepper",
        "Green Cardamom",
        "Rasbhari",
    ]
    const [showMore, setShowMore] = useState(false)

    const onClick = () => {
        setShowMore(!showMore)
    }

  return (
    <div>
            <Books
                path="/allbanners/Nature’s-best-cure-book-by-Dr-J-C-Chaudhry.webp"
                alttag="Nature’s best cure book by Dr. J C Chaudhry"
                alt="Nature’s Best Cure book by Dr. J C Chaudhry"
                path1="/images_folder/Nature’s-Best-Cure-book-by-Dr.-J-C-Chaudhry.webp"
                para1="Nature, The Best Cure book is your home Doctor. This book brings you all the Daadi, Naani home remedies for a healthy living and a better health. If you are suffering from any of the diseases and illness like diabetes, joint problems, arthritis, constipation, heart issues, migraine, weight loss, bones health, skin health, low vision/eyesight, blood pressure etc., then this book can prove to be your best friend."
                para2="This book with 127 pages, explains 35 herbs and spices with their health benefits, dosage, methods to use and side effects (if consumed in large quantity)."
                subHeading1="Nature - The Best Cure"
                subHeading2="Nature - The Best Cure Book, Home Doctor for a Healthy Living."
                subHeading3="₹ 300.00"
                text={ showMore ? "Show Less" : "Show More"}
                list={showMore ? arr : arr.slice(0, 15)}
                onClick={onClick}
                link="https://www.amazon.in/dp/8192779440?ref=myi_title_dp"
            />
        </div>
  )
}

export default NatureBestCure