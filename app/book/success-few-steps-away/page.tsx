import SuccessFewStepsAway from './SuccessFewStepsAway'
import GenerateMetadata from '@/app/components/MetaGenerator'
import { headers } from 'next/headers'

export const metadata =GenerateMetadata({
    banner: "/allbanners/Success-Few-Steps-Away-book-by-Dr-J-C-Chaudhry.webp",
    title: "Success, A Few Steps Away Book | Motivate yourself for Success",
    description: "This book explains about the different actions and steps towards success. Keep on reading all the 41 chapters of this book and you will build the confidence to achieve more and being successful with every step.",
    keywords: "Successful life book, success life journey book, how to be successful book, steps of success, successful people habits, how to create habits for success, motivation mantras for success, motivational reading book on success",
    headers: headers
})
const page = () => {
   return (
        <SuccessFewStepsAway />
    )
}

export default page