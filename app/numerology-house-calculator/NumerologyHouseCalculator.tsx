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
import { charValues, nameRegex, reduceToSingleDigit, calculateDestiny, calculateNameNumber, specialNumbers, enemy, housechar } from '../numerology-calculator-name-number/AlllCharectersticks';

export const NumerologyHouseCalculator = () => {
  const path = process.env.NEXT_PUBLIC_URI;

    const [token, setToken] = useState<string>("");
    const [showResult, setShowResult] = useState(false);
    const [status, setStatus] = useState(false);
    const [title] = useState("House Number Calculator");
    const [dataId, setDataId] = useState('')
    const [name, setName] = useState("");
    const [dob, setDob] = useState<Date | string>("");

    const [houseNum, setHouseNum] = useState<number>();
    const [house, setHouse] = useState("");
    const [type, setType] = useState("Select Living Type");

    const [houseContent, setHouseContent] = useState("");

    const [masterContent, setMasterContent] = useState(false);
    const [masterNumber, setMasterNumber] = useState<string>();

    const [country, setCountry] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [nationalNumber, setNationalNumber] = useState("");
    const [code, setCode] = useState("");

    const houseNumberCalculation = (houseNumber: any): string => {
        while (houseNumber?.length > 1) {
            let hnum:string | number = 0
            let cap = houseNumber.toUpperCase()
            for (let char of cap) {
                if (charValues.hasOwnProperty(char)) {
                    hnum += charValues[char];  // Add the value from the `characters` object
                }
                else {  // Check if the character is a numeric digit
                    hnum += Number(char);  // Convert the numeric character to a number and add it
                }
            }
            return hnum = hnum.toString(); // Convert sum back to a string to continue reducing
        }
        return "";
    }

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
        // Input validations
        if (nationalNumber.length < 7 || nationalNumber.length > 15) return alert("Please enter your valid number")
        if (!name || !house || !dob) return toast("Please fill all the fields properly");
        if (name.length < 4 || name.length > 250) return toast("Please enter your name in full form");
        if (!nameRegex.test(name)) return toast("Name cannot contain numbers or special characters");
        if (type == 'Select Living Type') return toast("Select Your Living Type");

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

        const mobileTotal = nationalNumber.split("").reduce((sum, char) => sum + (parseInt(char) || 0), 0);
        const phoneNumber = reduceToSingleDigit(mobileTotal);

        // Calculate numbers
        const destiny = calculateDestiny(dob)
        const psychic = (dob as string).split("-").pop();
        let cleanHouseNumber = house.replace(/[^a-zA-Z0-9]/g, '');
        const houseNumber = houseNumberCalculation(cleanHouseNumber)
        setMasterNumber(houseNumber)
        const nameNumberTotal = calculateNameNumber(name)

        const pureDestiny = specialNumbers.includes(destiny) ? destiny % 10 : reduceToSingleDigit(destiny);
        const purePsychic = specialNumbers.includes(Number(psychic)) ? Number(psychic) % 10 : reduceToSingleDigit(Number(psychic));
        const pureName = specialNumbers.includes(nameNumberTotal) ? nameNumberTotal % 10 : reduceToSingleDigit(nameNumberTotal);

        let pureHouseNumber;

        if (specialNumbers.includes(Number(houseNumber))) {
            pureHouseNumber = Number(houseNumber) % 10;
            setMasterContent(true);
        } else {
            pureHouseNumber = reduceToSingleDigit(Number(houseNumber));
            setMasterContent(false);
        }

        // const pureHouseNumber = specialNumbers.includes(houseNumber) ? houseNumber % 10 : reduceToSingleDigit(houseNumber);

        setHouseNum(Number(pureHouseNumber))

        const checkWithDestiny = enemy[pureDestiny]
        const checkWithPsychic = enemy[purePsychic]

        if (type === 'Long-Term') {
            if (checkWithDestiny?.includes(pureHouseNumber)) {
                setHouseContent("Your House Number is not Lucky for you.")
                setStatus(false)
            } else {
                setHouseContent("Your House Number is Lucky for you")
                setStatus(true)
            }
        } else {
            if (checkWithPsychic?.includes(pureHouseNumber)) {
                setHouseContent("Your House Number is not Lucky for you.")
                setStatus(false)
            } else {
                setHouseContent("Your House Number is Lucky for you")
                setStatus(true)
            }
        }

        let data = {
            title,
            countryName: country,
            countryCode: code,
            mobile: nationalNumber,
            mobileNumber: phoneNumber,
            Username: name,
            dob,
            psychic: purePsychic,
            destiny: pureDestiny,
            nameNumber: pureName,
            livingType: type,
            houseNumber: pureHouseNumber,
            house: house,
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
        backgroundImage: 'url(../../allbanners/Numerology-house-calculator.webp)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }

    useEffect(()=>{
        const token = localStorage.getItem('token') as string;
        if(!token){
            setToken(token)
        }
    },[])

   const countryIP = CountryIPaddress();

    return (
        <div className='relative'>
            <ToastContainer />
            <div className='justify-end items-center hidden lg:flex lg:h-137.5 2xl:h-[80vh]' style={bgImg}>
                <form className='bg-[#FFDBF0] p-10 rounded-[25px] mr-10'>
                    <MainHeading mainHeading={title} style="text-center mb-5 text-purple-600" />
                    <div className='flex space-x-5'>
                        <div className='space-y-8 mt-1'>
                            <label htmlFor="subject" className="block text-base font-medium text-[#07074D]" >Mobile Number:</label>
                            <label htmlFor="name" className="block text-base font-medium text-[#07074D]">Full Name:</label>
                            <label htmlFor="email" className="block text-base font-medium text-[#07074D]" >Date of Birth:</label>
                            <label htmlFor="subject" className="block text-base font-medium text-[#07074D]" >House Number:</label>
                            <label htmlFor="subject" className="block text-base font-medium text-[#07074D]" >Living Type:</label>
                        </div>
                        <div className='space-y-5'>
                            <div className='nameNumber'>
                                <PhoneInput country={countryIP} value={mobileNumber} onChange={inputChange} countryCodeEditable={false} />
                            </div>
                            <div >
                                <input
                                    className='cal1'
                                    onChange={e => setName(e.target.value.replace(/\s+/g, ' '))}
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="First, Middle and Last name"
                                />
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
                            <div>
                                <input
                                    className='cal1'
                                    type="text"
                                    onChange={e => setHouse(e.target.value)}
                                    name=""
                                    id=""
                                    placeholder="Enter Your House Number"
                                />
                            </div>
                            <div>
                                <select onChange={(e) => setType(e.target.value)} className='cal1' name="" id="">
                                    <option value="Select Living Type" defaultValue={"Select Living Type"} >Select Living Type</option>
                                    <option value="Long-Term">Long-Term</option>
                                    <option value="Short-Term">Short-Term</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <SmallButton text="Submit" style="m-auto" onClick={submit} />
                    </div>
                </form>
            </div>

            <div className='lg:hidden'>
                <Banner alttag="Numerology house calculator" path="/allbanners/Numerology-house-calculator.webp" />
                <form className='bg-[#FFDBF0] p-5 rounded-md w-[320px] mt-5 mx-auto space-y-5'>
                    <MainHeading mainHeading={title} style="text-center text-purple-600" />
                    <div className='space-y-2'>
                        <label htmlFor="subject" className="font-medium text-[#07074D] text-left" >Mobile Number:</label>
                        <div className='phoneInput'>
                            <PhoneInput country={countryIP} value={mobileNumber} onChange={inputChange} countryCodeEditable={false} />
                        </div>
                    </div>
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
                        <label htmlFor="house" className="font-medium text-[#07074D]" >House Number:</label>
                        <div className=''>
                            <input className='cal2' type="text" onChange={e => setHouse(e.target.value)} name="" id="house" placeholder="Enter Your House Number" />
                        </div>
                    </div>

                    <div className='space-y-2'>
                        <label htmlFor="house" className="font-medium text-[#07074D]" >Living Type:</label>
                        <select onChange={(e) => setType(e.target.value)} className='cal1' name="" id="">
                            <option value="Select Type">Select Living Type</option>
                            <option value="Long-Term">Long-Term</option>
                            <option value="Short-Term">Short-Term</option>
                        </select>
                    </div>
                    <div className=''>
                        <SmallButton text="Submit" style="m-auto" onClick={submit} />
                    </div>
                </form>
            </div>

            <div className='lg:px-10 px-5 py-10'>
                {showResult ?
                    <>
                        <SubHeading subHeading="Your House number is" style="text-center" />
                        {masterContent ?
                            <>
                                <div className='border my-5 rounded-md text-slate-400 shadow-md text-center mx-auto flex justify-center items-center w-80 pt-5'>
                                    <p className='text-9xl mb-0 pb-0'>{masterNumber}</p>
                                    <p className='text-9xl text-orange-400 mb-0 pb-0'>/</p>
                                    <p className='text-9xl mb-0 pb-0'>{houseNum}</p>
                                </div>
                                <p className='my-5 text-xl font-semibold text-center mx-auto'>Since your Name number {masterNumber} is a Master number, it is to be considered as {houseNum}.</p>
                            </>
                            :
                            <p className='text-9xl border w-36 my-5 rounded-md text-slate-400 shadow-md text-center mx-auto '><p className='mt-6'>{houseNum}</p></p>
                        }
                        {/* <p className='text-9xl border w-36 my-5 rounded-md text-slate-400 shadow-md text-center mx-auto '><p className='mt-6'>{houseNum}</p></p> */}
                        <p className={`${status ? "text-green-500" : "text-red-500"} text-center mb-5`}>{houseContent}</p>

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

                <p className='md:w-2/4 mx-auto rounded-md my-10 text-center font-semibold text-2xl'>House Number Significance from House no 1 to 9.</p>

                <p className='md:w-2/4 mx-auto rounded-md my-10 text-center font-semibold'>See what each house number from 1 to 9 signifies. Delve into your house number and uncover its unique characteristics.</p>

                {activeTab && (<div className='border border-gray-300 shadow-md p-5 md:w-3/4 mx-auto rounded-md mb-10'>
                    <div className="bg-purple-600 text-white min-w-8 md:w-2/4 max-w-8 max-h-8 min-h-8 rounded-full flex justify-center items-center mb-5">
                        <span className="text-center">{activeTab}</span>
                    </div>
                    <Para style="text-justify" para={housechar[activeTab]} />
                </div>)}

                <div className='flex justify-center my-10 flex-wrap'>
                    {Array(9).fill(null).map((u, i) => {
                        return <CalculatorNumber key={i} num={(i + 1)} activeTab={activeTab as number} setActiveTab={setActiveTab} />
                    })}
                </div>

                <Content token={token} />
            </div>
        </div>
    )
}

export const Content = ({token}: {token: string}) => {
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
                <SubHeading style="text-center" subHeading="What is a House number Calculator?" />
                <Para style="text-justify" para="A House Number Calculator is a free tool that determines the single digit of your house number based on your input. Rooted in numerology, it highlights the significance of numbers and their impact on our lives. By discovering your lucky house number, you can gain insights into the energy of your living space, deepen your understanding of your personality traits, and explore how your home environment aligns with your goals and aspirations." />
            </div>

            <div className='bg-slate-100 lg:w-3/4 m-auto space-y-5 text-center md:p-10 p-5 rounded-lg my-10'>
                <SubHeading style="text-center" subHeading="Importance of the House Number Calculator" />
                <Para style="text-justify" para="The House Number Calculator plays a crucial role in helping individuals understand the unique energy of their home. By revealing your lucky house number, the calculator provides insights into the characteristics and vibrations associated with that number. This knowledge can empower you to create an environment that aligns with your personal goals, fosters creativity, and enhances overall well-being." />

                <Para style="text-justify" para="Additionally, knowing your house number&#39;s significance allows you to make informed decisions about your living space. Whether you&#39;re moving into a new home or simply seeking to improve your current environment, understanding the house number meaning can help you cultivate positive energy and harmony in your surroundings." />
            </div>

            <div className='bg-slate-100 lg:w-3/4 m-auto space-y-5 md:p-10 p-5 rounded-lg my-10'>
                <SubHeading style="" subHeading="FAQs" />

                <div>
                    <SubHeading2 style="" subHeading="How does the House Number Calculator work?" />
                    <Para para="The House Number Calculator requires you to enter your house number. After clicking the submit button, the calculator will generate and display your lucky house number, along with its significance." />
                </div>

                <div>
                    <SubHeading2 style="" subHeading="What if my house number is a double-digit number?" />
                    <Para para="Double-digit numbers can be reduced to a single-digit number by adding the digits together. For example, if your house number is 23, you would add 2 + 3 to get a lucky total of 5. However, master numbers like 11, 22, and 33 should not be reduced, as they possess special significance and power in numerology." />
                </div>

                <div>
                    <SubHeading2 style="" subHeading="Can the House Number Calculator help me choose a new home?" />
                    <Para para="Yes! By using the House Number Calculator, you can evaluate potential house numbers to find one that aligns with your personality and aspirations, helping you make a more informed decision when choosing a new home." />
                </div>

                <div>
                    <SubHeading2 style="" subHeading="Can I consult the House Number Calculator for temporary residences, like vacation homes?" />
                    <Para para="Absolutely! The House Number Calculator can be used for any residence, including temporary ones like vacation homes. It can help you understand the energy of your stay and enhance your experience while you’re there." />
                </div>
            </div>
        </div>
    )
}
