"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import marketingDropdown from "@/assets/svgs/marketing-dropdown.svg";
import GoogleAnalytics from "@/assets/svgs/google-analytics-dropdown.svg";
import IdentifyDropdown from "@/assets/svgs/identify-dropdown-icon.svg";
import AgenciesDropdown from "@/assets/svgs/agencies-dropdown.svg";
import logo from "../../assets/svgs/logo.svg";
import Guides from "@/assets/images/navbar-img.webp";
import ChevronDownIcon from "../../../public/svgs/chevron-down";
import { usePathname } from "next/navigation";

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpenDropdown(null);
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest(".dropdown")) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <header
      className="backdrop-blur-md sticky top-0 w-full z-[9999]"
      style={{ background: "rgb(7 11 24 / 80%)" }}
    >
      <div className="max-w-[1280px] mx-auto p-6 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <Image src={logo} height={35} width={125} alt="Logo" />
          </Link>
        </div>
        <nav className="hidden lg:block">
          <ul className="flex gap-x-[37px] text-white text-sm">
            <li className="relative flex items-center dropdown">
              <button
                onClick={() =>
                  setOpenDropdown(
                    openDropdown === "products" ? null : "products"
                  )
                }
                className="hover:text-gray-300 font-bold flex gap-2 items-center"
              >
                <p>Produse</p>
                <ChevronDownIcon />
              </button>
              {openDropdown === "products" && (
                <div className="absolute top-5 left-1/2 transform -translate-x-1/2 mt-2 p-5 rounded-[14px] shadow-lg w-[350px] border border-[#ffffff26] bg-[#070b18]">
                  <ul>
                    <li className="flex items-center p-2 hover:opacity-80 cursor-pointer rounded-lg">
                      <Link href="/features/lead-generation" passHref>
                        <div className="flex items-start">
                          <Image
                            src={IdentifyDropdown}
                            alt="Identifică"
                            width={50}
                            height={50}
                          />
                          <div className="ml-4">
                            <p className="font-semibold">Identifică</p>
                            <p className="text-sm text-gray-400 pt-2">
                              Transformă traficul anonim de pe site-ul tău în
                              lead-uri acționabile.
                            </p>
                          </div>
                        </div>
                      </Link>
                    </li>
                    <Link href="/features/google-analytics">
                      <li className="flex items-start p-2 hover:opacity-80 cursor-pointer rounded-lg">
                        <Image
                          src={GoogleAnalytics}
                          alt="Google Analytics"
                          width={50}
                          height={50}
                        />
                        <div className="ml-4">
                          <p className="font-semibold">
                            Îmbogățitor Google Analytics
                          </p>
                          <p className="text-sm text-gray-400 pt-2">
                            Transformă Google Analytics într-o platformă
                            dedicată analizelor B2B.
                          </p>
                        </div>
                      </li>
                    </Link>
                    {/* <Link href="/features/real-time-identification-api">
                      <li className="flex items-start p-2 hover:opacity-80 cursor-pointer rounded-lg">
                        <Image
                          src={IdentifyDropdown}
                          alt="Spotter"
                          width={40}
                          height={40}
                        />
                        <div className="ml-4">
                          <p className="font-semibold">Spotter</p>
                          <p className="text-sm text-gray-400 pt-2">
                            API pentru identificarea vizitatorilor în timp real.
                          </p>
                        </div>
                      </li>
                    </Link> */}
                  </ul>
                </div>
              )}
            </li>
            <li className="relative flex items-center dropdown">
              <button
                onClick={() =>
                  setOpenDropdown(
                    openDropdown === "solutions" ? null : "solutions"
                  )
                }
                className="hover:text-gray-300 font-bold flex gap-2 items-center"
              >
                <p>Soluții</p>
                <ChevronDownIcon />
              </button>
              {openDropdown === "solutions" && (
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 mt-2 p-5 rounded-[14px] shadow-lg w-[350px] border border-[#ffffff26] bg-[#070b18]">
                  <ul>
                    <Link href="/solutions/sales">
                      <li className="flex items-start p-2 hover:opacity-80 cursor-pointer rounded-lg">
                        <Image
                          src={AgenciesDropdown}
                          alt="Pentru vânzări"
                          width={50}
                          height={50}
                        />
                        <div className="ml-4">
                          <p className="font-semibold">Pentru vânzări</p>
                          <p className="text-sm text-gray-400 pt-2">
                            Califică și prioritizează lead-urile cu intenție
                            ridicată.
                          </p>
                        </div>
                      </li>
                    </Link>
                    <Link href="/solutions/marketing">
                      <li className="flex items-start p-2 hover:opacity-80 cursor-pointer rounded-lg">
                        <Image
                          src={marketingDropdown}
                          alt="Pentru marketing"
                          width={50}
                          height={50}
                        />
                        <div className="ml-4">
                          <p className="font-semibold">Pentru marketing</p>
                          <p className="text-sm text-gray-400 pt-2">
                            Reduce risipa și îmbunătățește retargetarea.
                          </p>
                        </div>
                      </li>
                    </Link>
                    <Link href="/solutions/agency">
                      <li className="flex items-start p-2 hover:opacity-80 cursor-pointer rounded-lg">
                        <Image
                          src={marketingDropdown}
                          alt="Pentru agenții"
                          width={50}
                          height={50}
                        />
                        <div className="ml-4">
                          <p className="font-semibold">Pentru agenții</p>
                          <p className="text-sm text-gray-400 pt-2">
                            Generează mai multe lead-uri calificate pentru
                            clienții tăi.
                          </p>
                        </div>
                      </li>
                    </Link>
                  </ul>
                </div>
              )}
            </li>
            {/* <li className="relative flex items-center dropdown">
              <button
                onClick={() =>
                  setOpenDropdown(
                    openDropdown === "resources" ? null : "resources"
                  )
                }
                className="hover:text-gray-300 font-bold flex gap-2 items-center"
              >
                <p>Resurse</p>
                <ChevronDownIcon />
              </button>
              {openDropdown === "resources" && (
                <div className="absolute top-3 left-1/2 transform -translate-x-1/2 mt-4 p-3 pb-8 rounded-[14px] shadow-lg w-[280px] border border-[#ffffff26] bg-[#070b18]">
                  <ul>
                    <Link href="/">
                      <li className="flex items-center hover:opacity-80 cursor-pointer rounded-lg pt-5">
                        <div className="ml-3">
                          <p className="font-semibold text-base">
                            Centru de ajutor
                          </p>
                          <p className="text-sm text-gray-400 pt-2">
                            Sfaturi, bune practici și răspunsuri de la echipa
                            ClientiDirect.
                          </p>
                        </div>
                      </li>
                    </Link>
                    <Link href="/customer-stories">
                      <li className="flex items-center hover:opacity-80 cursor-pointer rounded-lg pt-7">
                        <div className="ml-3">
                          <p className="font-semibold text-base">
                            Povești ale clienților
                          </p>
                          <p className="text-sm text-gray-400 pt-2">
                            Află cum afaceri similare cu a ta folosesc ClientiDirect
                            pentru a identifica, angaja și obține noi clienți.
                          </p>
                        </div>
                      </li>
                    </Link>
                    <Link href="/blueprint/b2b-marketing-blueprint">
                      <li className="flex items-center hover:opacity-80 cursor-pointer rounded-lg pt-7">
                        <div className="ml-3">
                          <p className="font-semibold text-base">
                            Planul de marketing B2B
                          </p>
                          <p className="text-sm text-gray-400 pt-2">
                            Module tactice pentru creșterea marketingului B2B,
                            bazate pe cele mai bune practici din industrie.
                          </p>
                        </div>
                      </li>
                    </Link>
                    <Link href="/">
                      <li className="flex items-center hover:opacity-80 cursor-pointer rounded-lg pt-7">
                        <div className="ml-3">
                          <p className="font-semibold text-base">Ghiduri</p>
                          <div className="pt-2">
                            <Image
                              src={Guides}
                              alt="Ghiduri Img"
                              width={232}
                              height={116}
                              className="rounded-lg"
                            />
                          </div>
                        </div>
                      </li>
                    </Link>
                  </ul>
                </div>
              )}
            </li> */}
            <li>
              <a href="#" className="hover:text-gray-300 font-bold">
                Prețuri
              </a>
            </li>
          </ul>
        </nav>
        <div className="hidden lg:flex justify-center items-center gap-8 text-sm text-white">
          <Link href="/auth/login">
            <button className="font-semibold">Autentificare</button>
          </Link>
          <Link href="/auth/register">
            <button className="rounded-full bg-[#3257ff] pt-[7px] pb-[6px] pl-4 pr-2 flex items-center gap-1 hover:bg-blue-600">
              <p>Începe acum</p>
              <ChevronRightIcon className="h-5 w-5 -mt-[2px]" />
            </button>
          </Link>
        </div>
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white focus:outline-none"
          >
            <Bars3Icon className="w-10 h-10" />
          </button>
        </div>
      </div>
      <div
        className={`lg:hidden bg-[#070b18] overflow-hidden transition-all duration-300 ease-in-out transform origin-top ${
          isMobileMenuOpen
            ? "max-h-screen opacity-100 scale-y-100"
            : "max-h-0 opacity-0 scale-y-0"
        }`}
      >
        <ul className="px-6 py-4 space-y-4 text-white text-sm">
          <li>
            <button
              onClick={() =>
                setOpenDropdown(openDropdown === "products" ? null : "products")
              }
              className="w-full text-left flex items-center font-medium"
            >
              Produse
              <ChevronDownIcon />
            </button>
            {openDropdown === "products" && (
              <ul className="py-4 space-y-2 text-gray-300">
                <Link href="/features/lead-generation">
                  <li className="pt-2">
                    <p className="text-base">Identifică</p>
                  </li>
                </Link>
                <Link href="/features/google-analytics">
                  <li className="pt-2">
                    <p className="text-base">Îmbogățitor Google Analytics</p>
                  </li>
                </Link>
                {/* <Link href="/features/real-time-identification-api">
                  <li className="pt-2">
                    <p className="text-base">Spotter</p>
                  </li>
                </Link> */}
              </ul>
            )}
          </li>
          <li>
            <button
              onClick={() =>
                setOpenDropdown(
                  openDropdown === "solutions" ? null : "solutions"
                )
              }
              className="w-full text-left flex items-center font-semibold"
            >
              Soluții
              <ChevronDownIcon />
            </button>
            {openDropdown === "solutions" && (
              <ul className="py-4 space-y-2 text-gray-300">
                <li className="pt-2">
                  <p className="text-base">Pentru vânzări</p>
                </li>
                <li className="pt-2">
                  <p className="text-base">Pentru marketing</p>
                </li>
                <li className="flex items-start pt-2">
                  <p className="text-base">Pentru agenții</p>
                </li>
              </ul>
            )}
          </li>
          <li>
            <button
              onClick={() =>
                setOpenDropdown(
                  openDropdown === "resources" ? null : "resources"
                )
              }
              className="w-full text-left flex items-center font-semibold"
            >
              Resurse
              <ChevronDownIcon />
            </button>
            {openDropdown === "resources" && (
              <ul className="py-4 space-y-2 text-gray-300">
                <li className="pt-2">
                  <p className="text-base">Centru de ajutor</p>
                </li>
                <li className="pt-2">
                  <p className="text-base">Povești ale clienților</p>
                </li>
                <li className="flex pt-2">
                  <p className="text-base">Planul de marketing B2B</p>
                </li>
                <li className="flex items-start pt-2">
                  <div className="">
                    <p className="text-base">Ghiduri</p>
                    <div className="pt-2">
                      <Image
                        src={Guides}
                        alt="Ghiduri Img"
                        width={232}
                        height={116}
                        className="rounded-lg"
                      />
                    </div>
                  </div>
                </li>
              </ul>
            )}
          </li>
          <li>
            <a href="#" className="font-medium block">
              Prețuri
            </a>
          </li>
          <li className="flex items-center gap-4 mt-4 pt-4">
            <Link href="/auth/register">
              <button className="rounded-full bg-[#3257ff] py-[7px] pl-5 pr-3 flex items-center gap-1 hover:bg-blue-600">
                Începe acum
                <ChevronRightIcon className="h-5 w-5" />
              </button>
            </Link>
            <Link href="/auth/login">
              <button className="font-semibold">Autentificare</button>
            </Link>
          </li>
        </ul>
      </div>
      <div className="max-w-[1236px] mx-auto px-6 border-b border-[#243643]"></div>
    </header>
  );
}
