"use client";

import { useRef, useState } from "react";
import {  useRouter } from "next/navigation";
import Link from "next/link";
import { FaCheck } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import SmallButton from "./SmallButton";
import { CountryIPaddress } from "./GetCountryCode";
import Img from "./Img";
import Para from "./Para";
import SubHeading1 from "./SubHeading1";
import setDobFn from "@/lib/setDobFn";

interface CommonFormProps {
  style?: string;
}

export default function CommonForm({ style }: CommonFormProps) {
   let [loading, setLoading] = useState(false);
    let path = process.env.NEXT_PUBLIC_URI;
    const redirect = useRouter();

    const [nationalNumber, setNationalNumber] = useState('');
    const [code, setCode] = useState('')
    const [number, setNumber] = useState('')
    const [otp, setOtp] = useState('')

    const [showPassword, setShowPassword] = useState(false)
    const [otpStatus, setOtpStatus] = useState<string | boolean>(false)
    const [otpEnable, setOtpEnable] = useState(true)

    const statusRef = useRef<any>('');

    const [pass, setPass] = useState('')
    const [cpass, setCpass] = useState('')

    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [dob, setDob] = useState<string | Date>()

    const inputChange = (value: any, data: any) => {
        setNumber(value)
        setCode(data.dialCode)
        const dialCodeLength = data.dialCode.length;
        const nationalNum = value.slice(dialCodeLength);
        setNationalNumber(nationalNum);
    }

    const sendOtp = async (e: any) => {
        e.preventDefault();
        if (name.length < 4 || name.length > 250) {
            return alert("Please Enter Minimum 8 and Maximum 250 Characters in Name Field")
        }
        if (nationalNumber.length < 7 || nationalNumber.length > 15) {
            return alert("Please enter your valid number")
        }

        let res = await axios.get(`${path}otp/signup-otp?code=${code}&number=${nationalNumber}&name=${name}&platform_type=Desktop`);

        if (res.data.success) {
            setOtpStatus("Enter Sent OTP.")
            setOtpEnable(!otpEnable)
        }
        else {
            alert(res.data.message)
            return redirect.push('/numerology/login')
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
        try {
            event.preventDefault();
            setLoading(true)
            if (name.length < 4 || name.length > 250) {
                setLoading(false)
                return alert("Please Enter Minimum 8 and Maximum 250 Characters in Name Field")
            }
            else if (!statusRef.current.checked) {
                setLoading(false)
                return alert("Please Check Privacy Policy and Terms of Services")
            }
            else if (nationalNumber.length < 7 || nationalNumber.length > 15) {
                setLoading(false)
                return alert("Please Enter Minimum 7 and Maximum 15 Characters in Phone number Field")
            }
            else if (email.length < 11 || email.length > 250) {
                setLoading(false)
                return alert("Please Enter Minimum 8 and Maximum 250 Characters in Email Field")
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
                const res = await axios.put(path + "websiteuser/compeleteuser", { pass, email, dob, nationalNumber })

                if (res?.data.success) {
                    alert(res.data.message)
                    redirect.push('/numerology/login')
                }
                else {
                    alert(res.data.message)
                    return alert(res.data.message)
                }
            }
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    const country = CountryIPaddress();


  return (
    <>
            <div className={`${style} px-5 py-3 w-[320px] bg-white rounded-md`}>
                <SubHeading1 subHeading="Register Now" style="text-center" />
                <Para para="To book an appointment" style="text-center mb-2" />
                <form className='form' onSubmit={handleSubmit}>
                    <div className="mb-5">
                        <input type="text" name="name" onChange={(e) => setName(e.target.value.replace(/\s+/g, ' '))} value={name} placeholder="Name" className="w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" required />
                    </div>
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
                        <input
                            type="password"
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
                    <div className="mb-5">
                        <input
                            type="email"
                            name="email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email} placeholder="Email"
                            pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            required
                        />
                    </div>
                    <div className="mb-5">
                        <div>
                            <DatePicker
                                id="date-picker"
                                selected={dob as Date}
                                onChange={date => setDob(setDobFn(date as Date))}
                                dateFormat="dd/MM/yyyy"
                                maxDate={new Date()} // Disable previous dates
                                placeholderText="DD-MM-YYYY"
                                showPopperArrow={false} // Removes arrow for better UI
                                // peekNextMonth
                                // showMonthDropdown
                                showYearDropdown
                                dropdownMode="select"
                                required
                            />
                        </div>
                    </div>
                    <div className="mb-5 relative">
                        <input type={showPassword ? "text" : "password"} name="Password" onChange={(e) => setPass(e.target.value)} value={pass} placeholder="Password"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" required
                        />
                        <div className='absolute right-2 top-2 z-50' onClick={e => setShowPassword(!showPassword)}>
                            {!showPassword ? <IoMdEyeOff /> : <IoMdEye />}
                        </div>

                    </div>
                    <div className="relative">
                        <input type={showPassword ? "text" : "password"} name="Password" onChange={(e) => setCpass(e.target.value)} value={cpass} placeholder="Confirm Password"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" required
                        />
                        <div className='absolute right-2 top-2 z-50' onClick={e => setShowPassword(!showPassword)}>
                            {!showPassword ? <IoMdEyeOff /> : <IoMdEye />}
                        </div>

                    </div>
                    <div className="flex items-start my-3 justify-between">
                        <input type="checkbox" ref={statusRef} name="checkbox" defaultChecked />
                        <p className='text-xs w-[250px] font-semibold'>
                            By clicking, I agree to receive SMS & emails. I have read the
                            <span className='cursor-pointer underline text-[#490099]'>
                                <Link href="/privacy-policy"> Privacy Policy </Link>
                            </span> and I agree to the
                            <span className='cursor-pointer underline text-[#490099]'>
                                <Link href="/terms-and-conditions"> Terms of Service</Link>
                            </span>
                        </p>
                    </div>
                    {loading ?
                        <div className='w-28 mx-auto rounded-md font-bold text-center bg-[#fd7e14] py-2 shadow-2xl'>
                            <Img style="mx-auto w-7" path="/logos/loader_gif.gif" alt="" />
                        </div>
                        : <SmallButton text="Submit" style="m-auto" onClick={handleSubmit}/>
                    }
                </form>
                <p className='text-xs mt-2 text-center font-semibold'>
                    Already have an account?
                    <Link href="/numerology/login">
                        <span className='cursor-pointer underline text-[#490099]'>Sign In</span>
                    </Link>
                </p>
            </div>
        </>
  );
}
