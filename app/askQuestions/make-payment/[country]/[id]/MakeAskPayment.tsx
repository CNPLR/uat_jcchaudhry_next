'use client';
import Img from '@/app/components/ui/Img';
import NormalButton from '@/app/components/ui/NormalButton';
import Para from '@/app/components/ui/Para';
import SubHeading from '@/app/components/ui/SubHeading';
import SubHeading2 from '@/app/components/ui/SubHeading2';
import axios from 'axios';
import React, { use, useEffect, useState } from 'react'
import { useAuth } from '@/app/services/AuthContext';
import Header from '@/app/components/Header';

const MakeAskPayment = ({country, id}:any) => {
    let path = process.env.NEXT_PUBLIC_URI

    const { user, token, loading: authLoading } = useAuth();
    const [text, setText] = useState<any>();
    const [timeOfBirth, setTimeOfBirth] = useState<string|undefined>(user?.user?.time_of_birth);
    const [placeOfBirth, setPlaceOfBirth] = useState<any>(user?.user?.place_of_birth);
    const [question_id, setQuestion_id] = useState<any>('');
    const [question, setQuestion] = useState<any>()
    const [details, setDetails] = useState<any>()
    // const { id } = useParams();
    // const { country } = useParams();
    const [apiUserData, setApiUserData] = useState<any>(user);
    const [number, setNumber] = useState<any>(user?.account?.mobile_number);

    const [amount, setAmount] = useState<string>("");
    const [curren, setCurren] = useState<string>("")


    const [currency, setCurrency] = useState<any>()

    let [loading, setLoading] = useState(false);

    // const [token, setToken] = useState<string | null>();


    const getHeaders = (token: string) => {
        if (!token) {
            return {};
        }

        let header =  {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token as string}`
        };

        return header;
    };


    useEffect(() => {
        const token = localStorage.getItem('token');
        const getAskPayDetails = async () => {

            const headers = getHeaders(token as string);
            let checkCountry = country === "IN" ? "INR" : "USD";
            let getDetails = await fetch(`${path}askpayment/${checkCountry}`, { headers });
            const data = await getDetails.json();
            setCurrency(data?.data?.[0])
            setAmount(data?.data?.[0]?.amount)
            setCurren(data?.data?.[0]?.currency)
        }

        if(token) {
            // setToken(token)
            getAskPayDetails()
        }
                
    }, [])

    useEffect(() => {
        setQuestion_id(id)
        async function getData() {
            let req = await fetch(`${path}ask/getans/${id}`);
            let res = await req.json()
            if (res.success == true) {
                setQuestion(res?.data)
                setText(res?.data?.answer)
            }
        }
        getData();

        const numberFromStorage = localStorage.getItem("number") && JSON.parse(localStorage.getItem("number") || 'null');
        if (numberFromStorage) {
            setNumber(numberFromStorage);
        }

        async function getUserData() {
            if(numberFromStorage === null || path === undefined) return

            let res: any = await fetch(`${path}websiteuser/${numberFromStorage}`, { next: { revalidate: 3600 } });
            const data : any = await res.json();
            if (data?.success === true) {
                setApiUserData(data)
                 setTimeOfBirth(data?.user?.time_of_birth)
                setPlaceOfBirth(data?.user?.place_of_birth)
            }
        }
        if(!user)
            getUserData()

    }, [])


    const makePay = async (e: any) => {
        e.preventDefault();
        setLoading(true)
        // if (!timeOfBirth && !placeOfBirth) {
        //     setLoading(false)
        //     return alert('Please Enter Your Time of Birth and Place of Birth')
        // }
        const res = await fetch(path + 'pay/topayment', {
                        method: 'POST',
                        headers: {
                            ...getHeaders(token as string),
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            number,
                            question_id,
                            text,
                            country,
                            details,
                            amount,
                            curren,
                            platform: 'Desktop',
                        }),
                    });

        const resData = await res.json();
        
        // console.log(res.data)
        if (country !== 'IN') {
            if (resData.success === true) {
                if (currency?.askPrice == resData.info.amount.split(".")[0] && currency?.askCurrency == resData.info.currency) {
                    window.location = resData.data.links[1].href
                }
            }
            else if (resData.success == false) {
                setLoading(false)
                return alert(resData.message)
            }
            else {
                setLoading(false)
                return alert("Somthing Went Wrong")
            }
        } else {
            if (resData.success === true) {
                if (currency?.askPrice == resData.info.amount.split(".")[0] && currency?.askCurrency == resData.info.currency) {
                    let paymentForm = document.createElement('form');
                    paymentForm.setAttribute('method', 'POST');
                    paymentForm.setAttribute('action', 'https://api.razorpay.com/v1/checkout/embedded');
                    const addHiddenInput = (name: any, value: any) => {
                        const input = document.createElement('input');
                        input.setAttribute('type', 'hidden');
                        input.setAttribute('name', name);
                        input.setAttribute('value', value);
                        paymentForm.appendChild(input);
                    };
                    // Set all the hidden fields from the original form
                    addHiddenInput('key_id', process.env.NEXT_PUBLIC_KEY_ID);
                    addHiddenInput('amount', resData?.data?.amount);
                    addHiddenInput('currency', resData?.data?.currency);
                    addHiddenInput('order_id', resData?.data?.id);
                    addHiddenInput('name', 'Chaudhry Nummero Pvt. Ltd.');
                    addHiddenInput('description', 'Test Transaction');
                    addHiddenInput('image', 'https://cdn.razorpay.com/logos/BUVwvgaqVByGp2_large.jpg');
                    addHiddenInput('prefill[name]', resData?.data?.info?.userData.user.full_name);
                    addHiddenInput('prefill[contact]', resData?.data?.info?.userData.userAccount.mobile_number);
                    addHiddenInput('prefill[email]', resData?.data?.info?.userData.userAccount.email_id);
                    addHiddenInput('notes[shipping address]', 'L-16, The Business Centre, 61 Wellfield Road, New Delhi - 110001');
                    addHiddenInput('callback_url', path + 'pay/ask-question/rezorpay/success');
                    // addHiddenInput('cancel_url', path + 'pay/ask-question/failed');
                    // Append the form to the body and submit it automatically
                    document.body.appendChild(paymentForm);
                    paymentForm.submit();
                    setLoading(false)
                }
            }
        }
    }

    return (
        <div className=''>
            <div className='md:px-20 py-10'>
                <SubHeading style="text-center mb-5" subHeading="Review your question" />
                <p className='text-center shadow-lg mb-5 md:p-5 md:w-3/4 p-2 w-[90%] mx-auto border border-slate-200 font-bold rounded-md'>{question?.answer}</p>
                <div className='md:border md:shadow-md border-slate-200  rounded-xl bg-gray-100 lg:flex justify-center items-center lg:space-x-20 space-y-10 lg:space-y-0 py-10'>
                    <div className='p-2 md:p-0 mx-auto'>
                        <SubHeading2 style="text-center" subHeading="Your Details" />
                        <table className='md:border-separate border border-slate-400 md:border-spacing-2 mx-auto'>
                            <tbody>
                                <tr>
                                <td className='border border-slate-300'>Name</td>
                                <td className='border border-slate-300'>{apiUserData?.user?.full_name}</td>
                            </tr>
                            <tr>
                                <td className='border border-slate-300'>Mobile Number</td>
                                <td className='border border-slate-300'>{apiUserData?.account?.mobile_number}</td>
                            </tr>
                            <tr>
                                <td className='border border-slate-300'>Email Address</td>
                                <td className='border border-slate-300'>{apiUserData?.account?.email_id}</td>
                            </tr>
                            <tr>
                                <td className='border border-slate-300'>Date of Birth</td>
                                <td className='border border-slate-300'>{apiUserData?.user?.date_of_birth.split("T")[0]}</td>
                            </tr>
                            <tr>
                                <td className='border border-slate-300'>Time of Birth *</td>
                                <td className='border border-slate-300'>
                                    <input
                                        className='border'
                                        onChange={(e: any) => setTimeOfBirth(e.target.value)}
                                        value={timeOfBirth ?? ""}
                                        type="time"
                                        name=""
                                        id=""
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className='border border-slate-300'>Place of Birth *</td>
                                <td className='border border-slate-300'>
                                    <input
                                        className='border border-slate-300'
                                        onChange={e => setPlaceOfBirth(e.target.value)}
                                        value={placeOfBirth ?? ""}
                                        type="text"
                                        name=""
                                        id=""
                                    />
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className='lg:w-[35%] md:w-[50%] w-[90%] mx-auto'>
                        <div className='mx-auto'>
                            <SubHeading2 style="text-center md:text-left mb-5 lg:mb-0" subHeading="Describe your problem/issues in detail (Optional)" />
                            <textarea className='border border-slate-200 shadow-md' onChange={e => setDetails(e.target.value)} rows={5} cols={45} required></textarea>
                        </div>
                        <div className='border border-slate-200 p-5 shadow-md mt-5'>
                            <SubHeading2 style="text-center" subHeading={`${currency?.askCurrency} ${currency?.askPrice}/-`} />
                            <Para style="text-center" para={country === "AE" ? "You are about to make a payment of AED  650. Please continue with the transaction." : ''} />
                            <p className='text-center text-sm mb-6 mt-2'>After making the payment, your question will be answered by Dr. J C Chaudhry within 7 working days</p>
                            {loading ?
                                <div className='w-28 mx-auto rounded-md font-bold text-center bg-[#fd7e14] py-2 shadow-2xl'>
                                    <Img alt='' style="mx-auto w-7" path="/logos/loader_gif.gif" />
                                </div>
                                : <NormalButton onClick={makePay} style="m-auto" text="Make Payment" />
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className='space-y-10 bg-gray-100 py-10'>
                <SubHeading style="text-center" subHeading="Numerology Helped many – Know How" />
                <div className='flex flex-wrap justify-center items-center'>
                    <div className='mx-5 mb-5'>
                        <div className="md:w-80 md:h-72 bg-gradient-to-l from-slate-300 to-slate-100 text-slate-600 border border-slate-300 justify-center p-3 rounded-lg shadow-md space-y-2">
                            <Img alt='' style="w-20" path='/images_folder/BKT_Media.png' />
                            <p className='text-[24px] font_family font-semibold text-[#490099]'>Mr. Siddhant Sahib Ji</p>
                            <Para para="We changed our company name to BKT Media Pvt. Ltd. as per the advice of Sir Dr. J C Chaudhry. Our speed changed and by the God’s grace even after COVID period, we got more work and success." style="" />
                        </div>
                    </div>
                    <div className='mx-5 mb-5'>
                        <div className="md:w-80 md:h-72 bg-gradient-to-l from-slate-300 to-slate-100 text-slate-600 border border-slate-300 justify-center p-3 rounded-lg shadow-md space-y-2">
                            <Img alt='' style="w-20" path='/images_folder/Harish_Gulati.png' />
                            <p className='text-[24px] font_family font-semibold text-[#490099]'>Mr. Harish Gulati</p>
                            <Para para="My daughter was suffering from Brain Meningitis. When Chaudhry Ji checked her name and date of birth, he suggested a new name for her which brought a lot of improvements in her health." style="" />
                        </div>
                    </div>
                    <div className='mx-5 mb-5'>
                        <div className="md:w-80 md:h-72 bg-gradient-to-l from-slate-300 to-slate-100 text-slate-600 border border-slate-300 justify-center p-3 rounded-lg shadow-md space-y-2">
                            <Img alt='' style="w-20" path='/images_folder/Manoj_Kumar.png' />
                            <p className='text-[24px] font_family font-semibold text-[#490099]'>Mr. Manoj Kumar</p>
                            <Para para="We had no baby for more than 5 years of marriage. After consulting Dr. J C Chaudhry and following his advice, we got the positive results. We were blessed with a baby boy." style="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MakeAskPayment