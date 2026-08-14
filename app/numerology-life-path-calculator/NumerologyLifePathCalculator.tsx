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
import ImgLink from '../components/ui/ImgLink';
import MainHeading from '../components/ui/MainHeading';
import NormalButton from '../components/ui/NormalButton';
import Para from '../components/ui/Para';
import SmallButton from '../components/ui/SmallButton';
import SubHeading from '../components/ui/SubHeading';
import SubHeading2 from '../components/ui/SubHeading2';
import '../styles/common.css';
import 'react-phone-input-2/lib/style.css';
import "react-datepicker/dist/react-datepicker.css";
import 'react-toastify/dist/ReactToastify.css';
import { nameRegex, calculateDestiny, calculateNameNumber, specialNumbers, reduceToSingleDigit, life } from '../numerology-calculator-name-number/AlllCharectersticks';
import setDobFn from '@/lib/setDobFn';
import handleDatePicker from '@/lib/handleDateInputs';
import FAQS from './Faq';
import FaqComponent from '../components/FaqComponent';

const NumerologyLifePathCalculator = () => {
    const [token , setToken] = useState<string | null>(null);
    const path = process.env.NEXT_PUBLIC_URI;
    const [title] = useState("Life Path Number Calculator");
    const [showResult, setShowResult] = useState(false);
    const [dataId, setDataId] = useState('')
    const [name, setName] = useState("");
    const [dob, setDob] = useState<string | Date>("");
    const [country, setCountry] = useState("");
    const [mobileNumber1, setMobileNumber1] = useState("");
    const [nationalNumber, setNationalNumber] = useState("");
    const [code, setCode] = useState("");
    const [personality, setPersonality] = useState<number | string>("");
    const [characteristic, setCharacteristic] = useState<any>();

    const [masterNumber, setMasterNumber] = useState(false);

    const [masterContent, setMasterContent] = useState("");

    const inputChange = (value: any, data: any) => {
        // console.log(value.length)
        setCountry(data.name);
        setMobileNumber1(value);
        setCode(data.dialCode);
        setNationalNumber(value.slice(data.dialCode.length));
    };

    // Submit handler
    const submit = async (e: any) => {
        e.preventDefault();
        // Input validations
        if (!name || !nationalNumber || !dob) return toast("Please fill all the fields properly");
        if (name.length < 4) return toast("Please enter your name in full form");
        if (!nameRegex.test(name)) return toast("Name cannot contain numbers or special characters");
        if (nationalNumber.length < 7 || nationalNumber.length > 15) return toast("Please provide a valid number");


        // Block fake numbers like 1111111111, 2222222222 etc.
        if (/^(\d)\1+$/.test(nationalNumber)) {
            return toast("Please provide a valid phone number");
        }

        // Block obvious dummy numbers like 1234567890, 1231231234 etc.
        if (/^(?:1234567890|0123456789|1231231234|9876543210)$/.test(nationalNumber)) {
            return toast("Please provide a valid phone number");
        }

        // 3. Repeated blocks like 1111122222, 2222233333, 1231231231
        if (/(\d)\1{6,}/.test(nationalNumber)) {
            return toast("Please provide a valid phone number");
        }

        // 4. Repeated chunk patterns like 123123123 or 456456456
        if (/^(\d{2,3})\1+$/.test(nationalNumber)) {
            return toast("Please provide a valid phone number");
        }

        // Calculate numbers
        const destiny = calculateDestiny(dob)
        let psychic = (dob.toString()).split("-").pop()
        let mobileNumber = nationalNumber.split("").reduce((sum, char) => sum + (parseInt(char) || 0), 0);
        let nameNumber = calculateNameNumber(name)

        const SpecialNumbers = specialNumbers;

        const psychicNumber = SpecialNumbers.includes(Number(psychic)) ? Number(psychic) % 10 : reduceToSingleDigit(parseInt(psychic as string));
        const phoneNumber = reduceToSingleDigit(mobileNumber);
        const nameNumberTotal = specialNumbers.includes(nameNumber) ? nameNumber % 10 : reduceToSingleDigit(nameNumber);

        const myDestiny = specialNumbers.includes(destiny) ? destiny % 10 : reduceToSingleDigit(destiny);

        if (specialNumbers.includes(destiny)) {
            setMasterNumber(true)
            setPersonality(destiny)
            const totalNumber = destiny % 10
            setCharacteristic((totalNumber))
            setMasterContent(`Since your Life Path number ${destiny} is a Master number, it is to be considered as ${totalNumber}. Characteristics of your lucky Life Path number ${totalNumber}:`);
        } else {
            setMasterNumber(false)
            const totalDestiny = reduceToSingleDigit(destiny);
            setPersonality(totalDestiny)
            setCharacteristic(totalDestiny)
            setMasterContent(`Characteristics of your Life Path number ${totalDestiny}:`);
        }

        let data = {
            title,
            countryName: country,
            Username: name,
            dob,
            countryCode: code,
            mobile: nationalNumber,
            mobileNumber: phoneNumber,
            psychic: psychicNumber,
            destiny: myDestiny,
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

    const contact = async () => {
        const res = await axios.post(path + 'calculators/contact', { id: dataId })
        if (res.data.success) {
            alert("Your request has been submitted. Our team will contact you soon.")
        }
    }

    const [activeTab, setActiveTab] = useState<number>();

    let bgImg = {
        backgroundImage: 'url(../../allbanners/life-path-numerology-calculator.webp)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }

    const countryIP = CountryIPaddress();

   function handleRawDatePicker(e:any){
       setDob(handleDatePicker(e) as string);
    }

    useEffect(() => {
       const token = localStorage.getItem('token')
       if (token) {
           setToken(token)
       }
    }, [countryIP])

    return (
        <div className='relative'>
            <ToastContainer />
            <div className='justify-end items-center hidden lg:flex lg:h-[550px] 2xl:h-[80vh]' style={bgImg}>
                <form className='bg-[#FFDBF0] p-10 rounded-[25px] mr-10'>
                    <MainHeading mainHeading={title} style="text-center mb-5 text-purple-600" />
                    <div className='flex space-x-5'>
                        <div className='space-y-8 mt-1'>
                            <label htmlFor="name" className="block text-base font-medium text-[#07074D]">Full Name:</label>
                            <label htmlFor="email" className="block text-base font-medium text-[#07074D]" >Date of Birth:</label>
                            <label htmlFor="subject" className="block text-base font-medium text-[#07074D]" >Mobile Number:</label>
                        </div>
                        <div className='space-y-5'>
                            <div>
                                <input className='cal1' onChange={e => setName(e.target.value.replace(/\s+/g, ' '))} type="text" name="name" id="name" placeholder="First, Middle and Last name" />
                            </div>
                            <div className='bg-white'>
                                <DatePicker
                                    id="date-picker"
                                    selected={dob as Date}
                                    onChange={(date: any) =>  setDob(setDobFn(date as Date))}
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
                                <PhoneInput country={countryIP} value={mobileNumber1} onChange={inputChange} countryCodeEditable={false} enableSearch/>
                            </div>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <SmallButton text="Submit" style="m-auto" onClick={submit} />
                    </div>
                </form>
            </div>

            <div className='lg:hidden'>
                <Banner alttag="life path numerology calculator" path="/allbanners/life-path-numerology-calculator.webp" />
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
                                onChange={date =>  setDob(setDobFn(date as Date))}
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
                        <SubHeading subHeading="Your Life Path number is" style="text-center" />

                        {masterNumber ?
                            <div className='border border-gray-300 my-5 rounded-md text-slate-400 shadow-md text-center mx-auto flex justify-center items-center w-80 pt-5'>
                                <p className='text-9xl mb-0 pb-0'>{personality}</p>
                                <p className='text-9xl text-orange-400 mb-0 pb-0'>/</p>
                                <p className='text-9xl mb-0 pb-0'>{characteristic}</p>
                            </div>
                            :
                            <p className='text-9xl border border-gray-300 w-36 my-5 rounded-md text-slate-400 shadow-md text-center mx-auto '><p className='mt-6'>{personality}</p></p>
                        }

                        <p className='my-5 text-xl font-semibold text-center mx-auto'>{masterContent}</p>
                        <div className='border border-gray-300 shadow-md p-5 md:w-3/4 mx-auto rounded-md mb-10'>
                            <Para style="text-justify" para={life[characteristic] } />
                        </div>

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
                    : ''
                }

                <Link href={token ? '/dashboard' : '/numerology/signup'}>
                    <NormalButton text="Book Appointment" style="w-40 mx-auto" />
                </Link>

                <div className='mt-5 space-y-2'>
                    <Para para="Consult:" style="text-center text-[#490099] font-bold" />
                    <SubHeading2 subHeading="Dr. J C Chaudhry" style="text-center" />
                    <Para para="India’s Famous Numerologist" style="text-center text-[#490099] font-bold" />
                </div>

                <p className='md:w-2/4 mx-auto rounded-md my-10 text-center font-semibold text-2xl'>Life path number Characteristics from Life path number 1 to 9.</p>
                <p className='md:w-2/4 mx-auto rounded-md my-10 text-center font-semibold'>Discover the insights your life path number offers about your personality traits and the goals you're destined to achieve in life. </p>

                {
                    activeTab &&
                    (
                        <div className='border border-gray-300 shadow-md p-5 md:w-3/4 mx-auto rounded-md mb-10'>
                            <div className="bg-purple-600 text-white min-w-8 md:w-2/4 max-w-8 max-h-8 min-h-8 rounded-full flex justify-center items-center mb-5">
                                <span className="text-center">{activeTab}</span>
                            </div>
                            <Para style="text-justify" para={life[activeTab]} />
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

                <Content />
            </div>
        </div>
    )
}

export default NumerologyLifePathCalculator
export const Content = ({token}: any) => {
    return (
        <div>
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

            <div className='bg-slate-100 lg:w-3/4 m-auto space-y-5 text-center md:p-10 p-5 rounded-lg my-10'>
                <SubHeading style="text-center" subHeading="What is a Life Path Number Calculator?" />
                <Para style="text-justify" para={
                    <>
                        A <strong>Life Path Number Calculator</strong> is a free online numerology tool that calculates the <strong>Life Path Number</strong> using a person's complete date of birth. In numerology, the Life Path Number is considered one of the most significant numbers because it reflects core personality traits, natural abilities, life lessons, and overall life purpose.
                    </>
                } />

                <Para style="text-justify" para={
                    <>
                        The calculator adds and reduces the numbers in the birth date to determine the <strong>Life Path Number</strong>, helping users understand their strengths, potential challenges, career tendencies, relationships, and personal growth. Whether beginning a numerology journey or seeking deeper self-awareness, a <strong>Life Path Number Calculator</strong> provides an easy way to explore the meaning behind the birth date.
                    </>
                } />
            </div>

            <div className='bg-slate-100 lg:w-3/4 m-auto space-y-5 text-center md:p-10 p-5 rounded-lg my-10'>
                <SubHeading style="text-center" subHeading="Why is the Life Path Number Calculator Important?" />

                <Para style="text-justify" para={
                    <>
                        The <strong>Life Path Number Calculator</strong> provides valuable insights into the qualities and opportunities associated with a person's Life Path Number. According to numerology, this number serves as a guide to understanding natural talents, personality characteristics, decision-making patterns, and long-term life direction.
                    </>
                } />

                <Para style="text-justify" para={
                    <>
                        Understanding the <strong>Life Path Number</strong> can support greater self-awareness and help in evaluating career paths, personal relationships, strengths, and areas for growth. Many people also use the calculator as a starting point for a more detailed numerology analysis. By exploring the meaning of the <strong>Life Path Number</strong>, individuals can gain a deeper understanding of their potential and make more informed life decisions.
                    </>
                } />
            </div>

            <div className='bg-slate-100 lg:w-3/4 m-auto space-y-5 md:p-10 p-5 rounded-lg my-10'>
                <SubHeading style="" subHeading="Frequently Asked Questions" />

                <FaqComponent faqs={FAQS} />
                
            </div>
        </div>
    )
}