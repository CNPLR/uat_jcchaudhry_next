"use client";

import "../styles/common.css";
import { FaUserAlt, FaUserCircle } from "react-icons/fa";
import Img from "./ui/Img";
import Para from "./ui/Para";
import ImgLink from "./ui/ImgLink";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import { dispatchCustomEvent } from "@/lib/customEvents";

export default function Header() {
  const router = useRouter();
  const [token, setToken] = useState<string | null>(null);
  const [lastLogin, setLastLogin] = useState<string | null>(null);
  const [formattedDate, setFormatDate] = useState<string | null>("");
   

  const logout = async () => {
    const person = confirm("You want to log out");
    if (person) {
      const res = await fetch('/api/auth/logout', { method: "POST", headers : { "content-Type": "application/json", "accept": "*/*" }});
      const data = await res.json();
      localStorage.removeItem("token");
      localStorage.removeItem("number");
      localStorage.removeItem("lastLogin");
      setLastLogin(null);
      setToken(null);
      dispatchCustomEvent('userLoggedIn', { user: token });
      router.push("/");
    }
  };

  const login = () => {
    router.push("/numerology/login");
  };

  const formatDateTime = (inputDateString: string | Date) => {
    const dateObj = new Date(inputDateString);
    const datePart = dateObj.toDateString().slice(4);
    const hours = dateObj.getHours().toString().padStart(2, "0");
    const minutes = dateObj.getMinutes().toString().padStart(2, "0");
    const timePart = `${hours}:${minutes}`;
    return `${datePart}, ${timePart}`;
  };


      useEffect(() => {

        const handleStorageChange = () => {
            const token = localStorage.getItem("token");
            setToken(token);

            const lastLogin = localStorage.getItem("lastLogin");
            setLastLogin(lastLogin);
            setFormatDate(formatDateTime(lastLogin as string));
        }

        window.addEventListener("userLoggedIn", handleStorageChange)
        return () => {
          window.removeEventListener("userLoggedIn", handleStorageChange);
        };

      }, []); 
  return (
    <>
      <div className="md:flex justify-between items-center lg:py-1 px-2 sm:px-6 lg:px-4">

        <Link href="/" className="hidden xl:block">
          <div className="md:flex flex-shrink-0 items-center justify-center my-3 md:my-0 hidden space-x-2">
            <Img style="w-12 h-12" path="/logos/jclogo.png" alt="logo" loading="eager" />
            <Para para="Dr. J C Chaudhry" style="para text-xl font-bold" />
          </div>
        </Link>

        <div className="md:flex items-center space-x-2 pr-5 hidden xl:hidden">
          <Link href="/ask-your-question">
            <Para
              style="bg-[#CE82B5] px-2 py-1 rounded text-white transition buttonHover buttonBackground align-bottom"
              para="Ask Your Question"
            />
          </Link>
          <Link href="/numerology/signup">
            <Para
              style="bg-[#CE82B5] px-2 py-1 rounded text-white transition buttonHover buttonBackground align-bottom"
              para="Book Appointment"
            />
          </Link>
        </div>

        <div className="hidden md:flex space-x-4 md:space-x-2 items-center justify-center mt-1 lg:mt-0">

          <div className="md:flex space-x-2 items-center">

            <div className="hidden lg:block">
              {lastLogin !== null && lastLogin !== "Invalid Date" && token ? (
                <Para
                  style="text-gray-600 mt-2"
                  para={`Last Login: ${formattedDate}`}
                />
              ) : null}
            </div>

            {lastLogin !== null ? (<div>||</div>): null}

            <ImgLink style="hover:scale-[1.1] w-7" to="https://twitter.com/jc_chaudhry" path="/socialmedia/06.png" alt="twitter" />
            <ImgLink style="hover:scale-[1.1] w-7" to="https://www.facebook.com/NumerologistAndMotivator/" path="/socialmedia/02.png" alt="facebook" />
            <ImgLink style="hover:scale-[1.1] w-7" to="https://www.instagram.com/jc_chaudhrynumerology/" path="/socialmedia/03.png" alt="instagram" />
            <ImgLink style="hover:scale-[1.1] w-7" to="https://www.youtube.com/channel/UCkGRccoFIazt6GZUcdq6Byg/" path="/socialmedia/01.png" alt="youtube" />

            <div>||</div>

            <ImgLink style="hover:scale-[1.1] w-7" path="/logos/android.png" to="https://play.google.com/store/apps/details?id=jc.nummerro.app" alt="play-store" />
            <ImgLink style="hover:scale-[1.1] w-7" path="/logos/apple-logo.png" to="https://apps.apple.com/us/app/jc-nummerro-app/id1529437444" alt="app-store" />

          </div>

          <p>||</p>

          <div className="flex items-center space-x-2">
            {token ? (
              <>
                <button type="button" className="cursor-pointer text-sm" onClick={logout}>
                  <FaUserAlt className="m-auto" size={20} />
                  LogOut
                </button>

                <p>||</p>

                <Link href="/profile">
                  <FaUserCircle className="m-auto" size={20} color="#490099" />
                  <p className="text-xs">Profile</p>
                </Link>

                <p>||</p>

                <Link href="/mybookings">
                  <FaUserCircle className="m-auto" size={20} color="#490099" />
                  <p className="text-xs">My Bookings</p>
                </Link>
              </>
            ) : (
              <button type="button" onClick={login}>
                <FaUserAlt className="m-auto" />
                <Link href="/numerology/login">
                  <p className="text-xs">LogIn</p>
                </Link>
              </button>
            )}
          </div>

        </div>
      </div>
      <hr className="text-gray-200" />
    </>
  );
}
