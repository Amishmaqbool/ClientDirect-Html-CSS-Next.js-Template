"use client";

import React from "react";
import Image from "next/image";
import Tick from "@/assets/svgs/tick.svg";
import Coin from "@/assets/svgs/line-chart.svg";
import Script from "next/script";
import { useRouter } from "next/navigation";
interface SolutionSectionProps {
  title: string;
  description: string;
  paragraphs?: string[];
  listItems?: string[];
  buttonPrimaryText: string;
  buttonSecondaryText: string;
  titleLineBreakIndices?: number[];
  descriptionLineBreakIndices?: number[];
  paragraphLineBreakIndices?: { [index: number]: number[] };
  lottieUrl?: string;
  flexDirection?: "row" | "row-reverse";
  gradientColors?: string[];
  route: string;
}
export default function SolutionSection({
  title = "Never miss target company visits, again",
  description = "ClientiDirect reveals the companies behind your anonymous traffic, without depending on conversions or form submissions.",
  paragraphs = [],
  listItems = [],
  buttonPrimaryText = "Start Free Trial",
  buttonSecondaryText = "Learn More",
  titleLineBreakIndices = [],
  descriptionLineBreakIndices = [],
  paragraphLineBreakIndices = {},
  lottieUrl = "",
  flexDirection = "row",
  route,
}: SolutionSectionProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push("/auth/register");
  };

  const handleClicktoSecondary = () => {
    router.push(route);
  };

  const formatTextWithLineBreaks = (
    text: string,
    lineBreakIndices: number[]
  ) => {
    const words = text.split(" ");
    return words.map((word, index) => (
      <React.Fragment key={index}>
        {word} {lineBreakIndices.includes(index + 1) && <br />}
      </React.Fragment>
    ));
  };

  return (
    <div className="relative text-black max-2xl:px-4 mt-0 sm:mt-20 md:mt-10 lg:mt-20 max-lg:px-0">
      <div
        className={`max-w-[1280px] mx-auto flex flex-col ${
          flexDirection === "row-reverse"
            ? "lg:flex-row-reverse"
            : "lg:flex-row"
        } md:gap-[64px] items-center`}
      >
        <div className="lg:w-1/2 px-4">
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
            {formatTextWithLineBreaks(title, titleLineBreakIndices)}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600">
            {formatTextWithLineBreaks(description, descriptionLineBreakIndices)}
          </p>

          {paragraphs.length > 0 &&
            paragraphs.map((para, index) => (
              <p
                key={index}
                className="mt-4 text-base sm:text-lg text-gray-600"
              >
                {formatTextWithLineBreaks(
                  para,
                  paragraphLineBreakIndices[index] || []
                )}
              </p>
            ))}

          {listItems.length > 0 && (
            <ul className="mt-4 space-y-2 text-base sm:text-lg text-gray-600 list-disc pl-1">
              {listItems.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Image
                    src={Tick}
                    alt="Tick Icon"
                    className="pt-1"
                    width={20}
                    height={20}
                  />
                  {item}
                </li>
              ))}
            </ul>
          )}

          <div className="mt-8 flex flex-col lg:flex-row lg:gap-4">
            <button
              onClick={handleClick}
              className="bg-black text-white px-4 rounded-full max-sm:w-full max-md:w-7/12 max-lg:w-10/12 max-lg:justify-center font-medium flex text-sm max-sm:text-xs sm:text-base gap-[1px] items-center py-2"
            >
              {buttonPrimaryText}
              <span className="ml-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                >
                  <path
                    d="M3.33301 10.6196H16.6663M16.6663 10.6196L11.6663 5.61963M16.6663 10.6196L11.6663 15.6196"
                    stroke="currentColor"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </span>
            </button>

            <button
              className="max-lg:mt-4 bg-white border border-gray-300 text-black px-4 flex gap-[2px] text-sm sm:text-base items-center py-2 rounded-full font-medium max-sm:w-full max-md:w-7/12 max-lg:w-10/12 max-lg:justify-center max-lg:gap-2"
              onClick={handleClicktoSecondary}
            >
              <Image src={Coin} width={20} height={20} alt="coin" />
              {buttonSecondaryText}
            </button>
          </div>
        </div>

        <div className="md:w-1/2 mt-10 md:mt-0 relative">
          <div className="relative z-10 flex justify-center items-center">
            {lottieUrl && (
              <div className="max-lg:flex max-lg:justify-center">
                <iframe className="max-[380px]:w-auto w-[370px] sm:w-[451px] h-[240px] sm:h-[323px]" src={lottieUrl}></iframe>
                <Script
                  src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs"
                  strategy="lazyOnload"
                  type="module"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
