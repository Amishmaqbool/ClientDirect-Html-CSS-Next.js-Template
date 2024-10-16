"use client";
import React from "react";
import Image from "next/image";
import Button from "../common/Button";
import { usePathname } from "next/navigation";
import Link from "next/link";
import RightArrow from "../../assets/svgs/right-arrow.svg";

interface CardData {
  title: string;
  description: string;
  linkText: string;
  linkUrl: string;
  gradient: "#926ae5" | "#3189e3" | "#44cfe6";
}

const cardsData: CardData[] = [
  {
    title: "Pentru vânzări",
    description:
      "Descoperiți, calificați și prioritizați clienții potențiali cu intenții ridicate cu notificări în timp real și învingeți concurența până la urmă.",
    linkText: "Umpleți conducta",
    linkUrl: "/",
    gradient: "#926ae5",
  },
  {
    title: "Pentru Marketing",
    description:
      "Concentrați-vă pe conturi, nu pe indivizi. Vedeți ce vă implică publicul țintă, personalizați călătoriile pe site și îmbunătățiți redirecționarea.",
    linkText: "Generați mai multe conversii",
    linkUrl: "/",
    gradient: "#3189e3",
  },
  {
    title: "Pentru Agenții",
    description:
      "Obțineți informații mai devreme, adăugați fluxuri de venituri și generați clienți potențiali mai calificați pentru clienții dvs. cu soluția noastră cu etichetă albă.",
    linkText: "Creșteți rentabilitatea investiției clientului",
    linkUrl: "/",
    gradient: "#44cfe6",
  },
];

interface FeatureContent {
  imageSrc: string;
  description: string;
}
interface HeroSectionProps {
  headingText?: string;
  headingLineBreaks?: number[];
  paragraphText?: string;
  paragraphLineBreaks?: number[];
  maxWidth?: string;
  bgColor?: string;
  featureContents?: FeatureContent[];
  buttonVisible?: boolean;
}

const gradientColorMap: Record<string, "purple" | "blue" | "aqua"> = {
  "#926ae5": "purple",
  "#3189e3": "blue",
  "#44cfe6": "aqua",
};

const gradientClasses: Record<"purple" | "blue" | "aqua", string> = {
  purple: "bg-gradient-to-r from-[#7f56d9] to-[#9e77ed]",
  blue: "bg-gradient-to-r from-[#41a7f0] to-[#1b61d1]",
  aqua: "bg-gradient-to-r from-[#54edf0] to-[#30a9d9]",
};

export default function HeroSection({
  headingText = "Know who’s on your website, drive more revenue.",
<<<<<<< HEAD
  headingLineBreaks = [3, 5],
  paragraphText = "Snitcher empowers B2B teams to understand, engage, and convert anonymous website visitors into potential leads using cutting-edge identification technology, real-time visitor tracking, and data-driven audience insights.",
  paragraphLineBreaks = [],
=======
  paragraphText = "Snitcher empowers B2B teams to understand, engage, and convert anonymous website visitors into potential leads using cutting-edge identification technology, real-time visitor tracking, and data-driven audience insights.",
>>>>>>> c986dc8 (Auth updates)
  maxWidth = "900px",
  bgColor = "#070b18",
  featureContents = [],
  buttonVisible = true,
}: HeroSectionProps) {
<<<<<<< HEAD
  const formatTextWithLineBreaks = (
    text: string,
    lineBreakIndices: number[]
  ) => {
    const words = text.split(" ");
    return words.map((word, index) => (
      <React.Fragment key={index}>
        {word}{" "}
        {lineBreakIndices.includes(Number(index) + 1) && (
          <br className="max-lg:hidden" />
        )}
=======
  const formatTextWithLineBreaks = (text: string) => {
    const lines = text.split("\n");
    return lines.map((line, index) => (
      <React.Fragment key={index}>
        {line}
        {index < lines.length - 1 && <br />} 
>>>>>>> c986dc8 (Auth updates)
      </React.Fragment>
    ));
  };

<<<<<<< HEAD
=======

>>>>>>> c986dc8 (Auth updates)
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <div className="relative overflow-hidden mt-[-88px]">
      <div className="mb-8 relative">
        <div
          style={{ backgroundColor: bgColor }}
          className={`w-full pt-[140px] sm:pt-[200px] 2xl:pt-28  relative z-10 ${isHomePage ? "pb-40" : "pb-[58px]"}`}
        >
          <Image
            src="https://cdn.prod.website-files.com/64084dfdb78deb68d06600ed/6411ddd013532dd1d71d5a98_Polygon%202.svg"
            alt="Hero Gradient 2"
            width={500}
            height={500}
            priority
            className="absolute top-8 sm:left-1/2 z-[20]"
          />

          <Image
            src="https://cdn.prod.website-files.com/64084dfdb78deb68d06600ed/6411ddc3f37f421575d00130_Polygon%201.svg"
            alt="Hero Gradient 1"
            width={650}
            height={500}
            className="absolute top-0 sm:right-[35%] z-[20]"
            priority
          />

          <div
            style={{ maxWidth }}
            className="mx-auto 2xl:pt-24 max-md:px-4 max-lg:px-10"
          >
            <h1 className="max-sm:max-w-[459px] max-w-[550px] lg:max-w-full mx-auto text-[30px] sm:text-[48px] lg:text-[72px] text-center text-white font-semibold leading-[40px] sm:leading-[60px] lg:leading-[92px]">
<<<<<<< HEAD
              {formatTextWithLineBreaks(headingText, headingLineBreaks)}
            </h1>
            <p className="max-w-0px] mx-auto text-center pt-2 leading-[1.7em] text-[#9499a1] text-lg">
              {formatTextWithLineBreaks(paragraphText, paragraphLineBreaks)}
=======
              {formatTextWithLineBreaks(headingText)}
            </h1>
            <p className="max-w-0px] mx-auto text-center pt-2 leading-[1.7em] text-[#9499a1] text-lg">
              {formatTextWithLineBreaks(paragraphText)}
>>>>>>> c986dc8 (Auth updates)
            </p>
            {buttonVisible && (
              <div className="flex flex-col items-center gap-2 pt-8">
                <Button
                  bgColor="bg-customBlue"
                  textColor="text-white"
                  borderRadius="rounded-[100px]"
                  showChevron={isHomePage}
                  chevronColor="text-white"
                  buttonText="Încearcă Snitcher gratuit"
                />
                <span className="text-[#667085]">
                  Nu este necesar un card de credit
                </span>
              </div>
            )}
          </div>

          {featureContents.length >= 1 && (
<<<<<<< HEAD
            <div className="max-md:flex justify-center pt-[104px] max-w-[1280px] mx-auto px-6">
=======
            <div className="max-md:flex justify-center pt-16 md:pt-[104px] max-w-[1280px] mx-auto px-6">
>>>>>>> c986dc8 (Auth updates)
              {featureContents.length > 0 && (
                <div className="z-[1000] grid grid-cols-1 md:grid-cols-3 gap-5">
                  {featureContents.map((content, index) => (
                    <div key={index} className="flex items-center gap-5">
                      <Image
                        src={content.imageSrc}
                        alt={`Image ${index + 1}`}
                        width={70}
                        height={70}
                      />
                      <p className="text-white max-w-xs text-[16px] max-lg:leading-[30px] lg:text-xl">
                        {content.description}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {isHomePage && (
          <div className="max-w-[1280px] mx-auto px-6 flex flex-col sm:flex-row justify-center items-center -mt-24 sm:space-x-4 md:space-x-6">
            {cardsData.map((card, index) => (
              <div
                key={index}
                className="relative max-sm:mt-6 rounded-2xl text-white shadow-lg w-full sm:w-1/3 sm:max-w-[384px] z-10 overflow-hidden bg-[#101828]"
              >
                <div
                  className={`h-2 ${gradientClasses[gradientColorMap[card.gradient]]
                    }`}
                ></div>

                <div className="flex flex-col justify-between">
                  <div className="relative z-10 px-4 md:px-6 py-5">
                    <h2
                      className={`text-lg font-semibold text-transparent bg-clip-text ${gradientClasses[gradientColorMap[card.gradient]]
                        }`}
                    >
                      {card.title}
                    </h2>
                    <p className="mt-2 text-[#667085] font-normal text-[13px]">
                      {card.description}
                    </p>
                  </div>
                  <Link
                    className="px-4 md:px-6 pb-5 flex gap-2 items-center text-[#d0d5dd] hover:text-white text-sm"
                    href={card.linkUrl}
                  >
                    <p>{card.linkText}</p>
                    <div>
                      <Image src={RightArrow} alt="Right Arrow" />
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
