"use client"
import React, { useState } from "react";
import Image from "next/image";
import Snitcher from "@/assets/images/logo-icon.png";
import InputField from "@/components/common/InputField";
import Google from "@/assets/images/google.webp";
import Linkedin from "@/assets/images/linked.webp";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setErrors((prev) => ({ ...prev, password: "Passwords do not match" }));
      return;
    }

    setLoading(true);
    setErrors({});

    try {
      const response = await fetch('https://api.clientidirect.com/auth/register', {
        method: "POST",
        headers: {
          "accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
          firstname: name.split(" ")[0], // Assuming the first name is the first word of the name
          lastname: name.split(" ")[1] || "", // Assuming the last name is the second word or empty
          user_type: "tenant",
          status: "active",
          language: "de",
          phone: phone,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to register");
      }

      const data = await response.json();
      alert(JSON.stringify(data)); // Handle successful registration
    } catch (err) {
      setErrors((prev) => ({ ...prev, general: err.message || "Something went wrong" }));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-[1200px] mx-auto flex flex-col justify-center items-center">
      <form onSubmit={handleSubmit} className="max-[400px]:px-6 py-12 w-full flex flex-col items-center">
        <div className="flex flex-col justify-center items-center mb-4">
          <Image src={Snitcher} alt="Snitcher-Logo" width={48} height={48} />
          <div className="mt-6 flex flex-col text-center">
            <h2 className="text-3xl text-[#111827] font-bold leading-9 tracking-tight">
              Create an account
            </h2>
            <p className="text-gray-500 mt-1 leading-8 text-[15px] font-normal">
              Start your 14-day free trial.
            </p>
          </div>
        </div>

        <InputField
          label="Name"
          value={name}
          name="name"
          type="text"
          onChange={(e) => setName(e.target.value)}
        />

        <InputField
          label="Phone"
          value={phone}
          name="phone"
          type="tel"
          onChange={(e) => setPhone(e.target.value)}
        />

        <InputField
          label="Email"
          value={email}
          name="email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <InputField
          label="Password"
          value={password}
          name="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <InputField
          label="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          name="confirmPassword"
          type="password"
        />

        {errors.password && <p className="text-red-500 mb-4">{errors.password}</p>}
        {errors.general && <p className="text-red-500 mb-4">{errors.general}</p>}

        <button
          type="submit"
          className="mt-[2px] border border-blue-700 bg-blue-600 align-middle py-2 font-medium text-sm w-full max-w-[350px] rounded-lg text-white cursor-pointer hover:bg-blue-700"
          disabled={loading}
        >
          {loading ? "Registering..." : "Register"}
        </button>

        <div className="flex items-center w-full max-w-[350px] my-4">
          <hr className="w-full border-gray-300" />
          <span className="px-2 text-gray-600 bg-white text-sm">OR</span>
          <hr className="w-full border-gray-300" />
        </div>

        <button className="border border-gray-300 w-full max-w-[350px] py-2 font-medium text-sm text-gray-700 rounded-md flex items-center justify-center mb-3 hover:bg-gray-100">
          <Image
            src={Google}
            alt="Google"
            width={20}
            height={20}
            className="mr-2"
          />
          Sign up with Google
        </button>

        <button className="border border-gray-300 w-full max-w-[350px] py-2 font-medium text-sm text-gray-700 rounded-md flex items-center justify-center hover:bg-gray-100">
          <Image
            src={Linkedin}
            alt="LinkedIn"
            width={20}
            height={20}
            className="mr-2"
          />
          Sign up with LinkedIn
        </button>

        <p className="py-8 text-sm text-[#020817]">
          Already have an account?{" "}
          <a href="/auth/login" className="text-blue-600 hover:text-blue-500">
            Sign in
          </a>
        </p>
      </form>
    </div>
  );
}
