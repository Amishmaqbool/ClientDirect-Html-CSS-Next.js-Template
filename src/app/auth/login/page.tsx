"use client";
import React, { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import ClientiDirect from "@/assets/images/logo-icon.png";
import InputField from "@/components/common/InputField";
import Google from "@/assets/images/google.webp";
import Linkedin from "@/assets/images/linked.webp";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

function LoginContent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const searchParams = useSearchParams();
  const router = useRouter();
  useEffect(() => {
    const params = searchParams.toString();
    if (params) {
      localStorage.setItem("access_token", params);
      router.push('/');
    }
  }, [router, searchParams]);

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      setEmailError("Email is required.");
    } else if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError("");
    }
  };

  const validatePassword = () => {
    if (!password.trim()) {
      setPasswordError("Password is required.");
    } else {
      setPasswordError("");
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    validateEmail();
    validatePassword();

    if (emailError || passwordError) {
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/token`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to login");
      }

      const data = await response.json();
      alert(JSON.stringify(data));
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error(err.message);
      } else {
        console.error("Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setGoogleLoading(true);

    try {
      const redirectUrl = 'https://clientidirect.com/auth/login';

      const googleAuthUrl = `${process.env.NEXT_PUBLIC_API_URL}/auth/login/google?user_type=tenant&language=de&redirect_url=${encodeURIComponent(
        redirectUrl
      )}`;

      const response = await fetch(googleAuthUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();

        if (data.authorization_url) {
          window.location.href = data.authorization_url;
        } else {
          throw new Error("Authorization URL not found");
        }
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to fetch Google login URL");
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error(err.message);
      } else {
        console.error("Something went wrong");
      }
    } finally {
      setGoogleLoading(false);
    }
  };

  return (
    <div className="max-w-[352px] mx-auto">
      <form onSubmit={handleSubmit} className="max-[400px]:px-6 py-12 w-full">
        <div className="flex flex-col justify-center items-center mb-4">
          <Image src={ClientiDirect} alt="ClientiDirect-Logo" width={48} height={48} />
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
          onChange={(e) => {
            setEmail(e.target.value);
            setEmailError("");
          }}
        />
        {emailError && <p className="text-sm text-red-500 pt-2">{emailError}</p>}

        <InputField
          label="Password"
          value={password}
          name="password"
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
            setPasswordError("");
          }}
        />
        {passwordError && (
          <p className="text-sm text-red-500 pt-2">{passwordError}</p>
        )}

        <div className="pt-4 flex justify-between items-center mb-4">
          <label
            htmlFor="rememberMe"
            className="flex gap-1 items-center cursor-pointer"
          >
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

        <button
          type="button"
          onClick={handleGoogleLogin}
          className="border border-gray-300 w-full max-w-[350px] py-2 font-medium text-sm text-gray-700 rounded-md flex items-center justify-center mb-3 hover:bg-gray-100"
          disabled={googleLoading}
        >
          {googleLoading ? (
            "Redirecting..."
          ) : (
            <>
              <Image
                src={Google}
                alt="Google"
                width={20}
                height={20}
                className="mr-2"
              />
              Sign in with Google
            </>
          )}
        </button>

        <p className="text-center py-8 text-sm text-[#020817]">
          No account yet?{" "}
          <a
            href="/auth/register"
            className="text-blue-600 hover:text-blue-500"
          >
            Start your 14-day free trial
          </a>
        </p>
      </form>
    </div>
  );
}

export default function Signup() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoginContent />
    </Suspense>
  );
}
