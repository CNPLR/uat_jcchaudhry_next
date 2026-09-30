"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Img from "./Img";
import SubHeading2 from "./SubHeading2";
import Para from "./Para";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import SmallButton from "./SmallButton";
import CountriesName from "./CountriesName";
import { useAlert } from "@/lib/AlertBox";
import "react-toastify/dist/ReactToastify.css";

interface SlotData {
  slotTime: string;
}

interface AppointmentDetails {
  total_price?: string;
  no_gst?: string;
  gst?: string;
  category?: string;
  time?: string;
}

export default function OflineAppointment() {
  const path = process.env.NEXT_PUBLIC_URI as string;
  const token = typeof window !== "undefined" ? localStorage.getItem("token") : "";
  const router = useRouter();

  const modalRef = useRef<HTMLDivElement | null>(null);

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
    Accept: "*/*",
  };
  const alertBox = useAlert();
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
  const [loading, setLoading] = useState(false);
  const [isAgree, setIsAgree] = useState<boolean>(false);

  const [evalue, setEvalue] = useState<Date>(new Date());

  const mlist = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const dlist = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const totalPrice = apd.total_price?.split(" ")[0];
  const userUrl = path + "userAppointment/";

  // ---------------------- HANDLE DATE ----------------------
  const handleDate = async (date: any) => {
    if (!date) return;
    const isoDate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
    setUserDate(isoDate);

    const slotUrl = `${path}timeslot/available?appointment_date=${isoDate}&appointment_time=${slotTime}`;

    try {
      const res = await fetch(slotUrl);
      const data = await res.json();
      if (data.success) {
        setSlotData(data.data);
      }
    } catch (err) {
      console.log(err);
    }

    setEvalue(date);
  };

  // ---------------------- OPEN MODAL ----------------------
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

  // ---------------------- ENABLED DATES ----------------------
  const enabledDates =
    newDate?.adate
      ?.map((d: any) => {
        const today = new Date();
        today.setDate(today.getDate() + 15);

        const cDate = new Date(d);
        cDate.setHours(0, 0, 0, 0);

        if (cDate.getDay() !== 0 && cDate >= today) return cDate;
        return null;
      })
      .filter(Boolean) || [];

  const isEnabled = (date: Date) =>
    enabledDates.some((e: any) => e.toDateString() === date.toDateString());

  // ---------------------- CLOSE MODAL ----------------------
  const closeModal = () => {
    setSlotData(undefined);
    setSlot(undefined);
    setShowModalForBook(false);
  };

  // ---------------------- PAYMENT SUBMIT ----------------------
  const paySubmit = async (e: any) => {
    e.preventDefault();

    if (country !=="IN" && !isAgree) {
       alertBox.showAlert({ title: "Alert", message: "Please select the “I agree” checkbox to continue.", type: "info" });
       return;
    }

    setLoading(true);

    if (!userDate) {
      // alert("Please Select Your Appointment Date");
      alertBox.showAlert({ title: "Alert", message: "Please Select Your Appointment Date.", type: "info" });
      setLoading(false);
      return;
    }

    if (!slot) {
      // alert("Please Select Your Appointment Time Slot");
      alertBox.showAlert({ title: "Alert", message: "Please Select Your Appointment Time Slot.", type: "info" });
      setLoading(false);
      return;
    }

    const currency = country === "IN" ? {} : {"currency": "USD"};

    const req = await fetch(userUrl, {
      method: "POST",
      headers,
      body: JSON.stringify({
        number,
        country,
        category,
        totalPrice,
        slot,
        userDate,
        slotTime,
        ...currency,
        isAgree,
        platform: "Desktop",
      }),
    });

    const res = await req.json();
   try {
     if (country !== "IN") {
      if (apd.category == res.info.appointment_type_id && apd.time == res.info.appointment_time && apd?.total_price?.split(" ")[0] == res.data.transactions[0].amount.total.split(".")[0] && apd?.total_price?.split(" ")[1] == res.data.transactions[0].amount.currency) {
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
      if (res.success) {
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
        add("prefill[name]", res?.info?.userData.user.full_name);
        add("prefill[contact]", res?.info?.userData.userAccount.mobile_number);
        add("prefill[email]", res?.info?.userData.userAccount.email_id);
        add("callback_url", path + "userAppointment/book-appointment/rezorpay/success");

        document.body.appendChild(paymentForm);
        paymentForm.submit();

        setLoading(false);
      } else {
        alert(res.message || "Something Went Wrong");
        setLoading(false);
      }
    }
   } catch (error) {
    
   }
  };

  // ---------------------- GET PAYMENT SLOTS ----------------------
  const getSlots = (countryCode: string) => {
    if (!token || !category || !time) return;

    let c = countryCode !== "IN" ? "AE" : "IN";
    const payUrl = `${path}paymentDetails/query?category=${category}&country=${c}&time=${time}`;

    fetch(payUrl)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setApd(data.data);
      })
      .catch((err) => console.log(err));
  };

  // ---------------------- INITIAL LOAD ----------------------
  useEffect(() => {
    if (!token) return;

    const storedNum = localStorage.getItem("number");
    if (storedNum) setNumber(JSON.parse(storedNum));

    getSlots(country);

    const dateUrl = path + "availableDates";
    fetch(dateUrl)
      .then((r) => r.json())
      .then((d) => {
        if (d.success) seNewDate(d.data[0]);
      })
      .catch((err) => console.log(err));
  }, [country, slotTime]);

  return (
    <>
      {/* TOP SECTION */}
      <div className="flex flex-col lg:flex-row">
        <div>
          <Img
            title="Online Numerology Consultation"
            alt="Dr. JC Chaudhry Online Consultation"
            style="w-72 mx-auto lg:mx-0 shadow-2xl rounded-md"
            path="/images_folder/face-to-face-consultation.webp"
          />
        </div>

        <div className="lg:w-60 w-80 lg:ml-10 m-auto">
          <SubHeading2
            style="mt-3 lg:mt-0 lg:text-left text-center"
            subHeading="Face to Face Appointment"
          />
          <Para style="my-1 lg:text-left text-center" para="Face to Face Meeting in our office" />
          <Para
            style="my-1 lg:text-left text-center"
            para="Ask anything about you, your career, marriage, family etc."
          />
          <Para
            style="my-1 lg:text-left text-center font-bold"
            para="Book your Appointment for"
          />

          <div className="flex justify-center lg:justify-start">
            <div onClick={() => showModal("Face To Face", "30 Minutes")} className="cursor-pointer">
              <Img style="w-20" path="/logos/30.webp" alt="30-Minutes" />
            </div>
            <div onClick={() => showModal("Face To Face", "60 Minutes")} className="cursor-pointer">
              <Img style="w-20" path="/logos/60.webp" alt="60-Minutes" />
            </div>
          </div>
        </div>
      </div>

      {/* MODAL */}
      {showModalForBook && (
        <div
          id="default-modal"
          tabIndex={-1}
          aria-hidden="true"
          ref={modalRef}
          className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full h-[calc(100%-1rem)] max-h-full"
        >
          <div className="relative w-[90%] max-w-xl max-h-full m-auto">
            <div className="relative bg-slate-200 shadow-xl rounded-md overflow-hidden">
              <div className="flex items-center justify-between rounded-t">
                <button
                  type="button"
                  onClick={closeModal}
                  className="text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                >
                  ✕
                </button>
              </div>

              <div className="mx-auto">
                <SubHeading2
                  style="text-center mb-5"
                  subHeading="Select Date & Time to Book Appointment"
                />

                {/* DATE + DETAILS */}
                <div className="md:flex justify-center items-start md:space-x-5 my-5 p-2  ">
                  <div className="space-y-5">
                    <div className="flex-shrink border border-transparent ">
                      <input
                        type="text"
                        className="customSelect business-audit outline-none p-2 w-full bg-white"
                        value={category}
                        readOnly
                      />
                    </div>

                    <div className="flex-shrink border border-transparent">
                      <input
                        type="text"
                        className="customSelect business-audit outline-none p-2 w-full bg-white"
                        value={time}
                        readOnly
                      />
                    </div>

                    <CountriesName
                      text="Select your Country"
                      value={country}
                      onChange={(e: any) => setCountry(e.target.value)}
                    />

                    {/* DATE PREVIEW */}
                    <div className="flex items-center space-x-5 bg-white py-1 px-3">
                      <p className="font-semibold text-4xl">{evalue.getDate()}</p>
                      <div>
                        <div className="flex space-x-1">
                          <p className="font-semibold text-sm">{mlist[evalue.getMonth()]}</p>
                          <p className="font-semibold text-sm">{evalue.getFullYear()}</p>
                        </div>
                        <p className="font-semibold text-sm">{dlist[evalue.getDay()]}</p>
                      </div>
                    </div>

                    {/* TIME SLOT */}
                    <div className="flex-shrink border border-transparent ">
                      <select
                        className="customSelect business-audit outline-none p-2 w-full bg-white"
                        onChange={(e) => setSlot(e.target.value)}
                      >
                        <option value="noSlot">Select Time Slot</option>
                        {slotData?.length ? (
                          slotData.map((ele, i) => (
                            <option key={i} value={ele.slotTime}>
                              {ele.slotTime}
                            </option>
                          ))
                        ) : (
                          <option>No Slot Available</option>
                        )}
                      </select>
                    </div>
                  </div>

                  {/* CALENDAR */}
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

                {/* COUNTRY CHECK */}
                {country !== "IN" ? (
                  <>
                    <div className="flex justify-between border border-gray-200 p-3 bg-white">
                      <Para style="font-bold" para="Total Amount" />
                      <Para style="font-bold" para={apd.total_price} />
                    </div>
                    <div className="bg-white p-2 mb-3">
                      <div className="text-red-600 ">
                        <p>Note: Face To Face Consultation Only Available at India office.</p>
                      </div>
                     <div className="flex items-center">
                       <input id="checked-checkbox" type="checkbox" onChange={({target})=> setIsAgree(target.checked)} className="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium  accent-[#490099]"/>
                      <label htmlFor="checked-checkbox" className="select-none ms-2 text-sm font-medium text-heading">
                       I agree.
                        </label>
                     </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* PRICE DETAILS */}
                    <div className="mx-auto p-2">
                      <div className="flex justify-between border border-slate-200 p-3 bg-white">
                        <Para style="font-bold" para="Total Amount" />
                        <Para style="font-bold" para={apd.total_price as string} />
                      </div>

                      <div className="bg-white px-3 space-y-3">
                        <Para style="font-bold" para="GST Details" />

                        <div className="flex justify-between">
                          <Para style="font-bold" para="Total Amount (With GST)" />
                          <Para style="font-bold" para={apd.total_price as string} />
                        </div>

                        <div className="flex justify-between">
                          <Para style="font-bold" para="Amount (Without GST)" />
                          <Para style="font-bold" para={apd.no_gst as string} />
                        </div>

                        <div className="flex justify-between">
                          <Para style="font-bold" para="GST (18%)" />
                          <Para style="font-bold" para={apd.gst || "" } />
                        </div>
                      </div>
                    </div>
                    </>
                  )}
                    {/* PAY BUTTON */}
                    {loading ? (
                      <div className="w-28 mx-auto rounded-md font-bold text-center bg-[#fd7e14] py-2 shadow-2xl">
                        <Img style="mx-auto w-7" path="/logos/loader_gif.gif" alt="Face to face consultation only for India by Dr. J C Chaudhry" />
                      </div>
                    ) : (
                      <SmallButton style="my-1 mx-auto" text="Pay Now" onClick={paySubmit} />
                    )}

                    <div className="p-2">
                      <p className="text-justify text-sm bg-white p-2">
                        Note: To obtain written report (soft copy) of consultation a sum of {country === "IN" ? "INR 20,000/-" : "USD 243/-"} will be charged extra and will be available within 4 working days
                        from the date of making payment.
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
