"use client";
import React from "react";
import Image from "next/image";
import Button from "../common/Button";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface CardData {
  title: string;
  description: string;
  linkText: string;
  linkUrl: string;
  gradient: "purple" | "blue" | "aqua";
}

const cardsData: CardData[] = [
  {
    title: "For Sales",
    description:
      "Discover, qualify and prioritize high intent target leads with real-time notifications and beat the competition to the chase.",
    linkText: "Fill your pipeline",
    linkUrl: "/",
    gradient: "purple",
  },
  {
    title: "For Marketing",
    description:
      "Focus on accounts, not individuals. See what engages your target audience, personalise website journeys and improve re-targeting.",
    linkText: "Drive more conversions",
    linkUrl: "/",
    gradient: "blue",
  },
  {
    title: "For Agencies",
    description:
      "Get insights earlier, add revenue streams and drive more qualified leads for your clients with our white-label solution.",
    linkText: "Increase client ROI",
    linkUrl: "/",
    gradient: "aqua",
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
}

export default function HeroSection({
  headingText = "Know who’s on your website, drive more revenue.",
  headingLineBreaks = [3, 5],
  paragraphText = "Snitcher empowers B2B teams to understand, engage, and convert anonymous website visitors into potential leads using cutting-edge identification technology, real-time visitor tracking, and data-driven audience insights.",
  paragraphLineBreaks = [],
  maxWidth = "900px",
  bgColor = "#070b18",
  featureContents = [],
}: HeroSectionProps) {
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
      </React.Fragment>
    ));
  };

  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const featurePaths = [
    "/features/google-analytics",
    "/features/lead-generation",
    "/features/real-time-identification-api",
  ];

  const isFeaturePage = featurePaths.includes(pathname);

  const gradientClasses: Record<"purple" | "blue" | "aqua", string> = {
    purple: "from-[#7f56d9] to-[#9e77ed]",
    blue: "from-[#41a7f0] to-[#1b61d1]",
    aqua: "from-[#54edf0] to-[#30a9d9]",
  };

  return (
    <div className="relative overflow-hidden">
      <div className="mb-8 relative">
        <div
          style={{ backgroundColor: bgColor }}
          className="w-full pt-44 pb-[58px] relative z-10"
        >
          <Image
            src="https://cdn.prod.website-files.com/64084dfdb78deb68d06600ed/6411ddd013532dd1d71d5a98_Polygon%202.svg"
            alt="Hero Gradient 2"
            width={500}
            height={500}
            priority
            className="absolute top-8 left-1/2 z-[20]"
          />

          <Image
            src="https://cdn.prod.website-files.com/64084dfdb78deb68d06600ed/6411ddc3f37f421575d00130_Polygon%201.svg"
            alt="Hero Gradient 1"
            width={650}
            height={500}
            className="absolute top-0 right-[35%] z-[20]"
            priority
          />

          <div
            style={{ maxWidth }}
            className="mx-auto 2xl:pt-24 max-md:px-4 max-lg:px-10"
          >
            <h1 className="max-md:max-w-[459px] mx-auto text-[30px] md:text-[48px] lg:text-[72px] text-center text-white font-bold leading-[40px] md:leading-[60px] lg:leading-[92px]">
              {formatTextWithLineBreaks(headingText, headingLineBreaks)}
            </h1>
            <p className="max-md:max-w-[541px] mx-auto text-center pt-2 leading-6 text-[#d0d5ddb3]">
              {formatTextWithLineBreaks(paragraphText, paragraphLineBreaks)}
            </p>
            <div className="flex flex-col items-center gap-2 pt-8">
              <Button
                bgColor="bg-customBlue"
                textColor="text-white"
                borderRadius="rounded-[100px]"
                showChevron={true}
                chevronColor="text-white"
                buttonText="Try Snitcher for Free"
              />
              <span className="text-[#667085]">No credit card required</span>
            </div>
          </div>

          <div className="max-md:flex justify-center pt-[104px] max-w-[1280px] mx-auto px-6">
            {isFeaturePage && featureContents.length > 0 && (
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
        </div>

        {isHomePage && (
          <div className="flex justify-center items-center -mt-24 space-x-6 container mx-auto">
            {cardsData.map((card, index) => (
              <div
                key={index}
                className="relative p-6 rounded-lg text-white shadow-lg w-1/3 bg-[#101828] max-w-[384px] z-[9999] overflow-hidden"
              >
                <div
                  className={`absolute top-0 left-0 w-full h-[8px] bg-gradient-to-r ${
                    gradientClasses[card.gradient]
                  }`}
                ></div>

                <div
                  className="absolute inset-0 opacity-100 mix-blend-normal bg-cover bg-right-top h-full"
                  style={{
                    backgroundImage:
                      "url(https://cdn.prod.website-files.com/64084dfdb78deb68d06600ed/64185a1271eb87048332b503_fic-violet.png)",
                    backgroundPosition: "100% 0%",
                  }}
                ></div>

                <div className="relative z-10">
                  <h2
                    className="text-lg font-semibold"
                    style={{
                      color: gradientClasses[card.gradient].split(" ")[0],
                    }}
                  >
                    {card.title}
                  </h2>
                  <p className="mt-2 text-[#E4E7EC] text-sm">
                    {card.description}
                  </p>
                  <Link className="text-white text-sm" href={card.linkUrl}>
                    {card.linkText}
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
