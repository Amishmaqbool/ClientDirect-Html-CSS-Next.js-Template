"use client";
import React, {useEffect} from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default function Redirect(){
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