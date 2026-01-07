'use client';
import React, { use, useCallback, useEffect, useRef, useState } from "react";
import SmallButton from "../components/ui/SmallButton";
import axios from "axios";
import SubHeading from "../components/ui/SubHeading";
import { useRouter } from "next/navigation";
import { useAlert } from "@/lib/AlertBox";

const API_URL = process.env.NEXT_PUBLIC_URI;
let token ="";

// const headers = token
//     ? {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//         Accept: "*/*",
//     }
//     : {};

   function getHeaders(token: string) {
        return {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
            Accept: "*/*",
        }
    }


export default function Mybookings() {
    const [bookings, setBookings] = useState([]);
    const [reqBookings, setReqBookings] = useState([]);
    const [doneBookings, setDoneBookings] = useState([]);
    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [selectedBooking, setSelectedBooking] = useState<any>(null);
    const modalRef = useRef<any>(null);
    const navigate = useRouter();

    /* ------------------------------------------------------------------ */
    /*                             DATA FETCH                             */
    /* ------------------------------------------------------------------ */

    useEffect(() => {
         const Token = localStorage.getItem("token");
        if (Token) {
            token = Token;
        }
        if (!Token) navigate.push("/numerology/login");

        const fetchData = async () => {
            const storedNumber = localStorage.getItem("number");
            if (!storedNumber) return;
            const headers =  getHeaders(token) ;
            try {
                const [userRes, reportRes, doneRep] = await Promise.all([
                    axios.get(
                        `${API_URL}userAppointment/user/${JSON.parse(storedNumber)}`,
                        { headers }
                    ),
                    axios.get(
                        `${API_URL}report/getreportsbynum/${JSON.parse(storedNumber)}`
                    ),
                    axios.get(
                        `${API_URL}report/donereport/${JSON.parse(storedNumber)}`
                    ),
                ]);

                if (userRes?.data?.success) {
                    setUser(userRes.data.userDetails);
                    setBookings(userRes.data.data);
                }

                if (reportRes?.data?.success) {
                    setReqBookings(reportRes.data.reports);
                }

                if (doneRep?.data?.success) {
                    setDoneBookings(doneRep.data.data)
                }

            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();

        
    }, []);

    /* ------------------------------------------------------------------ */
    /*                          EVENT HANDLERS                            */
    /* ------------------------------------------------------------------ */
    const handleShowModal = useCallback((booking: any) => {
        setSelectedBooking(booking);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setSelectedBooking(null);
            }
        };
        if (selectedBooking) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [selectedBooking]);

    if (loading) return <p className="text-center my-10">Loading bookings...</p>;

    /* ------------------------------------------------------------------ */
    /*                              RENDER                                */
    /* ------------------------------------------------------------------ */
    return (
        <div className="w-full px-4">
            <SubHeading style="text-center my-10" subHeading="My Bookings" />

            {bookings.length > 0 ? (
                <div className="overflow-x-auto shadow-lg mb-10">
                    <table className="min-w-full divide-y divide-gray-200 text-sm">
                        <thead className="bg-gray-100">
                            <tr>
                                {[
                                    "Name",
                                    "Mobile Number",
                                    "Email ID",
                                    "Country",
                                    "Date",
                                    "Time",
                                    "Appointment Type",
                                    "Amount",
                                    "Action",
                                ].map((head) => (
                                    <th
                                        key={head}
                                        scope="col"
                                        className="px-4 py-3 font-semibold tracking-wide text-left uppercase text-xs text-gray-600"
                                    >
                                        {head}
                                    </th>
                                ))}
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-gray-100 bg-white">
                            {bookings.map((booking: any) => {
                                // Early return if booking is invalid
                                if (!booking?.order_id) return null;

                                // Find reports for this booking - single operation instead of multiple
                                const bookingReports = reqBookings.filter((report: any) =>
                                    report?.appointment_id === booking.order_id
                                );

                                const hasReport = bookingReports.length > 0;
                                const reportIds = bookingReports.map((report: any) => report._id?.toString()).filter(Boolean);

                                // Find payment status for reports - single operation
                                const reportPayments = doneBookings.filter((done: any) =>
                                    reportIds.includes(done?.report?.toString())
                                );

                                const hasPaidReport = reportPayments.some((payment: any) => payment?.payment === true);
                                const hasUnpaidReport = reportPayments.some((payment: any) => payment?.payment === false);

                                // Determine button state with clearer logic
                                const getButtonProps = () => {
                                    if (!hasReport) {
                                        return { text: "Get Report", onClick: () => handleShowModal(booking) };
                                    }
                                    if (hasPaidReport) {
                                        return { text: "Done" };
                                    }
                                    if (hasUnpaidReport) {
                                        return { text: "Pending Pay" };
                                    }
                                    return { text: "Process" };
                                };

                                const buttonProps = getButtonProps();

                                return (
                                    <tr key={booking.order_id} className="hover:bg-gray-50">
                                        <td className="px-4 py-3 whitespace-nowrap">
                                            {user?.full_name || "N/A"}
                                        </td>
                                        <td className="px-4 py-3 whitespace-nowrap">
                                            {booking?.userData?.userAccount?.mobile_number || "N/A"}
                                        </td>
                                        <td className="px-4 py-3 whitespace-nowrap">
                                            {booking?.userData?.userAccount?.email_id || "N/A"}
                                        </td>
                                        <td className="px-4 py-3 whitespace-nowrap">
                                            {user?.country || "N/A"}
                                        </td>
                                        <td className="px-4 py-3 whitespace-nowrap">
                                            {booking?.appointment_date || "N/A"}
                                        </td>
                                        <td className="px-4 py-3 whitespace-nowrap">
                                            {booking?.appointment_time || "N/A"}
                                        </td>
                                        <td className="px-4 py-3 whitespace-nowrap">
                                            {booking?.appointment_type_id || "N/A"}
                                        </td>
                                        <td className="px-4 py-3 whitespace-nowrap">
                                            {booking?.amount || "N/A"}
                                        </td>
                                        <td className="px-4 py-3 whitespace-nowrap">
                                            <SmallButton {...buttonProps} />
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            ) : (
                <p className="text-center text-gray-500">No bookings found.</p>
            )}

            {selectedBooking && (
                <Modal
                    ref={modalRef}
                    name={user?.full_name}
                    country={user?.country}
                    id={selectedBooking.order_id}
                    number={selectedBooking.userData?.userAccount?.mobile_number}
                    email={selectedBooking.userData?.userAccount?.email_id}
                    date={selectedBooking.appointment_date}
                    time={selectedBooking.appointment_time}
                    amount={selectedBooking.amount}
                    closeModal={() => setSelectedBooking(null)}
                />
            )}
        </div>
    );
}

/* ------------------------------------------------------------------ */
/*                              MODAL                                 */
/* ------------------------------------------------------------------ */
const Modal = React.forwardRef(({ closeModal, name, id, number, email, country }: any, ref: any) => {
    const [message, setMessage] = useState("");
    const { showAlert } = useAlert();

    const handleSubmit = async () => {
        const headers = getHeaders(token);
        const data = { name, id, number, email, message, country, platform: "Desktop" };
        try {
            const res = await axios.post(`${API_URL}report/`, data, { headers });
            if (res.data.success) {
                closeModal();
                showAlert({ title: "Success", message: res.data.message, type: "success" });
            } else {
                alert("Something went wrong");
                showAlert({ title: "Error", message: "Something went wrong", type: "error" });
            }
        } catch (err) {
            console.log(err);
            // alert("Unable to submit your message.");
            showAlert({ title: "Error", message: "Unable to submit your message.", type: "error" });
        }
    };

    return (
        <div
            ref={ref}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4"
        >
            <div className="relative max-w-lg w-full bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl">
                <button
                    aria-label="Close modal"
                    onClick={closeModal}
                    className="absolute -right-3 -top-3 grid place-content-center rounded-full bg-[#490099] p-2 text-white shadow-lg"
                >
                    <svg
                        className="h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 1 12 12M13 1 1 13"
                        />
                    </svg>
                </button>

                <h3 className="mb-3 text-lg font-semibold text-gray-700 dark:text-gray-100">
                    Leave Your Message
                </h3>
                <textarea
                    className="w-full rounded-lg bg-white border border-gray-300 p-3 text-sm focus:border-[#490099] focus:ring-[#490099]"
                    placeholder="Type here..."
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <div className="mt-5 flex justify-center">
                    <SmallButton text="Submit" onClick={handleSubmit} />
                </div>
            </div>
        </div>
    );
});