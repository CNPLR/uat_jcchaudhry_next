'use client'
import { Books } from '@/app/components/ui/Books'
import React, { useState } from 'react'

const AbcVastuShastra = () => {
    let arr = [
        "Introduction",
        "What is Vastu Shastra?",
        "Types of Vastu Purusha",
        "Five Basic Elements and Vastu Shastra",
        "Effect of Sun Rays",
        "Knowledge of Directions",
        "Flow of Cosmic Energy",
        "Planning of the Residential Building",
        "Shape of the Plot",
        "Location of a House/Flat on a Plot & Directions of Plot",
        "Bhoomi Pujan & Beginning of Construction",
        "Muhurata",
        "Vastu Planning of Independent House & Boundary Wall",
        "Doors and Windows",
        "Staircase & Electric Meter",
        "Kitchen",
        "Living Room/Drawing Room",
        "Dining Room & Puja Room",
        "Master Bed Room",
        "Children's Bed Room",
        "Guest Bed Room",
        "Study Room",
        "Bath Room",
        "Toilets",
        "Overhead Tanks & Underground Tanks",
        "Swimming Pool, Servant Quarter, Roof (Terrace) & Garbage Disposal",
        "Basement Floor & Septic Tank",
        "Thresholds and Hallways (Verandah)",
        "Vastu Planning for a Rented House",
        "Vastu in the Garden",
        "Important Suggestions for Leading a Happy & Healthy Life",
        "Exercise",
    ]
    const [showMore, setShowMore] = useState(false)

    const onClick = () => {
        setShowMore(!showMore)
    }


    return (
        <div>

            <Books
                path="/allbanners/ABC-Vastu-Shastra-book-by-Dr-J-C-Chaudhry.webp"
                alttag="ABC Vastu Shastra book by Dr. J C Chaudhry"
                alt="Vastu Shastra ABC book by Dr. J C Chaudhry" 
                path1="/images_folder/Vastu-Shastra-ABC-book-by-Dr.-J-C-Chaudhry.webp"
                para1="Just like we have ABC for every language which helps us to understand and use the language for our benefit, we have ABC of Vastu which is the study of placing the articles at proper place at (homes, offices, etc.). Vastu is a subject in itself with enough to be explored and has experts to guide and get the best."
                para2="This book “ABC of Vastu” teaches you the different aspects of Vastu and helps you to plan the Vastu for your home, office, or any other place you want. This book covers; What are Vastu elements, directions’ knowledge for Vastu, planning of Vastu for any space from the beginning/construction. Also, the Vastu planning for each area of the house/building like Vastu for doors and windows, staircase, kitchen, living room, dining room, pooja room, bedroom, kids room, guest room, study room, bathroom, Vastu for garden and more. The clear and crisp knowledge in this book is authored by a personality, who has followed it for at least 10 years, used it, tested, and verified it. Dr. J C Chaudhry is an expert with a firm grip on the subject of Numerology and Vastu."
                subHeading1="ABC of Vastu Shastra"
                subHeading2="ABC of Vastu Shastra Book, What is Vastu and Planning of House as per Vastu Directions"
                subHeading3="₹ 325.00"
                text={ showMore ? "Show Less" : "Show More"}
                onClick={onClick}
                list={showMore ? arr : arr.slice(0, 15)}
                link="https://www.amazon.in/dp/8192779408?ref=myi_title_dp"
            />
        </div>
    )
}

export default AbcVastuShastra