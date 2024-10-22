"use client";
import React, { useState, useEffect } from "react";
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
import ClientiDirect from "@/assets/images/snitcher-logo.webp";
import GoogleAIcon from "@/assets/images/google-analytics-logo.webp";
import RealIcon from "@/assets/images/real-icon.webp";
import { useRouter } from "next/navigation";

const IntegrationSection = () => {
  const [animationKey, setAnimationKey] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationKey((prevKey: number) => prevKey + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
   router.push('/auth/register');
  };
  const handleGoogle = () => {
    router.push('/features/google-analytics');
   };
   const handleAPI = () => {
    router.push('/features/lead-generation');
   };
  

  return (
    <>
      <div className="flex flex-col justify-center items-center mx-auto max-w-[1200px] overflow-x-hidden">
        <div className="relative flex flex-col items-center text-white py-24">
          <div className="max-w-[790px] max-lg:max-w-[750px] max-lg:px-2 flex flex-col items-center pb-24 max-xs:pb-3">
            <div className="inline-block rounded-2xl bg-[#ffffff1a] border border-[#ffffff1a] pt-1 pb-[2px] px-2 text-xs font-semibold text-center">
              Integrari
            </div>
            <h2 className="text-center text-4xl font-bold tracking-[-1px] pt-10">
            O mulțime de integrări
            </h2>
            <p className="text-[#7d89b0] text-lg text-center pt-5">
              Îmbogățiți campaniile și umpleți conductele de vânzări prin integrarea cu produsele pe care le cunoașteți și le iubiți. Cu peste 5.000 de aplicații deja disponibile, instrumentele preferate ale echipei tale sunt la doar un clic distanță.
            </p>
            <button className="mt-7 flex items-center justify-center gap-2 rounded-full pt-2 pb-[6px] pl-4 pr-3 text-white bg-[#ffffff1a] border-[1.5px] border-[#ffffff1a] text-sm" onClick={handleClick}>
              Încearcă ClientiDirect gratuit
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

          <div className="relative w-full max-w-full flex justify-center items-center mt-28 max-lg:mt-60">
            <div className="absolute inset-0 flex justify-center items-center">
              <div key={`ripple1-${animationKey}`}
                className="ripple ripple1 absolute transform -translate-x-1/2 -translate-y-1/2 max-xs:w-[240px] max-xs:h-[240px]"
                style={{
                  width: '280px',
                  height: '280px',
                  opacity: 0,
                }}>
                <Image
                  src={Ripple1}
                  alt="ripple-1"
                  layout="fill"
                  objectFit="contain"
                />
              </div>

              <div key={`ripple2-${animationKey}`}
                className="ripple ripple2 absolute transform -translate-x-1/2 -translate-y-1/2 max-xs:w-[350px] max-xs:h-[350px]"
                style={{
                  width: '390px',
                  height: '390px',
                  opacity: 0,
                }}>
                <Image
                  src={Ripple2}
                  alt="ripple-2"
                  layout="fill"
                  objectFit="contain"
                />
              </div>

              <div key={`ripple3-${animationKey}`}
                className="ripple ripple3 absolute transform -translate-x-1/2 -translate-y-1/2 max-xs:w-[440px] max-xs:h-[440px]"
                style={{
                  width: '500px',
                  height: '500px',
                  opacity: 0,
                }}>
                <Image
                  src={Ripple3}
                  alt="ripple-3"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>

            <div className="absolute z-10">
              <Image src={ClientiDirect} alt="Central Icon" width={162} height={162} className="max-xs:w-24 max-xs:h-24" />
            </div>

            <div className="absolute w-full h-full z-10 flex max-lg:flex-col justify-between items-center max-xl:gap-6">
              <div className="flex flex-col gap-[30px] xl:-ml-36 max-lg:mb-36 max-lg:-mt-72 max-xs:-mt-[200px] max-xs:mb-20">
                <div className="flex gap-6 justify-center md:mr-4">
                  <Image src={Home1} alt="Home 1" width={87} height={88} className="max-xs:w-[59.31px] max-xs:h-[60px]" />
                  <Image src={Home2} alt="Home 2" width={87} height={88} className="max-xs:w-[59.31px] max-xs:h-[60px]" />
                  <Image src={Home3} alt="Home 3" width={87} height={88} className="max-xs:w-[59.31px] max-xs:h-[60px]" />
                </div>
                <div className="flex gap-6 justify-center md:ml-7">
                  <Image src={Home4} alt="Home 4" width={87} height={88} className="max-xs:w-[59.31px] max-xs:h-[60px]" />
                  <Image src={Home5} alt="Home 5" width={87} height={88} className="max-xs:w-[59.31px] max-xs:h-[60px]" />
                  <Image src={Home6} alt="Home 6" width={87} height={88} className="max-xs:w-[59.31px] max-xs:h-[60px]" />
                </div>
              </div>

              <div className="flex flex-col gap-[30px] xl:-mr-36 max-lg:top-16">
                <div className="flex gap-6 justify-center md:mr-4">
                  <Image src={Home7} alt="Home 7" width={87} height={88} className="max-xs:w-[59.31px] max-xs:h-[60px]" />
                  <Image src={Home8} alt="Home 8" width={87} height={88} className="max-xs:w-[59.31px] max-xs:h-[60px]" />
                  <Image src={Home9} alt="Home 9" width={87} height={88} className="max-xs:w-[59.31px] max-xs:h-[60px]" />
                </div>
                <div className="flex gap-6 justify-center md:ml-7">
                  <Image src={Home10} alt="Home 10" width={87} height={88} className="max-xs:w-[59.31px] max-xs:h-[60px]" />
                  <Image src={Home11} alt="Home 11" width={87} height={88} className="max-xs:w-[59.31px] max-xs:h-[60px]" />
                  <Image src={Home12} alt="Home 12" width={87} height={88} className="max-xs:w-[59.31px] max-xs:h-[60px]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex max-lg:flex-col gap-7 justify-center items-center max-w-full max-lg:max-w-[90%] mt-28 max-xl:px-4 max-lg:px-8 max-md:px-0 max-md:max-w-[95%] max-lg:mt-56 max-lg:pt-10 max-sm:pt-4 max-xs:pb-0 max-xs:mt-36">

          <div className="w-1/2 max-md:flex-col max-lg:w-full md:h-44 flex justify-center items-center gap-2 p-6 rounded-lg bg-[#ffffff17] border border-[#ffffff26]">
            <div className="flex flex-col gap-4">
              <div className="flex gap-3">
                <Image src={RealIcon} alt="Real-Time" width={28.35} height={28.84} className="max-xl:h-7" />
                <p className="text-lg text-white">API de identificare în timp real</p>
              </div>
              <p className="text-[#98a2b3] w-full text-sm">
                Vrei puterea deplină în propriile mâini? Transmiteți datele de identificare ale companiei oriunde aveți nevoie de ele cu Spotter, API-ul nostru de identificare în timp real.
              </p>
            </div>

            <div className="w-full flex md:justify-end">
              <button className="flex items-center justify-center gap-2 rounded-full pt-[7px] pb-1 pl-[14px] pr-3 text-white bg-[#3257ff] border-[3px] border-[#0000] text-sm" onClick={handleAPI}>
                Află mai multe
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none">
                  <path
                    d="M3.33301 10.6196H16.6663M16.6663 10.6196L11.6663 5.61963M16.6663 10.6196L11.6663 15.6196"
                    stroke="currentColor"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"></path>
                </svg>
              </button>
            </div>
          </div>

          <div className="w-1/2 max-md:flex-col max-lg:w-full md:h-44 p-6 flex gap-2 justify-center items-center rounded-lg bg-[#ffffff17] border border-[#ffffff26]">
            <div className="flex flex-col gap-4">
              <div className="flex gap-3">
                <Image src={GoogleAIcon} alt="Google Analytics" width={28.35} height={28.84} className="max-xl:h-7" />
                <p className="text-lg text-white">Îmbogățitor Google Analytics</p>
              </div>
              <p className="text-[#98a2b3] w-full text-sm">
                Google Analytics pur și simplu nu a fost creat pentru B2B - vindeți companiilor, nu
                indivizii. Transformați GA într-o soluție de analiză bazată pe cont și obțineți
                poza completă.
              </p>

            </div>
            <div className="w-full flex md:justify-end">
              <button className="flex items-center justify-center gap-2 rounded-full pt-[7px] pb-1 pl-[14px] pr-3 text-white bg-[#3257ff] border-[3px] border-[#0000] text-sm" onClick={handleGoogle}>
                Află mai multe
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none">
                  <path
                    d="M3.33301 10.6196H16.6663M16.6663 10.6196L11.6663 5.61963M16.6663 10.6196L11.6663 15.6196"
                    stroke="currentColor"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes rippleAnimation {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        .ripple {
          animation: rippleAnimation 1s forwards;
        }
        .ripple1 {
          animation-delay: 0s;
        }
        .ripple2 {
          animation-delay: 0.3s;
        }
        .ripple3 {
          animation-delay: 0.6s;
        }
      `}</style>
    </>
  );
};

export default IntegrationSection;
