import { Books } from '@/app/components/ui/Books'
import React from 'react'

const MeditationSubconsciousMind = () => {
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
              path="/allbanners/Meditation-and-subconscious-mind-book.webp"
              alttag="Meditation and subconscious mind book"
              alt="Meditation and subconscious mind book by Dr. Chaudhry"
              path1="/images_folder/Meditation-and-subconscious-mind-book-by-Dr.-Chaudhry.webp"
              para1="The name itself is self-explanatory, ‘meditation and subconscious mind’. This book is the best helper for those, dealing with stress and anxiety. You can learn about types and methods of meditation, the effect of meditation on our sub-conscious mind. The amazing power of our subconscious mind which needs to be known to us, so that we can use it for our best, is so well explained in this book."
              para2="Knowledge in this book also helps to know how gemstones are related to planets and have their healing effects on us. It is a feeling of control and inner peace after one has read it."
              subHeading1="Meditation & Subconscious Mind"
              subHeading2="Meditation & Subconscious Mind Book, Meditation Types, Methods and Healing "
              subHeading3="₹ 450.00"
              list={arr}
              link="https://www.amazon.in/dp/8193953169" text={''}           
             />
        </div>
  )
}

export default MeditationSubconsciousMind