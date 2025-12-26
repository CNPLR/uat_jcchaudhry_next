'use client'

import Img from './ui/Img'
import Para from './ui/Para'
import Header from './Header'
import MainNavigation from './MainNavigation'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function MainNavigationCompo() {

    const hamRef = useRef<HTMLDivElement | null>(null)
    const headeRef = useRef<HTMLDivElement | null>(null)
    const phoneRef = useRef<HTMLDivElement | null>(null)

    const pathname = usePathname()

    const [windowSize, setWindowSize] = useState<{ width: number }>({
        width: 0
    })

    // ✅ Handle window resize safely in Next.js
    useEffect(() => {
        const handleResize = () => {
            setWindowSize({ width: window.innerWidth })
        }

        handleResize() // initial
        window.addEventListener('resize', handleResize)

        // ✅ Close menu on route change
        if (headeRef.current?.classList.contains('h-[55vh]')) {
            headeRef.current.classList.replace('h-[55vh]', 'h-0')
            hamRef.current?.classList.toggle('ham-active')
        }

        if (phoneRef.current?.classList.contains('h-[55vh]')) {
            phoneRef.current.classList.replace('h-[55vh]', 'h-0')
            hamRef.current?.classList.toggle('ham-active')
        }

        return () => window.removeEventListener('resize', handleResize)
    }, [pathname])


    const hamclick = () => {

        if (!hamRef.current || !headeRef.current || !phoneRef.current) return

        hamRef.current.classList.toggle('ham-active')

        if (windowSize.width <= 768) {

            phoneRef.current.classList.toggle('h-[55vh]')
            phoneRef.current.classList.toggle('h-0')

        } else {

            headeRef.current.classList.toggle('h-[10vh]')
            headeRef.current.classList.toggle('h-0')

            headeRef.current.classList.toggle('overflow-hidden')
            headeRef.current.classList.toggle('overflow-visible')
        }
    }

    return (
        <>
            <div className='w-full sticky top-0 z-50 shadow-2xl bg-white'>

                {/* ✅ Desktop Header */}
                <div className='hidden md:block'>
                    <Header />
                </div>

                {/* ✅ Mobile Header */}
                <div className='relative flex xl:hidden py-3'>
                    <Link href="/" className="xl:hidden flex flex-shrink-0 items-center pl-5 xl:pl-0 space-x-2">
                        <Img style="w-12 h-12" path="/logos/jclogo.png" alt="mainlogo" />
                        <Para para="Dr. J C Chaudhry" style="para text-xl font-bold" />
                    </Link>

                    <div onClick={hamclick} className='w-[30px] h-[30px] z-20 absolute right-6 top-6 caret-transparent' >

                    </div>
                     <div ref={hamRef} className='xl:hidden ham caret-transparent' ></div>
                </div>

                {/* ✅ Phone Dropdown */}
                <div
                    ref={phoneRef}
                    className='overflow-y-scroll myanimation h-0 overflow-hidden absolute w-full shadow-2xl lg:hidden'
                >
                    <MainNavigation />
                </div>

                {/* ✅ Tablet Dropdown */}
                <div
                    ref={headeRef}
                    className='myanimation h-0 absolute w-full shadow-2xl xl:hidden overflow-hidden'
                >
                    <MainNavigation />
                </div>

                {/* ✅ Desktop Navigation */}
                <div className='xl:block hidden'>
                    <MainNavigation />
                </div>

            </div>
        </>
    )
}
