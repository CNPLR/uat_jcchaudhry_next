'use client';
import React, { use, useEffect, useState } from 'react'
import { CalculatorNumber } from '../components/ui/ImageNumber'
import Link from 'next/link'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import PhoneInput from 'react-phone-input-2'
import Banner from '../components/ui/Banner'
import ImgLink from '../components/ui/ImgLink'
import MainHeading from '../components/ui/MainHeading'
import NormalButton from '../components/ui/NormalButton'
import Para from '../components/ui/Para'
import SmallButton from '../components/ui/SmallButton'
import SubHeading from '../components/ui/SubHeading'
import SubHeading2 from '../components/ui/SubHeading2'
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios'
import { calculateDestiny, calculateNameNumber, enemy, namechar, nameRegex, reduceToSingleDigit, specialNumbers } from './AlllCharectersticks'
import { CountryIPaddress } from '../components/ui/GetCountryCode'
import 'react-phone-input-2/lib/style.css';
// import "react-datepicker/dist/re";
// import "../styles/react-datepicker.css";
import '../styles/common.css';
import setDobFn from '@/lib/setDobFn';
import handleDatePicker from '@/lib/handleDateInputs';

// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const NumerologyCalculatorNameNumber = () => {
    const path = process.env.NEXT_PUBLIC_URI;
    const [token, setToken] = useState<string | null>('');

    const [showResult, setShowResult] = useState(false);
    const [title] = useState("Name Number Calculator");

    const [dataId, setDataId] = useState('')

    const [name, setName] = useState("");
    const [dob, setDob] = useState<string | Date>("");
    const [country, setCountry] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [nationalNumber, setNationalNumber] = useState("");
    const [code, setCode] = useState("");

    const [status, setStatus] = useState("");
    const [status1, setStatus1] = useState(false);

    const [masterContent, setMasterContent] = useState(false);
    const [masterNumber, setMasterNumber] = useState('');

    const [userNameNumber, setUserNameNumber] = useState<number>();
    const [userDestinyNumber, setUserDestinyNumber] = useState<number>()
    const [userPsychicNumber, setUserPsychicNumber] = useState<number>()

    const inputChange = (value: any, data: any) => {
        setCountry(data.name);
        setMobileNumber(value);
        setCode(data.dialCode);
        setNationalNumber(value.slice(data.dialCode.length));
    };

    // Submit handler
    function submit(e: any) {
        e.preventDefault();
        // Input validations
        if (!name || !nationalNumber || !dob) return toast("Please fill all the fields properly");
        if (name.length < 4) return toast("Please enter your name in full form");
        if (!nameRegex.test(name)) return toast("Name cannot contain numbers or special characters");
        if (nationalNumber.length < 7 || nationalNumber.length > 15) return toast("Please provide a valid phone number");

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

        // Numerology Calculations
        const destinyTotal = calculateDestiny(dob);
        const psychicTotal = (dob.toString()).split("-").pop();
        const mobileTotal = nationalNumber.split("").reduce((sum, char) => sum + (parseInt(char) || 0), 0);
        const phoneNumber = reduceToSingleDigit(mobileTotal);

        const nameNumberTotal = calculateNameNumber(name)

        setMasterNumber(nameNumberTotal)

        const finalDestiny = specialNumbers.includes(destinyTotal) ? destinyTotal % 10 : reduceToSingleDigit(destinyTotal);
        const finalPsychic = specialNumbers.includes(Number(psychicTotal)) ? Number(psychicTotal) % 10 : reduceToSingleDigit(parseInt(psychicTotal as string));

        let finalNameNumber;

        if (specialNumbers.includes(nameNumberTotal)) {
            finalNameNumber = nameNumberTotal % 10;
            setMasterContent(true);
        } else {
            finalNameNumber = reduceToSingleDigit(nameNumberTotal);
            setMasterContent(false);
        }

        setUserDestinyNumber(finalDestiny);
        setUserPsychicNumber(finalPsychic);
        setUserNameNumber(finalNameNumber);

        // Compatibility Check
        const checkWithDestiny = enemy[finalDestiny] || [];
        const checkWithPsychic = enemy[finalPsychic] || [];

        if (checkWithDestiny?.includes(finalNameNumber) || checkWithPsychic?.includes(finalNameNumber)) {
            setStatus("Your Name Number is not compatible for you.")
            setStatus1(false);
        } else {
            setStatus("Your Name Number is compatible for you.");
            setStatus1(true);
        }

        let data = {
            title,
            countryName: country,
            Username: name,
            dob,
            countryCode: code,
            mobile: nationalNumber,
            mobileNumber: phoneNumber,
            psychic: finalPsychic,
            destiny: finalDestiny,
            nameNumber: finalNameNumber,
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
        if (res.data.success) {
            return alert("Your request has been submitted. Our team will contact you soon.")
        }
    }

    const [activeTab, setActiveTab] = useState<number>();

    let bgImg = {
        backgroundImage: 'url(../../allbanners/Numerology-calculator-for-personalized-insights-and-guidance.webp)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }

    const countryIP = CountryIPaddress();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setToken(token);
        }
    })
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
                        <label className="block text-base font-medium text-[#07074D]">Full Name:</label>
                        <label className="block text-base font-medium text-[#07074D]" >Date of Birth:</label>
                        <label className="block text-base font-medium text-[#07074D]" >Mobile Number:</label>
                    </div>
                    <div className='space-y-5'>
                        <div>
                            <input className='cal1' onChange={e => setName(e.target.value.replace(/\s+/g, ' '))} type="text" name="name" id="name" placeholder="First, Middle and Last name" />
                        </div>
                        <div className='bg-white'>
                            <DatePicker
                                id="date-picker1"
                                selected={dob as Date}
                                onChange={date => setDob(setDobFn(date as Date))}
                                onChangeRaw={ handleRawDatePicker }
                                dateFormat="dd/MM/yyyy"
                                // dateFormat="I/R"
                                // showMonthDropdown
                                // peekNextMonth
                                maxDate={new Date()} // Disable previous dates
                                placeholderText="DD-MM-YYYY"
                                showPopperArrow={false} // Removes arrow for better UI
                                showYearDropdown
                                dropdownMode="select"

                            />
                        </div>
                        <div className='nameNumber' id='subject'>
                            <PhoneInput country={countryIP} value={mobileNumber} onChange={inputChange} countryCodeEditable={false} />
                        </div>
                    </div>
                </div>
                <div className='mt-5'>
                    <SmallButton text="Submit" style="m-auto" onClick={submit} />
                </div>
            </form>
        </div>

        <div className='lg:hidden'>
            <Banner alttag="Numerology calculator for personalized insights and guidance" path="/allbanners/Numerology-calculator-for-personalized-insights-and-guidance.webp" />
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
                            onChangeRaw={handleRawDatePicker}
                            dateFormat="dd/MM/yyyy"
                            maxDate={new Date()} // Disable previous dates
                            placeholderText="DD-MM-YY"
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
                        <PhoneInput country={countryIP} value={mobileNumber} onChange={inputChange} countryCodeEditable={false} />
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
                    <SubHeading subHeading="Your Name Number is" style="text-center" />
                    {masterContent ?
                        <>
                            <div className='border border-gray-300 my-5 rounded-md text-slate-400 shadow-md text-center mx-auto flex justify-center items-center w-80 pt-5'>
                                <p className='text-9xl mb-0 pb-0'>{masterNumber}</p>
                                <p className='text-9xl text-orange-400 mb-0 pb-0'>/</p>
                                <p className='text-9xl mb-0 pb-0'>{userNameNumber}</p>
                            </div>
                            <p className='my-5 text-xl font-semibold text-center mx-auto'>Since your Name number {masterNumber} is a Master number, it is to be considered as {userNameNumber}.</p>
                        </>
                        :
                        <p className='text-9xl border border-gray-300 w-36 my-5 rounded-md text-slate-400 shadow-md text-center mx-auto '><p className='mt-6'>{userNameNumber}</p></p>
                    }

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
                <SubHeading2 subHeading="Dr. J C Chaudhry" style="text-center" />
                <Para para="India’s Famous Numerologist" style="text-center text-[#490099] font-bold" />
            </div>

            <p className='md:w-2/4 mx-auto rounded-md my-10 text-center font-semibold text-2xl'>Name number Characteristics from Name Number 1 to 9.</p>

            <p className='md:w-2/4 mx-auto rounded-md my-10 text-center font-semibold'>Discover the insights your name number holds. Dive into its traits and learn what it says about you.</p>
            {
                activeTab &&
                (
                    <div className='border border-gray-300 shadow-md p-5 md:w-3/4 mx-auto rounded-md mb-10'>
                        <div className="bg-purple-600 text-white min-w-8 md:w-2/4 max-w-8 max-h-8 min-h-8 rounded-full flex justify-center items-center mb-5">
                            <span className="text-center">{activeTab}</span>
                        </div>
                        <Para style="text-justify" para={namechar[activeTab]} />
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

        <Content token={token} />
    </div>
)
}

export default NumerologyCalculatorNameNumber

export const Content = ({ token }: any) => {
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
                <SubHeading style="text-center" subHeading="What is Name Number Calculator?" />
                <Para style="text-justify" para="A name number calculator is an online tool that helps you calculate the numerical value of your name by Chaldean system of nomenclature. By entering your name, this calculator computes your unique name number. This number serves as a window into your personality, illuminating aspects of your character, potential life paths, and even obstacles you might face. It’s an engaging tool for anyone interested in personal growth and self-discovery." />
            </div>

            <div className='bg-slate-100 lg:w-3/4 m-auto space-y-5 text-center md:p-10 p-5 rounded-lg my-10'>
                <SubHeading style="text-center" subHeading="Importance of Name Number Calculator" />
                <Para style="text-justify" para="Your name number, calculated using Chaldean numerology, can impact different areas of your life, including your relationships, career choices, and overall success. By exploring your name number, you can gain valuable insights into your personality, your life’s purpose, and the challenges you might face along the way." />

                <Para style="text-justify" para="Knowing your name number can also help you make important decisions, like picking the right career or business name, recognize your strengths and identify areas where you can improve. This kind of self-awareness can lead to personal growth and a deeper understanding of yourself." />
            </div>

            <div className='bg-slate-100 lg:w-3/4 m-auto space-y-5 md:p-10 p-5 rounded-lg my-10'>
                <SubHeading style="" subHeading="FAQs" />

                <div>
                    <SubHeading2 style="" subHeading="Can I use the Name Number Calculator for any name?" />
                    <Para para="Yes! You can enter any name, but be sure to include the full name for the most accurate result." />
                </div>

                <div>
                    <SubHeading2 style="" subHeading="How does the Name Number Calculator work?" />
                    <Para para="The name number calculator converts the letters of your name into numbers using the Chaldean numerology chart, then adds those numbers together and reduces the sum to a single digit." />
                </div>

                <div>
                    <SubHeading2 style="" subHeading="How often should I check my name number?" />
                    <Para para="You can check your name number anytime you feel the need for guidance or self- reflection. Simply enter your name and the Name Number Calculator will provide you with your name number and its insights." />
                </div>

                <div>
                    <SubHeading2 style="" subHeading="Can I change my name to align with a more favorable number?" />
                    <Para para="Yes, some people choose to change their names to align with a more favorable numerology number. However, it is essential to consult a numerologist to ensure that the new name is in alignment with your life path number and has a positive impact on your overall well-being." />
                </div>
            </div>
        </div>
    )
}