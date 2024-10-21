"use client";
import React from "react";
import Image from "next/image";
import Button from "./common/Button";
import { revenueSectionData } from "@/constants/features/google-analytics";
import Script from "next/script";

export default function RevenueSection() {
  return (
    <div className="section-gray25-bg background-gradient-4 bg-[#fcfcfd]">
      <div className="relative max-w-[1280px] mx-auto px-6 border-b border-[#eaecf0]">
        <div className="max-sm:py-16 py-24 flex flex-col items-center">
          <div className="mb-3 py-1 px-4 border border-[#ffffff4d] rounded-full bg-[#d1e0ff]">
            <p className="font-bold text-xs text-[#0040c1]">Analizează</p>
          </div>
          <h1 className="max-w-[768px] my-0 font-bold text-4xl text-center tracking-[-1px] text-[#000]">
            Află care acțiuni generează cu adevărat venituri, fără presupuneri.
          </h1>
          <p className="max-w-[790px] py-5 text-center text-base sm:text-lg leading-[28px] text-[#475467]">
            Filtrează acțiunile de marketing plătit și organic după cantitatea
            de trafic al companiilor țintă pe care o generează, astfel încât să
            poți reduce costurile cu încredere și să te concentrezi pe
            câștigători.
          </p>
          <Button
            bgColor="bg-[#101828]"
            textColor="text-white"
            borderRadius="rounded-[100px]"
            className="max-[420px]:text-xs text-sm border border-[#ffffff1a]"
            showChevron={true}
            chevronColor="text-white"
            buttonText="Începe perioada de probă gratuită de 14 zile"
          />

          <div className="mt-16 grid max-sm:gap-8 gap-[77px] grid-cols-1 lg:grid-cols-[1fr_1.75fr_1fr] place-items-center">
            <div className="col-span-1 row-span-1">
              {revenueSectionData.slice(0, 2).map((item, index) => (
                <div key={index} className="mb-12 flex flex-col items-start">
                  <div>
                    <div className="flex justify-center lg:justify-start">
                      <Image
                        src={item.image}
                        alt="Image"
                        width={72}
                        height={72}
                      />
                    </div>
                    <h3 className="fontsemibold text-lg sm:text-xl text-center lg:text-left leading-[32px] text-[#344054]">
                      {item.heading}
                    </h3>
                    <p className="max-lg:max-w-[800px] mt-2.5 text-center lg:text-left text-sm sm:text-base text-[#667085]">
                      {item.subHeading}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="col-span-1 row-span-1">
              <iframe
                className="sm:w-[496px] lg:w-[396px] xl:w-[496px] sm:h-[396px] lg:h-[296px] xl:h-[396px]"
                src="https://lottie.host/embed/a9f08fc6-b79b-483d-bdd0-77788d3f7c6f/g8ykUWkEFc.lottie"
              ></iframe>
              <Script
                src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs"
                strategy="lazyOnload"
                type="module"
              />
            </div>

            <div className="col-span-1 row-span-1">
              {revenueSectionData.slice(2).map((item, index) => (
                <div key={index} className="mb-12 flex flex-col items-start">
                  <div>
                    <div className="flex justify-center lg:justify-start">
                      <Image
                        src={item.image}
                        alt="Image"
                        width={72}
                        height={72}
                      />
                    </div>
                    <h3 className="font-semibold text-lg sm:text-xl text-center lg:text-left leading-[32px] text-[#344054]">
                      {item.heading}
                    </h3>
                    <p className="max-lg:max-w-[800px] mt-2.5 text-center text-sm sm:text-base lg:text-left text-[#667085]">
                      {item.subHeading}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
