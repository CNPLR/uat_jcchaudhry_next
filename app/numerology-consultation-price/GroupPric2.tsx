import React from 'react'
import Banner from '../components/ui/Banner';
import { BankDetails } from './GroupPric1';
import GenerateMetadata from '../components/MetaGenerator';

export const metadata = GenerateMetadata({
         pagePath: "/numerology-consultation-price",
        banner: "/allbanners/Banner-Numerology-group-conultation.jpg",
        title: "Numerologist &amp; Motivational Speaker | JC Chaudhry",
        description: "With more than 34 years of experience, JC Chaudhry is one of the top Numerologist and Motivational speaker in India. Explore the website for Vaastu tips, Numerology videos, Motivational speeches and more.",
        keywords: "numerologist in india, numerology by jc chaudhry, vaastu shastra expert, motivational speaker, motivational speakers in india"
    })

export default function GroupPric2() {
    
    return (
        <div className='bg-gray-100'>
            <Banner alttag="Banner Numerology group conultation" path="/allbanners/Banner-Numerology-group-conultation.jpg" />
            <BankDetails text="Charges for Lecture for" latter="A" coupals="5-8 couples" persons="(10-16 persons)" time1="45" time2="45" time3="15-20" price1="17714 USD" price2="9448 USD" price3="2362 USD" />
            <BankDetails text="Charges for Lecture for" latter="B" coupals="9-15 couples" persons="(18-30 persons)" time1="45" time2="45" price1="23618 USD" price2="11809 USD" />
            <BankDetails text="Lecture at University or at any organized body" latter="C" time1="60" time2="30" price1="35427 USD" price2="11809 USD" />
        </div>
    )
}
