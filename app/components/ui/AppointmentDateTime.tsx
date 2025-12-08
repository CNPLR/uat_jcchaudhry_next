"use client";

import { useEffect, useState } from "react";
import Para from "./Para";
import SmallButton from "./SmallButton";
import SubHeading2 from "./SubHeading2";
import Img from "./Img";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type AppointmentDateTimeProps = {
  category: (value: string) => void;
  time: (value: string) => void;
  country: (value: string) => void;
  paySubmit: () => void;
  apd?: {
    total_price: string;
    no_gst: string;
    gst: string;
  };
  newDate?: {
    adate: string[];
  };
};

export default function AppointmentDateTime({
  category,
  time,
  country,
  paySubmit,
  apd,
  newDate,
}: AppointmentDateTimeProps) {
  const [evalue, setEvalue] = useState<Date>(new Date());
  const [slot, setSlot] = useState<string | undefined>();

  const mlist = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];

  const dlist = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const enabledDates =
    newDate?.adate?.map((date) => new Date(date)) ?? [];

  const isEnabled = (date: Date) =>
    enabledDates.some(
      (enabledDate) => enabledDate.toDateString() === date.toDateString()
    );

  useEffect(() => {}, [slot]);

  return (
    <div className="w-80 border bg-gray-100 mx-auto p-1">
      <SubHeading2
        style="text-center"
        subHeading="Select Date & Time to Book Appointment"
      />

      <div className="flex-shrink border my-5">
        <select
          onChange={(e) => category(e.target.value)}
          className="customSelect business-audit outline-none p-2 w-full"
        >
          <option value="noCategory">Select Category</option>
          <option value="Face To Face">Face To Face</option>
          <option value="Online">Online</option>
        </select>
      </div>

      <div className="flex-shrink border my-5">
        <select
          onChange={(e) => time(e.target.value)}
          className="customSelect business-audit outline-none p-2 w-full"
        >
          <option value="noTime">Select Time</option>
          <option value="1 Hr">1 Hr</option>
          <option value="30 Minutes">30 Minutes</option>
        </select>
      </div>

      <div className="my-5">
        <select
          className="customSelect business-audit outline-none p-2 w-full"
          onChange={(e) => country(e.target.value)}
        >
          <option value="noCountry">Select your Country</option>
          <option value="IN">India</option>
          <option value="AUE">United Arab Emirates</option>
        </select>
      </div>

      {apd && (
        <>
          <div className="flex justify-center">
            <Calendar
              onChange={(value) => setEvalue(value as Date)}
              value={evalue}
              tileDisabled={({ date, view }) =>
                view === "month" && !isEnabled(date)
              }
            />
          </div>

          <div className="flex-shrink border my-5">
            <select
              className="customSelect business-audit outline-none p-2 w-full"
              onChange={(e) => setSlot(e.target.value)}
            >
              <option disabled>Select your Time Slot</option>
              <option value="15.00 - 16.00">15.00 - 16.00</option>
              <option value="16.30 - 17.30">16.30 - 17.30</option>
              <option value="14.00 - 14.30">14.00 - 14.30</option>
              <option value="14.30 - 15.00">14.30 - 15.00</option>
              <option value="15.30 - 16.00">15.30 - 16.00</option>
              <option value="16.30 - 17.00">16.30 - 17.00</option>
            </select>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2 bg-white p-1 rounded-md">
              <p className="font-semibold text-4xl">{evalue.getDate()}</p>
              <div>
                <div className="flex space-x-1">
                  <p className="font-semibold text-sm">
                    {mlist[evalue.getMonth()]}
                  </p>
                  <p className="font-semibold text-sm">
                    {evalue.getFullYear()}
                  </p>
                </div>
                <p className="font-semibold text-sm">
                  {dlist[evalue.getDay()]}
                </p>
              </div>
            </div>

            <Img style="w-10" path="/logos/Icon-feather-clock.png" width={100} height={100} alt="Clock" />

            <Para style="border p-2 bg-white rounded-md" para={slot ?? ""} />
          </div>
        </>
      )}

      {slot && apd && (
        <>
          <div>
            <div className="flex justify-between border p-3 my-5 bg-white">
              <Para style="font-bold" para="Total Amount" />
              <Para style="font-bold" para={apd.total_price} />
            </div>

            <div className="bg-white py-5 px-3 space-y-3">
              <Para style="font-bold" para="GST Details" />
              <div className="flex justify-between">
                <Para style="font-bold" para="Total Amount (With GST)" />
                <Para style="font-bold" para={apd.total_price} />
              </div>
              <div className="flex justify-between">
                <Para style="font-bold" para="Amount (Without GST)" />
                <Para style="font-bold" para={apd.no_gst} />
              </div>
              <div className="flex justify-between">
                <Para style="font-bold" para="GST (18%)" />
                <Para style="font-bold" para={apd.gst} />
              </div>
            </div>
          </div>

          <SmallButton
            style="my-5 mx-auto"
            text="Pay Now"
            onClick={paySubmit}
          />
        </>
      )}

      <p className="text-justify text-sm bg-white p-5 mt-5">
        Note: To obtain written report (soft copy) of consultation a sum
        of INR 20,000/- will be charged extra and will be available within
        4 working days from the date of making payment.
      </p>
    </div>
  );
}
