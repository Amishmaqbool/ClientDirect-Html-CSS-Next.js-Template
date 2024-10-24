"use client";

import { useSearchParams, useRouter } from "next/navigation"; 
import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function TokenToaster() {
  const searchParams = useSearchParams(); 
  const router = useRouter(); 
  const token = searchParams.get("access_token"); 

  useEffect(() => {
    if (token) {
      toast.success(`Access token detected: You have successfully Login through Google`, {
        position: "top-right",
      });

      const newUrl = window.location.pathname;
      window.history.replaceState(null, "", newUrl); 
    }
  }, [token]);

  return <ToastContainer />;
}
