"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import RightArrow from "../../assets/svgs/right-arrow.svg";
import Script from "next/script";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

interface SalesSectionProps {
  mainHeading: string;
  subHeading: string;
  description?: string;
  ctaText: string;
  secondaryCtaText?: string;
  testimonial?: Testimonial;
  lottieUrl: string;
  isReversed?: boolean;
  route: string;
}

const TextBlock: React.FC<SalesSectionProps> = ({
  mainHeading,
  subHeading,
  description,
  ctaText,
  secondaryCtaText,
  testimonial,
  lottieUrl,
  route,
  isReversed = false,
}) => {
  const router = useRouter();

  const handleSecondaryCtaClick = () => {
    // You can add a different navigation or action here if needed
    router.push(route);
  };

  const handlePrimaryCtaClick = () => {
    router.push("/auth/register");
  };

  // const handleSecondaryCtaClick = () => {
  //   // You can add a different navigation or action here if needed
  //   router.push("/solutions/sales");
  // };

  return (
    <section className="lg:py-12">
      <div
        className={`max-w-[1280px] mx-auto p-4 flex ${
          isReversed
            ? "flex-col-reverse max-[400px]:gap-4 gap-16 sm:gap-0 lg:flex-row-reverse"
            : "flex-col-reverse max-[400px]:gap-4 gap-16 sm:gap-0 lg:flex-row"
        } justify-between items-center flex-`}
      >
        <div className="w-full lg:w-[50%]">
          <h1 className="text-2xl sm:text-4xl font-bold mb-4">{mainHeading}</h1>
          <p className="text-base sm:text-lg mb-6 text-gray-600">
            {subHeading}
          </p>
          <p className="text-base sm:text-lg mb-6 text-gray-600">
            {description}
          </p>
          <div className="flex flex-wrap justify-start gap-4 mb-8">
            <button
              className="flex gap-2 items-center bg-black rounded-full text-white px-6 py-3 max-[420px]:text-xs text-sm"
              onClick={handlePrimaryCtaClick}
            >
              <p>{ctaText}</p>
              <Image
                className="max-[365px]:hidden"
                src={RightArrow}
                alt="Right Arrow"
              />
            </button>
            {secondaryCtaText && (
              <button
                className="border border-gray-300 px-6 py-3 rounded-full max-[341px]:text-xs text-sm"
                onClick={handleSecondaryCtaClick}
              >
                {secondaryCtaText}
              </button>
            )}
          </div>
          {testimonial &&
            testimonial.quote &&
            testimonial.author &&
            testimonial.role && (
              <div className="testimonial text-left max-w-lg w-full lg:w-full mb-8">
                <blockquote className="text-gray-700 italic text-sm">
                  &quot;{testimonial.quote}&quot;
                </blockquote>
                <cite className="text-xs text-gray-500 not-italic">
                  <span className="text-black">{testimonial.author}</span> -{" "}
                  {testimonial.role}
                </cite>
              </div>
            )}
        </div>

        <div className="md:pb-10 lg:pb-0 relative flex max-lg:justify-center justify-end items-center w-full lg:w-[50%] max-[430px]:h-48 h-64 sm:h-96">
          <iframe src={lottieUrl} width={594} height={481}></iframe>
          <Script
            src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs"
            strategy="lazyOnload"
            type="module"
          />
        </div>
      </div>
    </section>
  );
};

export default TextBlock;
