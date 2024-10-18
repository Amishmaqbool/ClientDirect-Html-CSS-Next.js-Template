"use client";
import React, {useEffect , Suspense} from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import {ClipLoader} from 'react-spinners';
//import { time } from "console";

function RedirectAfter() {
    const searchParams = useSearchParams();
    const router = useRouter();

    useEffect(() => {
        const params = searchParams.toString();
        console.log("this is params");
        if (params) {
            localStorage.setItem("access_token", params);
        }
        const timer = setTimeout(() => {
        router.push("/"); 
        }, 3000); 

    return () => clearTimeout(timer);
    }, [router, searchParams]);

    return(
    <>
    <div className="max-w-[1200px] flex flex-col justify-center items-center mx-auto py-20">
          <ClipLoader
            color={"#111827"} 
            loading={true}
            size={50} 
          />
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