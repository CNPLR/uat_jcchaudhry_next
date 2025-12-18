'use client';
import Link from 'next/link'
import React, { useState } from 'react'
import ImgLink from '../components/ui/ImgLink'
import NormalButton from '../components/ui/NormalButton'
import Para from '../components/ui/Para'
import SubHeading from '../components/ui/SubHeading'
import SubHeading2 from '../components/ui/SubHeading2'
import { toast, ToastContainer } from 'react-toastify'
import axios from 'axios'
import DatePicker from 'react-datepicker'
import PhoneInput from 'react-phone-input-2'
import Banner from '../components/ui/Banner'
import { CountryIPaddress } from '../components/ui/GetCountryCode'
import MainHeading from '../components/ui/MainHeading'
import SmallButton from '../components/ui/SmallButton'
import { nameRegex, calculateDestiny, reduceToSingleDigit, specialNumbers, calculateNameNumber, enemy } from '../numerology-calculator-name-number/AlllCharectersticks'

const CompatibilityNumerologyTool = () => {
 const path = process.env.NEXT_PUBLIC_URI;
    const [title] = useState("Relationship Compatibility Number Calculator");
    const [dataId, setDataId] = useState('')
    const [name, setName] = useState("");
    const [pName, setPName] = useState("");
    const [dob, setDob] = useState<Date | string>("");
    const [pdob, setPdob] = useState<string | Date>()
    // const [showResult, setShowResult] = useState(false);
    const [country, setCountry] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [nationalNumber, setNationalNumber] = useState("");
    const [code, setCode] = useState("");

    // const [mobileNumber, setMobileNumber] = useState("");

    const [destinyContent, setDestinyContent] = useState<string|boolean>(false)
    // const [psychicContent, setPsychicContent] = useState(false)
    // const [nameContent, setNameContent] = useState(false)
    const [status, setStatus] = useState(false)

    const inputChange = (value: any, data: any) => {
        setCountry(data.name);
        setMobileNumber(value);
        setCode(data.dialCode);
        setNationalNumber(value.slice(data.dialCode.length));
    };

    // Submit handler
    function submit(e: any) {
        // const submit = async (e) => {
        e.preventDefault();
        // Ensure the required fields are filled
        if (!name || !pdob || !dob || !pName || !nationalNumber || !code) { return toast("Please fill all the fields properly") }
        if (nationalNumber.length < 7 || nationalNumber.length > 15) return alert("Please enter your valid number")
        if (name.length < 4) { return toast("Please Enter Your name in full form") }
        if (pName.length < 4) { return toast("Please Enter Your name in full form") }
        if (!nameRegex.test(name)) { return toast("Not allow numbers and special characters in name field") }
        // Check if the numbers array is defined and has items

        // const checkNumber = parsePhoneNumberFromString("+" + mobileNumber.toString());
        // if (!checkNumber || !checkNumber.isValid()) {
        //     return toast("Please provide a valid phone number");
        // }

        // Block fake numbers like 1111111111, 2222222222 etc.
        if (/^(\d)\1+$/.test(nationalNumber)) {
            return toast("Please provide a valid phone number");
        }

        // Block obvious dummy numbers like 1234567890, 1231231234 etc.
        if (/^(?:1234567890|0123456789|1231231234|9876543210)$/.test(nationalNumber)) {
            return toast("Please provide a valid phone number");
        }

        // 3. Repeated blocks like 1111122222, 2222233333, 1231231231
        if (/(\d)\1{4,}/.test(nationalNumber)) {
            return toast("Please provide a valid phone number");
        }

        // 4. Repeated chunk patterns like 123123123 or 456456456
        if (/^(\d{2,3})\1+$/.test(nationalNumber)) {
            return toast("Please provide a valid phone number");
        }

        // Calculate numbers
        const destiny = calculateDestiny(dob)
        const partnerDestiny = calculateDestiny(pdob)

        const mobileTotal = nationalNumber.split("").reduce((sum, char) => sum + (parseInt(char) || 0), 0);
        const phoneNumber = reduceToSingleDigit(mobileTotal);

        const destinyTotal = specialNumbers.includes(Number(destiny)) ? Number(destiny) % 10 : reduceToSingleDigit(destiny);
        const PartnerDestinyTotal = specialNumbers.includes(Number(partnerDestiny)) ? Number(partnerDestiny) % 10 : reduceToSingleDigit(partnerDestiny);

        const psychic = (dob as string).split('-').pop();
        const partnerPsychic = (pdob as string).split('-').pop();

        const psychicTotal = specialNumbers.includes(Number(psychic)) ? Number(psychic) % 10 : reduceToSingleDigit(psychic);
        const PartnerPsychicTotal = specialNumbers.includes(Number(partnerPsychic)) ? Number(partnerPsychic) % 10 : reduceToSingleDigit(partnerPsychic);

        const nameNumber = calculateNameNumber(name)
        const PartnerNameNumber = calculateNameNumber(pName)

        const finalNameNumber = specialNumbers.includes(nameNumber) ? nameNumber % 10 : reduceToSingleDigit(nameNumber);
        const finalPartnerNameNumber = specialNumbers.includes(PartnerNameNumber) ? PartnerNameNumber % 10 : reduceToSingleDigit(PartnerNameNumber);

        const checkWithDestiny = enemy[destinyTotal]
        const checkWithPsychic = enemy[psychicTotal]
        const checkWithName = enemy[finalNameNumber]

        if (checkWithDestiny?.includes(PartnerDestinyTotal)) {
            setStatus(false)
            setDestinyContent("Not Compatible")
        } else {
            setStatus(true)
            setDestinyContent("Is Compatible")
        }

        let data = {
            title,
            countryName: country,
            countryCode: code,
            mobile: nationalNumber,
            mobileNumber: phoneNumber,

            Username: name,
            dob,
            psychic: psychicTotal,
            destiny: destinyTotal,
            nameNumber: finalNameNumber,

            partnerNameNumber: finalPartnerNameNumber,
            partnerDob: pdob,
            partnerPsychic: PartnerPsychicTotal,
            partnerDestiny: PartnerDestinyTotal,
            destination: "Desktop"
        }

        const response = axios.post(path + 'calculators', data)

        response.then((data) => {
            if (data.data.success) {
                setDataId(data.data.id)
                window.scrollTo({ top: 550, behavior: "smooth" });
            }
        })
    };

    const contact = async () => {
        const res = await axios.post(path + 'calculators/contact', { id: dataId })
        if (res.data.success) {
            return alert("Your request has been submitted. Our team will contact you soon.")
        }
    }

    let bgImg = {
        backgroundImage: 'url(../../allbanners/Relationship-Compatibility-numerology-tool.webp)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }

    const countryIP = CountryIPaddress();

    return (
        <div className='relative'>
            <ToastContainer />
            {/* <HeadHelmet {...pageMetaData} /> */}
            <div className='justify-end items-center hidden lg:flex lg:h-[550px] 2xl:h-[80vh]' style={bgImg}>
                <form className='bg-[#FFDBF0] p-10 rounded-[25px] mr-10'>
                    <MainHeading mainHeading={title} style="text-center mb-5 text-purple-600 w-[390px]" />
                    <div className='flex space-x-5'>
                        <div className='space-y-8 mt-1'>
                            <label htmlFor="subject" className=" block text-base font-medium text-[#07074D]" >Mobile Number:</label>
                            <label htmlFor="name" className=" block text-base font-medium text-[#07074D]">Enter Your Full Name:</label>
                            <label htmlFor="name" className="block text-base font-medium text-[#07074D]">Enter Partner’s Full Name:</label>
                            <label htmlFor="email" className="block text-base font-medium text-[#07074D]" >Enter Your Date of Birth:</label>
                            <label htmlFor="email" className="block text-base font-medium text-[#07074D]" >Enter Partner’s Date of Birth:</label>

                        </div>
                        <div className='space-y-5'>
                            <div className='nameNumber'>
                                <PhoneInput country={countryIP} value={mobileNumber} onChange={inputChange} countryCodeEditable={false} />
                            </div>
                            <div>
                                <input className='cal1' onChange={e => setName(e.target.value.replace(/\s+/g, ' '))} type="text" name="name" id="name" placeholder="First, Middle and Last name" />
                            </div>
                            <div>
                                <input className='cal1' onChange={e => setPName(e.target.value.replace(/\s+/g, ' '))} type="text" name="pname" id="pname" placeholder="First, Middle and Last name" />
                            </div>
                            <div className='bg-white'>
                                <DatePicker
                                    id="date-picker"
                                    selected={dob as Date}
                                    onChange={date => setDob(date?.toISOString().split("T")[0] as string)}
                                    dateFormat="dd/MM/yyyy"
                                    maxDate={new Date()} // Disable previous dates
                                    placeholderText="DD-MM-YYYY"
                                    showPopperArrow={false} // Removes arrow for better UI
                                    // peekNextMonth
                                    // showMonthDropdown
                                    showYearDropdown
                                    dropdownMode="select"
                                />
                            </div>
                            <div className='bg-white'>
                                <DatePicker
                                    id="date-picker"
                                    selected={pdob as Date}
                                    onChange={date => setPdob(date?.toISOString().split("T")[0])}
                                    dateFormat="dd/MM/yyyy"
                                    maxDate={new Date()} // Disable previous dates
                                    placeholderText="DD-MM-YYYY"
                                    showPopperArrow={false} // Removes arrow for better UI
                                    // peekNextMonth
                                    // showMonthDropdown
                                    showYearDropdown
                                    dropdownMode="select"
                                />
                            </div>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <SmallButton text="Submit" style="m-auto" onClick={submit} />
                    </div>
                </form>
            </div>

            <div className='lg:hidden'>
                <Banner alttag="Relationship Compatibility numerology tool" path="/allbanners/Relationship-Compatibility-numerology-tool.webp" />
                <form className='bg-[#FFDBF0] p-5 rounded-md w-[320px] mt-5 mx-auto space-y-5'>
                    <MainHeading mainHeading={title} style="text-center text-purple-600" />
                    <div className='space-y-2'>
                        <label htmlFor="subject" className="font-medium text-[#07074D] text-left" >Mobile Number:</label>
                        <div className='phoneInput'>
                            <PhoneInput country={countryIP} value={mobileNumber} onChange={inputChange} countryCodeEditable={false} />
                        </div>
                    </div>
                    <div className='space-y-2'>
                        <label htmlFor="name" className="font-medium text-[#07074D]">Enter Your Full Name:</label>
                        <div className=''>
                            <input className='cal2' onChange={e => setName(e.target.value.replace(/\s+/g, ' '))} type="text" name="name" id="name" placeholder="First, Middle and Last name" />
                        </div>
                    </div>
                    <div className='space-y-2'>
                        <label htmlFor="name" className="font-medium text-[#07074D]">Enter Partner's Full Name:</label>
                        <div className=''>
                            <input className='cal2' onChange={e => setPName(e.target.value.replace(/\s+/g, ' '))} type="text" name="name" id="name" placeholder="First, Middle and Last name" />
                        </div>
                    </div>
                    <div className='space-y-2'>
                        <label htmlFor="email" className="font-medium text-[#07074D]" >Enter Your Date of Birth:</label>
                        <div className='bg-white'>
                            <DatePicker
                                id="date-picker"
                                selected={dob as Date}
                                onChange={date => setDob(date?.toISOString().split("T")[0] as string)}
                                dateFormat="dd/MM/yyyy"
                                maxDate={new Date()} // Disable previous dates
                                placeholderText="DD-MM-YYYY"
                                showPopperArrow={false} // Removes arrow for better UI
                                // peekNextMonth
                                // showMonthDropdown
                                showYearDropdown
                                dropdownMode="select"
                            />
                        </div>
                    </div>
                    <div className='space-y-2'>
                        <label htmlFor="email" className="font-medium text-[#07074D]" >Enter Partner’s Date of Birth:</label>
                        <div className='bg-white'>
                            <DatePicker
                                id="date-picker"
                                selected={pdob as Date}
                                onChange={date => setPdob(date?.toISOString().split("T")[0])}
                                dateFormat="dd/MM/yyyy"
                                maxDate={new Date()} // Disable previous dates
                                placeholderText="DD-MM-YYYY"
                                showPopperArrow={false} // Removes arrow for better UI
                                // peekNextMonth
                                // showMonthDropdown
                                showYearDropdown
                                dropdownMode="select"
                            />
                        </div>
                    </div>
                    <div className=''>
                        <SmallButton text="Submit" style="m-auto" onClick={submit} />
                    </div>
                </form>
            </div>

            <div className='lg:px-10 px-5 py-10'>
                <p className='font-bold text-xl text-center'>Compatibility Results:</p>
                <div className='flex justify-center mt-5'>
                    {status &&
                        (
                            <>
                                <div>
                                    <p className={`${status ? "text-green-500" : "text-red-500"} text-center`}>{destinyContent}</p>
                                    <div className='flex justify-center items-center mb-10'>
                                        <div className='flex-col flex md:flex-row justify-center items-center shadow-md p-5 rounded-md'>
                                            <p className='text-lg'>Need Detailed Analysis click</p>
                                            <div className='flex justify-center'>
                                                <button
                                                    className='mx-2 shadow-sm px-5 py-2 hover:bg-blue-800 bg-orange-500 text-white rounded-md'
                                                    onClick={contact}
                                                >
                                                    <p className='text-lg text-center'>Yes</p>
                                                </button>
                                            </div>
                                            <p className='text-lg'>and our team will contact you.</p>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    }
                </div>
                <Content />
            </div>
        </div>
    )
}

export default CompatibilityNumerologyTool

export const Content = ({token}: any) => {
    return (
        <div>
            <p className='border border-gray-300 shadow-md p-5 md:w-2/4 mx-auto rounded-md my-10 text-justify'>Understanding the relationship can be a complex journey, filled with love, challenges, and growth. One way to gain insights into your relationship is through the Relationship Compatibility Number Calculator. This tool uses numerology to analyze the compatibility between you and your partner based on your full names and dates of birth. By uncovering the unique vibrational energies associated with each person, you can better understand your connection .</p>

            <Link href={token ? '/dashboard' : '/numerology/signup'}>
                <NormalButton text="Book Appoitment" style="w-40 mx-auto" />
            </Link>

            <div className='mt-5 space-y-2'>
                <Para para="Consult:" style="text-center text-[#490099] font-bold" />
                <SubHeading2 subHeading="Dr. J C Chaudhry" style="text-center" />
                <Para para="India’s Famous Numerologist" style="text-center text-[#490099] font-bold" />
            </div>

            <div className='bg-slate-100 lg:w-3/4 m-auto space-y-5 text-center md:p-10 p-5 rounded-lg my-10'>
                <SubHeading style="text-center" subHeading="What is a Relationship Compatibility Number Calculator?" />
                <Para style="text-justify" para="A Relationship Compatibility Number Calculator is an online tool designed to assess the compatibility between two individuals. By inputting you and your partner’s date of birth, the calculator generates compatibility results that reveal the strengths and challenges of your relationship. This analysis is rooted in numerology, which suggests that numbers associated with your date of birth carry specific meanings that can influence your relationships.These numbers, when analyzed together, provide insights into how compatible you and your partner are, highlighting both harmonious and challenging aspects of your relationship." />
            </div>

            <div className='bg-slate-100 lg:w-3/4 m-auto space-y-5 text-center md:p-10 p-5 rounded-lg '>
                <h4 className='subheading2'>Discover in detail the characteristics of your numbers and <br /> how they impact your life through a numerology reading <br /> by Dr. J C Chaudhry.</h4>
                <div>
                    <Link href={token ? '/dashboard' : '/numerology/signup'}>
                        <NormalButton style="w-40 m-auto" text="Book Appointment" />
                    </Link>
                </div>
            </div>

            <div className='bg-slate-100 lg:w-3/4 m-auto space-y-5 text-center md:p-10 p-5 rounded-lg my-10'>
                <SubHeading style="text-center" subHeading="JC Nummerro App" />
                <Para style="text-center" para="For more details, download the JC Nummerro app available on both Android and iOS. Get it now to find all the information you need." />
                <div className='flex justify-center items-center space-x-5'>
                    <ImgLink style="w-[140px] h-[50px] lg:w-auto" alt="google-play" to="https://play.google.com/store/apps/details?id=jc.nummerro.app" path="/images_folder/google-play.png" />
                    <ImgLink style="w-[140px] h-[50px] lg:w-auto" alt="app-store" to="https://apps.apple.com/us/app/jc-nummerro-app/id1529437444" path="/images_folder/app-store.png" />
                </div>
            </div>

            <div className='bg-slate-100 lg:w-3/4 m-auto space-y-5 md:p-10 p-5 rounded-lg my-10'>
                <SubHeading style="" subHeading="FAQs" />

                <div>
                    <SubHeading2 style="" subHeading="Can I use this calculator for friendships or family relationships?" />
                    <Para para="Yes, the calculator can be used to assess compatibility in any relationship, including friendships and family connections." />
                </div>

                <div>
                    <SubHeading2 style="" subHeading="Can this calculator help me improve my relationship?" />
                    <Para para="Yes, by understanding your compatibility and the challenges you may face, you can take proactive steps to strengthen your relationship through better communication and mutual understanding." />
                </div>

                <div>
                    <SubHeading2 style="" subHeading="Is there a limit to how many times I can use the calculator?" />
                    <Para para="No, there’s no limit! You can use the Relationship Compatibility Number Calculator as many times as you wish." />
                </div>

                <div>
                    <SubHeading2 style="" subHeading="Can I use the Relationship Compatibility Number Calculator to check compatibility before starting a new relationship?" />
                    <Para para="Yes, many people use the calculator as a tool to gauge potential compatibility before committing to a new relationship." />
                </div>
            </div>
        </div>
    )
}