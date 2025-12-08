'use client'
import { Books } from '@/app/components/ui/Books'
import React, { useState } from 'react'

const FundamentalsVastu = () => {
    let arr = [
        "Introduction",
        "Five Basic Elements and Vastu Shastra",
        "Knowledge of Directions",
        "Flow of Cosmic Energy",
        "Shape of the Plot",
        "Effect of Sun Rays",
        "Bhoomi Pujan & Beginning of Construction",
        "Location of a House/Flat on a Plot & Directions of Plot",
        "Muhurata",
        "Vastu Planning of Independent House & Boundary Wall",
        "Doors and Windows",
        "Staircase, Electric Meter & Other Electric Equipment",
        "Kitchen",
        "Master Bed Room",
        "Drawing Room/Living Room",
        "Dining Room & Puja Room",
        "Children's Bed Room",
        "Study Room",
        "Guest Bed Room",
        "Bath Room",
        "Toilets",
        "Overhead Tanks & Underground Tanks",
        "Swimming Pool, Servant Quarter, Roof (Terrace) & Garbage Disposal",
        "Basement Floor & Septic Tank",
        "Thresholds and Hallways (Verandah)",
        "Vastu Planning for a Rented House",
        "Vastu in the Garden",
        "Important Vastu Tips for Happy Married Life & Wealth",
        "Important Suggestions for Leading. A Happy & Healthy Life",
        "Vastu for Commercial Spaces and Industrial Establishments",
        "Exercise",
    ]

    const [showMore, setShowMore] = useState(false)

    const onClick = () => {
        setShowMore(!showMore)
    }

    return (
        <div>
            <Books
                path="/allbanners/Fundamentals-of-vastu-book-by-Dr-J-C-Chaudhry.webp"
                alttag="Fundamentals of vastu book by Dr. J C Chaudhry"
                alt="Fundamentals of numerology by Dr. J.C. Chaudhry." 
                path1="/images_folder/Fundamentals-of-numerology-by-Dr.-J.C.-Chaudhry.webp"
                para1="Similar to all the religious rituals and fundamentals for society, experts suggest that there are fundamentals to be considered for the construction of buildings and houses. This book on Vastu known as ‘Fundamentals of Vastu’ gives us a basic, clear, and simple but strong understanding of principles that must be followed while we build and give shape to our dream construction. This book gives us a fair understanding of the five basic elements and Vastu Shastra and a combination of both which works in perfect harmony for a blessed life."
                para2="The information and guidance given in this book are by a seasoned personality, Dr. J C Chaudhry who has lived by performance and by examples."
                subHeading1="Fundamentals of Vastu"
                subHeading2="Fundamentals of Vastu Book, Home Construction and Vastu Tips for Kitchen, Pooja Room, Living Room, Bedroom, Children Room, Bathroom"
                subHeading3="₹ 400.00"
                text={showMore ? "Show Less" : "Show More"}
                list={showMore ? arr : arr.slice(0, 10)}
                onClick={onClick}
                link="https://www.amazon.in/dp/8194712629"
            />
        </div>
    )
}

export default FundamentalsVastu