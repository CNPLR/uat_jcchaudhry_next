import GenerateMetadata from '@/app/components/MetaGenerator'
import { headers } from 'next/headers'
import { Books } from '@/app/components/ui/Books'

export const metadata = GenerateMetadata({
    banner: "/allbanners/Chakras-book-for-health-and-vitality.webp",
    title: "A Book about 7 Chakras | Methods and Functions of Chakras",
    description: "This book of 7 Chakras by Dr. J C Chaudhry explains the functions of 7 Chakras, how the Chakras work, relationship of Chakras with human body and methods of Chakras.",
    keywords: "7 chakras book, book about chakras, chakras in human body, how chakras work, learn chakras meditation, how to do chakras meditation, methods of doing chakras, how many types of chakras",
    headers:headers
})

const page = () => {
  let arr = [
          "Muldhara Chakra",
          "Svadhisthana Chakra",
          "Manipura Chakra",
          "Anahata Chakra",
          "Vishuddha Chakra",
          "Ajna Chakra",
          "Sahasrara Chakra",
          "The Nadis and Knots",
          "Purification of Body and Mind, Tantra Yoga",
          "About Universe, Cosmic Rays and Colours Effect",
      ]
      let arr1 = [
          "Learn how you can balance all the Chakras in your body, do purification of body and mind with Chakras, healing crystals, elements, and colours of Chakras.",
          "Learn about cosmic rays and colours effects.",
          "Pranayama and methods of doing meditation.",
      ]
  
      let arr2 = [
          "Muldhara Chakra, also called Root Chakra",
          "Svadhisthana Chakra, also called Sacral Chakra",
          "Manipura Chakra, also called Solar Plexus Chakra",
          "Anahata Chakra, also cladded Heart Chakra",
          "Vishuddha Chakra, also called Throat Chakra",
          "Ajna Chakra, also called Brow Chakra",
          "Sahasrara Chakra, also called Crown Chakra",
      ]
    return (
      <div>
  
              <Books
                path="/allbanners/Chakras-book-for-health-and-vitality.webp"
                alttag="Chakras book for health and vitality"
                alt="Chakras book by Dr. J C Chaudhry"
                path1="/images_folder/Chakras-book-by-Dr.-J-C-Chaudhry.webp"
                para1="This book explains how you can strengthen each Chakras and how all the 7 Chakras work. The more you can learn from this book is how Chakras help in cleaning & balancing."
                // subHeading5="The 7 Chakras explained in this book are:"
                subHeading1="Chakras"
                subHeading2="Learn about 7 Chakras and their functions."
                subHeading3="₹ 525.00"
                subHeading4="The 7 Chakras explained in this book are:"
                list1={arr1}
                list2={arr2}
                list={arr}
                link="https://www.amazon.in/dp/8193953185"
                text={''} para2={''}            />
          </div>
    )
}

export default page