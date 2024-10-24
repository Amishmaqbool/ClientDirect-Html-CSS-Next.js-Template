"use client";
import React, { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function TokenToaster() {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const token = searchParams.get("access_token");
    console.log("Access token from URL:", token); // Debugging log

    if (token) {
      // Store token in localStorage if it is present in the URL
      localStorage.setItem("access_token", token);

      // Show success toast
      toast.success("Successfully authenticated!", {
        position: "top-right",
        autoClose: 3000, // The toast will auto-close after 3 seconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      // Set a timer to refresh the page after 5 seconds
      const timer = setTimeout(() => {
        router.refresh(); // Refresh the page to apply changes
      }, 5000);

      // Cleanup timer on unmount
      return () => clearTimeout(timer);
    } else if (!localStorage.getItem("access_token")) {
      // Handle case when the token is missing in both the search params and localStorage
      toast.error("Login failed. Redirecting...", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      // Redirect to the registration page after 3 seconds
      const timer = setTimeout(() => {
        router.push("/auth/register");
      }, 3000);

      // Cleanup timer on unmount
      return () => clearTimeout(timer);
    }
  }, [searchParams, router]); // Reactivity: searchParams dependency added for updates

  return (
    <>
      <ToastContainer />
    </>
  );
}
