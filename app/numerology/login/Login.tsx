'use client';
import Img from "@/app/components/ui/Img";
import SmallButton from "@/app/components/ui/SmallButton";
import SubHeading1 from "@/app/components/ui/SubHeading1";
import { apiFetch } from "@/lib/api";
import { dispatchCustomEvent } from "@/lib/customEvents";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { fetchUser } from "@/lib/slices/userSlice";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { IoMdEyeOff, IoMdEye } from "react-icons/io";
import { ToastContainer } from "react-toastify";


export default function Login() {
    const router = useRouter();
    let [loading, setLoading] = useState(false);
    let path = process.env.NEXT_PUBLIC_URI
    
    const [mob, setMob] = useState<number | string>("")
    const [pass, setPass] = useState<string>("")
    const [lastRoute, setLastRoute] = useState<string>('/dashboard')
    const redirect = useRouter();

    const dispatch = useAppDispatch();
    const user = useAppSelector((state)=> state.user);

    let headers = { "content-Type": "application/json", "accept": "*/*" };

    // async function validUser(userToken: string) {
    //     let url = path + "validateUser"
    //     await fetch(url, {
    //         method: "POST",
    //         headers: headers,
    //         body: JSON.stringify({ token: userToken })
    //     })
    // }

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        setLoading(true)
        if (!mob || !pass) {
            setLoading(false)
            return alert("Invalid Field")
        }
        try {
            const res = await fetch('/api/auth/login', {
                method: "POST",
                headers,
                body: JSON.stringify({  mob, pass })
            })

            const data = await res.json();

            if (data.success) {
                localStorage.setItem("number", JSON.stringify(mob))
                localStorage.setItem('token', data.token)
                const lastLoginDate = new Date(data.lastLogin)
                localStorage.setItem('lastLogin', lastLoginDate?.toString())
                // validUser(data.token)
                // await apiFetch<any>(path + "websiteuser/"+Number(mob), { revalidate: 3600, tags: [`${mob}-user-details`] }); //api/websiteuser/9669507012
                dispatch(fetchUser());
                dispatchCustomEvent('userLoggedIn', { user: data.user });
                redirect.push(lastRoute == '/ask-your-question' ? lastRoute: '/dashboard')
            }
            else {
                setLoading(false)
                return alert("Invalid Credentials")
            }
        } catch (error) {
            console.log(error)
        }
    }

    const refreshHeader = () => {
        document
    }
    const [showPassword, setShowPassword] = useState(false)

    useEffect(() => {
       if (sessionStorage.getItem("lastRoute")) {
           setLastRoute(sessionStorage.getItem("lastRoute") || '/dashboard')
       }

       if (localStorage.getItem("token")) {
           router.push("/dashboard")
       }
    }, [])

    return (
        <>
            <div className='py-10 bg-[#490099]'>
                <ToastContainer />
                <div className='md:flex items-center justify-evenly'>
                    <div>
                        <Img style='md:w-[500px] w-[300px] mx-auto' alt="Dr J C Chaudhry for numerology consultation services" path="/images_folder/Dr-J-C-Chaudhry-for-numerology-consultation-services.png" />
                    </div>
                    <div className=''>
                        <div className='px-5 py-5 w-[320px] bg-white rounded-md border mx-auto'>
                            <SubHeading1 subHeading="Login" style="text-center mb-5" />
                            <form onSubmit={handleSubmit}>
                                <div className="mb-5">
                                    <input
                                        type="text"
                                        onChange={(e) => setMob(e.target.value)}
                                        value={mob}
                                        name="number"
                                        required
                                        id="number"
                                        placeholder="Enter Mobile Number Without Code"
                                        className="w-full rounded-md border border-[#e0e0e0] placeholder:text-sm bg-white py-1 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                </div>
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        onChange={(e) => setPass(e.target.value)}
                                        value={pass}
                                        name="password"
                                        id="password"
                                        placeholder="Password"
                                        required
                                        className="w-full rounded-md border placeholder:text-sm border-[#e0e0e0] bg-white py-1 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                    <div className='absolute right-2 top-2 z-50' onClick={e => setShowPassword(!showPassword)}>
                                        {!showPassword ? <IoMdEyeOff /> : <IoMdEye />}
                                    </div>
                                </div>
                                <div className='mt-5'>
                                    {loading ?
                                        <div className='w-28 mx-auto rounded-md font-bold text-center bg-[#fd7e14] py-2 shadow-2xl'>
                                            <Img style="mx-auto w-7" path="/logos/loader_gif.gif" alt="" />
                                        </div>
                                        : <SmallButton text="Submit" style="m-auto" onClick={handleSubmit}/>
                                    }
                                </div>
                            </form>
                            <p className='text-xs mt-2 text-center font-semibold'>
                                Do not have an account?
                                <Link href="/numerology/signup">
                                    <span className='cursor-pointer underline text-[#490099]'>Sign Up</span>
                                </Link>
                            </p>
                            <p className='text-xs mt-2 text-center font-semibold'>
                                <Link href="/numerology/updatepassword">
                                    <span className='cursor-pointer underline text-[#490099]'>Forgot Password</span>
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
        </>
    )
}