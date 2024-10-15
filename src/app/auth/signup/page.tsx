"use client";
import React, {useState} from "react";
import Image from "next/image";
import Snitcher from "@/assets/images/logo-icon.png";
import InputField from "@/components/common/InputField";

export default function Signup (){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [errors, setErrors] = useState({});

    return(
        <>
        <div className="max-w-[1200px] mx-auto flex flex-col justify-center items-center">
        <form className="py-12 w-full flex flex-col items-center">
            <div className="flex flex-col justify-center items-center mb-4">
             <Image src={Snitcher} alt="Snitcher-Logo" width={48} height={48} />
             <div className="mt-6 flex flex-col text-center">
                <h2 className="text-3xl text-[#111827] font-bold leading-9 tracking-tight">Create an account</h2>
                <p className="text-gray-500 mt-1 leading-8 text-[15px] font-normal">Start your 14-day free trial.</p>
             </div>
            </div>

        <InputField
         label="Name"
         value={name}
         name="name"
         type="text" 
         onChange={(e) => {
            setName(e.target.value);
            setErrors((prev) => ({ ...prev, name: "" }));
        }}
        />

        <InputField
         label="Phone"
         value={phone}
         name="phone"
         type="tel" 
         onChange={(e) => {
           setPhone(e.target.value);
           setErrors((prev) => ({ ...prev, phone: "" }));
        }}
        />

        <InputField
         label="Email"
         value={email}
         name="email"
         type="email" 
         onChange={(e) => {
           setEmail(e.target.value);
           setErrors((prev) => ({ ...prev, email: "" }));
        }}
        />

        <InputField
         label="Password"
         value={password}
         name="password"
         type="text" 
         onChange={(e) => {
            setPassword(e.target.value);
            setErrors((prev) => ({ ...prev, password: "" }));
        }}
        />

        <InputField
         label="Confirm Password"
         value={password}
         onChange={(e) => setPassword(e.target.value)}
         name="password"
         type="password"
         />

        <button className="mt-[2px] border border-blue-700 bg-blue-600 align-middle py-2 font-medium text-sm w-full max-w-[350px] rounded-lg text-white cursor-pointer hover:bg-blue-700">Register</button>

        <div className="flex items-center w-full max-w-[350px] my-4">
            <hr className="w-full border-gray-300" />
            <span className="px-2 text-gray-600 bg-white text-sm">OR</span>
            <hr className="w-full border-gray-300" />
        </div>


        </form>
        </div>
        </>
    );
}