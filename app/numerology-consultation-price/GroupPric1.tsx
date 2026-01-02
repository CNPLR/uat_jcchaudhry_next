

import React from 'react'
import SubHeading2 from '../components/ui/SubHeading2'
import SubHeading1 from '../components/ui/SubHeading1'
import Para from '../components/ui/Para'
import Banner from '../components/ui/Banner';
import GenerateMetadata from '../components/MetaGenerator';


export const metadata = GenerateMetadata({
        pagePath: "/numerology-consultation-price",
        banner: "/allbanners/Banner-Numerology-group-conultation.jpg",
        title: "Numerologist &amp; Motivational Speaker | JC Chaudhry",
        description: "With more than 34 years of experience, JC Chaudhry is one of the top Numerologist and Motivational speaker in India. Explore the website for Vaastu tips, Numerology videos, Motivational speeches and more.",
        keywords: "numerologist in india, numerology by jc chaudhry, vaastu shastra expert, motivational speaker, motivational speakers in india"
})
export default function GroupPric1() {

    return (
        <div className='bg-gray-100'>
            <Banner alttag="Banner Numerology group conultation" path="/allbanners/Banner-Numerology-group-conultation.jpg" />
            <BankDetails text="Charges for Lecture for" latter="A" coupals="5-8 couples" persons="(10-16 persons)" time1="45" time2="45" time3="15-20" price1="71500 AED" price2="38000 AED" price3="9500 AED" />
            <BankDetails text="Charges for Lecture for" latter="B" coupals="9-15 couples" persons="(18-30 persons)" time1="45" time2="45" price1="95000 AED" price2="47500 AED" />
            <BankDetails text="Lecture at University or at any organized body" latter="C" time1="60" time2="30" price1="142500 AED" price2="47500 AED" />
        </div>
    )
}

export function BankDetails({ latter, coupals, persons, text, time1, time2, time3, price1, price2, price3 }: any) {
    return (
        <div className='py-10 px-5'>
            <div className='flex lg:flex-row flex-col justify-evenly items-center'>
                <div>
                    <div className='space-y-5'>
                        <SubHeading1 subHeading={`${latter} ${text} ${coupals === undefined ? '' : coupals} ${persons === undefined ? '' : persons}`} />
                        <Para para={`A. ${time1} minutes session : ${price1} + 5% VAT`} />
                        <Para para={`B. ${time2} min Doubt Clearing : ${price2} + 5% VAT`} />
                        {time3 ? <Para para={`C. ${time3} minutes doubt session per couple : ${price3} + 5% VAT`} /> : ''}
                        <Para para="Stay in 5-star hotel, Business Class Air Ticket" />
                    </div>
                </div>
                <div className=''>
                    <SubHeading2 style="mb-2" subHeading="The Charges for this programme should be sent to:" />
                    <table className='table border'>
                        <tr>
                            <th className='th'>NAME : </th>
                            <td className='td'>Chaudhry Nummero Management Consultancies LLC</td>
                        </tr>
                        <tr>
                            <th className='th'>BANK NAME : </th>
                            <td className='td'>Emirates NBD</td>
                        </tr>
                        <tr>
                            <th className='th'>Branch: : </th>
                            <td className='td'>2nd Floor, Muraqqabat branch, Deira, Dubai</td>
                        </tr>
                        <tr>
                            <th className='th'>A/C : </th>
                            <td className='td'>1015805261701</td>
                        </tr>
                        <tr>
                            <th className='th'>IBAN : </th>
                            <td className='td'>AE500260001015805261701</td>
                        </tr>
                        <tr>
                            <th className='th'>Account Type : </th>
                            <td className='td'>Current Account</td>
                        </tr>
                        <tr>
                            <th className='th'>Swift code : </th>
                            <td className='td'>EBILAEAD</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div className='mt-10'>
                <p className='mb-10 text-center'>
                    (For further clarifications, please call at
                    <a href="" className='hover:text-blue-600 underline-offset-4 hover:underline'> +91 9650797652 </a>
                    or email at <a href="" className='hover:text-blue-600 underline-offset-4 hover:underline'> support@jcchaudhry.com)</a>
                </p>
                <hr />
            </div>
        </div>
    )
}