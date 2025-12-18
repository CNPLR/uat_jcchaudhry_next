'use client';
import axios from 'axios';
import Link from 'next/link';
import { useState } from 'react'
import { FaLocationDot } from 'react-icons/fa6';
import { IoIosMail } from 'react-icons/io';
import { LiaWhatsapp } from "react-icons/lia";
import PhoneInput from 'react-phone-input-2';
import Banner from '../components/ui/Banner';
import Img from '../components/ui/Img';
import MainHeading from '../components/ui/MainHeading';
import Para from '../components/ui/Para';
import SmallButton from '../components/ui/SmallButton';
import SubHeading from '../components/ui/SubHeading';
import { useRouter } from 'next/navigation';

const Contact = () => {
   let path = process.env.NEXT_PUBLIC_URI;
    let [loading, setLoading] = useState(false);
    const [code, setCode] = useState('')
    const [number, setNumber] = useState('')
    const [nationalNumber, setNationalNumber] = useState('');

    const navigate = useRouter();

    const inputChange = (value: any, data: any) => {
        setNumber(value)
        setCode(data.dialCode)
        const dialCodeLength = data.dialCode.length;
        const nationalNum = value.slice(dialCodeLength);
        setNationalNumber(nationalNum);
    }

    const [contactData, setContactData] = useState({ name: "", email: "", message: "" });

    const textInputChange = (e: any) => {
        const { name, value } = e.target;
        setContactData({ ...contactData, [name]: value });
    };

    const submit = async (e: any) => {
        e.preventDefault()
        setLoading(true)
        if (!contactData.name || !contactData.email || !contactData.message || !number) {
            setLoading(false)
            return alert("Please fill the all fields properly")
        }
        else if (number.length < 9) {
            setLoading(false)
            return alert("Please Enter Valid Number")
        }
        else {
            const res = await axios.post(path + "contactdata", { contactData, code, nationalNumber, destination: "Desktop" })
            if (res.data.success === true) {
                navigate.push("/thankyou");
            }
            else {
                setLoading(false)
                return alert("Some thingwent wrong")
            }
        }
    }

    return (
        <div>

            <Banner alttag="Contact Dr. J C Chaudhry for numerology" path="/allbanners/Contact-Dr-J-C-Chaudhry-for-numerology.png" />
            <MainHeading mainHeading="Contact" style="text-center pt-10" />
            <div className='flex flex-col lg:flex-row justify-between items-start lg:px-20 px-10 py-10'>
                <div className="flex items-center justify-center lg:w-2/4 w-full">
                    <div className="mx-auto w-full">
                        <form method="POST" onSubmit={submit}>
                            <div className="mb-5">
                                <input
                                    onChange={textInputChange}
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Name"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-[#6B7280] outline-none"
                                />
                            </div>
                            <div className="mb-5">
                                <input
                                    onChange={textInputChange}
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Email"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-[#6B7280] outline-none"
                                />
                            </div>
                            <div className="mb-5 contact_number">
                                <PhoneInput
                                    countryCodeEditable={false}
                                    country={'in'}
                                    value={number}
                                    onChange={inputChange}
                                    inputStyle={{ width: "100%", border: "0.5px solid #e0e0e0", outline: "none", color: "#6B7280", fontSize: "1rem", height: "3rem" }}
                                />
                            </div>
                            <div className="mb-5">
                                <textarea
                                    onChange={textInputChange}
                                    rows={4}
                                    name="message"
                                    id="message"
                                    placeholder="Type your message"
                                    className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-[#6B7280] outline-none"
                                >
                                </textarea>
                            </div>
                            <div>
                                {loading ?
                                    <div className='w-28 rounded-md font-bold text-center bg-[#fd7e14] py-2 shadow-2xl'>
                                        <Img style="mx-auto w-7" path="/logos/loader_gif.gif" alt='' />
                                    </div>
                                    : <SmallButton text="Submit" />
                                }
                            </div>
                        </form>
                    </div>
                </div>
                <div className="lg:w-[40%] w-full">
                    <SubHeading subHeading="Get in touch" style="my-5 lg:my-0" />
                    <iframe
                        allowFullScreen
                        aria-hidden="false"
                        frameBorder="0"
                        height="200"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.5132850595796!2d77.1852784001746!3d28.64434599021172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d034095a13e03%3A0xc41bc0a9e90b11e0!2sJ%20C%20Chaudhry!5e0!3m2!1sen!2sin!4v1605765304360!5m2!1sen!2sin"
                        tabIndex={0}
                        width="100%"
                    >
                    </iframe>
                    <div className="flex items-center space-x-5 my-4">
                        <FaLocationDot />
                        <Para para="Chaudhry Nummero Pvt. Ltd. JK House, 32, Pusa Road, 3rd Floor, New Delhi - 110005. INDIA" style="" />
                    </div>
                    <hr />
                    <div className="flex items-center space-x-5 my-2">
                        <IoIosMail />
                        <div className='flex items-center space-x-2'>
                            <Para para="Email Us:" style="" />
                            <Link href="mailto:support@jcchaudhry.com">
                                <Para para="support@jcchaudhry.com" style="" />
                            </Link>
                        </div>
                    </div>
                    <div className="flex items-center space-x-5 my-2">
                        <LiaWhatsapp />
                        <Para para="Call us on WhatsApp: +91-8130555256, +91-9910673939" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact