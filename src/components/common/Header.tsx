"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import marketingDropdown from "@/assets/svgs/marketing-dropdown.svg";
import GoogleAnalytics from "@/assets/svgs/google-analytics-dropdown.svg";
import IdentifyDropdown from "@/assets/svgs/identify-dropdown-icon.svg";
import AgenciesDropdown from "@/assets/svgs/agencies-dropdown.svg";
import logo from "../../assets/svgs/header-logo-icon.svg";
import ChevronDownIcon from "../../../public/svgs/chevron-down";
import SalesIcon from "@/assets/svgs/sales-icon.svg";

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = (dropdownName : string) => {
    setOpenDropdown((prev) => (prev === dropdownName ? null : dropdownName));
  };

  const handleMenuItemClick = () => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  return (
    <header
      className="backdrop-blur-md sticky top-0 w-full z-[9999]"
      style={{ background: "rgb(7 11 24 / 80%)" }}
    >
      <div className="max-w-[1280px] mx-auto p-6 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <div className="flex gap-3 items-center">
              <Image src={logo} height={28} width={28} alt="Logo" />
              <p className="pt-1 font-semibold text-xl text-white">
                ClientiDirect
              </p>
            </div>
          </Link>
        </div>
        <nav className="hidden lg:block">
          <ul className="flex gap-x-[37px] text-white text-sm">
            <li className="relative flex items-center dropdown">
              <button
                onClick={() => toggleDropdown("products")}
                className="hover:text-gray-300 font-bold flex gap-2 items-center"
              >
                <p>Produse</p>
                <ChevronDownIcon />
              </button>
              {openDropdown === "products" && (
                <div className="absolute top-5 left-1/2 transform -translate-x-1/2 mt-2 p-5 rounded-[14px] shadow-lg w-[350px] border border-[#ffffff26] bg-[#070b18]">
                  <ul>
                    <li className="flex items-center p-2 hover:opacity-80 cursor-pointer rounded-lg">
                      <Link href="/features/lead-generation" passHref onClick={() => setOpenDropdown(null)}>
                        <div className="flex items-start">
                          <Image
                            src={IdentifyDropdown}
                            alt="Identifică"
                            loading="lazy"
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
                    <Link href="/features/google-analytics" onClick={() => setOpenDropdown(null)}>
                      <li className="flex items-start p-2 hover:opacity-80 cursor-pointer rounded-lg">
                        <Image
                          src={GoogleAnalytics}
                          alt="Google Analytics"
                          loading="lazy"
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
                  </ul>
                </div>
              )}
            </li>
            <li className="relative flex items-center dropdown">
              <button
                onClick={() => toggleDropdown("solutions")}
                className="hover:text-gray-300 font-bold flex gap-2 items-center"
              >
                <p>Soluții</p>
                <ChevronDownIcon />
              </button>
              {openDropdown === "solutions" && (
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 mt-2 p-5 rounded-[14px] shadow-lg w-[350px] border border-[#ffffff26] bg-[#070b18]">
                  <ul>
                    <Link href="/solutions/sales" onClick={() => setOpenDropdown(null)}>
                      <li className="flex items-start p-2 hover:opacity-80 cursor-pointer rounded-lg">
                        <Image
                          src={SalesIcon}
                          alt="Pentru vânzări"
                          loading="lazy"
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
                    <Link href="/solutions/marketing" onClick={() => setOpenDropdown(null)}>
                      <li className="flex items-start p-2 hover:opacity-80 cursor-pointer rounded-lg">
                        <Image
                          src={marketingDropdown}
                          loading="lazy"
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
                    <Link href="/solutions/agency" onClick={() => setOpenDropdown(null)}>
                      <li className="flex items-start p-2 hover:opacity-80 cursor-pointer rounded-lg">
                        <Image
                          src={AgenciesDropdown}
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
            <li>
              <a href="/pricing" className="hover:text-gray-300 font-bold">
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
        <ul className="px-6 py-8 space-y-4 text-white text-sm">
          <li>
            <button
              className="w-full text-left flex items-center font-medium"
              onClick={() => toggleDropdown("products")}
            >
              Produse
              <ChevronDownIcon />
            </button>
            {openDropdown === "products" && (
              <ul className="py-2 space-y-2 text-gray-300">
                <Link href="/features/lead-generation" onClick={handleMenuItemClick}>
                  <li className="pt-2">
                    <p className="text-base">Identifică</p>
                  </li>
                </Link>
                <Link href="/features/google-analytics" onClick={handleMenuItemClick}>
                  <li className="pt-2">
                    <p className="text-base">Îmbogățitor Google Analytics</p>
                  </li>
                </Link>
              </ul>
            )}
          </li>
          <li>
            <button
              className="w-full text-left flex items-center font-semibold"
              onClick={() => toggleDropdown("solutions")}
            >
              Soluții
              <ChevronDownIcon />
            </button>
            {openDropdown === "solutions" && (
              <ul className="py-2 space-y-2 text-gray-300">
                <Link href="/solutions/sales" onClick={handleMenuItemClick}>
                  <li className="pt-2">
                    <p className="text-base">Pentru vânzări</p>
                  </li>
                </Link>
                <Link href="/solutions/marketing" onClick={handleMenuItemClick}>
                  <li className="pt-2">
                    <p className="text-base">Pentru marketing</p>
                  </li>
                </Link>
                <Link href="/solutions/agency" onClick={handleMenuItemClick}>
                  <li className="pt-2">
                    <p className="text-base">Pentru agenții</p>
                  </li>
                </Link>
              </ul>
            )}
          </li>
          <li>
            <a href="/pricing" className="font-medium block" onClick={handleMenuItemClick}>
              Prețuri
            </a>
          </li>
          <li className="flex items-center gap-4 mt-4 pt-4">
            <Link href="/auth/register" onClick={handleMenuItemClick}>
              <button className="rounded-full bg-[#3257ff] py-[7px] pl-5 pr-3 flex items-center gap-1 hover:bg-blue-600">
                Începe acum
                <ChevronRightIcon className="h-5 w-5" />
              </button>
            </Link>
            <Link href="/auth/login" onClick={handleMenuItemClick}>
              <button className="font-semibold">Autentificare</button>
            </Link>
          </li>
        </ul>
      </div>
      <div className="max-w-[1236px] mx-auto px-6 border-b border-[#243643]"></div>
    </header>
  );
}
