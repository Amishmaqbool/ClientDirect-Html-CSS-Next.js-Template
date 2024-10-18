"use client";
import React, {useEffect , Suspense} from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
//import { time } from "console";

function RedirectAfter() {
    const searchParams = useSearchParams();
    const router = useRouter();
    useEffect(() => {
        const params = searchParams.toString();
        console.log("this is params");
        if (params) {
        localStorage.setItem("access_token", params);
        router.push('/');
        }
    }, [router, searchParams]);

    return(
    <>
    <div className="max-w-[1200px] flex flex-col justify-center items-center mx-auto">
        <h1>This is the Redirect Page</h1>
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
  