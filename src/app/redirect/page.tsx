"use client";
import React, { useEffect, Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function RedirectAfter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [redirectMessage, setRedirectMessage] = useState(
    "Processing your request..."
  );

  useEffect(() => {
    const params = searchParams.toString();
    const token = searchParams.get("access_token");
    console.log("this is params:", params);

    if (token) {
      localStorage.setItem("access_token", token);
      toast.success("Successfully registered with Google!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      setRedirectMessage(
        "You will be redirected to the homepage in a while..."
      );

      const timer = setTimeout(() => {
        router.push("/");
      }, 3000);

      return () => clearTimeout(timer);
    } else {
      setRedirectMessage("Login failed. Redirecting to registration page...");

      const timer = setTimeout(() => {
        router.push("/auth/register");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [searchParams, router]);

  return (
    <>
      <ToastContainer />
      <div className="h-screen flex flex-col justify-center items-center mx-auto">
        <p className="text-lg">{redirectMessage}</p>
      </div>
    </>
  );
}

export default function Redirect() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RedirectAfter />
    </Suspense>
  );
}
