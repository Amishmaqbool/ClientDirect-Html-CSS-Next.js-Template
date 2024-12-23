"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Panel from "../Panel";
import arrow from "@/assets/svgs/arrow.svg";
//import LinkedinIcon from "@/assets/svgs/linkedin-icon.svg";
import logo from "@/assets/svgs/header-logo-icon.svg";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const isRedirectPage = pathname === "/redirect";
  const route = useRouter();

  const handleClick = () => {
    route.push("/auth/register");
  };

  return (
    <>
      <Panel />
      <div className="bg-[#101726] relative">
        <div
          className={`max-w-[1280px] px-6 mx-auto pb-16 ${
            !isRedirectPage ? "pt-[348px]" : "pt-10"
          }  flex max-lg:flex-col justify-between max-sm:gap-0 gap-32`}
        >
          <div className="flex flex-col">
            <Link href="/">
              <div className="flex sm:gap-3 items-center">
                <Image src={logo} height={28} width={28} alt="Logo" />
                <p className="max-sm:ml-3 pt-1 font-semibold text-xl text-white">
                  ClientiDirect
                </p>
              </div>
            </Link>

            <div>
              <button
                className="w-max bg-[#ffffff1a] mt-8 max-[420px]:text-xs text-sm text-white px-[14px] py-[7px] rounded-full hover:bg-gray-600 flex items-center"
                onClick={handleClick}
              >
                Începe perioada de probă gratuită de 14 zile
                <Image
                  src={arrow}
                  alt="săgeată"
                  width={20}
                  height={21}
                  className="max-[365px]:hidden ml-2"
                />
              </button>
            </div>
          </div>

          <div className=" max-sm:mt-16 flex flex-col sm:flex-row lg:justify-between flex-wrap max-sm:gap-y-0 max-lg:gap-y-8 md:gap-x-28 lg:gap-x-8 text-white text-sm">
            <div>
              <p className="font-semibold mb-4 text-[#667085]">Produs</p>
              <ul className="space-y-3">
                <Link href="/features/lead-generation">
                  <li className="cursor-pointer">
                    Identificarea vizitatorilor
                  </li>
                </Link>
                <Link href="/features/google-analytics">
                  <li className="pt-3 cursor-pointer">
                    Îmbogățirea Google Analytics
                  </li>
                </Link>
                {/* <li className="cursor-pointer">API în timp real</li> */}
              </ul>
            </div>
            <div className="max-sm:mt-8 sm:ml-28 md:ml-0">
              <p className="font-semibold mb-4 text-[#667085]">Soluții</p>
              <ul className="space-y-3">
                <Link href="/solutions/sales">
                  <li className="cursor-pointer">Pentru vânzări</li>
                </Link>
                <Link href="/solutions/marketing">
                  <li className="pt-3 cursor-pointer">Pentru marketing</li>
                </Link>
                <Link href="/solutions/agency">
                  <li className="pt-3 cursor-pointer">Pentru agenții</li>
                </Link>
              </ul>
            </div>
            {/* <div>
              <p className="font-semibold mb-4 text-[#667085]">Resurse</p>
              <ul className="space-y-3">
                <Link href="">
                  <li className="cursor-pointer">Centru de ajutor</li>
                </Link>
                <Link href="/customer-stories">
                  <li className="pt-3 cursor-pointer">
                    Povești ale clienților
                  </li>
                </Link>
                <Link href="/faq">
                  <li className="pt-3 cursor-pointer">Întrebări frecvente</li>
                </Link>
                <Link href="">
                  <li className="pt-3 cursor-pointer">Program de afiliere</li>
                </Link>
                <Link href="">
                  <li className="pt-3 cursor-pointer">
                    Ghidul ClientiDirect pentru generarea de lead-uri B2B
                  </li>
                </Link>
                <Link href="/blueprint/b2b-marketing-blueprint">
                  <li className="pt-3 cursor-pointer">
                    Planul de marketing B2B
                  </li>
                </Link>
              </ul>
            </div> */}
            <div className="max-md:hidden max-sm:mt-8">
              <p className="font-semibold mb-4 text-[#667085]">Legal</p>
              <ul className="space-y-3">
                <Link href="/terms-conditions">
                  <li className="cursor-pointer">Termeni și condiții</li>
                </Link>
                <Link href="/faq">
                  <li className="pt-3 cursor-pointer">FAQ</li>
                </Link>
                <Link href="/privacy-policy">
                  <li className="pt-3 cursor-pointer">
                    Politica de confidențialitate
                  </li>
                </Link>
              </ul>
            </div>
          </div>
            <div className="max-md:block max-sm:mt-8 max-md:-mt-16 text-white text-sm hidden">
              <p className="font-semibold mb-4 text-[#667085]">Legal</p>
              <ul className="space-y-3">
                <Link href="/terms-conditions">
                  <li className="cursor-pointer">Termeni și condiții</li>
                </Link>
                <Link href="/faq">
                  <li className="pt-3 cursor-pointer">FAQ</li>
                </Link>
                <Link href="/privacy-policy">
                  <li className="pt-3 cursor-pointer">
                    Politica de confidențialitate
                  </li>
                </Link>
              </ul>
            </div>
        </div>

        <div className="border-t border-gray-700 mt-10"></div>
        <div className="max-w-[1280px] mx-auto px-6 py-8 flex max-[500px]:flex-col justify-between items-center text-gray-400 text-sm">
          <p className="max-[500px]:text-center">
            <Link className="underline" href="/">
              ClientiDirect.Com
            </Link>
            , toate drepturile rezervate
          </p>
        </div>
      </div>
    </>
  );
}
