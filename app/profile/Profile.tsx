
'use client';
import axios from 'axios';
import { useEffect, useState } from 'react'
import MainHeading from '../components/ui/MainHeading';
import Para from '../components/ui/Para';
import SmallButton from '../components/ui/SmallButton';
import SubHeading2 from '../components/ui/SubHeading2';
import { MdEdit } from "react-icons/md";
import Spara from '../components/ui/Spara';
import { useAuth } from '../services/AuthContext';
import FullLoadingScreen from '../components/ui/full-loading-screen/FullLoadingScreen';
// import { getUserData } from './page';
import { useAlert } from '@/lib/AlertBox';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { fetchUser } from '@/lib/slices/userSlice';


const Profile = () => {
  const path = process.env.NEXT_PUBLIC_URI;
  const { showAlert } = useAlert();
//   const { user, token: authToken, loading: authLoading } = useAuth();
    

  const user = useAppSelector((state) => state.user.user);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isUpdating, setIsUpdating] = useState<boolean>(false);
  
  const dispatch = useAppDispatch();



    const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // Ensure `token` is not null or undefined
    };

    const [apiUserData, setApiUserData] = useState<any>()

    const [fomData, setFormData] = useState({
        name: "",
        popular_name: "",
        country: "",
        date_of_birth: "",
        gender: "",
        place_of_birth: "",
        state: "",
        time_of_birth: "",
        nationalNumber: "",
    })

    let number = fomData?.nationalNumber

    const [email, setEmail] = useState<string>()

    // const fetch = async (mobNumber: string, token: string) => {
    //         if (mobNumber && token) {
    //             const res = await getUserData(mobNumber as string, token as string);
    //             if (res?.data.success === true) {
    //                 setApiUserData(res.data)
    //                 const { full_name, popular_name, country, date_of_birth, gender, place_of_birth, state, time_of_birth } = res.data.user
    //                 setEmail(res.data.account.email_id)
    //                 setFormData({ name: full_name, popular_name, country, date_of_birth, gender, place_of_birth, state, time_of_birth, nationalNumber: res.data.account.mobile_number })
    //             }
    //             setIsLoading(false)
    //         }
    //     }

    useEffect(() => {
        let  mobNumber = localStorage.getItem('number');

        let token = localStorage.getItem('token');
        if (token) {
            setToken(token);
        }

        
        if(!user.user){
        //   fetch(mobNumber as string, token as string);
          dispatch(fetchUser());
         
         }
            if(user.account){
                 setApiUserData(user)
                const { full_name, popular_name, country, date_of_birth, gender, place_of_birth, state, time_of_birth } = user.user!;
                setEmail(user?.account?.email_id)
                setFormData({ name: full_name, popular_name: popular_name, country, date_of_birth, gender, place_of_birth, state, time_of_birth, nationalNumber: user.account?.mobile_number! })
                setIsLoading(false)
        }

    }, [user, dispatch])

    // const passwordRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v);
    // const validatePassword = (password) => passwordRegex.test(password);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const validateEmail = (email: any) => emailRegex.test(email);

    const inputChange = (e: any) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    }

    const submit = async () => {
        setIsUpdating(true);
        try {
            const res = await axios.put(`${path}websiteuser/update`, fomData, { headers }); // Pass headers inside config object
            if (res.data.success === true) {
              await dispatch(fetchUser());

                showAlert({ 
                    title: "Success", 
                    message: "Update Profile Successfully", 
                    type: "success" 
                });

                setIsUpdating(false);
            }
        } catch (error: any) {
            console.error("Error updating profile:", error.response?.data || error.message);
        }
    };

    const changeEmail = async () => {
        if (!validateEmail(email)) {
            return alert("Please Enter a Valid Email")
        }
        const res = await axios.put(path + "websiteuser/update/email", { email, number }, { headers })
        if (res?.data.message === "This Email is allready exist") {
            return alert("This Email is allready exist. Use diffrent valid Email")
        }
        if (res.data.success === true) {
            alert("Update Email Successfully")
            location.reload()
        }
    }

    return (
        <>
       
         <FullLoadingScreen isLoading={isLoading} />

            <div>
                {/* <Banner path="/images_folder/personal_numerology_bg.webp" /> */}
                <MainHeading mainHeading="My Profile" style="text-center my-5" />
            </div>
            <div className='lg:w-2/4 w-[90%] mx-auto'>
                <div className='space-y-2 bg-slate-100 p-5 rounded-lg'>
                    <SubHeading2 subHeading={apiUserData?.user?.full_name} />
                    <Para para={apiUserData?.account.email_id} />
                    <Para para={"+" + apiUserData?.account.country_code + " " + apiUserData?.account.mobile_number} />
                </div>
            </div>

            <div className='my-5 md:flex justify-center items-center lg:w-2/4 w-[90%] bg-slate-100 mx-auto p-5 rounded-lg shadow-md'>
                <div className='md:w-2/4 mb-5 md:mb-0'>
                    <ProfileInput
                        type="email"
                        identity="Email"
                        name="email"
                        value={email}
                        onChange={(e: any) => setEmail(e.target.value)}
                    />
                </div>
                <SmallButton style="mx-auto w-52" onClick={changeEmail} text="Change Email" />
            </div>

            <div className='my-5 flex justify-center items-center lg:w-2/4 w-[90%] bg-slate-100 mx-auto p-5 rounded-lg shadow-md'>
                <div className='space-y-4 w-full'>
                    <ProfileInput
                        type="text"
                        identity="Full Name"
                        name="name"
                        value={fomData?.name}
                        onChange={inputChange}
                    />
                    <ProfileInput
                        type="text"
                        identity="Popular Name"
                        name="popular_name"
                        value={fomData?.popular_name}
                        onChange={inputChange}
                    />
                    <ProfileInput
                        type="date"
                        identity="Date of Birth"
                        name="date_of_birth"
                        value={fomData?.date_of_birth?.split("T")[0]}
                        onChange={inputChange}
                    />
                    <ProfileInput
                        type="time"
                        identity="Time of Birth"
                        name="time_of_birth"
                        value={fomData?.time_of_birth}
                        onChange={inputChange}
                    />
                    <ProfileInput
                        type="text"
                        identity="Gender"
                        name="gender"
                        value={fomData?.gender}
                        onChange={inputChange}
                    />
                    <ProfileInput
                        type="text"
                        identity="Place of Birth"
                        name="place_of_birth"
                        value={fomData?.place_of_birth}
                        onChange={inputChange}
                    />
                    <ProfileInput
                        type="text"
                        identity="State"
                        name="state"
                        value={fomData?.state}
                        onChange={inputChange}
                    />
                    <ProfileInput
                        type="text"
                        identity="Country"
                        name="country"
                        value={fomData?.country}
                        onChange={inputChange}
                    />
                </div>
            </div>
            <div className='my-10'>
                {
                    !isUpdating ? (
                        <SmallButton style="mx-auto" onClick={submit} text="submit" />
                    ):
                    <SmallButton style="mx-auto" onClick={submit} text="Update..." isDisabled={isUpdating} />
                }
                
            </div>
        </>
    )
}

export default Profile

function ProfileInput({ name, value, identity, onChange, type }: any) {

    const [isEditable, setIsEditable] = useState(false);

        const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === 'Enter') {
            e.preventDefault();
            setIsEditable(false);
            console.log('Enter key pressed');
            // your logic here
            }
        };  

    return (
        <>
            <div className="flex justify-between items-center">
                <div>
                    <Para para={identity} />
                    {!isEditable ? (
                        <div>
                            <Spara style="mt-2" para={value} />
                        </div>
                    ) : (
                        <div>
                            {name === "gender" ? (
                                // Render a dropdown for gender selection
                                <select
                                    onChange={onChange}
                                    name={name}
                                    value={value}
                                    className="outline-none bg-slate-100 w-[300px] p-1 rounded"
                                >
                                    <option value="">Select Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            ) : (
                                // Default input for other fields
                                <input
                                    type={type}
                                    onChange={onChange}
                                    name={name}
                                    value={value}
                                    className="outline-none bg-slate-100 w-[300px] p-1 rounded"
                                    onKeyDown={handleKeyDown}
                                />
                            )}
                            <div className="bg-black h-[1px] w-[300px] mt-2"></div>
                        </div>
                    )}
                </div>
                <div onClick={() => setIsEditable(!isEditable)}  className="border border-gray-200 p-2 cursor-pointer bg-gray-200 rounded-md shadow-sm hover:shadow-lg transition-all">
                    <button>
                        <MdEdit />
                    </button>
                </div>
            </div>
            <div className="bg-white h-1"></div>
        </>
    );
}