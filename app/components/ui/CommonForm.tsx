"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaCheck } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import SmallButton from "./SmallButton";
import { CountryIPaddress } from "./GetCountryCode";
import Img from "./Img";
import Para from "./Para";
import SubHeading1 from "./SubHeading1";

interface CommonFormProps {
  style?: string;
}

export default function CommonForm({ style }: CommonFormProps) {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const path = process.env.NEXT_PUBLIC_BACKEND_URI as string;

  const [nationalNumber, setNationalNumber] = useState("");
  const [code, setCode] = useState("");
  const [number, setNumber] = useState("");
  const [otp, setOtp] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [otpStatus, setOtpStatus] = useState<string | false>(false);
  const [otpEnable, setOtpEnable] = useState(true);

  const statusRef = useRef<HTMLInputElement | null>(null);

  const [pass, setPass] = useState("");
  const [cpass, setCpass] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState<string>("");

  const inputChange = (value: string, data: any) => {
    setNumber(value);
    setCode(data.dialCode);
    const dialCodeLength = data.dialCode.length;
    const nationalNum = value.slice(dialCodeLength);
    setNationalNumber(nationalNum);
  };

  const sendOtp = async (e: React.FocusEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (name.length < 4 || name.length > 250)
      return alert("Please enter valid Name");

    if (nationalNumber.length < 7 || nationalNumber.length > 15)
      return alert("Please enter a valid number");

    const res = await axios.get(
      `${path}otp/signup-otp?code=${code}&number=${nationalNumber}&name=${name}&platform_type=Desktop`
    );

    if (res.data.success) {
      setOtpStatus("OTP Sent");
      setOtpEnable(false);
    } else {
      alert(res.data.message);
      router.push("/numerology/login");
    }
  };

  const verifyOtp = async (e: React.FocusEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (!otp) return alert("Enter OTP");

    const res = await axios.get(
      `${path}otp/verified-otp?number=${nationalNumber}&otp=${otp}`
    );

    if (res.data.success) {
      setOtpStatus("OTP Verified");
    } else {
      setOtpStatus("Invalid OTP");
    }
  };

  const passwordRegex =
    /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\\\]{};':"\\|,.<>/?])(?=.*\d).{8,}$/;
  const validatePassword = (password: string) => passwordRegex.test(password);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (!statusRef.current?.checked)
        return alert("Accept Terms & Policy");

      if (!validatePassword(pass))
        return alert("Weak Password");

      if (pass !== cpass)
        return alert("Password mismatch");

      if (otpStatus !== "OTP Verified")
        return alert("OTP not verified");

      const res = await axios.put(path + "websiteuser/compeleteuser", {
        pass,
        email,
        dob,
        nationalNumber,
      });

      if (res.data.success) {
        alert(res.data.message);
        router.push("/numerology/login");
      } else {
        alert(res.data.message);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const country = CountryIPaddress();

  return (
    <div className={`${style} px-5 py-3 w-[320px] bg-white rounded-md`}>
      <SubHeading1 subHeading="Register Now" style="text-center" />
      <Para para="To book an appointment" style="text-center mb-2" />

      <form onSubmit={handleSubmit}>
        <input
          className="input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
        />

        <PhoneInput
          country={country}
          value={number}
          onChange={inputChange}
          onBlur={sendOtp}
          countryCodeEditable={false}
          enableSearch
        />

        {otpStatus && (
          <p
            className={`text-xs ${
              otpStatus === "Invalid OTP" ? "text-red-600" : "text-green-600"
            }`}
          >
            {otpStatus}
          </p>
        )}

        <div className="relative">
          <input
            disabled={otpEnable}
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            onBlur={verifyOtp}
            placeholder="OTP"
            required
          />
          {otpStatus === "OTP Verified" && <FaCheck className="icon" />}
          {otpStatus === "Invalid OTP" && <RxCross2 className="icon" />}
        </div>

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />

        <DatePicker
          selected={dob ? new Date(dob) : null}
          onChange={(d) => setDob(d?.toISOString().split("T")[0] || "")}
          dateFormat="dd/MM/yyyy"
          maxDate={new Date()}
          placeholderText="DOB"
          showYearDropdown
        />

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            placeholder="Password"
          />
          <span onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <IoMdEye /> : <IoMdEyeOff />}
          </span>
        </div>

        <input
          type={showPassword ? "text" : "password"}
          value={cpass}
          onChange={(e) => setCpass(e.target.value)}
          placeholder="Confirm Password"
        />

        <div className="flex mt-2">
          <input type="checkbox" ref={statusRef} defaultChecked />
          <p className="text-xs">
            I agree to{" "}
            <Link href="/privacy-policy" className="underline">
              Privacy Policy
            </Link>{" "}
            &{" "}
            <Link href="/terms-and-conditions" className="underline">
              Terms
            </Link>
          </p>
        </div>

        {loading ? (
          <Img style="mx-auto w-7" path="/logos/loader_gif.gif" alt="loader"/>
        ) : (
          <SmallButton text="Submit" style="m-auto" />
        )}
      </form>

      <p className="text-xs text-center">
        Already have an account?{" "}
        <Link href="/numerology/login" className="underline">
          Sign In
        </Link>
      </p>
    </div>
  );
}
