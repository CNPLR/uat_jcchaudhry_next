'use client';

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Loading from "../loading";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { fetchUser } from "@/lib/slices/userSlice";
import { fetchMyBooking } from "@/lib/slices/myBooking";

export const checkTokenExpiry = (): boolean => {
    const token = localStorage.getItem("token");
    if (token) {
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
    if (!token) {
        return false;
    } else {
        try {
            let data: any = await fetch(`${process.env.NEXT_PUBLIC_URI}validateUser/${token}`)
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
    const [isValidToken, setIsValidToken] = useState<boolean|undefined>(undefined);
    const [loading2, setLoading] = useState(true);
    const dispatch = useAppDispatch();
    const { user, loading, error } = useAppSelector((state) => state.user);
    const bookings = useAppSelector((state) => state.myBookings);

    // if(isValidToken === false){
    //     router.push('/numerology/login');
    // }

    if(isValidToken){
         if (!loading && !user.user)
        dispatch(fetchUser());

        if ( !bookings.loading && !bookings.userAppointment.data.length) {
            dispatch(fetchMyBooking());
    }
    }
   

    useEffect(() => {
        const Token = localStorage.getItem("token");
        if (!Token) {
            setLoading(false);
            setIsValidToken(false);
            return;
        }

        (async () => {
            const res = await validate()
            setLoading(false);
            setIsValidToken(res);
            window.scrollTo(0, 0);
            if (!res) router.push('/numerology/login');
        })()
    }, [!bookings.loading])


    if (loading2) return <Loading />;

    // if(!isValidToken){
    //     router.push('/numerology/login');
    //     return null
    // }

    return <>{children}</>;
}