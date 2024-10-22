"use client";
import React, { useState } from "react";
import Image from "next/image";
import ClientiDirect from "@/assets/images/logo-icon.png";
import InputField from "@/components/common/InputField";
import Google from "@/assets/images/google.webp";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [companyVAT, setCompanyVAT] = useState(""); 
  const [companyName, setCompanyName] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/register`, {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
          firstname: name.split(" ")[0],
          lastname: name.split(" ")[1] || "",
          user_type: "tenant",
          status: "active",
          language: "de",
          phone: phone,
          company_name: companyName,
          cui_company: companyVAT,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        const errorMessage = errorData?.detail[0]?.msg || "Înregistrarea a eșuat";
        throw new Error(errorMessage);
      }

      router.push("/auth/login");
    } catch (err: unknown) {
      if (err instanceof Error) {
        toast.error(err.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      } else {
        toast.error("Something went wrong", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignUp = async () => {
    const redirectUrl = "https://clientidirect.com/redirect";
    const googleAuthUrl = `${process.env.NEXT_PUBLIC_API_URL}/auth/login/google?user_type=tenant&language=de&redirect_url=${encodeURIComponent(redirectUrl)}`;
    try {
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
          console.error("Authorization URL not found in the response");
        }
      } else {
        console.error("Error occurred during Google OAuth request:", response.statusText);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <div className="max-w-[1200px] mx-auto flex flex-col justify-center items-center">
      <ToastContainer />

      <form onSubmit={handleSubmit} className="max-w-[352px] mx-auto max-[400px]:px-6 py-12 w-full">
        <div className="flex flex-col justify-center items-center mb-4">
          <Image src={ClientiDirect} alt="ClientiDirect-Logo" width={48} height={48} />
          <div className="mt-6 flex flex-col text-center">
            <h2 className="text-3xl text-[#111827] font-bold leading-9 tracking-tight">
              Creează un cont
            </h2>
            <p className="text-gray-500 mt-1 leading-8 text-[15px] font-normal">
              Începe perioada de probă gratuită de 14 zile.
            </p>
          </div>
        </div>

        <InputField
          label="Nume"
          value={name}
          name="name"
          type="text"
          onChange={(e) => setName(e.target.value)}
        />

        <InputField
          label="Telefon"
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
          label="Nume Firma"
          value={companyName}
          name="companyName"
          type="text"
          onChange={(e) => setCompanyName(e.target.value)}
        />

        <InputField
          label="CUI Firma"
          value={companyVAT}
          name="companyVAT"
          type="text"
          onChange={(e) => setCompanyVAT(e.target.value)}
        />

        <InputField
          label="Parolă"
          value={password}
          name="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <InputField
          label="Confirmă parola"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          name="confirmPassword"
          type="password"
        />

        <button
          type="submit"
          className="mt-4 border border-blue-700 bg-blue-600 align-middle py-2 font-medium text-sm w-full max-w-[350px] rounded-lg text-white cursor-pointer hover:bg-blue-700"
          disabled={loading}
        >
          {loading ? "Înregistrare..." : "Înregistrează-te"}
        </button>

        <div className="flex items-center w-full max-w-[350px] my-4">
          <hr className="w-full border-gray-300" />
          <span className="px-2 text-gray-600 bg-white text-sm">OR</span>
          <hr className="w-full border-gray-300" />
        </div>

        <button
          type="button"
          onClick={handleGoogleSignUp}
          className="border border-gray-300 w-full max-w-[350px] py-2 font-medium text-sm text-gray-700 rounded-md flex items-center justify-center mb-3 hover:bg-gray-100"
        >
          <Image
            src={Google}
            alt="Google"
            width={20}
            height={20}
            className="mr-2"
          />
          Înscrie-te cu Google
        </button>

        <p className="text-center py-8 text-sm text-[#020817]">
          Ai deja un cont?{" "}
          <a href="/auth/login" className="text-blue-600 hover:text-blue-500">
            Autentificare
          </a>
        </p>
      </form>
    </div>
  );
}
