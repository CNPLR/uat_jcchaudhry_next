'use client';
import React, { useEffect, useState } from 'react'
import Banner from '../components/ui/Banner'
import CountriesName from '../components/ui/CountriesName'
import MainHeading from '../components/ui/MainHeading'
import Para from '../components/ui/Para'
import SubHeading1 from '../components/ui/SubHeading1'
import BusinessAuditPrice from './BusinessAuditPrice';

interface BankDetails {
    price: string;
    name: string;
    bank_name: string;
    ac: string;
    ifsc_code?: string;
    swiftcode: string;
    branch?: string;
    iBan?: string;
    accountType?: string;
}

export default function BusinessAudit() {
 
    const [countries, setCountries] = useState<string>('')

    const [countries1, setCountries1] = useState<string>('')

    const [bankDetails, setBankDetails] = useState<BankDetails | undefined>(undefined)

    const [bankDetails1, setBankDetails1] = useState<BankDetails | undefined>(undefined);

    const getRelevantBankDetails = (country: string, isLargeCompany: boolean): BankDetails => {
        if (country === "noCountry" || !country) {
            return {
                price: "",
                name: "",
                bank_name: "",
                ac: "",
                swiftcode: "",
            }
        }
        
        if (country === "AE") {
            return {
                price: isLargeCompany ? "Total Charges 952000 AED + 5% VAT / 590448 USD  + 5% VAT" : "Total Charges 238000 AED + 5% VAT / 236180 USD  + 5% VAT",
                name: "Chaudhry Nummero Management Consultancies LLC",
                bank_name: "Emirates NBD",
                branch: "2nd Floor, Muraqqabat branch, Debra, Dubai",
                ac: "1015805261701",
                iBan: "AE500260001015805261701",
                accountType: "Current Account",
                swiftcode: "EBILAEAD",
            }
        }
        
        return {
            price: isLargeCompany ? "Total Charges Rs. 5 crores + 18% GST" : "Total Charges Rs. 2 crores + 18% GST",
            name: "CHAUDHRY NUMMERO PRIVATE LIMITED",
            bank_name: "HDFC BANK LTD",
            ac: "50200034031900",
            ifsc_code: "HDFC0002008",
            swiftcode: "HDFCINBB",
        }
    }

    useEffect(() => {
        setBankDetails(getRelevantBankDetails(countries, false))
    }, [countries])

    useEffect(() => {
        setBankDetails1(getRelevantBankDetails(countries1, true))
    }, [countries1])

    return (
        <div>

            <Banner alttag="Get a Business Numerology Audit for growth insights" path="/allbanners/Get-a-Business-Numerology-Audit-for-growth-insights.webp" />
            <MainHeading mainHeading="Business Numerology Audit" style="text-center my-10" />
            <div>
                <div className='px-10 space-y-5 bg-gray-100 my-10 py-10'>
                    <SubHeading1 style="text-center" subHeading="Numerology Audit for Business | Corporates" />
                    <Para para="As you look for smart and hardworking people in your company while interviewing them, Numerology helps you find people who are lucky for you as well and can help in overall company growth." />
                    <Para para="Business Numerology Audit, means adding people with you, who are lucky for you (Owner) and your organization." />
                    <Para para="Dr. J C Chaudhry, world-famous Numerologist provides Business Numerology Audit services in India, Dubai, and other countries. This audit by Dr. J C Chaudhry will include analyzing the people in top management, their compatibility checks with the organization and the owner, and overall company audit for growth." />
                    <Para para="You can consult for Business Numerology Audit on our website or JC Nummerro App." />
                </div>
                <div className='px-10 space-y-5 bg-gray-100 my-10 py-10 mx-auto max-w-[1440px]'>
                    <SubHeading1 style="" subHeading="Company Strength & Charges for Numerology Audit:" />
                    <div>
                        <div className='flex justify-between lg:flex-row flex-col items-center'>
                            <Para para="1. Company having strength upto 2000 employees or having turnover of 200 crores" />
                            <CountriesName onChange={(e: any) => setCountries(e.target.value)} text="Select your Country to know the price" />
                        </div>
                        {countries ?
                            <BusinessAuditPrice bank={bankDetails} />
                            : ''
                        }
                    </div>
                    <div>
                        <div className='flex justify-between lg:flex-row flex-col items-center'>
                            <Para style="" para="2. Company having strength more 2000 employees or having turnover of more than 1000 crores" />
                            <CountriesName onChange={(e: any) => setCountries1(e.target.value)} text="Select your Country to know the price" />
                        </div>
                        {countries1 ?
                            <BusinessAuditPrice bank={bankDetails1} />
                            : ''
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
