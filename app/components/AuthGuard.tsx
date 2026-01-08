'use client';

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Loading from "../loading";

 export const checkTokenExpiry = (): boolean => {
        const token = localStorage.getItem("token");
        if (token !== null) {
            try {
                const payloadBase64 = token?.split(".")[1];
                const decodedPayload = JSON.parse(atob(payloadBase64));
                const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds

                if (decodedPayload?.exp < currentTime) {
                    console.log("Token has expired");
                    localStorage.removeItem('token')
                    localStorage.removeItem('number')
                    localStorage.removeItem('lastLogin')
                    // router.push('/numerology/login')
                    // return false; 
                } else {
                    // console.log("Token is valid");
                    return true; 
                }
            } catch (error) {
                localStorage.removeItem('token')
                localStorage.removeItem('number')
                localStorage.removeItem('lastLogin')
                // router.push('/numerology/login')
                // return false;
            }
            return false;
        }
        return false;
    };

export const validate = async (): Promise<boolean> => {
            const token = localStorage.getItem('token');
            if (token === null) {
                return false;
            } else {
                try {
                let data : any= await fetch(`${process.env.NEXT_PUBLIC_URI}validateUser/${token}`)
                data = await data.json();
                if (data?.success == false) {
                    localStorage.removeItem('token')
                    localStorage.removeItem('number')
                    localStorage.removeItem('lastLogin')

                }
                return data?.success;
            } catch (error) {
                console.log("Error validating token");
            }
            }
            return false;
                       
        }
export default function AuthGuard({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);


    // const checkTokenExpiry = () => {
    //     const token = localStorage.getItem("token");
    //     if (token !== null) {
    //         try {
    //             const payloadBase64 = token?.split(".")[1];
    //             const decodedPayload = JSON.parse(atob(payloadBase64));
    //             const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds

    //             if (decodedPayload?.exp < currentTime) {
    //                 console.log("Token has expired");
    //                 localStorage.removeItem('token')
    //                 localStorage.removeItem('number')
    //                 localStorage.removeItem('lastLogin')
    //                 router.push('/numerology/login')
    //                 // return false; 
    //             } else {
    //                 console.log("Token is valid");
    //                 // return true; 
    //             }
    //         } catch (error) {
    //             localStorage.removeItem('token')
    //             localStorage.removeItem('number')
    //             localStorage.removeItem('lastLogin')
    //             router.push('/numerology/login')
    //             // return false;
    //         }
    //     }
    // };

    useEffect(() => {

        (async () => {
            const res = await validate() && checkTokenExpiry();
            window.scrollTo(0, 0);
            
            if(!res)
                router.push('/numerology/login');
            
            setLoading(false);
        })()

       
    }, [loading])


  if (loading) return <Loading />; // or loader

  return <>{children}</>;
}
