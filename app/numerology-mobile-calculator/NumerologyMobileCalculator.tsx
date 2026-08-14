'use client';
import axios from 'axios';
import Link from 'next/link';
import React, { use, useEffect, useState } from 'react'
import DatePicker from 'react-datepicker';
import PhoneInput from 'react-phone-input-2';
import { toast, ToastContainer } from 'react-toastify';
import Banner from '../components/ui/Banner';
import { CountryIPaddress } from '../components/ui/GetCountryCode';
import { CalculatorNumber } from '../components/ui/ImageNumber';
import MainHeading from '../components/ui/MainHeading';
import NormalButton from '../components/ui/NormalButton';
import Para from '../components/ui/Para';
import SmallButton from '../components/ui/SmallButton';
import SubHeading from '../components/ui/SubHeading';
import SubHeading2 from '../components/ui/SubHeading2';
import { nameRegex, calculateDestiny, calculateNameNumber, specialNumbers, reduceToSingleDigit, enemy, mobile } from '../numerology-calculator-name-number/AlllCharectersticks';
import ImgLink from '../components/ui/ImgLink';
import '../styles/common.css';
import 'react-phone-input-2/lib/style.css';
import "react-datepicker/dist/react-datepicker.css";
import 'react-toastify/dist/ReactToastify.css';
import setDobFn from '@/lib/setDobFn';
import handleDatePicker from '@/lib/handleDateInputs';
import FAQs from './Faq';
import FaqComponent from '../components/FaqComponent';

const NumerologyMobileCalculator = () => {
    const path = process.env.NEXT_PUBLIC_URI;
    const [token, setToken] = useState<string | null>('');
    const [title] = useState("Mobile Number Calculator");
    const [showResult, setShowResult] = useState(false);
    const [name, setName] = useState("");
    const [dob, setDob] = useState<string | Date>();
    const [country, setCountry] = useState("");
    const [mobileNumber1, setMobileNumber1] = useState("");
    const [nationalNumber, setNationalNumber] = useState("");
    const [code, setCode] = useState("");
    const [TotalOfMobileNumber, setTotalOfMobileNumber] = useState<number>();
    const [dataId, setDataId] = useState('')
    const [status, setStatus] = useState<string| boolean>(false);
    const [status1, setStatus1] = useState(false);

    const inputChange = (value: any, data: any) => {
        setCountry(data.name);
        setMobileNumber1(value);
        setCode(data.dialCode);
        setNationalNumber(value.slice(data.dialCode.length));
    };

    // Submit handler
    function submit(e: any) {
        // const submit = (e) => {
        e.preventDefault();
        // Input validations
        if (!name || !nationalNumber || !dob) return toast("Please fill all the fields properly");
        if (name.length < 4) return toast("Please enter your name in full form");
        if (!nameRegex.test(name)) return toast("Name cannot contain numbers or special characters");
        if (nationalNumber.length < 7 || nationalNumber.length > 15) return toast("Please provide a valid number");
        // Calculate numbers

        // const checkNumber = parsePhoneNumberFromString("+" + mobileNumber1.toString());
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

        // 3. Repeated blocks like 1111222222, 2222333333, 1231231231
        if (/(\d)\1{6,}/.test(nationalNumber)) {
            return toast("Please provide a valid phone number");
        }

        // 4. Repeated chunk patterns like 123123123 or 456456456
        if (/^(\d{2,3})\1+$/.test(nationalNumber)) {
            return toast("Please provide a valid phone number");
        }

        const destiny = calculateDestiny(dob)
        const psychic = (dob as string)?.split("-")?.pop()?.split("").reduce((sum: any, char: any) => sum + (parseInt(char) || 0), 0);
        const mobileNumber = nationalNumber.split("").reduce((sum, char) => sum + (parseInt(char) || 0), 0);
        const nameNumber = calculateNameNumber(name)

        const userPsychicNumber = specialNumbers.includes(psychic) ? psychic % 10 : reduceToSingleDigit(psychic);
        const userDestinyNumber = specialNumbers.includes(destiny) ? destiny % 10 : reduceToSingleDigit(destiny);

        const phoneNumber = reduceToSingleDigit(mobileNumber);
        const nameNumberTotal = specialNumbers.includes(nameNumber) ? nameNumber % 10 : reduceToSingleDigit(nameNumber);

        setTotalOfMobileNumber(Number(phoneNumber))

        const checkWithDestiny = enemy[userDestinyNumber]
        const checkWithPsychic = enemy[userPsychicNumber]

        if (checkWithDestiny?.includes(phoneNumber) || checkWithPsychic?.includes(phoneNumber)) {
            setStatus("Your Mobile Number is not Friendly for you.")
            setStatus1(false)
        }
        else {
            setStatus("Your Mobile Number is Friendly for you.")
            setStatus1(true)
        }

        let data = {
            title,
            countryName: country,
            Username: name,
            dob,
            countryCode: code,
            mobile: nationalNumber,
            mobileNumber: phoneNumber,
            psychic: userPsychicNumber,
            destiny: userDestinyNumber,
            nameNumber: nameNumberTotal,
            destination: "Desktop"
        }

        const response = axios.post(path + 'calculators', data)

        response.then((data) => {
            if (data.data.success) {
                setShowResult(true);
                setDataId(data.data.id)
                window.scrollTo({ top: 550, behavior: "smooth" });
            }
        })
    };

    const contact = async (e: any) => {
        e.preventDefault();
        const res = await axios.post(path + 'calculators/contact', { id: dataId })
        if (res?.data.success) {
            return alert("Your request has been submitted. Our team will contact you soon.")
        }
    }

    const [activeTab, setActiveTab] = useState<number>();

    let bgImg = {
        backgroundImage: 'url(../../allbanners/Mobile-numerology-calculator.webp)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }

    const countryIP = CountryIPaddress();

        useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            setToken(token);
        }
    }, []);

    function handleRawDatePicker(e:any){
       setDob(handleDatePicker(e) as string);
    }

    return (
        <div className='relative'>
            <ToastContainer />

            <div className='justify-end items-center hidden lg:flex lg:h-[550px] 2xl:h-[80vh]' style={bgImg}>
                <form className='bg-[#FFDBF0] p-10 rounded-[25px] mr-10'>
                    <MainHeading mainHeading={title} style="text-center mb-5 text-purple-600" />
                    <div className='flex space-x-5'>
                        <div className='space-y-8 mt-1'>
                            <label  className="block text-base font-medium text-[#07074D]">Full Name:</label>
                            <label  className="block text-base font-medium text-[#07074D]" >Date of Birth:</label>
                            <label  className="block text-base font-medium text-[#07074D]" >Mobile Number:</label>
                        </div>
                        <div className='space-y-5'>
                            <div>
                                <input className='cal1' onChange={e => setName(e.target.value.replace(/\s+/g, ' '))} type="text" name="name" id="name" placeholder="First, Middle and Last name" />
                            </div>
                            <div className='bg-white'>
                                <DatePicker
                                    id="date-picker"
                                    selected={dob as Date}
                                    onChange={date => setDob(setDobFn(date as Date))}
                                    // dateFormat="yyyy/MM/dd"
                                    // dateFormat="mm/dd/yyyy"
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
                            <div className='nameNumber'>
                                <PhoneInput  country={countryIP} value={mobileNumber1} onChange={inputChange} countryCodeEditable={false} enableSearch />
                            </div>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <SmallButton text="Submit" style="m-auto" onClick={submit} />
                    </div>
                </form>
            </div>

            <div className='lg:hidden'>
                <Banner alttag="Mobile numerology calculator" path="/allbanners/Mobile-numerology-calculator.webp" />
                <form className='bg-[#FFDBF0] p-5 rounded-md w-[320px] mt-5 mx-auto space-y-5'>
                    <MainHeading mainHeading={title} style="text-center text-purple-600" />
                    <div className='space-y-2'>
                        <label htmlFor="name" className="font-medium text-[#07074D]">Full Name:</label>
                        <div className=''>
                            <input className='cal2' onChange={e => setName(e.target.value.replace(/\s+/g, ' '))} type="text" name="name" id="name" placeholder="First, Middle and Last name" />
                        </div>
                    </div>
                    <div className='space-y-2'>
                        <label htmlFor="email" className="font-medium text-[#07074D]" >Date of Birth:</label>
                        <div className='bg-white'>
                            <DatePicker
                                id="date-picker"
                                selected={dob as Date}
                                onChange={date => setDob(setDobFn(date as Date))}
                                // dateFormat="yyyy/MM/dd"
                                // dateFormat="mm/dd/yyyy"
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
                        <label htmlFor="subject" className="font-medium text-[#07074D] text-left" >Mobile Number:</label>
                        <div className='phoneInput'>
                            <PhoneInput country={countryIP} value={mobileNumber1} onChange={inputChange} countryCodeEditable={false} enableSearch/>
                        </div>
                    </div>
                    <div className=''>
                        <SmallButton text="Submit" style="m-auto" onClick={submit} />
                    </div>
                </form>
            </div>

            <div className='lg:px-10 px-5 py-10'>
                {showResult ?
                    <>
                        <SubHeading subHeading="Your mobile number total is" style="text-center" />
                        <p className='text-9xl border border-gray-200 w-36 my-5 rounded-md text-slate-400 shadow-md text-center mx-auto'><p className='mt-6'>{TotalOfMobileNumber}</p></p>
                        {status &&
                            <>
                                <p className={`${status1 ? "text-green-500" : "text-red-500"} text-center mb-5`}>{status}</p>

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
                            </>
                        }
                    </>
                    : ''
                }

                <Link href={token ? '/dashboard' : '/numerology/signup'}>
                    <NormalButton text="Book Appointment" style="w-40 mx-auto" />
                </Link>

                <div className='mt-5 space-y-2'>
                    <Para para="Consult:" style="text-center text-[#490099] font-bold" />
                    <SubHeading2 subHeading="Dr. J C Chaudhry" style="text-center" headTag='h2' />
                    <Para para="India’s Famous Numerologist" style="text-center text-[#490099] font-bold" />
                </div>

                <p className='md:w-2/4 mx-auto rounded-md my-10 text-center font-semibold text-2xl'>Mobile number Characteristics from 1 to 9.</p>

                <p className='md:w-2/4 mx-auto rounded-md my-10 text-center font-semibold'>Explore the meaning behind your mobile number, from 1 to 9, and discover what your single digit mobile number indicates about you.</p>
                {
                    activeTab &&
                    (
                        <div className='border border-gray-300 shadow-md p-5 md:w-3/4 mx-auto rounded-md mb-10'>
                            <div className="bg-purple-600 text-white min-w-8 md:w-2/4 max-w-8 max-h-8 min-h-8 rounded-full flex justify-center items-center mb-5">
                                <span className="text-center">{activeTab}</span>
                            </div>
                            <Para style="text-justify" para={mobile[activeTab]} />
                        </div>
                    )
                }
                <div className='flex justify-center my-10 flex-wrap'>
                    {
                        Array(9).fill(null).map((u, i) => {
                            return (
                                <CalculatorNumber key={i} num={(i + 1)} activeTab={activeTab as number} setActiveTab={setActiveTab} />
                            )
                        })
                    }
                </div>
            </div>

            <Content1 token={token} />
        </div>
    )
}

export default NumerologyMobileCalculator

export const Content1 = ({token}: any) => {
    return (
        <div>
            <div className='bg-slate-100 lg:w-3/4 m-auto space-y-5 text-center md:p-10 p-5 rounded-lg '>
                <h2 className='subheading2'>Discover in detail the characteristics of your numbers and <br /> how they impact your life through a numerology reading <br /> by Dr. J C Chaudhry.</h2>
                <div>
                    <Link href={token ? '/dashboard' : '/numerology/signup'}>
                        <NormalButton style="w-40 m-auto" text="Book Appointment" />
                    </Link>
                </div>
            </div>

            <div className='bg-slate-100 lg:w-3/4 m-auto space-y-5 text-center md:p-10 p-5 rounded-lg my-10'>
                <SubHeading style="text-center" subHeading="JC Nummerro App" headTag='h2'/>
                <Para style="text-center" para="For more details, download the JC Nummerro app available on both Android and iOS. Get it now to find all the information you need." />
                <div className='flex justify-center items-center space-x-5'>
                    <ImgLink style="w-[140px] h-[50px] lg:w-auto" alt="google-play" to="https://play.google.com/store/apps/details?id=jc.nummerro.app" path="/images_folder/google-play.png" />
                    <ImgLink style="w-[140px] h-[50px] lg:w-auto" alt="app-store" to="https://apps.apple.com/us/app/jc-nummerro-app/id1529437444" path="/images_folder/app-store.png" />
                </div>
            </div>

            <div className='bg-slate-100 lg:w-3/4 m-auto space-y-5 text-center md:p-10 p-5 rounded-lg my-10'>
                <SubHeading style="text-center" subHeading="What is a Mobile Number Calculator?" headTag='h2'/>

                <Para style="text-justify" para={
                    <>
                        A <strong>Mobile Number Calculator</strong> is a free online numerology tool that calculates the <strong>Mobile Number</strong> using the digits of a mobile number. Based on <strong>Chaldean Numerology</strong>, each digit carries a unique vibration, and together they reveal the overall energy associated with the number.
                    </>
                } />

                <Para style="text-justify" para={
                    <>
                        The calculator adds all the digits of the mobile number and reduces them to a single digit between <strong>1 and 9</strong>. This <strong>Mobile Number</strong> is believed to reflect communication style, opportunities, confidence, relationships, and the energy connected with everyday interactions. Whether choosing a new mobile number or understanding an existing one, the <strong>Mobile Number</strong> Calculator provides an easy way to explore its numerological meaning.
                    </>
                   }
                />
            </div>

            <div className='bg-slate-100 lg:w-3/4 m-auto space-y-5 text-center md:p-10 p-5 rounded-lg my-10'>

                <SubHeading style="text-center" subHeading="Why is the Mobile Number Calculator Important?" headTag="h2" />

                <Para style="text-justify" para={
                    <>
                        A mobile number is used every day for calls, messages, business, banking, and online communication. According to <strong>Chaldean Numerology</strong>, the repeated use of a number is believed to strengthen its numerical vibration and influence everyday experiences.
                    </>
                } />

                <Para style="text-justify" para={
                    <>
                        The <strong>Mobile Number Calculator</strong> helps identify the energy associated with a mobile number and understand how it may relate to communication, opportunities, personal growth, and overall life experiences. Many people also use the calculator before selecting a new mobile number to choose one that aligns with their numerology profile and personal goals.
                    </>
                } />
            </div>

            <div className='bg-slate-100 lg:w-3/4 m-auto space-y-5 md:p-10 p-5 rounded-lg my-10'>
                <SubHeading style="" subHeading="Frequently Asked Questions" />

                <FaqComponent faqs={FAQs} />
            </div>
        </div>
    )
}