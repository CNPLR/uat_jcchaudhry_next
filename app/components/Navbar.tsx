'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { MenuItems } from './MenuItems'
import Menu from './Menu'
import Para from './ui/Para'
import ImgLink from './ui/ImgLink'
import { FaUserCircle, FaUserAlt } from "react-icons/fa";

export default function NavBar() {

  const router = useRouter()

  const [token, setToken] = useState<string | null>(null)
  const [lastLogin, setLastLogin] = useState<string | null>(null)

  // ✅ Safe localStorage access
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setToken(localStorage.getItem('token'))
      setLastLogin(localStorage.getItem('lastLogin'))
    }
  }, [])

  // ✅ Logout handler
  const logout = () => {
    localStorage.removeItem('token')
    setToken(null)
    router.push('/')
  }

  const login = () => {
    router.push('/numerology/login')
  }

  const depthLevel = 0

  // ✅ Date formatter
  const formatDateTime = (inputDateString: string) => {
    const dateObj = new Date(inputDateString)
    const datePart = dateObj.toDateString().slice(4, -1)
    const hours = dateObj.getHours().toString().padStart(2, '0')
    const minutes = dateObj.getMinutes().toString().padStart(2, '0')
    return `${datePart}, ${hours}:${minutes}`
  }

  const formattedDate =
    lastLogin && lastLogin !== "Invalid Date"
      ? formatDateTime(lastLogin)
      : null

  return (
    <nav className='main-nav xl:flex justify-between py-2'>

      {/* ✅ Last Login */}
      <div className='lg:hidden ml-4'>
        {formattedDate && token && (
          <Para style="text-gray-600 mt-2" para={`Last Login: ${formattedDate}`} />
        )}
      </div>

      {/* ✅ Menu */}
      <ul className='menus'>
        {MenuItems.map((menu, index) => (
          <Menu items={menu} key={index} depthLevel={depthLevel} />
        ))}
      </ul>

      {/* ✅ Mobile Menu */}
      <div className='md:hidden flex space-x-2 items-center ml-4 mt-5'>

        {/* ===== Social Icons ===== */}
        <div className='flex space-x-2 items-center'>
          <ImgLink to="https://twitter.com/jc_chaudhry" path="/socialmedia/06.png" alt='ing' />
          <ImgLink to="https://www.facebook.com/NumerologistAndMotivator/" path="/socialmedia/02.png" alt='ing' />
          <ImgLink to="https://www.instagram.com/jc_chaudhrynumerology/" path="/socialmedia/03.png" alt='ing' />
          <ImgLink to="https://www.youtube.com/channel/UCkGRccoFIazt6GZUcdq6Byg/" path="/socialmedia/01.png" alt='ing' />
          <div>||</div>
          <ImgLink path="/logos/android.png" to="https://play.google.com/store/apps/details?id=jc.nummerro.app" alt='ing' />
          <ImgLink path="/logos/apple-logo.png" to="https://apps.apple.com/us/app/jc-nummerro-app/id1529437444" alt='ing' />
        </div>

        <p>||</p>

        {/* ✅ Login / Logout */}
        <div className='flex items-center'>
          {token ? (
            <button onClick={logout}>
              <FaUserAlt className='m-auto' />
              <p className='text-xs'>LogOut</p>
            </button>
          ) : (
            <button onClick={login}>
              <FaUserAlt className='m-auto' />
              <p className='text-xs'>LogIn</p>
            </button>
          )}
        </div>

        <p>||</p>

        {/* ✅ Profile */}
        {token && (
          <Link href="/profile">
            <FaUserCircle className='m-auto' size={20} color='#490099' />
            <p className='text-xs'>Profile</p>
          </Link>
        )}

      </div>

      {/* ✅ Desktop CTA */}
      <div className='xl:flex items-center space-x-2 pr-5 hidden'>
        <Link href="/ask-your-question">
          <Para style='bg-[#CE82B5] px-2 py-1 rounded text-white transition buttonHover buttonBackground' para="Ask Your Question" />
        </Link>

        <Link href="/numerology/signup">
          <Para style='bg-[#CE82B5] px-2 py-1 rounded text-white transition buttonHover buttonBackground' para="Book Appointment" />
        </Link>
      </div>

    </nav>
  )
}
