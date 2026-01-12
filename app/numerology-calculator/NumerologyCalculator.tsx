'use client';
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import DatePicker from 'react-datepicker';
import PhoneInput from 'react-phone-input-2';
import { toast, ToastContainer } from 'react-toastify';
import Banner from '../components/ui/Banner';
import { CountryIPaddress } from '../components/ui/GetCountryCode';
import { CalculatorNumber } from '../components/ui/ImageNumber';
import Img from '../components/ui/Img';
import List from '../components/ui/List';
import MainHeading from '../components/ui/MainHeading';
import NormalButton from '../components/ui/NormalButton';
import Para from '../components/ui/Para';
import SmallButton from '../components/ui/SmallButton';
import SubHeading from '../components/ui/SubHeading';
import SubHeading2 from '../components/ui/SubHeading2';
import { nameRegex, calculateDestiny, calculateNameNumber, calculateSoulurgeNumber, reduceToSingleDigit, specialNumbers, psychic, destiny, personality } from '../numerology-calculator-name-number/AlllCharectersticks';
import 'react-phone-input-2/lib/style.css'
import 'react-toastify/dist/ReactToastify.css';
import "react-datepicker/dist/react-datepicker.css";
import setDobFn from '@/lib/setDobFn';
import handleDatePicker from '@/lib/handleDateInputs';

const NumerologyCalculator = () => {
    const [token, setToken] = useState<string>("");
    const path = process.env.NEXT_PUBLIC_URI;
    const [showResult, setShowResult] = useState(false);
    const [title] = useState("Nummerro Calculator");
    const [dataId, setDataId] = useState('')
    const [name, setName] = useState("");
    const [dob, setDob] = useState<Date | string>("");
    const [country, setCountry] = useState("");
    const [mobileNumber1, setMobileNumber1] = useState("");
    const [nationalNumber, setNationalNumber] = useState("");
    const [code, setCode] = useState("");

    const [psychicNumber, setPsychicNumber] = useState<number>();
    const [destinyNumber, setdestinyNumber] = useState<number>();
    const [isPersonalityNumber, setIsPersonalityNumber] = useState<number>();

    const [masterContent, setMasterContent] = useState<string>()
    const [masterContent1, setMasterContent1] = useState<string>()
    const [masterContent2, setMasterContent2] = useState<string>()

    const [characteristic, setCharacteristic] = useState<any>()
    const [characteristic1, setCharacteristic1] = useState<any>()
    const [characteristic2, setCharacteristic2] = useState<any>()

    const [masterNumber, setMasterNumber] = useState(false);
    const [masterNumber1, setMasterNumber1] = useState(false);
    const [masterNumber2, setMasterNumber2] = useState(false);

    const inputChange = (value: any, data: any) => {
        setCountry(data.name);
        setMobileNumber1(value);
        setCode(data.dialCode);
        setNationalNumber(value.slice(data.dialCode.length));
    };

    // Submit handler
    function submit(e: any) {
        // const submit = async (e) => {
        e.preventDefault();
        // Input validations
        if (!name || !nationalNumber || !dob) return toast("Please fill all the fields properly");
        if (name.length < 4) return toast("Please enter your name in full form");
        if (!nameRegex.test(name)) return toast("Name cannot contain numbers or special characters");
        if (nationalNumber.length < 7 || nationalNumber.length > 15) return toast("Please provide a valid number");

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

        // 3. Repeated blocks like 1111122222, 2222233333, 1231231231
        if (/(\d)\1{4,}/.test(nationalNumber)) {
            return toast("Please provide a valid phone number");
        }

        // 4. Repeated chunk patterns like 123123123 or 456456456
        if (/^(\d{2,3})\1+$/.test(nationalNumber)) {
            return toast("Please provide a valid phone number");
        }

        // Calculate numbers
        const psychic = (dob as string).split("-").pop();
        const destiny = calculateDestiny(dob)
        const mobileNumber = nationalNumber.split("").reduce((sum, char) => sum + (parseInt(char) || 0), 0);
        const nameNumber = calculateNameNumber(name)
        const personalityNumber = calculateSoulurgeNumber(name)

        const mobileNumberTotal = reduceToSingleDigit(mobileNumber);
        const nameNumberTotal = specialNumbers.includes(nameNumber) ? nameNumber % 10 : reduceToSingleDigit(nameNumber);

        const myPsychic = specialNumbers.includes(Number(psychic)) ? Number(psychic) % 10 : reduceToSingleDigit(Number(psychic));
        const myDestiny = specialNumbers.includes(destiny) ? destiny % 10 : reduceToSingleDigit(destiny);
        const myPersonality = specialNumbers.includes(personalityNumber) ? personalityNumber % 10 : reduceToSingleDigit(personalityNumber);

        if (specialNumbers.includes(Number(psychic))) {
            setMasterNumber(true)
            setPsychicNumber(Number(psychic))
            const totalNumber = Number(psychic) % 10
            setCharacteristic(totalNumber)
            setMasterContent(`Since your Psychic number ${psychic} is a Master number, it is to be considered as ${totalNumber}. Characteristics of your Psychic number ${totalNumber}:`);
        } else {
            setMasterNumber(false)
            const totalPsychic = reduceToSingleDigit(Number(psychic));
            setPsychicNumber(totalPsychic)
            setCharacteristic(totalPsychic)
            setMasterContent(`Characteristics of your Psychic number ${totalPsychic}:`);
        }

        if (specialNumbers.includes(destiny)) {
            setMasterNumber1(true)
            setdestinyNumber(destiny)
            const totalNumber = destiny % 10
            setCharacteristic1(totalNumber)
            setMasterContent1(`Since your Destiny number ${destiny} is a Master number, it is to be considered as ${totalNumber}. Characteristics of your Destiny number ${totalNumber}:`);
        } else {
            setMasterNumber1(false)
            const totalDestiny = reduceToSingleDigit(destiny);
            setdestinyNumber(Number(totalDestiny))
            setCharacteristic1(totalDestiny)
            setMasterContent1(`Characteristics of your Destiny number ${totalDestiny}:`);
        }

        if (specialNumbers.includes(Number(personalityNumber))) {
            setMasterNumber2(true)
            setIsPersonalityNumber(personalityNumber)
            const totalNumber = personalityNumber % 10
            setCharacteristic2(totalNumber)
            setMasterContent2(`Since your Personality number ${personalityNumber} is a Master number, it is to be considered as ${totalNumber}. Characteristics of your Personality number ${totalNumber}:`);
        } else {
            setMasterNumber2(false)
            const totalDestiny = reduceToSingleDigit(personalityNumber);
            setIsPersonalityNumber(totalDestiny)
            setCharacteristic2(totalDestiny)
            setMasterContent2(`Characteristics of your Personality number ${totalDestiny}:`);
        }

        let data = {
            title,
            countryName: country,
            Username: name,
            dob,
            countryCode: code,
            mobile: nationalNumber,
            mobileNumber: mobileNumberTotal,
            psychic: myPsychic,
            destiny: myDestiny,
            nameNumber: nameNumberTotal,
            personalitynumber: myPersonality,
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

        // const response = await axios.post(path + 'calculators', data)

        // if (response.data.success) {
        //     setShowResult(true);
        //     setDataId(response.data.id)
        //     window.scrollTo({ top: 550, behavior: "smooth" });
        // }
    };

    const contact = async () => {
        const res = await axios.post(path + 'calculators/contact', { id: dataId })
        if (res.data.success) {
            return alert("Your request has been submitted. Our team will contact you soon.")
        }
    }

    const [activeTab, setActiveTab] = useState<number>();
    const [activeTab1, setActiveTab1] = useState<number>();
    const [activeTab2, setActiveTab2] = useState<number>();

    let bgImg = {
        backgroundImage: 'url(../../allbanners/General-numerology-calculator.webp)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }

    const countryIP = CountryIPaddress();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setToken(token);
        }
    },[])

    function handleRawDatePicker(e:any){
       setDob(handleDatePicker(e) as string);
    }

    return (
        <div>
            <ToastContainer />
            <div className=''>
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
                                        onChange={date => setDob(setDobFn(date as Date))}
                                        onChangeRaw={handleDatePicker}
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
                                    <PhoneInput country={countryIP} value={mobileNumber1} onChange={inputChange} countryCodeEditable={false} />
                                </div>
                            </div>
                        </div>
                        <div className='mt-5'>
                            <SmallButton text="Submit" style="m-auto" onClick={submit} />
                        </div>
                    </form>
                </div>

                <div className='lg:hidden'>
                    <Banner alttag="General numerology calculator" path="/allbanners/General-numerology-calculator.webp" />
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
                                    onChangeRaw={handleDatePicker}
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
                                <PhoneInput country={countryIP} value={mobileNumber1} onChange={inputChange} countryCodeEditable={false} />
                            </div>
                        </div>
                        <div className=''>
                            <SmallButton text="Submit" style="m-auto" onClick={submit} />
                        </div>
                    </form>
                </div>

                {showResult ?
                    <>
                        <div className='mt-10'>
                            <SubHeading subHeading="Your Psychic number is" style="text-center" />

                            {masterNumber ?
                                <div className='border border-gray-300 my-5 rounded-md text-slate-400 shadow-md text-center mx-auto flex justify-center items-center w-80 pt-5'>
                                    <p className='text-9xl mb-0 pb-0'>{psychicNumber}</p>
                                    <p className='text-9xl text-orange-400 mb-0 pb-0'>/</p>
                                    <p className='text-9xl mb-0 pb-0'>{characteristic}</p>
                                </div>
                                :
                                <p className='text-9xl border border-gray-300 w-36 my-5 rounded-md text-slate-400 shadow-md text-center mx-auto '><p className='mt-6'>{psychicNumber}</p></p>
                            }

                            {/* <p className='text-9xl border w-36 my-5 rounded-md text-slate-400 shadow-md text-center mx-auto '><p className='mt-6'>{psychicNumber}</p></p> */}

                            <p className='my-5 text-xl font-semibold text-center mx-auto '>{masterContent}</p>
                            <div className='border border-gray-300 shadow-md p-5 md:w-3/4 mx-auto rounded-md mb-10'>
                                <Para style="text-justify" para={psychic[characteristic]} />
                            </div>
                        </div>

                        <div>
                            <SubHeading subHeading="Your Destiny number is" style="text-center" />

                            {masterNumber1 ?
                                <div className='border border-gray-300 my-5 rounded-md text-slate-400 shadow-md text-center mx-auto flex justify-center items-center w-80 pt-5'>
                                    <p className='text-9xl mb-0 pb-0'>{destinyNumber}</p>
                                    <p className='text-9xl text-orange-400 mb-0 pb-0'>/</p>
                                    <p className='text-9xl mb-0 pb-0'>{characteristic1}</p>
                                </div>
                                :
                                <p className='text-9xl border border-gray-300 w-36 my-5 rounded-md text-slate-400 shadow-md text-center mx-auto '><p className='mt-6'>{destinyNumber}</p></p>
                            }

                            {/* <p className='text-9xl border w-36 my-5 rounded-md text-slate-400 shadow-md text-center mx-auto '><p className='mt-6'>{destinyNumber}</p></p> */}

                            <p className='my-5 text-xl font-semibold text-center mx-auto '>{masterContent1}</p>
                            <div className='border border-gray-300 shadow-md p-5 md:w-3/4 mx-auto rounded-md mb-10'>
                                <Para style="text-justify" para={destiny[characteristic1]} />
                            </div>
                        </div>

                        <div>
                            <SubHeading subHeading="Your Personality number is" style="text-center" />

                            {masterNumber2 ?
                                <div className='border border-gray-300 my-5 rounded-md text-slate-400 shadow-md text-center mx-auto flex justify-center items-center w-80 pt-5'>
                                    <p className='text-9xl mb-0 pb-0'>{isPersonalityNumber}</p>
                                    <p className='text-9xl text-orange-400 mb-0 pb-0'>/</p>
                                    <p className='text-9xl mb-0 pb-0'>{characteristic2}</p>
                                </div>
                                :
                                <p className='text-9xl border border-gray-300 w-36 my-5 rounded-md text-slate-400 shadow-md text-center mx-auto '><p className='mt-6'>{isPersonalityNumber}</p></p>
                            }

                            {/* <p className='text-9xl border w-36 my-5 rounded-md text-slate-400 shadow-md text-center mx-auto '><p className='mt-6'>{isPersonalityNumber}</p></p> */}

                            <p className='my-5 text-xl font-semibold text-center mx-auto '>{masterContent2}</p>
                            <div className='border border-gray-300 shadow-md p-5 md:w-3/4 mx-auto rounded-md mb-10'>
                                <Para style="text-justify" para={personality[characteristic2]} />
                            </div>
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

                <div className='mt-10'>
                    <Link href={token ? '/dashboard' : '/numerology/signup'}>
                        <NormalButton text="Book Appoitment" style="w-40 mx-auto" />
                    </Link>

                    <div className='mt-5 space-y-2'>
                        <Para para="Consult:" style="text-center text-[#490099] font-bold" />
                        <SubHeading2 subHeading="Dr. J C Chaudhry" style="text-center" />
                        <Para para="India’s Famous Numerologist" style="text-center text-[#490099] font-bold" />
                    </div>
                </div>

                <p className='md:w-3/4 mx-auto rounded-md my-10 text-center font-semibold text-xl'>Scroll down to find out more about the characteristics of your psychic number, destiny number, and personality number.</p>

                <p className='md:w-2/4 mx-auto rounded-md my-10 text-center font-semibold text-2xl'>Psychic Number Characteristics from Psychic Number 1 to 9</p>

                <p className='border border-gray-300 shadow-md p-5 md:w-2/4 mx-auto rounded-md my-10 text-justify'>Discover what your Psychic Number reveals about you. This understanding can highlight your strengths, illuminate your personality and life choices, and support your growth as you navigate your journey more effectively.</p>

                {
                    activeTab &&
                    (
                        <div className='border border-gray-300 shadow-md p-5 md:w-2/4 mx-auto rounded-md mb-10'>
                            <div className="bg-purple-600 text-white min-w-8 md:w-2/4 max-w-8 max-h-8 min-h-8 rounded-full flex justify-center items-center mb-5">
                                <span className="text-center">{activeTab}</span>
                            </div>
                            <Para style="text-justify" para={psychic[activeTab]} />
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

                <p className='md:w-2/4 mx-auto rounded-md my-10 text-center font-semibold text-2xl'>Destiny Number Characteristics from Destiny Number 1 to 9</p>

                <p className='border border-gray-300 shadow-md p-5 md:w-2/4 mx-auto rounded-md my-10 text-justify'>Find out what your Destiny Number says about you.This revelation can clarify your life purpose, direction, challenges, and hidden talents.</p>

                {
                    activeTab1 &&
                    (
                        <div className='border border-gray-300 shadow-md p-5 md:w-2/4 mx-auto rounded-md mb-10'>
                            <div className="bg-purple-600 text-white min-w-8 md:w-2/4 max-w-8 max-h-8 min-h-8 rounded-full flex justify-center items-center mb-5">
                                <span className="text-center">{activeTab1}</span>
                            </div>
                            <Para style="text-justify" para={destiny[activeTab1]} />
                        </div>
                    )
                }

                <div className='flex justify-center my-10 flex-wrap'>
                    {
                        Array(9).fill(null).map((u, i) => {
                            return (
                                <CalculatorNumber key={i} num={(i + 1)} activeTab={activeTab1 as number} setActiveTab={setActiveTab1} />
                            )
                        })
                    }
                </div>

                <p className='md:w-2/4 mx-auto rounded-md my-10 text-center font-semibold text-2xl'>Personality Number Characteristics from Personality Number 1 to 9</p>

                <p className='border border-gray-300 shadow-md p-5 md:w-2/4 mx-auto rounded-md my-10 text-justify'>Find out your personality number and explore the traits that define you. Learn about the qualities that shape your character and influence your interactions with others.</p>

                {
                    activeTab2 &&
                    (
                        <div className='border border-gray-300 shadow-md p-5 md:w-2/4 mx-auto rounded-md mb-10'>
                            <div className="bg-purple-600 text-white min-w-8 md:w-2/4 max-w-8 max-h-8 min-h-8 rounded-full flex justify-center items-center mb-5">
                                <span className="text-center">{activeTab2}</span>
                            </div>
                            <Para style="text-justify" para={personality[activeTab2 as number]} />
                        </div>
                    )
                }

                <div className='flex justify-center my-10 flex-wrap'>
                    {
                        Array(9).fill(null).map((u, i) => {
                            return (
                                <CalculatorNumber key={i} num={(i + 1)} activeTab={activeTab2 as number} setActiveTab={setActiveTab2} />
                            )
                        })
                    }
                </div>

                <div className='bg-slate-100 lg:w-3/4 m-auto space-y-10 text-justify p-10 rounded-lg mb-10'>
                    <h4 className='subheading2 text-center'>Chaldean Numerology Calculator</h4>
                    <Para para="Numerology predictions are made based on different numbers. Three important numerology numbers are Psychic number, Destiny number and Name Number. With the help of this numerology calculator, you can find these three numbers for your numerology report. Enter your Full name and Date of birth to calculate your Psychic number, Destiny number and Name Number. Psychic number is also called the Driver number or Mulaank. Destiny number is also known as Life Path number or Bhagyank. Name number is also called the Expression number." />
                </div>

                <div className='bg-slate-100 lg:w-3/4 m-auto space-y-10 text-justify p-10 rounded-lg mb-10'>
                    <h4 className='subheading2 text-center'>Numerology Calculator: Discover the Power of Numbers</h4>
                    <Para para="Numbers carry powerful vibrations, and these vibrations influence your life. Use our free numerology calculator to know your core numerology numbers: psychic number, destiny number, and name number. These three numbers become the basis for numerology calculations and predictions. Our numerology calculator uses Chaldean numerology and various other algorithms to analyse the data input by you and decode the miraculous power of your numbers. The sum of the birth date gives you the birth number; the total of the date of birth (dd/mm/yyy) gives the life path number; and the sum of the alphabets in the name gives you the name number." />

                    <Para para="Our date of birth and name numerology calculator arms you with self-awareness, thereby assisting you in making informed decisions and choices in every area of your life, be it career, marriage, business, etc., for greater harmony and prosperity in your life." />

                    <div>
                        <List para="Harmony between the name number, psychic number, and destiny number is vital for living a better lifestyle." />
                        <List para="Make rewarding decisions that have a long-term impact on your life by knowing your destiny number." />
                        <List para="Know yourself and your personality traits better with your psychic number." />
                    </div>
                </div>

                <div className='bg-slate-100 lg:w-3/4 m-auto space-y-10 text-justify p-10 rounded-lg mb-10'>
                    <h4 className='subheading2 text-center'>Find your Psychic Number, Destiny Number, and Name Number.</h4>
                    <Para para="The psychic number is also known as the birth number because it is derived from your birth date. The psychic number influences the activities you do in your daily life. It attracts attention to your psyche (the way you think). Therefore, knowing this number assists you in choosing favourable numbers that vibrate in harmony with your psychic number and making rewarding decisions in your everyday life, such as renting a house, owning a mobile number, etc." />
                    <Para para="The destiny number is also known as the life path number. The life path number reveals the blueprint of your life. It calls attention to the predominating state of your mind and strengths. Discovering your destiny number is important because it impacts major decisions in your life, like selecting a life partner, joining a new company, investing in a property, etc." />
                    <Para para="The name number is the personality. A name plays a key role in one’s professional and social life. A name number attracts fame. A friendly name number attracts a stroke of luck in your life." />
                </div>

                <div className='bg-slate-100 lg:w-3/4 m-auto space-y-10 text-justify p-10 rounded-lg mb-10'>
                    <h4 className='subheading2 text-center'>How to use JC Nummerro Calculator?</h4>
                    <Para para="Using our JC numerology calculator is easy and accessible. You can use our calculator on the web or download the JC Nummerro App to use the calculator. Following are the steps to use it:" />
                    <div>
                        <List para="Enter your full name ( first name, middle name, and surname)." />
                        <List para="Enter your date of birth." />
                        <List para="Enter your mobile number." />
                        <List para="After entering your details, click the submit button." />
                        <List para="Upon submitting the data, your numbers will be displayed." />
                    </div>
                    <Para para="* Predictions are based on the values entered by you, so please ensure you put in the correct details." />
                </div>

                <div className='bg-slate-100 lg:w-3/4 m-auto space-y-10 text-justify p-10 rounded-lg mb-10'>
                    <h4 className='subheading2 text-center'>Benefits of Using a Numerology Birthdate and Name Calculator</h4>
                    <List para="Mobile number compatibility: The numerology calculator helps you know whether your mobile number is friendly to your psychic number or not. A friendly mobile number is known to be a lucky mobile number. Using a favourable mobile number can help enhance luck in your life." />
                    <List para="Know your or your loved ones numbers: The numerology calculator by name and date of birth shows you your psychic number, destiny number, and name number. You can know these three numbers for anyone, provided you know their correct details. So, uncover the magic of numbers with the help of our JC Nummerro Calculator." />
                    <List para="Free Calculator: Numerology Calculator is a free online calculator to check your numerology numbers at a click. Due to its free accessibility, anyone can use and benefit from this calculator." />
                </div>

                <div className='bg-slate-100 lg:w-3/4 m-auto space-y-10 text-center p-10 rounded-lg'>
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
                        <Img style="w-[140px] h-[50px] lg:w-auto" path="/images_folder/google-play.png" alt="google-play" />
                        <Img style="w-[140px] h-[50px] lg:w-auto" path="/images_folder/app-store.png" alt="app-store" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NumerologyCalculator