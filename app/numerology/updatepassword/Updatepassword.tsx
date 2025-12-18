"use client";
import { CountryIPaddress } from '@/app/components/ui/GetCountryCode';
import Img from '@/app/components/ui/Img';
import SmallButton from '@/app/components/ui/SmallButton';
import SubHeading1 from '@/app/components/ui/SubHeading1';
import axios from 'axios';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react'
import { FaCheck } from 'react-icons/fa';
import { IoMdEyeOff, IoMdEye } from 'react-icons/io';
import { RxCross2 } from 'react-icons/rx';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'
import 'react-toastify/dist/ReactToastify.css';
const UpdatePassword = () => {
    let path = process.env.NEXT_PUBLIC_URI;
    const statusRef = useRef<any>(null);
    let [loading, setLoading] = useState(false);
    const [nationalNumber, setNationalNumber] = useState('');
    const [number, setNumber] = useState()
    const [code, setCode] = useState()
    const [otp, setOtp] = useState<string >("")
    const [pass, setPass] = useState<string>("")
    const [cpass, setCpass] = useState<string>()
    const [otpEnable, setOtpEnable] = useState(true)
    const [otpStatus, setOtpStatus] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    const inputChange = (value: any, data: any) => {
        setNumber(value)
        setCode(data.dialCode)
        const dialCodeLength = data.dialCode.length;
        const nationalNum = value.slice(dialCodeLength);
        setNationalNumber(nationalNum);
    }

    const sendOtp = async (e: any) => {
        e.preventDefault();
        if (nationalNumber.length < 7 || nationalNumber.length > 15) {
            return alert("Please enter your valid number")
        }
        else {
            let res = await axios.get(`${path}otp/update-otp?code=${code}&number=${nationalNumber}`)
            if (res.data.message === "User does not exist") {
                return alert(res.data.message)
            }
            if (res.data.success === true) {
                setOtpStatus("Enter Sent OTP.")
                setOtpEnable(!otpEnable)
            }
            else {
                return alert("Something went wrong")
            }
        }
    }

    const verify = async (e: any) => {
        e.preventDefault();
        if (!otp) {
            return alert("Please Enter OTP")
        }
        let res = await axios.get(`${path}otp/verified-otp?number=${nationalNumber}&otp=${otp}`)
        if (res.data.success === true) {
            setOtpStatus("OTP Verified")
        }
        else {
            setOtpStatus("Invalid OTP")
        }
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])(?=.*\d).{8,}$/;
    const validatePassword = (password: string) => passwordRegex.test(password);

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        setLoading(true)
        if (!statusRef.current.checked) {
            setLoading(false)
            return alert("Please Check Privacy Policy and Terms of Services")
        }
        else if (nationalNumber.length < 7 || nationalNumber.length > 15) {
            setLoading(false)
            return alert("Please Enter Minimum 7 and Maximum 15 Characters in Phone number Field")
        }
        else if (!validatePassword(pass)) {
            setLoading(false)
            return alert("Ensures include password at least one special character, numeric digit, and capital letter.")
        }
        else if (pass.length < 8 || pass.length > 250) {
            setLoading(false)
            return alert("Please Enter Minimum 8 and Maximum 250 Characters in Password Field")
        }
        else if (pass !== cpass) {
            setLoading(false)
            return alert("Password Does Not Match")
        }
        else if (otp.length < 4 || otp.length > 4) {
            setLoading(false)
            return alert("Please Enter Valid OTP")
        }
        else if (otpStatus !== "OTP Verified") {
            setLoading(false)
            return alert("Please Enter Valid OTP")
        }
        else {
            const res = await axios.put(path + "websiteuser/update", { pass, nationalNumber })
            if (res.data.success === true) {
                redirect("/numerology/login")
            }
            else {
                return alert("Something wrong")
            }
        }
    }

    const country = CountryIPaddress();

    useEffect(() => {
        const terms = statusRef.current
        if (terms) {
            statusRef.current.checked = true;
        }
    }, [])

    return (
        <>
            <div className='bg-[#490099] py-10'>
                <div className='md:flex justify-around'>
                    <div>
                        <Img style='md:w-[500px] w-[300px] mx-auto' alt="Dr J C Chaudhry for numerology consultation services" path="/images_folder/Dr-J-C-Chaudhry-for-numerology-consultation-services.png" />
                    </div>
                    <div className='p-5 w-[320px] bg-white rounded-md border mx-auto'>
                        <SubHeading1 subHeading="Update Password" style="text-center mb-5" />
                        <form className='form' onSubmit={handleSubmit}>
                            <div className="flex mb-5">
                                <PhoneInput
                                    country={country}
                                    value={number}
                                    onChange={inputChange}
                                    onBlur={sendOtp}
                                    countryCodeEditable={false}
                                    enableSearch={true}
                                />
                            </div>

                            {otpStatus ? <p className={`text-right text-xs mb-1 ml-1 ${otpStatus !== "Invalid OTP" ? 'text-green-600' : "text-red-600"} `}>{otpStatus}</p> : ''}

                            <div className="mb-5 relative">
                                <input type="password"
                                    value={otp}
                                    onChange={(e) => setOtp(e.target.value)}
                                    onBlur={verify}
                                    name="otp"
                                    disabled={otpEnable}
                                    placeholder="Enter OTP"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    required
                                />
                                {otpStatus === "OTP Verified" ? <FaCheck className='absolute top-2 right-2' color='green' /> : ""}
                                {otpStatus === "Invalid OTP" ? <RxCross2 className='absolute top-2 right-2' color='green' /> : ""}
                            </div>
                            <div className="mb-5 relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={pass}
                                    onChange={(e) => setPass(e.target.value)}
                                    name="Password"
                                    id="Password"
                                    placeholder="Password"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    required
                                />
                                <div className='absolute right-2 top-2 z-50' onClick={e => setShowPassword(!showPassword)}>
                                    {!showPassword ? <IoMdEyeOff /> : <IoMdEye />}
                                </div>
                            </div>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={cpass}
                                    onChange={(e: any) => setCpass(e.target.value)}
                                    name="Password"
                                    id="CP" placeholder="Confirm Password"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    required
                                />
                                <div className='absolute right-2 top-2 z-50' onClick={e => setShowPassword(!showPassword)}>
                                    {!showPassword ? <IoMdEyeOff /> : <IoMdEye />}
                                </div>
                            </div>
                            <div className='mt-5'>
                                {loading ?
                                    <div className='w-28 mx-auto rounded-md font-bold text-center bg-[#fd7e14] py-2 shadow-2xl'>
                                        <Img style="mx-auto w-7" path="/logos/loader_gif.gif" alt=''/>
                                    </div>
                                    : <SmallButton text="Submit" style="m-auto" onClick={handleSubmit} />
                                }
                            </div>
                        </form>
                        <div className="flex items-start my-3 justify-between">
                            <input type="checkbox" ref={statusRef} name="checkbox" id="CP" />
                            <p className='text-xs w-[250px] font-semibold'>
                                I have read the
                                <span className='cursor-pointer underline text-[#490099]'>
                                    <Link href="/privacy-policy"> Privacy Policy </Link>
                                </span> and I agree to the
                                <span className='cursor-pointer underline text-[#490099]'>
                                    <Link href="/terms-and-conditions"> Terms of Service</Link>
                                </span>
                            </p>
                        </div>
                        <p className='text-xs mt-2 text-center font-semibold'>
                            <Link href="/numerology/login">
                                <span className='cursor-pointer underline text-[#490099]'>Sign In</span>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
            <hr />
        </>
    )
}

export default UpdatePassword