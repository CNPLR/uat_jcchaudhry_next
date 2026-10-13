'use client'
import axios from "axios";
import { showToast, ToastOptions } from 'nextjs-toast-notify';
import { useState, useEffect } from "react";

// helper that calls showToast.<type>(...)
export const Sms = (type: keyof typeof showToast, text:string) => {
    const opts:ToastOptions = {
        duration: 2000,
        progress: true,
        position: "top-right",
        transition: "swingInverted",
        icon: '',
        sound: true,
    };

    // call the specific method from the library, e.g. showToast.success(...)
    if (showToast && typeof showToast[type] === 'function') {
        return showToast[type](text, opts);
    }

    // fallback
    alert(text);
}

export const Api = process.env.NEXT_PUBLIC_API


export const CountryIPAddress = () => {
    const [countryIp, setCountryIp] = useState('');

    useEffect(() => {
        const GetCountryCode = async () => {
            try {
                const data = await axios('https://ipinfo.io/json')
                setCountryIp(data?.data.country.toLowerCase());
            } catch (error) {
                console.log(error);
            }
        };
        GetCountryCode();
    }, []);

    return countryIp; // Return the state
};