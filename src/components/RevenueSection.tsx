"use client"
import React from "react";
import Image from "next/image";
import Button from "./common/Button";
import { revenueSectionData } from "@/constants/features";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function RevenueSection() {
  return (
    <div className="section-gray25-bg background-gradient-4 bg-[#fcfcfd]">
      <div className="relative max-w-[1280px] mx-auto px-6 border-b border-[#eaecf0]">
        <div className="max-sm:py-16 py-24 flex flex-col items-center">
          <div className="mb-3 py-1 px-4 border border-[#ffffff4d] rounded-full bg-[#d1e0ff]">
            <p className="font-bold text-xs text-[#0040c1]">Analyse</p>
          </div>
          <h1 className="max-w-[768px] my-0 font-bold text-4xl text-center tracking-[-1px] text-[#000]">
            Get to the bottom of which actions actually drive revenue, without
            the guess work.
          </h1>
          <p className="max-w-[790px] py-5 text-center text-base sm:text-lg leading-[28px] text-[#475467]">
            Filter paid and organic marketing actions by the amount of target
            company traffic they drive, so you can cut costs with confidence and
            double down on winners.
          </p>
          <Button
            bgColor="bg-[#101828]"
            textColor="text-white"
            borderRadius="rounded-[100px]"
            showChevron={true}
            chevronColor="text-white"
            buttonText="Start 14-Day Free Trial"
          />

          <div className="mt-16 grid max-sm:gap-8 gap-[77px] grid-cols-1 md:grid-cols-[1fr_1.75fr_1fr] place-items-center">
            <div className="col-span-1 row-span-1">
              {revenueSectionData.slice(0, 2).map((item, index) => (
                <div key={index} className="mb-12 flex flex-col items-start">
                  <div>
                    <div className="flex justify-center md:justify-start">
                      <Image
                        src={item.image}
                        alt="Image"
                        width={72}
                        height={72}
                      />
                    </div>
                    <h3 className="fontsemibold text-lg sm:text-xl text-center md:text-left leading-[32px] text-[#344054]">
                      {item.heading}
                    </h3>
                    <p className="mt-2.5 text-center md:text-left text-sm sm:text-base text-[#667085]">
                      {item.subHeading}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div
              className="col-span-1 row-span-1"
            >
              <DotLottieReact
                src="https://lottie.host/bc851360-09dc-4058-9c28-dcc27d2ced47/lgVIJlJXXt.json"
                autoplay
                loop
                width={496}
                height={396}
              />
            </div>

            <div className="col-span-1 row-span-1">
              {revenueSectionData.slice(2).map((item, index) => (
                <div key={index} className="mb-12 flex flex-col items-start">
                  <div>
                    <div className="flex justify-center md:justify-start">
                      <Image
                        src={item.image}
                        alt="Image"
                        width={72}
                        height={72}
                      />
                    </div>
                    <h3 className="font-semibold text-lg sm:text-xl text-center md:text-left leading-[32px] text-[#344054]">
                      {item.heading}
                    </h3>
                    <p className="mt-2.5 text-center text-sm sm:text-base md:text-left text-[#667085]">
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
