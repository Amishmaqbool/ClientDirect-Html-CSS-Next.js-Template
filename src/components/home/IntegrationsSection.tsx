import React from "react";
import Image from "next/image";
import Ripple1 from "@/assets/images/ripple-1.webp";
import Ripple2 from "@/assets/images/ripple-2.webp";
import Ripple3 from "@/assets/images/ripple-3.webp";
import Home1 from "@/assets/images/home-1.webp";
import Home2 from "@/assets/images/home-2.webp";
import Home3 from "@/assets/images/home-3.webp";
import Home4 from "@/assets/images/home-4.webp";
import Home5 from "@/assets/images/home-5.webp";
import Home6 from "@/assets/images/home-6.webp";
import Home7 from "@/assets/images/home-7.webp";
import Home8 from "@/assets/images/home-8.webp";
import Home9 from "@/assets/images/home-9.webp";
import Home10 from "@/assets/images/home-10.webp";
import Home11 from "@/assets/images/home-11.webp";
import Home12 from "@/assets/images/home-12.webp";
import Snitcher from "@/assets/images/snitcher-logo.webp";

const IntegrationSection = () => {
  return (
    <>
      <div className="relative flex flex-col items-center text-white py-24">
        <div className="max-w-[790px] flex flex-col items-center pb-12">
          <div className="inline-block rounded-2xl bg-[#ffffff1a] border border-[#ffffff1a] pt-1 pb-[2px] px-2 text-xs font-semibold text-center">
            Integrations
          </div>
          <h2 className="text-center text-4xl font-bold tracking-[-1px] pt-10">
            The Stack within your Stack
          </h2>
          <p className="text-[#7d89b0] text-lg text-center pt-5">
            Enrich campaigns and fill sales pipelines by integrating with the
            products you know and love. With over 5,000+ apps already available,
            your team&apos;s favourite tools are just a click away.
          </p>
          <button className="mt-6 flex items-center justify-center gap-2 rounded-full pt-2 pb-[6px] pl-4 pr-3 text-white bg-[#ffffff1a] border-[1.5px] border-[#ffffff1a] text-sm">
            Try Snitcher for Free
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none">
              <path
                d="M3.33301 10.6196H16.6663M16.6663 10.6196L11.6663 5.61963M16.6663 10.6196L11.6663 15.6196" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          </button>
        </div>

        {/* Ripple + Logo */}
        <div className="relative w-full h-[400px] flex justify-center items-center">
          <div className="absolute w-full h-full flex justify-center items-center">
            <Image src={Ripple3} alt="ripple-3" className="absolute ripple" />
            <Image src={Ripple2} alt="ripple-2" className="absolute ripple" />
            <Image src={Ripple1} alt="ripple-1" className="absolute ripple" />
          </div>

          <div className="relative z-10">
            <Image src={Snitcher} alt="Central Icon" width={120} height={120} />
          </div>

          <div className="absolute w-full h-full z-10 flex justify-between gap-10 items-center top-2">
            {/* Left roup icons */}
            <div className="flex flex-col gap-6 ml-24">
              <div className="flex gap-6 justify-center">
                <Image src={Home1} alt="Home 1" width={87} height={88} />
                <Image src={Home2} alt="Home 2" width={87} height={88} />
                <Image src={Home3} alt="Home 3" width={87} height={88} />
              </div>
              <div className="flex gap-6 justify-center">
                <Image src={Home4} alt="Home 4" width={87} height={88} />
                <Image src={Home5} alt="Home 5" width={87} height={88} />
                <Image src={Home6} alt="Home 6" width={87} height={88} />
              </div>
            </div>

            {/* Right group icons */}
            <div className="flex flex-col gap-6 mr-24">
              <div className="flex gap-6 justify-center">
                <Image src={Home7} alt="Home 7" width={87} height={88} />
                <Image src={Home8} alt="Home 8" width={87} height={88} />
                <Image src={Home9} alt="Home 9" width={87} height={88} />
              </div>
              <div className="flex gap-6 justify-center">
                <Image src={Home10} alt="Home 10" width={87} height={88} />
                <Image src={Home11} alt="Home 11" width={87} height={88} />
                <Image src={Home12} alt="Home 12" width={87} height={88} />
              </div>
            </div>
          </div>
        </div>
      </div>

     </>
  );
};

export default IntegrationSection;
