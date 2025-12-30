'use client';
import React, { useEffect, useRef, useState } from 'react'
import SmallButton from '../components/ui/SmallButton'
import CountriesName from '../components/ui/CountriesName'
import Banner from '../components/ui/Banner';
import Img from '../components/ui/Img';
import LinkText from '../components/ui/LinkText';
import MainHeading from '../components/ui/MainHeading';
import Para from '../components/ui/Para';
import SubHeading from '../components/ui/SubHeading';
import SubHeading2 from '../components/ui/SubHeading2';
import { useRouter } from 'next/navigation';

 function AskQuestions() {

    let path = process.env.NEXT_PUBLIC_URI

    const [data, setData] = useState([]);

    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    useEffect(() => {
        async function getData() {
            let req = await fetch(`${path}ask`);
            let res = await req.json()
            if (res.success == true) {
                setData(res?.data)
            }
        }
        getData();
    }, [])

    const toggleFAQ = (index: number) => {
        if (activeIndex === index) {
            setActiveIndex(null)
            return

        }
        setActiveIndex(index)
    };

    return (
        <div>
            <Banner alttag="Ask your question for personalized numerology insights" path="/allbanners/Ask-your-question-for-personalized-numerology-insights.webp" />
            <div className='lg:px-10 px-5 mb-10'>
                <div className='space-y-5'>
                    <MainHeading mainHeading="Ask Your Questions" style="text-center mt-5" />
                    <SubHeading2 style="text-center" subHeading="Ask Your Question and get Personalized Answer from Dr. J C Chaudhry" />
                    <Para para="Click below the category and select your question from the list of questions. If you don’t find your specific question in the list, send us an Email at support@jcchaudhry.com with your question and personal details." />
                    <Para para="In response to your question, you will get a personalized reply from Dr. J C Chaudhry on your Email. The answer will include the compatibility check and issues (if any), you have with your Name and Date of Birth numbers and solutions for your particular problem." />
                </div>
                <div className='bg-white my-10'>
                    <SubHeading style="text-center pt-5" subHeading="Select A Category and Select a Question" />
                    <div className="ask">
                        {data?.map((faq: any, index: number) => (
                            <FA  image={faq.catImage} question={faq.question} category={faq.category} faq={faq.faqInput}
                                showAns={activeIndex === index} index={index} key={index} toggleFAQ={toggleFAQ} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AskQuestions

const FA = ({ image, question, category, faq, showAns, index, toggleFAQ }:any) => {
    const modelRef = useRef<any>(null)
    const [country, setCountry] = useState<string>()
    const [id, setId] = useState<number>(0)
    const route = useRouter()


    const next = () => {
        if ('noCountry' === country || country === '') {
            return alert("Please Select Country")
        }
        else if (!localStorage.getItem("token")) {
            route.push('/numerology/login')
        }
        else if ('IN' == country) {
            route.push(`/askQuestions/make-payment/${country}/${id}`)
        }
        else {
            route.push(`/askQuestions/make-payment/${country}/${id}`)
        }
    }

    const askPay = (e: any, id: number) => {
        e.preventDefault();
        if (modelRef.current.classList.contains('hidden')) {
            modelRef.current.classList.replace('hidden', 'flex')
        }
        setId(id)
    }

    const closeModal = () => {
        if (modelRef.current.classList.contains('flex')) {
            modelRef.current.classList.replace('flex', 'hidden')
        }
    }

    return (
        <div className='mb-10 p-10 border border-slate-200 rounded-lg shadow-lg' onClick={() => toggleFAQ(index)}>
            <div className="faq-question lg:flex justify-start items-center cursor-pointer">
                <Img path={`https://newcnpl.s3.ap-south-1.amazonaws.com/public/jccms/ask/${image}`} style="w-[80px] m-auto lg:m-0" alt={category} />
                <div className='lg:ml-5 lg:text-left text-center'>
                    <SubHeading2 style="" subHeading={category} />
                    <Para para={question} />
                </div>
                <div className='ml-auto text-2xl font-semibold text-right [&>div]:w-fit [&>div]:m-auto'>
                    {showAns ? <div>_</div> : <div>+</div>}
                </div>
            </div>
            {showAns && (
                <div className="faq-answer">
                    <div className=''>
                        {faq?.map(( ele: any, i:number) =>
                            <div key={i} className='px-3 py-2 rounded-md mt-5 cursor-pointer bg-orange-100'>
                                <LinkText onClick={(e) => askPay(e, ele._id)} para={ele.answer} />
                            </div>
                        )}
                    </div>
                </div>)
            }
            <div
                id="default-modal"
                ref={modelRef}
                tabIndex={-1}
                aria-hidden="true"
                className="hidden fixed inset-0 z-50 justify-center items-center w-full h-full bg-black/50"
            >
                <div className="relative p-4 w-full max-w-md max-h-full">
                    <div className="relative calBg shadow rounded-lg">
                        <div className="flex items-center justify-between md:px-5 md:pt-5 rounded-t dark:border-gray-600">
                            <button
                                type="button"
                                onClick={closeModal}
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
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
                                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                    />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        <div className="p-4 md:p-5 space-y-4 text-center">
                            <CountriesName
                                onChange={(e: any) => setCountry(e.target.value)}
                                text="Select your Country to know the price" value={country}                            />
                            <SmallButton
                                onClick={next}
                                style="mx-auto cursor-pointer"
                                text="Next"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};