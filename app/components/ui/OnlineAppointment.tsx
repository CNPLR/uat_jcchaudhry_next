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
  const selectRef = useRef<HTMLSelectElement | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);

  const path = process.env.NEXT_PUBLIC_BACKEND_URI as string;
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : "";

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
    Accept: "*/*",
  };

  const router = useRouter();

  const [showModalForBook, setShowModalForBook] = useState(false);
  const [apd, setApd] = useState<AppointmentDetails>({});
  const [category, setCategory] = useState<string | undefined>();
  const [time, setTime] = useState<string | undefined>();
  const [country, setCountry] = useState("IN");
  const [newDate, seNewDate] = useState<any>();
  const [number, setNumber] = useState<any>();
  const [slotData, setSlotData] = useState<SlotData[] | undefined>();
  const [slotTime, setSlotTime] = useState<string | undefined>();
  const [slot, setSlot] = useState<string | undefined>();
  const [userDate, setUserDate] = useState<string | undefined>();
  const [currency, setCurrency] = useState<string | undefined>();
  const [loading, setLoading] = useState(false);

  const [evalue, setEvalue] = useState<Date>(new Date());

  const mlist = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December",
  ];
  const dlist = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

  const totalPrice = apd.total_price?.split(" ")[0];
  const userUrl = path + "userAppointment/";

  // ---------------- DATE SELECT ----------------
  const handleDate = async (date: any) => {
    if (!date) return;

    const isoDate = date.toISOString().split("T")[0];
    setUserDate(isoDate);

    const slotUrl = `${path}timeslot/available?appointment_date=${isoDate}&appointment_time=${slotTime}`;

    try {
      const res = await fetch(slotUrl);
      const data = await res.json();
      if (data.success) setSlotData(data.data);
    } catch (err) {
      console.log(err);
    }

    setEvalue(date);
  };

  // ---------------- OPEN MODAL ----------------
  const showModal = (cat: string, tim: string) => {
    if (!token) {
      router.push("/numerology/login");
      return;
    }
    setSlotTime(tim);
    setCategory(cat);
    setTime(tim);
    setShowModalForBook(true);
  };

  // ---------------- ENABLE DATES ----------------
  const enabledDates =
    newDate?.adate
      ?.map((d: any) => {
        const today = new Date();
        today.setDate(today.getDate() + 15);

        const cd = new Date(d);
        cd.setHours(0, 0, 0, 0);

        if (cd.getDay() !== 0 && cd >= today) return cd;
        return null;
      })
      .filter(Boolean) || [];

  const isEnabled = (date: Date) =>
    enabledDates.some((d: any) => d.toDateString() === date.toDateString());

  // ---------------- PAYMENT ----------------
  const paySubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    if (!userDate) {
      alert("Please Select Your Appointment Date");
      setLoading(false);
      return;
    }

    if (!slot) {
      alert("Please Select Your Appointment Time Slot");
      setLoading(false);
      return;
    }

    const req = await fetch(userUrl, {
      method: "POST",
      headers,
      body: JSON.stringify({
        number,
        country,
        category,
        slot,
        userDate,
        slotTime,
        totalPrice,
        currency,
        platform: "Desktop",
      }),
    });

    const res = await req.json();

    if (country !== "IN") {
      if (
        apd.category === res.info.appointment_type_id &&
        apd.time === res.info.appointment_time &&
        apd.total_price?.split(" ")[0] ===
          res.data.transactions[0].amount.total.split(".")[0] &&
        apd.total_price?.split(" ")[1] ===
          res.data.transactions[0].amount.currency
      ) {
        if (res.success) {
          window.location.href = res.data.links[1].href;
        }
      } else {
        alert(res.message || "Something Went Wrong");
        setLoading(false);
      }
    } else {
      if (res.success) {
        if (
          apd.category === res.info.appointment_type_id &&
          apd.time === res.info.appointment_time &&
          Number(apd.total_price?.split(" ")[0]) * 100 === res.data.amount &&
          apd.total_price?.split(" ")[1] === res.data.currency
        ) {
          const paymentForm = document.createElement("form");
          paymentForm.method = "POST";
          paymentForm.action = "https://api.razorpay.com/v1/checkout/embedded";

          const add = (name: string, value: any) => {
            const input = document.createElement("input");
            input.type = "hidden";
            input.name = name;
            input.value = value;
            paymentForm.appendChild(input);
          };

          add("key_id", process.env.NEXT_PUBLIC_KEY_ID);
          add("amount", res.data.amount);
          add("currency", res.data.currency);
          add("order_id", res.data.id);
          add("name", "Chaudhry Nummero Pvt. Ltd.");
          add("description", "Test Transaction");
          add("image", "https://cdn.razorpay.com/logos/BUVwvgaqVByGp2_large.jpg");
          add("prefill[name]", res.info.userData.user.full_name);
          add("prefill[contact]", res.info.userData.userAccount.mobile_number);
          add("prefill[email]", res.info.userData.userAccount.email_id);
          add("notes[shipping address]", "L-16, The Business Centre, 61 Wellfield Road, New Delhi - 110001");
          add("callback_url", path + "userAppointment/book-appointment/rezorpay/success");

          document.body.appendChild(paymentForm);
          paymentForm.submit();
          setLoading(false);
        }
      } else {
        alert(res.message || "Something Went Wrong");
        setLoading(false);
      }
    }
  };

  // ---------------- PAYMENT INFO ----------------
  const getSlots = (c: string) => {
    if (!token || !category || !time) return;

    let countryCode = c !== "IN" ? "AE" : "IN";
    const payUrl = `${path}paymentDetails/query?category=${category}&country=${countryCode}&time=${time}`;

    fetch(payUrl)
      .then((r) => r.json())
      .then((d) => {
        if (d.success) {
          setApd(d.data);
          setCurrency(d.data.currency);
        }
      })
      .catch((err) => console.log(err));
  };

  // ---------------- INIT ----------------
  useEffect(() => {
    if (!token) return;

    const stored = localStorage.getItem("number");
    if (stored) setNumber(JSON.parse(stored));

    getSlots(country);

    const dateUrl = `${path}availableDates`;
    fetch(dateUrl)
      .then((r) => r.json())
      .then((d) => {
        if (d.success) seNewDate(d.data[0]);
      })
      .catch((err) => console.log(err));
  }, [country, slotTime, slotData]);

  // ---------------- CLOSE MODAL ----------------
  const closeModal = () => {
    setSlotData(undefined);
    setSlot(undefined);
    setShowModalForBook(false);
  };

  const handleOutsideClick = (e: any) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
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
                                        <div className="border">
                                            <input
                                                type="text"
                                                className="customSelect business-audit outline-none p-2 w-full"
                                                value={category}
                                                readOnly
                                            />
                                        </div>
                                        <div className="border">
                                            <input
                                                type="text"
                                                className="customSelect business-audit outline-none p-2 w-full"
                                                value={time}
                                                readOnly
                                            />
                                        </div>
                                        <div>
                                            <CountriesName
                                                text="Select your Country"
                                                value={country}
                                                onChange={(e) => setCountry(e.target.value)}
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

                                        <div className="border">
                                            <select
                                                ref={selectRef}
                                                id="firstCatList"
                                                className="customSelect business-audit outline-none p-2 w-full"
                                                // onChange={slotDatahandle}
                                                onChange={(e) => setSlot(e.target.value)}
                                            >
                                                <option value="noSlot">Select Time Slot</option>
                                                {slotData?.length ? (
                                                    slotData.map((ele) => (
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
                                        <Para style="font-bold" para={apd.total_price || ""} />
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
                                                <Para style="" para={apd.total_price || ""} />
                                            </div>
                                            <div className="flex justify-between">
                                                <Para style="" para="Amount (Without GST)" />
                                                <Para style="" para={apd.no_gst || ""} />
                                            </div>
                                            <div className="flex justify-between">
                                                <Para style="" para="GST (18%)" />
                                                <Para style="" para={apd.gst || ""} />
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Loading and Payment Button */}

                                {loading ? (
                                    <div className="w-28 mx-auto rounded-md font-bold text-center bg-[#fd7e14] py-2 shadow-2xl">
                                        <Img style="mx-auto w-7" path="/logos/loader_gif.gif" alt="image"/>
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
  );
}
