'use client';
import axios from "axios";
import { useState, useEffect, use } from "react";
import NormalButton from "../components/ui/NormalButton";
import { useParams, useSearchParams } from "next/navigation";

const API_URL = process.env.NEXT_PUBLIC_URI;

const getApiHeader = (token: string) => {
    return {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        Accept: "*/*",
    };
}

export default function ReportPayment() {
    const [data, setData] = useState<any>();
    const [token, setToken] = useState<string>("");
    const searchParams = useSearchParams();
    const country = searchParams.get('country')
    const id = searchParams.get('id')
    
    // let id = query[1]?.split("=")[1]
    // let country = query[0]?.split("=")[1]
    let currency = country === 'India' ? "INR" : "USD"
    let amount = country === 'India' ? "20000" : "230"

    // let currency = "USD";
    // let amount = "230";

    const headers = getApiHeader(token);

    async function get() {
        try {
            const data = await axios.get(API_URL + "report/get/" + id, { headers })
            setData(data.data.data)
        } catch (error) {
            console.log(error)
        }
    }

    const gotopay = async () => {
        let id = data?._id
        let param = { currency, id, amount }

        const pay = await axios.post(API_URL + "report/pay/", param, { headers });

        if (pay.data.success === true) {
            if (country !== "India") {
                window.location = pay.data.data.links[1].href
            }
            else {
                let paymentForm = document.createElement('form');
                paymentForm.setAttribute('method', 'POST');
                paymentForm.setAttribute('action', 'https://api.razorpay.com/v1/checkout/embedded')

                const addHiddenInput = (name: string, value: any) => {
                    const input = document.createElement('input');
                    input.setAttribute('type', 'hidden');
                    input.setAttribute('name', name);
                    input.setAttribute('value', value);
                    paymentForm.appendChild(input);
                };

                // Set all the hidden fields from the original form
                addHiddenInput('key_id', process.env.NEXT_PUBLIC_KEY_ID);
                addHiddenInput('amount', pay.data.data.amount);
                addHiddenInput('currency', pay.data.data.currency);
                addHiddenInput('order_id', pay.data.data.order_id);
                addHiddenInput('name', 'Chaudhry Nummero Pvt. Ltd.');
                addHiddenInput('description', 'Test Transaction');
                addHiddenInput('image', 'https://cdn.razorpay.com/logos/BUVwvgaqVByGp2_large.jpg');
                addHiddenInput('prefill[name]', pay.data.data.report.name);
                addHiddenInput('prefill[contact]', pay.data.data.report.number);
                addHiddenInput('prefill[email]', pay.data.data.report.email);
                addHiddenInput('notes[shipping adddatas]', 'L-16, The Business Centre, 61 Wellfield Road, New Delhi - 110001');
                addHiddenInput('callback_url', API_URL + 'report/consultation/rezorpay/success');
                // addHiddenInput('cancel_url', API_URL + 'report/consultation/rezorpay/failed');
                document.body.appendChild(paymentForm);
                paymentForm.submit();
            }
        }
    }

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            setToken(token);
        }
        get()
    }, [id])

    return (
        <div className="container mx-auto py-10 px-4">
            <p className="text-3xl font-semibold text-center mb-8">Report Payment Page</p>
            <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6">
                <p className="font-semibold text-lg">User Details</p>
                <div className="mt-5 space-y-2">
                    <div className='flex'>
                        <div className="font-medium mr-1">Name</div>
                        <div className="font-medium">: {data?.name}</div>
                    </div>
                    <div className='flex'>
                        <div className="font-medium mr-1">Email</div>
                        <div className="font-medium">: {data?.email}</div>
                    </div>
                    <div className='flex'>
                        <div className="font-medium mr-1">Mobile Number</div>
                        <div className="font-medium">: {data?.number}</div>
                    </div>
                    <div className='flex'>
                        <div className="font-medium mr-1">Amount</div>
                        <div className="font-medium">: ₹ 20,000</div>
                    </div>
                    <div>
                        <NormalButton text="Pay Now" style="w-28 mx-auto mt-5" onClick={gotopay} />
                    </div>
                </div>
            </div>
        </div>
    )
}
