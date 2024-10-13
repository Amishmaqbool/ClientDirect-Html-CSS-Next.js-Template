import React from "react";
import Link from "next/link";
import Image from "next/image";
import Panel from "../Panel";
import arrow from "@/assets/svgs/arrow.svg";
import highPerformerSummer from "@/assets/svgs/high-performer-summer.svg";
import momentumLeader from "@/assets/svgs/momentum-leader.svg";
import highPerformerBussiness from "@/assets/svgs/high-performer-small-bussiness.svg";
import highPerformerAsia from "@/assets/svgs/high-performer-asia.svg";
import highPerformerEmea from "@/assets/svgs/high-performer-emea.svg";
import highPerformerUk from "@/assets/svgs/high-uk.svg";
import LinkedinIcon from "@/assets/svgs/linkedin-icon.svg";
import logo from "@/assets/svgs/logo.svg";

export default function Footer() {
  return (
    <>
      <Panel />
      <div className="bg-[#101726] relative">
        <div className="max-w-[1216px] max-lg:px-4 mx-auto pb-16 pt-[348px] flex max-lg:flex-col justify-between gap-32">
          <div className="flex flex-col">
            <Link href="/">
              <Image src={logo} height={35} width={125} alt="Logo" />
            </Link>

            <div className="flex items-center -space-x-4 my-[18px]">
              <Image
                src={highPerformerSummer}
                width={68}
                height={88.25}
                loading="lazy"
                alt="Performant de top vara"
                className="z-10"
              />
              <Image
                src={momentumLeader}
                loading="lazy"
                alt="Lider de momentum"
                width={68}
                height={88.25}
              />
              <Image
                src={highPerformerBussiness}
                loading="lazy"
                alt="Performant de top pentru afaceri mici"
                width={68}
                height={88.25}
                className="z-40"
              />
              <Image
                src={highPerformerAsia}
                loading="lazy"
                alt="Performant de top Asia Pacific"
                width={68}
                height={88.25}
                className="z-30"
              />
              <Image
                src={highPerformerEmea}
                loading="lazy"
                alt="Performant de top EMEA"
                width={68}
                height={88.25}
                className="z-20"
              />
              <Image
                src={highPerformerUk}
                loading="lazy"
                alt="Performant de top Regatul Unit"
                width={68}
                height={88.25}
                className="z-10"
              />
            </div>

            <div>
              <button className="bg-[#ffffff1a] text-sm text-white px-[14px] py-[7px] rounded-full hover:bg-gray-600 flex items-center">
                Începe perioada de probă gratuită de 14 zile
                <Image
                  src={arrow}
                  alt="săgeată"
                  width={20}
                  height={21}
                  className="ml-2"
                />
              </button>
            </div>
          </div>

          <div className="grid max-lg:gap-y-8 lg:grid-cols-4 lg:gap-x-5 text-white text-sm">
            <div>
              <p className="font-semibold mb-4 text-[#667085]">Produs</p>
              <ul className="space-y-3">
                <li className="cursor-pointer">Identificarea vizitatorilor</li>
                <li className="cursor-pointer">Îmbogățirea Google Analytics</li>
                <li className="cursor-pointer">API în timp real</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-4 text-[#667085]">Soluții</p>
              <ul className="space-y-3">
                <li className="cursor-pointer">Pentru vânzări</li>
                <li className="cursor-pointer">Pentru marketing</li>
                <li className="cursor-pointer">Pentru agenții</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-4 text-[#667085]">Resurse</p>
              <ul className="space-y-3">
                <li className="cursor-pointer">Centru de ajutor</li>
                <li className="cursor-pointer">Povești ale clienților</li>
                <li className="cursor-pointer">Întrebări frecvente</li>
                <li className="cursor-pointer">Program de afiliere</li>
                <li className="cursor-pointer">
                  Ghidul Snitcher pentru generarea de lead-uri B2B
                </li>
                <li className="cursor-pointer">Planul de marketing B2B</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-4 text-[#667085]">Legal</p>
              <ul className="space-y-3">
                <li className="cursor-pointer">Termeni și condiții</li>
                <li className="cursor-pointer">Politica de confidențialitate</li>
                <li className="cursor-pointer">Securitate</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10"></div>
        <div className="max-w-[1216px] mx-auto py-8 flex justify-between items-center text-gray-400 text-sm">
          <p>© Copyright 2015-2024 Snitcher B.V., toate drepturile rezervate.</p>
          <div className="flex space-x-4">
            <a href="#">
              <Image src={LinkedinIcon} alt="LinkedIn" width={24} height={24} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
