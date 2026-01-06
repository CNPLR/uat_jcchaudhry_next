'use client'

import Link from "next/link";
import { useParams, usePathname, useRouter } from "next/navigation"


export default function PaymentFailed() {
    const path = usePathname();
    const router = useRouter();
    let lastRoute = '/' + path.split('/').filter(i=> i != '')[0];

    const paymentPath = ():void =>{
        const storedPath = localStorage.getItem('paymentPath');
        if (storedPath) {
            localStorage.removeItem('paymentPath');
            router.push(storedPath);
            return;
        }
        router.push(lastRoute);
    }

    switch (lastRoute) {
        case '/ask-question':   
            lastRoute = '/ask-your-question';
            break;
        case '/consultation':
            lastRoute = '/dashboard';
            break;
        default:
            lastRoute = '/';
            break;
    }
    return (
        <div className="flex p-10 items-center justify-center px-4 bg-slate-50">
            <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-xl">
                {/* Icon */}
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-red-500/10">
                    <svg className="h-7 w-7 text-red-500" viewBox="0 0 24 24" fill="none">
                        <path d="M12 9v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                        <circle cx="12" cy="16" r="0.9" fill="currentColor" />
                        <path d="M12 4a8 8 0 1 1 0 16a8 8 0 0 1 0-16z" stroke="currentColor" strokeWidth="1.8" />
                    </svg>
                </div>

                {/* Title */}
                <h1 className="mb-1 text-xl font-semibold text-slate-900">
                    Payment failed
                </h1>

                {/* Subtitle */}
                <p className="mb-6 text-sm text-slate-500">
                    Something went wrong while processing your payment. <br />
                    No money has been deducted from your account.
                </p>
                <div className="flex justify-center">

                       
                        <button onClick={(e) => paymentPath()}  type="button" className="cursor-pointer bg-neutral-primary-soft border border-gray-200 hover:bg-neutral-secondary-medium hover:text-heading focus:bg-gray-300 shadow-xs font-medium leading-5 rounded-full text-sm px-4 py-2.5 focus:outline-none ">Go Back</button>

                    </div>
            </div>
        </div>


    )
}
