'use client';
import axios from "axios";
import Para from "../components/ui/Para";
import { useRouter, useSearchParams } from "next/navigation";
import { useAlert } from "@/lib/AlertBox";

export default  function  page(){ 

  let path = process.env.NEXT_PUBLIC_URI
    const searchParams = useSearchParams()
    const email = searchParams.get('email')
    const id = searchParams.get('id');
    const {showAlert} = useAlert();
    const router = useRouter();
    
    const submit = async (e: any) => {
        e.preventDefault();
        const validate = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (email && id) {
            if (validate.test(email)) {
                try {
                    const res = await axios.post(`${path}subscribe/delete`, { email, id });
                    if (res.data.success) {
                        // alert(res.data.message);
                        showAlert({
                            title: "Success",
                            message: res.data.message,
                            type: "success"
                        })
                       router.push('/blogs');

                    } else {
                        // alert("Subscription failed. Please try again.");
                         showAlert({
                            title: "Error",
                            message: "Subscription failed. Please try again.",
                            type: "error"
                        })
                    }
                } catch (error) {
                    console.error("Error subscribing:", error);
                    // alert("An error occurred. Please try again later.");
                     showAlert({
                            title: "Error",
                            message: "An error occurred. Please try again later.",
                            type: "error"
                        })
                }
            } else {
                alert("Please enter a valid email address.");
            }
        } else {
            alert("You have not Email and Id")
        }
    };

    return (
        <div className='w-full h-[80vh] flex justify-center items-center'>
            <div className='p-5'>
                <div className='flex justify-center'>
                    <div className='space-y-3'>
                        <Para para="Dear Subscriber," />
                        <Para para="We’re sorry to see you go! You've successfully unsubscribed from our mailing list. This means you will no longer receive updates, predictions, or important announcements in your inbox." />
                        <Para para="This means you will no longer receive the latest updates, and important announcements in your email inbox." />
                        <Para para="If this was a mistake or you change your mind, you can always resubscribe to stay connected and informed." />
                        <Para para="Thank you for being a part of our community. We hope to welcome you back in the future!" />
                        <Para para="Best regards," />
                        <Para para="CNPL" />
                    </div>
                </div>
                <div className='sm:flex justify-center p-10 sm:space-x-5 items-center'>
                    <div className='flex justify-center'>
                        <button onClick={submit} className='transition buttonHover text-center shadow-2xl bg-orange-500 text-white font-semibold px-10 py-3 rounded-lg'>Unsubscribe</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
