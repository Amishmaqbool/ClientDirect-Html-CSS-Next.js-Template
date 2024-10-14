"use client";

import React from "react";
import Image from "next/image";
import Tick from "@/assets/svgs/tick.svg";
import Coin from "@/assets/svgs/line-chart.svg";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";


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
    lottieUrl?: string;  // Lottie URL for animation
    flexDirection?: "row" | "row-reverse";  // Control flex direction
    gradientColors?: string[];  // Gradient colors for the background
}

export default function SolutionSection({
    title = "Never miss target company visits, again",
    description = "Snitcher reveals the companies behind your anonymous traffic, without depending on conversions or form submissions.",
    paragraphs = [],
    listItems = [],
    buttonPrimaryText = "Start Free Trial",
    buttonSecondaryText = "Learn More",
    titleLineBreakIndices = [],
    descriptionLineBreakIndices = [],
    paragraphLineBreakIndices = {},
    lottieUrl = "",  // Default is no animation
    flexDirection = "row",  // Default is normal flex row
    gradientColors = ["#41a7f0", "#1b61d1"],  // Default gradient colors
}: SolutionSectionProps) {
    const formatTextWithLineBreaks = (text: string, lineBreakIndices: number[]) => {
        const words = text.split(" ");
        return words.map((word, index) => (
            <React.Fragment key={index}>
                {word}{" "}
                {lineBreakIndices.includes(index + 1) && (
                    <br />
                )}
            </React.Fragment>
        ));
    };

    return (
        <div className="relative bg-white text-black py-16">
            <div className={`container mx-auto flex-${flexDirection} flex justify-between items-center`}>
                <div className="md:w-1/2">
                    <h1 className="text-4xl font-bold leading-tight">
                        {formatTextWithLineBreaks(title, titleLineBreakIndices)}
                    </h1>
                    <p className="mt-4 text-lg text-gray-600">
                        {formatTextWithLineBreaks(description, descriptionLineBreakIndices)}
                    </p>

                    {paragraphs.length > 0 &&
                        paragraphs.map((para, index) => (
                            <p key={index} className="mt-4 text-lg text-gray-600">
                                {formatTextWithLineBreaks(
                                    para,
                                    paragraphLineBreakIndices[index] || []
                                )}
                            </p>
                        ))}

                    {listItems.length > 0 && (
                        <ul className="mt-4 space-y-2 text-lg text-gray-600 list-disc pl-5">
                            {listItems.map((item, index) => (
                                <li key={index} className="flex items-start gap-2">
                                    <Image src={Tick} alt="Tick Icon" className="pt-1" width={20} height={20} />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    )}

                    <div className="mt-8 flex gap-4">
                        <button className="bg-black text-white px-4 rounded-full font-medium flex gap-[1px] items-center py-1">
                            {buttonPrimaryText}
                            <span className={`ml-2 white`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                    <path d="M3.33301 10.6196H16.6663M16.6663 10.6196L11.6663 5.61963M16.6663 10.6196L11.6663 15.6196" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                            </span>
                        </button>

                        <button className="bg-white border border-gray-300 text-black px-4 flex gap-[2px] items-center py-1 rounded-full font-medium">
                            <Image src={Coin} width={20} height={20} alt="coin" />
                            {buttonSecondaryText}
                        </button>
                    </div>
                </div>

                <div className="md:w-1/2 mt-10 md:mt-0 relative">
                    <div className="relative z-10 flex justify-center items-center">
                        {lottieUrl && (
                            <DotLottieReact
                                src={lottieUrl}
                                autoplay
                                loop
                                width={855}
                                height={844}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
