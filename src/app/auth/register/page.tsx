"use client";
import React, { useState } from "react";
import Image from "next/image";
import ClientiDirect from "@/assets/images/logo-icon.png";
import InputField from "@/components/common/InputField";
import Google from "@/assets/images/google.webp";
import { useRouter } from "next/navigation";
//import Linkedin from "@/assets/images/linked.webp";
// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "ClientiDirect | Identificarea vizitatorilor pentru agenții | Probă gratuită",
// };

interface Errors {
  name?: string;
  phone?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  companyVAT?: string,
  companyName?:string,
  general?: string;
}

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [companyVAT, setCompanyVAT] = useState(""); 
  const [companyName, setCompanyName] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const validateInputs = () => {
    const newErrors: Errors = {};

    if (!name.trim()) {
      newErrors.name = "Numele este obligatoriu.";
    }

    const phoneRegex = /^\d{10,15}$/;
    if (!phone.trim()) {
      newErrors.phone = "Numărul de telefon este obligatoriu.";
    } else if (!phoneRegex.test(phone)) {
      newErrors.phone = "Numărul de telefon trebuie să aibă între 10 și 15 cifre.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      newErrors.email = "Email-ul este obligatoriu.";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Email-ul este invalid.";
    }

    const alphanumericRegex = /^[a-zA-Z0-9 ]+$/;

    if (!companyName.trim()) {
      newErrors.companyName = "Numele firmei este obligatoriu.";
    } else if (!alphanumericRegex.test(companyName)) {
      newErrors.companyName = "Numele firmei trebuie să fie alfanumeric.";
    }
  
    if (!companyVAT.trim()) {
      newErrors.companyVAT = "CUI-ul firmei este obligatoriu.";
    } else if (alphanumericRegex.test(companyVAT)) {
      newErrors.companyVAT = "CUI-ul firmei trebuie să fie alfanumeric.";
    }

    if (!password) {
      newErrors.password = "Parola este obligatorie.";
    } else if (password.length < 8) {
      newErrors.password = "Parola trebuie să aibă cel puțin 8 caractere.";
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = "Confirmarea parolei este obligatorie.";
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = "Parolele nu se potrivesc.";
    }

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = validateInputs();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    setErrors({});

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
        }),
      });

      if (!response.ok) {
        throw new Error("Înregistrarea a eșuat");
      }

      // const data = await response.json();
      router.push('/login');
    } catch (err: unknown) {
      if (err instanceof Error) {
        setErrors((prev) => ({ ...prev, general: err.message }));
      } else {
        setErrors((prev) => ({ ...prev, general: "Something went wrong" }));
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignUp = async () => {
    const redirectUrl = 'https://clientidirect.com/redirect';
    const googleAuthUrl = `${process.env.NEXT_PUBLIC_API_URL}/auth/login/google?user_type=tenant&language=de&redirect_url=${encodeURIComponent(redirectUrl)}`;
    try {
      const response = await fetch(googleAuthUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        if (data.authorization_url) {
          window.location.href = data.authorization_url;
        } else {
          console.error('Authorization URL not found in the response');
        }
      } else {
        console.error('Error occurred during Google OAuth request:', response.statusText);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <div className="max-w-[1200px] mx-auto flex flex-col justify-center items-center">
      <form onSubmit={handleSubmit} className="max-w-[352px] mx-auto max-[400px]:px-6 py-12 w-full">
        <div className="flex flex-col justify-center items-center mb-4">
          <Image src={ClientiDirect} alt="Snitcher-Logo" width={48} height={48} />
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
        {errors.name && <p className="text-sm text-red-500 pt-2">{errors.name}</p>}

        <InputField
          label="Telefon"
          value={phone}
          name="phone"
          type="tel"
          onChange={(e) => setPhone(e.target.value)}
        />
        {errors.phone && <p className="text-sm text-red-500 pt-2">{errors.phone}</p>}

        <InputField
          label="Email"
          value={email}
          name="email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p className="text-sm text-red-500 pt-2">{errors.email}</p>}

        <InputField
        label="Nume Firma"
        value={companyName}
        name="companyName"
        type="text"
        onChange={(e) => setCompanyName(e.target.value)}
      />
      {errors.companyName && <p className="text-sm text-red-500 pt-2">{errors.companyName}</p>}

      <InputField
        label="CUI Firma"
        value={companyVAT}
        name="companyVAT"
        type="text"
        onChange={(e) => setCompanyVAT(e.target.value)}
      />
      {errors.companyVAT && <p className="text-sm text-red-500 pt-2">{errors.companyVAT}</p>}

        <InputField
          label="Parolă"
          value={password}
          name="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <p className="text-sm text-red-500 pt-2">{errors.password}</p>}

        <InputField
          label="Confirmă parola"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          name="confirmPassword"
          type="password"
        />
        {errors.confirmPassword && <p className="text-sm text-red-500 pt-2">{errors.confirmPassword}</p>}

        {errors.general && <p className="text-sm text-red-500 pt-2">{errors.general}</p>}

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
