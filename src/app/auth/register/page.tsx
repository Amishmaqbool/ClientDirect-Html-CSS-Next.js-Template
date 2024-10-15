"use client";
import React, { useState } from "react";
import Image from "next/image";
import Snitcher from "@/assets/images/logo-icon.png";
import InputField from "@/components/common/InputField";
import Google from "@/assets/images/google.webp";
import Linkedin from "@/assets/images/linked.webp";

interface Errors {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  general?: string; 
}

export default function Signup() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<Errors>({});
  const [message, setMessage] = useState("");

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const validateForm = () => {
    const newErrors: Errors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";
    return newErrors;
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const formValidationErrors = validateForm();
    if (Object.keys(formValidationErrors).length > 0) {
      setErrors(formValidationErrors);
      return;
    }

    const [firstName, lastName = ""] = formData.name.trim().split(" ");

    const data = {
      firstName,
      lastName,
      email: formData.email,
      password: formData.password,
      confirmPassword: formData.confirmPassword,
    };

    try {
      const response = await fetch(`${apiUrl}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage("Registration successful!"); 
        setErrors({});
      } else {
        setErrors(result.errors || { general: "Registration failed" });
      }
    } catch (error) {
      console.error("Error:", error);
      setErrors({ general: "An unexpected error occurred. Please try again." });
    }
  };

  return (
    <div className="max-w-[1200px] mx-auto flex flex-col justify-center items-center">
      <form
        className="max-[400px]:px-6 py-12 w-full flex flex-col items-center"
        onSubmit={handleSubmit}
      >
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
          value={formData.name}
          name="name"
          type="text"
          onChange={handleInputChange}
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

        <InputField
          label="Email"
          value={formData.email}
          name="email"
          type="email"
          onChange={handleInputChange}
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

        <InputField
          label="Password"
          value={formData.password}
          name="password"
          type="password"
          onChange={handleInputChange}
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password}</p>
        )}

        <InputField
          label="Confirm Password"
          value={formData.confirmPassword}
          name="confirmPassword"
          type="password"
          onChange={handleInputChange}
        />
        {errors.confirmPassword && (
          <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
        )}

        {errors.general && (
          <p className="text-red-500 text-sm">{errors.general}</p>
        )}
        {message && <p className="text-green-500 text-sm">{message}</p>}

        <button
          className="mt-[2px] border border-blue-700 bg-blue-600 align-middle py-2 font-medium text-sm w-full max-w-[350px] rounded-lg text-white cursor-pointer hover:bg-blue-700"
          type="submit"
        >
          Register
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
