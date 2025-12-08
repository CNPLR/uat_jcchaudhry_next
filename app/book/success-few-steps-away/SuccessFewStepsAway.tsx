'use client'

import { Books } from '@/app/components/ui/Books'
import React, { useState } from 'react'

const SuccessFewStepsAway = () => {
   let arr = [
        "Imagination and Motivation",
        "Be passionate and strive for excellence",
        "An unwavering attitude",
        "Appreciation and Acceptance",
        "Power of Persuasion",
        "Saving for Future",
        "Poverty is No Bar to Success",
        "Philanthropy is True Power",
        "Extraordinary Beliefs",
        "The Harder I Work, The Luckier I Get",
        "Giving Back to the Community",
        "Being Considerate to the Needs of Others",
        "Learn to Go With the Flow",
        "Energy",
        "Create Your Own Circumstances",
        "Evolve",
        "Mastery Over Self",
        "Change Your Thoughts",
        "Prioritizing Your Goals is the Key to Success",
        "Must have Strong Desire",
        "Make their Own Luck",
        "Answer 'NO' is not Accepted at all",
        "The Power of A Positive Attitude",
        "Make a Master Plan",
        "Must not be Afraid of Failure",
        "Focus of Getting Results",
        "Setting Your Priorities",
        "Successful People Strive for Excellence",
        "Successful People Build Relationships with the Right People",
        "Know the Important People in your Life",
        "Must Have Faith",
        "You Should Have Fun during the Work",
        "Fix your Goal in Your Life",
        "Re-Program Your Mind For Success",
        "Must use the Time wisely",
        "Give Yourself and Extra Hour Each Day",
        "Dream for Success",
        "Communicate Effectively",
        "Leadership: What Makes a Good Leader?",
        "Never Quit!",
        "Never Surrender",
    ]

    const [showMore, setShowMore] = useState(false)

    const onClick = () => {
        setShowMore(!showMore)
    }

    return (
        <div>

            <Books
                path="/allbanners/Success-Few-Steps-Away-book-by-Dr-J-C-Chaudhry.webp"
                alttag="Success Few Steps Away book by Dr. J C Chaudhry"
                alt="Success A Few Steps Away Book by J C Chaudhry" 
                path1="/images_folder/Success-A-Few-Steps-Away-Book-by-J-C-Chaudhry.webp"
                para1="The book is a guide for those on the path to achieving goals. At times the goals can be far and the journey can be long. So, the author shares a daily dose of strength and motivation requires at the different stages of life. To have a successful journey, instead of seeing how far is the goal, one should see how much is covered and feel worthy and positive."
                para2="This book is written by the author’s own experiences and all the hard work he did in his life. His thoughts are full of enthusiasm and motivation. Read the book for more guidance in your daily routine."
                para3="The author already has many rewards and recognition under his belt and is unstoppable when it comes to spreading awareness on Motivation, Success, Positivity. Dr. J C Chaudhry (Chairman of Aakash Educational Services Ltd.), is an achiever in the field of the education industry, he is also an Ace Numerologist and a powerful motivational speaker."
                subHeading1="Success, A Few Steps Away"
                subHeading2="Success A Few Steps Away Book, Your Daily Dose of Success and Motivation"
                subHeading3="₹ 250.00"
                text={ showMore ? "Show Less" : "Show More"}
                onClick={onClick}
                list={showMore ? arr : arr.slice(0, 18)}
                link="https://www.amazon.in/dp/8194712661"
            />
        </div>
    )
}

export default SuccessFewStepsAway