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
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/token`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to login");
      }

      const data = await response.json();
      alert(JSON.stringify(data));
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-[352px] mx-auto">
      <form onSubmit={handleSubmit} className="max-[400px]:px-6 py-20 w-full">
        <div className="flex flex-col justify-center items-center mb-4">
          <Image src={Snitcher} alt="Snitcher-Logo" width={48} height={48} />
          <div className="mt-6 flex flex-col text-center">
            <h2 className="text-3xl text-[#111827] font-bold leading-9 tracking-tight">
              Welcome back
            </h2>
            <p className="text-gray-500 mt-1 leading-8 text-[15px] font-normal">
              Please enter your details.
            </p>
          </div>
        </div>

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

        <div className="flex justify-between items-center mb-4">
          <label htmlFor="rememberMe" className="flex gap-1 items-center cursor-pointer">
            <input
              type="checkbox"
              id="rememberMe"
              name="rememberMe"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="text-gray-500"
            />
            <p className="text-sm text-gray-500 leading-8">Remember Me</p>
          </label>
          <p className="text-blue-600 hover:text-blue-500 text-sm">
            Forgot your password?
          </p>
        </div>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <button
          type="submit"
          className="mt-[2px] border border-blue-700 bg-blue-600 align-middle py-2 font-medium text-sm w-full max-w-[350px] rounded-lg text-white cursor-pointer hover:bg-blue-700"
          disabled={loading}
        >
          {loading ? "Signing in..." : "Sign in"}
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

        <p className="text-center py-8 text-sm text-[#020817]">
          No account yet?{" "}
          <a href="/auth/signup" className="text-blue-600 hover:text-blue-500">
            Start your 14-day free trial
          </a>
        </p>
      </form>
    </div>
  );
}
