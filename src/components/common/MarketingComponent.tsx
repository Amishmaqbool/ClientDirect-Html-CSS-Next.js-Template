"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import RightArrow from "../../assets/svgs/right-arrow.svg"
import { StaticImageData } from 'next/image';

interface ContentList {
  image: StaticImageData;
  title: string;
  content: string;
}

interface CardsProps {
  tag: string;
  heading: string;
  description: string;
  ctaButton: string;
  contentList: ContentList[]; 
}

const MarketingSection: React.FC<CardsProps> = (
  {
  tag,
  heading,
  description,
  ctaButton,
  contentList,
}) => {

  return (
    <div className="relative bg-[#132137]">
      <div className="relative max-w-[1280px] mx-auto px-6 z-10">
        <div className="flex flex-col items-center py-24">
          <div className="mb-3 px-2 py-[2px] border rounded-2xl border-[#ffffff4d] bg-[#ffffff4d]">
            <p className="font-semibold text-xs text-white">{tag}</p>
          </div>
          <h1 className="font-bold text-4xl tracking-[-1px] text-center text-white">
            {heading}
          </h1>

          <p className="my-5 max-w-[790px] text-base sm:text-lg leading-[28px] text-center text-[#7d89b0]">
            {description}
          </p>

          <Link
            href="/auth/register"
            className="py-2 px-3.5 flex items-center border rounded-full border-[#0000] backdrop-blur whitespace-nowrap bg-[#ffffff1a] cursor-pointer"
          >
            <button className="flex gap-3 items-center mr-2 font-semibold text-sm text-white cursor-pointer">
              <p>{ctaButton}</p>
              <Image src={RightArrow} alt="Right Arrow"/>
            </button>
          </Link>

          <div className="mt-[72px] grid grid-cols-1 md:grid-cols-3 gap-8">
            {contentList.map((content, index) => (
              <div
                key={index}
                className="pt-4 w-full lg:max-w-[384px] bg-[#101828] backdrop-blur-xl rounded-2xl text-white z-50"
              >
                <Image
                  src={content.image}
                  alt={`Image ${index + 1}`}
                  className="w-full max-md:h-[184px] lg:h-[183px]"
                  width={400}
                  height={400}
                />
                <div className="p-3 lg:p-6">
                  <h3 className="text-base sm:text-[18px] pl-3 tracking-tight">
                    {content.title}
                  </h3>
                  <p className="text-[14px] pl-3 tracking-tight mt-2 text-[#98a2b3] text-left lg:max-w-[336px]">
                    {content.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="-z-10 inset-0 overflow-hidden">
        <div className="hero-noise-png"></div>
        <Image
          src="https://cdn.prod.website-files.com/64084dfdb78deb68d06600ed/640b347a17d12b9b0b6ceb9c_home4.svg"
          loading="lazy"
          alt=""
          width={760}
          height={792}
          className="absolute top-0 bottom-auto left-0 right-auto"
        />
        <Image
          src="https://cdn.prod.website-files.com/64084dfdb78deb68d06600ed/640b34ff65cb72310d52dd91_home5.svg"
          loading="lazy"
          alt=""
          width={675}
          height={472}
          className="absolute top-auto bottom-0 right-0 left-0"
        />
        <Image
          src="https://cdn.prod.website-files.com/64084dfdb78deb68d06600ed/640b39e63c1356960cb2cbc2_home6.svg"
          loading="lazy"
          alt=""
          width={654}
          height={393}
          className="absolute top-0 bottom-auto lg:left-[25%]"
        />
        <Image
          src="https://cdn.prod.website-files.com/64084dfdb78deb68d06600ed/640b39e6e5569e48875a414c_home7.svg"
          loading="lazy"
          alt=""
          width={701}
          height={826}
          className="absolute inset-y-0 right-0 left-auto"
        />
      </div>
    </div>
  );
};

export default MarketingSection;
