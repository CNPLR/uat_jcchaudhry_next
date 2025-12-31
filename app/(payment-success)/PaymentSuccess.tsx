'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const PaymentSuccess = ({ searchParams }: any) => {

    const { category, id } = searchParams;

    const orderId = id ?? "order_RsfBrfPlAMLdTJ";

    let path = process.env.NEXT_PUBLIC_URI
    const [userData, setUserData] = useState<any>();
    const [number, setNumber] = useState<string | null>();
    const [paymentData, setPaymentData] = useState<any>();



    useEffect(() => {
        async function callAsync() {
            const number = JSON.parse(localStorage.getItem('number') as string);
            if (!number) return;

            if (number) {
                setNumber(number);
                await setUserData(await httpFn('websiteuser/', number))
            }

            if (category === "ask-your-question") {
                await setPaymentData(await httpFn('pay/ask-question/orders/', id))
            }
            else if (category === "report") {
                await setPaymentData(await httpFn('report/', id))
            }
            else {
                await setPaymentData(await httpFn('userAppointment/appointment/orders/', id))
            }
        }

        callAsync();

    }, []);

    async function httpFn(url: string, params: any): Promise<any> {
        let res = await fetch(`${path + url + params}`)
        const data = await res.json();
        if (data.success === true) {
            return data
        }
        return null;
    }

    return (
        <main className="p-10 bg-slate-50 text-slate-900 flex items-center justify-center px-4">
            <div className="relative w-full max-w-xl">
                {/* Glow background */}
                <div className="absolute -inset-1 opacity-60" />
                <div className="relative bg-white border border-slate-200 rounded-2xl p-8 md:p-10">
                    {/* Icon + Heading */}
                    <div className="flex items-center gap-4 mb-6">
                        <div className="h-12 w-12 rounded-full bg-emerald-50 flex items-center justify-center">
                            <svg
                                className="h-7 w-7 text-emerald-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.8}
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </div>
                        <div>
                            <p className=" font-semibold uppercase tracking-[0.2em] text-emerald-500">
                                Payment Successful
                            </p>

                        </div>
                    </div>

                    {/* Info text */}
                    <p className="text-sm md:text-base text-slate-600 mb-6">
                        Your Boooking is Successfull and confirmation email in send on
                        <span className="font-medium text-emerald-600"> {userData?.account?.email_id ? userData?.account?.email_id : paymentData?.report?.email}</span>.
                    </p>

                    {/* Booking details card */}
                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 mb-6 space-y-3">
                        <div className="flex items-center justify-between text-sm md:text-base">
                            <span className="text-slate-500">Order ID</span>
                            <span className="font-mono text-slate-900">{orderId}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm md:text-base">
                            <span className="text-slate-500">Amount</span>
                            <span className="font-semibold text-emerald-600">
                                {!paymentData ? (
                                    <Image alt="loading" className='w-8 h-8' src="/images_folder/loading_dots.gif" width={30} height={30} loading="eager" />
                                ) : ( Number(paymentData?.data?.amount).toLocaleString("en-IN") + ' ' + paymentData?.data?.currency )}
                            </span>
                        </div>
                        <div className="flex items-center justify-between text-xs md:text-sm pt-2 border-t border-slate-200">
                            <span className="text-slate-500">Status</span>
                            <div className="flex justify-end items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-medium text-emerald-600">
                                <p className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                <p className='mt-1' >Confirmed</p>
                            </div>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex justify-center">

                        <Link
                            href="/"
                            className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-4 py-2 text-xs md:text-sm font-medium text-slate-700 hover:bg-slate-50 transition"
                        >
                            Go to Home
                        </Link>

                    </div>

                    {/* Footnote */}
                    <p className="mt-6 text-[11px] text-slate-500 text-center">
                        Thanks, <span className="font-medium text-slate-700">Team JC Nummero</span>
                    </p>
                </div>
            </div>
        </main>
    )
}

export default PaymentSuccess