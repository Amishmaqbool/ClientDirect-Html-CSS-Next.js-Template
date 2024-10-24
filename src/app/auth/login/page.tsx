"use client";
import React, { useState, Suspense } from "react";
import Image from "next/image";
import ClientiDirect from "@/assets/images/logo-icon.png";
import InputField from "@/components/common/InputField";
import Google from "@/assets/images/google.webp";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from 'react-toastify';  // Import toastify
import 'react-toastify/dist/ReactToastify.css';          // Import styles

function LoginContent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const router = useRouter();

  const validateEmail = (): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      setEmailError("Email-ul este obligatoriu.");
      return false;
    } else if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address.");
      return false;
    } else {
      setEmailError("");
      return true;
    }
  };

  const validatePassword = (): boolean => {
    if (!password.trim()) {
      setPasswordError("Password is required.");
      return false;
    } else {
      setPasswordError("");
      return true;
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    if (!isEmailValid || !isPasswordValid) {
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

      if (response.ok) {
        const data = await response.json();

        if (data && data.access_token) {
          localStorage.setItem('token', data.access_token);
          toast.success('Login successful! Redirecting...');
          router.push('/');
        } else {
          throw new Error("Authentication failed. Please check your credentials.");
        }
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || "Autentificarea a eșuat");
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        toast.error(err.message);
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setGoogleLoading(true);

    try {
      const redirectUrl = 'http://localhost:3000';
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
        toast.error(err.message); // Error toast
      } else {
        toast.error("Something went wrong"); // General error toast
      }
    } finally {
      setGoogleLoading(false);
    }
  };

  return (
    <div className="max-w-[352px] mx-auto">
      <ToastContainer /> {/* Add ToastContainer for displaying toasts */}
      <form onSubmit={handleSubmit} className="max-[400px]:px-6 py-12 w-full">
        <div className="flex flex-col justify-center items-center mb-4">
          <Image src={ClientiDirect} alt="ClientiDirect-Logo" width={48} height={48} />
          <div className="mt-6 flex flex-col text-center">
            <h2 className="text-3xl text-[#111827] font-bold leading-9 tracking-tight">
              Bine ai revenit
            </h2>
            <p className="text-gray-500 mt-1 leading-8 text-[15px] font-normal">
              Te rog să introduci detaliile tale.
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
          label="Parolă"
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
            <p className="text-sm text-gray-500 leading-8">Ține-mă minte</p>
          </label>
          <p className="text-blue-600 hover:text-blue-500 text-sm">
            Ai uitat parola?
          </p>
        </div>

        <button
          type="submit"
          className="mt-[2px] border border-blue-700 bg-blue-600 align-middle py-2 font-medium text-sm w-full max-w-[350px] rounded-lg text-white cursor-pointer hover:bg-blue-700"
          disabled={loading}
        >
          {loading ? "Se conectează..." : "Conectare"}
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
            "Se redirecționează..."
          ) : (
            <>
              <Image
                src={Google}
                alt="Google"
                width={20}
                height={20}
                className="mr-2"
              />
             Înscrie-te cu Google
          </>
          )}
        </button>

        <p className="text-center py-8 text-sm text-[#020817]">
           Nu ai un cont încă?{" "}
          <a
            href="/auth/register"
            className="text-blue-600 hover:text-blue-500"
          >
            Începe proba gratuită de 14 zile
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
