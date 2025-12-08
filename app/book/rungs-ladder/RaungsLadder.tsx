'use client'
import { Books } from '@/app/components/ui/Books'
import React, { useState } from 'react'

const RaungsLadder = () => {
  let arr = [
        "Be a Worker First (No shame in doing work, Small or Big)",
        "Taking Responsibility",
        "Zero Tolerance Policy",
        "Wearing Uniforms",
        "Reliability (Reporting System)",
        "Integrity & Strong Ethical Culture (Purchase and Procurement Committee)",
        "Each Individual is Important and Needs Appreciation",
        "Arrogance is Your Downfall",
        "Self-Confidence",
        "Admission of Mistakes",
        "Limit Cell Phone Usage",
        "Think Big",
        "Belief in God",
        "Maintain Good Health",
        "Prioritize Quality Sleep",
        "Exceptional Passion and Persistence",
        "Do Not Lie About Where You Live",
        "As You Sow, So Shall You Reap",
        "Self-Introspection",
        "Robust Human Resources",
        "Development of Leadership (Parallel New line of Leadership)",
        "Importance of Truth",
        "Confidentiality",
        "Avoid Jealousy and Comparison",
        "Overcome Procrastination",
        "Managing Ego Clashes (Fear of Job/Less of Inner Courage)",
        "Do Not Bad Mouth Your Employer/Organization",
        "Money Lending Can Break Your Relationships",
        "Speak Less and Wise",
        "Remove Persistent Negativity",
        "You Can Tell a Lot About Someone. Before a Word is Spoken",
        "Learn To Keep Secrets",
        "Key to Success",
        "Save Wisely",
        "Rewards and Punishment",
        "Habit of Planning in Advance",
        "Philanthropy",
        "Give Without Expectations",
        "Communication",
        "Welcoming New Employees",
        "Time Is Invaluable",
        "Control Your Anger",
        "Company and Team Work To Come First",
        "To Go Extra Mile",
        "Over Smart",
        "Undying Desire to Excel",
        "Honesty",
        "Customer Satisfaction",
        "Intuition",
        "Empathy",
    ]

    const [showMore, setShowMore] = useState(false)

    const onClick = () => {
        setShowMore(!showMore)
    }

    return (
        <div>

            <Books
                path="/allbanners/Rungs-of-Ladder-book-by-Dr-J-C-Chaudhry.webp"
                alttag="Rungs of Ladder book by Dr. J C Chaudhry"
                alt="Rungs of the Ladder Book by J C Chaudhry"
                path1="/images_folder/Rungs-of-the-Ladder-Book-by-J-C-Chaudhry.webp"
                para1="This book is authored by Dr. J C Chaudhry (Chairman of Aakash Educational Services Ltd.). He is an achiever and a valued contributor in the field of education industry, who is also an Ace Numerologist and a powerful connect with all his students when it comes to motivation and guidance"
                para2="With an eye for finest detail and discipline, he has framed his thoughts in words. He has simply and clearly listed the challenges and how we should handle them with the best approach, so as to get the best results. It is often said that your thoughts become your environment. So, what are you waiting for, let your thoughts be inspired by his book and who knows, you might be the next unstoppable following in his footsteps, and achieving all your goals with absolute determination, motivation for life and steps to success."
                subHeading1="Rungs of The Ladder"
                subHeading2="Rungs of the Ladder Book, Motivation for Life and Steps to Success"
                subHeading3="₹ 150.00"
                onClick={onClick}
                text={showMore ? "Show Less" : "Show More"}
                list={showMore ? arr : arr.slice(0, 12)}
                link="https://www.amazon.in/dp/8194712688"
            />
        </div>
    )
}

export default RaungsLadder