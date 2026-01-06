"use client";

import { useState } from "react";
import "../styles/common.css";
import MainHeading from "./ui/MainHeading";
import axios from "axios";

export default function Subscribe() {
  const [email, setEmail] = useState<string>("");

  // Vite -> Next.js environment variable
  const path = process.env.NEXT_PUBLIC_URI as string;

  const submit = async (e: any) => {
        e.preventDefault();

        const validate = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

        if (validate.test(email)) {
            try {
                const res = await axios.post(`${path}subscribe`, { email, platform: "Desktop" });
                if (res.data.success) {
                    setEmail("")
                    alert(res.data.message);
                } else {
                    alert("Subscription failed. Please try again.");
                }
            } catch (error) {
                console.error("Error subscribing:", error);
                alert("An error occurred. Please try again later.");
            }
        } else {
            alert("Please enter a valid email address.");
        }
    };

    return (
        <div className='bg-[#fd7e14]'>
            <div className='lg:flex justify-between mx-auto max-w-[1200px] w-full lg:h-28 py-5 lg:py-0 items-center'>
                <div>
                    <MainHeading style="text-white text-center" mainHeading="Subscribe to Get Latest Updates" />
                </div>
                <div className='lg:flex justify-around items-center lg:space-x-8'>
                    <div className='text-center my-4 lg:my-0'>
                        <input onChange={e => setEmail(e.target.value)} className='text-center bg-white custom-input w-[300px] placeholterText h-12 outline-none rounded-md placeholder-gray-600' placeholder='Enter your Email Id' type="email" required />
                    </div>
                    <div className='text-center'>
                        <button onClick={submit} className='transition buttonHover text-center shadow-md bg-orange-500 text-white font-semibold px-10 py-3 rounded-lg border'>Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
