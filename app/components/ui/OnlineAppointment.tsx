"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Img from "./Img";
import SubHeading2 from "./SubHeading2";
import Para from "./Para";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import SmallButton from "./SmallButton";
import "react-toastify/dist/ReactToastify.css";
import CountriesName from "./CountriesName";


interface SlotData {
  slotTime: string;
}

interface AppointmentDetails {
  total_price?: string;
  no_gst?: string;
  gst?: string;
  category?: string;
  time?: string;
  currency?: string;
}

export default function OnlineAppointment() {
   const selectRef = useRef<any>(null);
    let path = process.env.NEXT_PUBLIC_URI;
    const modalRef = useRef<any>(null)
    let token = localStorage.getItem('token');
    const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // Ensure `token` is not null or undefined
        "Accept": "*/*"
    };

    const navigate = useRouter()
    const [showModalForBook, setShowModalForBook] = useState(false)
    const [apd, setApd] = useState<any>('')
    const [category, setCategory] = useState<any>()
    const [time, setTime] = useState<string| Date>()
    const [country, setCountry] = useState("IN")
    const [newDate, seNewDate] = useState<any>()
    const [userData, setUserData] = useState()
    const [number, setNumber] = useState<string>()
    const [slotData, setSlotData] = useState<any>()
    const [slotTime, setSlotTime] = useState<any>()
    const [evalue, setEvalue] = useState(new Date());
    const [slot, setSlot] = useState<any>()
    const [userDate, setUserDate] = useState<any>()
    let [loading, setLoading] = useState(false);
    const [currency, setCurrency] = useState()

    let mlist = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let dlist = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    let totalPrice = apd.total_price?.split(" ")[0]

    let userUrl = path + 'userAppointment/'

    const handleDate = async (date: any= "") => {
        if (date) {
            let isoDate = date.toISOString().split("T")[0];
            setUserDate(isoDate);
            let slotUrl = path + `timeslot/available?appointment_date=${isoDate}&appointment_time=${slotTime}`;
            try {
                const response = await fetch(slotUrl);
                const data = await response.json();
                if (data.success) {
                    setSlotData(data.data);
                }
            } catch (err: any) {
                console.log(err.message);
            }
            setEvalue(date);
        }
    };

    const showModal = (cat: any, tim: any) => {
        if (!localStorage.getItem('token')) {
            navigate.push('/numerology/login')
        }
        setSlotTime(tim)
        setCategory(cat)
        setTime(tim)
        setShowModalForBook(true)
    }

    // currect formate to the user
    const enabledDates = newDate?.adate?.map((date: any) => {
        const today = new Date();
        today.setDate(today.getDate() + 15);

        const currentDate = new Date(date);
        currentDate.setHours(0, 0, 0, 0); // Ignore time on each date to compare only date values

        // Check that the date is not a Sunday and not in the past
        if (currentDate.getDay() !== 0 && currentDate >= today) {
            return currentDate;
        }

        return null; // Explicitly return null for excluded dates
    }).filter(Boolean); // Filter out null values

    const isEnabled = (date: any) => {
        return enabledDates?.some(
            (enabledDate: any) => enabledDate?.toDateString() === date?.toDateString()
        );
    };

    const paySubmit = async (e: any) => {
        e.preventDefault();
        setLoading(true)
        if (!userDate) {
            setLoading(false)
            return alert("Please Select Your Appointment Date")
        }
        else if (!slot) {
            setLoading(false)
            return alert("Please Select Your Appointment Time Slot")
        }
        else {
            let req = await fetch(userUrl, {
                method: "POST",
                headers: headers,
                body: JSON.stringify({ number, country, category, slot, userDate, slotTime, totalPrice, currency, platform: "Desktop" })
            })

            let res = await req.json()
            if (country !== "IN") {
                if (apd.category == res.info.appointment_type_id && apd.time == res.info.appointment_time && apd.total_price.split(" ")[0] == res.data.transactions[0].amount.total.split(".")[0] && apd.total_price.split(" ")[1] == res.data.transactions[0].amount.currency) {
                    if (res.success === true) {
                        window.location = res.data.links[1].href
                    }
                }
                else if (res.success == false) {
                    setLoading(false)
                    return alert(res.message)
                }
                else {
                    setLoading(false)
                    return alert("Somthing Went Wrong")
                }
            }
            else {
                if (res.success === true) {
                    if (apd.category == res.info.appointment_type_id && apd.time == res.info.appointment_time && apd.total_price.split(" ")[0] * 100 == res.data.amount && apd.total_price.split(" ")[1] == res.data.currency) {
                        let paymentForm = document.createElement('form');
                        paymentForm.setAttribute('method', 'POST');
                        paymentForm.setAttribute('action', 'https://api.razorpay.com/v1/checkout/embedded')

                        const addHiddenInput = (name: any, value: any) => {
                            const input = document.createElement('input');
                            input.setAttribute('type', 'hidden');
                            input.setAttribute('name', name);
                            input.setAttribute('value', value);
                            paymentForm.appendChild(input);
                        };

                        // Set all the hidden fields from the original form
                        addHiddenInput('key_id', process.env.NEXT_PUBLIC_KEY_ID);
                        addHiddenInput('amount', res?.data?.amount);
                        addHiddenInput('currency', res.data.currency);
                        addHiddenInput('order_id', res?.data?.id);
                        addHiddenInput('name', 'Chaudhry Nummero Pvt. Ltd.');
                        addHiddenInput('description', 'Test Transaction');
                        addHiddenInput('image', 'https://cdn.razorpay.com/logos/BUVwvgaqVByGp2_large.jpg');
                        addHiddenInput('prefill[name]', res?.info?.userData.user.full_name);
                        addHiddenInput('prefill[contact]', res?.info?.userData.userAccount.mobile_number);
                        addHiddenInput('prefill[email]', res?.info?.userData.userAccount.email_id);
                        addHiddenInput('notes[shipping address]', 'L-16, The Business Centre, 61 Wellfield Road, New Delhi - 110001');
                        addHiddenInput('callback_url', path + 'userAppointment/book-appointment/rezorpay/success');
                        // addHiddenInput('cancel_url', path + 'userAppointment/book-appointment/failed');
                        // Append the form to the body and submit it automatically
                        document.body.appendChild(paymentForm);
                        paymentForm.submit();
                        setLoading(false)
                    }
                }
                else if (res.success == false) {
                    setLoading(false)
                    return alert(res.message)
                }
                else {
                    setLoading(false)
                    return alert("Somthing Went Wrong")
                }
            }
        }
    }

    const getSlots = (country: any) => {
        if (!token) return
        if (!category || !time) return

        if (country !== "IN") {
            country = "AE"
        }
        let payUrl = path + `paymentDetails/query?category=${category}&country=${country}&time=${time}`;
        fetch(payUrl).then((res) => res.json()).then((data) => {
            if (data.success == true) {
                setApd(data?.data)
                setCurrency(data?.data.currency)
            }
        }).catch((err) => console.log(err.message));
    }

    useEffect(() => {
        if (!token) return
        setNumber(JSON.parse(localStorage.getItem('number') as string))
        if (country) {
            getSlots(country)
        }

        handleDate()
        if (country) {
            let dateUrl = path + `availableDates`;
            fetch(dateUrl).then((res) => res.json()).then((data) => {
                if (data.success == true) {
                    seNewDate(data?.data[0])
                }
            }).catch((err) => console.log(err.message));
        }

    }, [country, slotTime, slotData])

    const closeModal = () => {
        setSlotData("");
        setSlot("");
        setShowModalForBook(false);
    };

    const handleOutsideClick = (e: any) => {
        if (modalRef.current && !modalRef.current.contains(e.target )) {
            closeModal();
        }
    };

    useEffect(() => {
        if (showModalForBook) {
            document.addEventListener("mousedown", handleOutsideClick);
        } else {
            document.removeEventListener("mousedown", handleOutsideClick);
        }
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [showModalForBook]);

    return (
        <>
            <div className='flex flex-col lg:flex-row'>
                <div className=''>
                    <Img alt="Online consultation" style="w-72 mx-auto lg:mx-0 shadow-2xl rounded-md" path="/images_folder/Online-consultation.webp" />
                </div>
                <div className='lg:w-60 w-80 lg:ml-10 m-auto'>
                    <SubHeading2 style="mt-3 lg:mt-0 lg:text-left text-center" subHeading="Online Appointment" />
                    <Para style="my-1 lg:text-left text-center" para="Online Zoom Meeting" />
                    <Para style="my-1 lg:text-left text-center" para="Ask anything about you, your career, marriage, family etc." />
                    <Para style="my-1 lg:text-left text-center font-bold" para="Book your Appointment for" />
                    <div className='flex justify-center lg:justify-start'>
                        <div onClick={(e) => showModal('Online', '15 Minutes')} className='cursor-pointer'>
                            <Img style="w-20" path="/logos/15.webp" alt="15-Minutes" />
                        </div>
                        <div onClick={(e) => showModal('Online', '30 Minutes')} className='cursor-pointer'>
                            <Img style="w-20" path="/logos/30.webp" alt="30-Minutes" />
                        </div>
                        <div onClick={(e) => showModal('Online', '60 Minutes')} className='cursor-pointer'>
                            <Img style="w-20" path="/logos/60.webp" alt="60-Minutes" />
                        </div>
                    </div>
                </div>
            </div>

            {showModalForBook && (
                <div
                    id="default-modal"
                    tabIndex={-1}
                    aria-hidden="true"
                    ref={modalRef}
                    className="fixed inset-0 z-50 flex justify-center items-center overflow-y-auto overflow-x-hidden w-full h-[calc(100%-1rem)] max-h-full"
                    onClick={handleOutsideClick} // Added click listener on the parent div

                >
                    <div className="relative w-[90%] max-w-xl min-w-sm max-h-full m-auto">
                        <div className="relative bg-slate-200 shadow-xl rounded-md overflow-hidden">

                            {/* Modal Header with Close Button */}
                            <div className="flex items-center justify-between rounded-t">
                                <button
                                    type="button"
                                    onClick={closeModal}
                                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                                    data-modal-hide="default-modal"
                                >
                                    <svg
                                        className="w-3 h-3"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 14 14"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7l-6 6"
                                        />
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>

                            {/* Modal Content */}
                            <div className="mx-auto">
                                <SubHeading2
                                    style="text-center mb-5"
                                    subHeading="Select Date & Time to Book Appointment"
                                />
                                <div className="md:flex justify-center items-start md:space-x-5 my-5 p-2 md:p-2">

                                    {/* Booking Form */}
                                    <div className="space-y-5">
                                        <div className="border border-gray-200">
                                            <input
                                                type="text"
                                                className="customSelect business-audit outline-none p-2 w-full bg-white"
                                                value={category}
                                                readOnly
                                            />
                                        </div>
                                        <div className="border border-gray-200">
                                            <input
                                                type="text"
                                                className="customSelect business-audit outline-none p-2 w-full bg-white"
                                                value={time as string}
                                                readOnly
                                            />
                                        </div>
                                        <div>
                                            <CountriesName
                                                text="Select your Country"
                                                value={country}
                                                onChange={(e: any) => setCountry(e.target.value)}
                                            />
                                        </div>

                                        {/* Date Display */}
                                        <div className="flex items-center space-x-5 bg-white py-1 px-3">
                                            <div>
                                                <p className="font-semibold text-4xl">{evalue?.getDate()}</p>
                                            </div>
                                            <div>
                                                <div className="flex space-x-1">
                                                    <p className="font-semibold text-sm">
                                                        {mlist[evalue?.getMonth()]}
                                                    </p>
                                                    <p className="font-semibold text-sm">
                                                        {evalue?.getFullYear()}
                                                    </p>
                                                </div>
                                                <p className="font-semibold text-sm">
                                                    {dlist[evalue?.getDay()]}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="border border-gray-200">
                                            <select
                                                ref={selectRef}
                                                id="firstCatList"
                                                className="customSelect business-audit outline-none p-2 w-full bg-white"
                                                // onChange={slotDatahandle}
                                                onChange={(e) => setSlot(e.target.value)}
                                            >
                                                <option value="noSlot">Select Time Slot</option>
                                                {slotData?.length ? (
                                                    slotData.map((ele: any) => (
                                                        <option key={ele.slotTime} value={ele.slotTime}>
                                                            {ele.slotTime}
                                                        </option>
                                                    ))
                                                ) : (
                                                    <option value="No Slot Available">
                                                        No Slot Available
                                                    </option>
                                                )}
                                            </select>
                                        </div>
                                    </div>

                                    {/* Calendar */}
                                    <div className="flex justify-center">
                                        <Calendar
                                            onChange={handleDate}
                                            value={evalue}
                                            tileDisabled={({ date, view }) =>
                                                view === "month" && !isEnabled(date)
                                            }
                                        />
                                    </div>
                                </div>

                                {/* Amount Display */}
                                <div className="mx-auto p-2 md:p-0">
                                    <div className="flex justify-between border p-3 bg-white">
                                        <Para style="font-bold" para="Total Amount" />
                                        <Para style="font-bold" para={apd.total_price} />
                                    </div>

                                    {country === "AE" ?
                                        time === "30 Minutes" ?
                                            <Para style="text-center" para={country === "AE" ? "You are about to make a payment of AED  2500. Please continue with the transaction." : ''} />
                                            : time === "15 Minutes" ?
                                                <Para style="text-center" para={country === "AE" ? "You are about to make a payment of AED  1,249. Please continue with the transaction." : ''} />
                                                :
                                                <Para style="text-center" para={country === "AE" ? "You are about to make a payment of AED  3800. Please continue with the transaction." : ''} />
                                        : ''
                                    }

                                    {country === "IN" && (
                                        <div className="bg-white px-3 space-y-3">
                                            <Para style="font-bold" para="GST Details" />
                                            <div className="flex justify-between">
                                                <Para style="" para="Total Amount (With GST)" />
                                                <Para style="" para={apd.total_price} />
                                            </div>
                                            <div className="flex justify-between">
                                                <Para style="" para="Amount (Without GST)" />
                                                <Para style="" para={apd.no_gst} />
                                            </div>
                                            <div className="flex justify-between">
                                                <Para style="" para="GST (18%)" />
                                                <Para style="" para={apd.gst} />
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Loading and Payment Button */}

                                {loading ? (
                                    <div className="w-28 mx-auto rounded-md font-bold text-center bg-[#fd7e14] py-2 shadow-2xl">
                                        <Img style="mx-auto w-7" path="/logos/loader_gif.gif" alt=""/>
                                    </div>
                                ) : (
                                    <SmallButton
                                        style="my-1 mx-auto"
                                        text="Pay Now"
                                        onClick={paySubmit}
                                    />
                                )}

                                {/* Note Section */}
                                <div className="pb-20 md:pb-0">
                                    <p className="text-justify text-sm bg-white p-2">
                                        Note: To obtain written report (soft copy) of consultation a sum
                                        of {country === "IN" ? "INR 20,000/-" : "USD 243/-"} will be
                                        charged extra and will be available within 4 working days from
                                        the date of making payment.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
