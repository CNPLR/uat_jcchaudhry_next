'use client'

import Link from "next/link";
import { useParams, usePathname } from "next/navigation"


export default function PaymentFailed() {
    const path = usePathname();
    let lastRoute = '/' + path.split('/').filter(i=> i != '')[0];

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

                        <Link
                            href={lastRoute}
                            className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-4 py-2 text-xs md:text-sm font-medium text-slate-700 hover:bg-slate-50 transition"
                        >
                            Go Back
                        </Link>

                    </div>
            </div>
        </div>


    )
}
