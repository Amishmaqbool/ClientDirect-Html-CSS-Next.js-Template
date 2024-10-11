import React from "react";
import Image from "next/image";
import Button from "./common/Button";
import { OptimizeCardData } from "@/constants/features";
import OptimizeCard from "../assets/svgs/optimize-card.svg";

export default function OptimizeSection() {
  return (
    <div className=" bg-[#fcfcfd]">
      <div className="relative max-w-[1280px] mx-auto px-6">
        <div className="py-24 flex flex-col items-center">
          <div className="mb-3 py-1 px-4 border border-[#ffffff4d] rounded-full bg-[#d1e0ff]">
            <p className="font-bold text-xs text-[#0040c1]">Optimize</p>
          </div>
          <h1 className="max-w-[768px] my-0 font-bold text-2xl sm:text-4xl text-center tracking-[-1px] text-[#000]">
            Run more tests and hit your target sooner.
          </h1>
          <p className="max-w-[790px] py-5 text-center text-base sm:text-lg leading-[28px] text-[#475467]">
            Track the changes you make without needing to wait for conversions,
            so you can test more with less risk and make sure you hit you number
            within budget.
          </p>
          <Button
            bgColor="bg-[#101828]"
            textColor="text-white"
            borderRadius="rounded-[100px]"
            showChevron={true}
            chevronColor="text-white"
            buttonText="Start 14-Day Free Trial"
          />

          <div className="mt-16 grid gap-[77px] grid-cols-1 md:grid-cols-2">
            <div className="col-span-1 row-span-1">
              {OptimizeCardData.map((item: any, index: any) => (
                <div
                  key={index}
                  className={`pb-9 flex ${
                    index === 2 ? "border-b border-[#EAECF0]" : ""
                  }`}
                >
                  <div className="flex gap-[18px] items-start">
                    <div className="w-[72px] h-[72px] aspect-square">
                      <Image
                        src={item.icon}
                        alt="Image"
                        width={62}
                        height={62}
                      />
                    </div>
                    <div>
                      <h3 className="fontsemibold text-base sm:text-xl leading-[32px] text-[#344054]">
                        {item.heading}
                      </h3>
                      <p className="mt-2.5 text-left text-sm sm:text-base text-[#667085]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              <div className="pt-9 flex gap-4 items-start">
                <Image
                  src="https://cdn.prod.website-files.com/64084dfdb78deb68d06600ed/6409b04ac602fefb63e60c56_Avatar.svg"
                  alt="Avatar"
                  width={48}
                  height={48}
                />
                <div className="testimonial text-left max-w-lg w-full lg:w-full mb-8">
                  <blockquote className="text-gray-700 italic text-sm">
                    &quot;Snitcher with our Google Analytics account gives our
                    web team more information about our audience and how
                    specific types of users interact with our site.&quot;
                  </blockquote>
                  <cite className="text-xs text-gray-500 not-italic">
                    <span className="text-black">Becca R</span> - Director Of
                    Software Development
                  </cite>
                </div>
              </div>
            </div>

            <div
              className="col-span-1 row-span-1"
              data-w-id="df3fe0d1-f472-a227-fd45-149cc234acbf"
              data-is-ix2-target="1"
              data-animation-type="lottie"
              data-src="https://cdn.prod.website-files.com/64084dfdb78deb68d06600ed/6424237f3a427b22dd8e4144_Sec_10.json"
              data-loop="0"
              data-direction="1"
              data-autoplay="0"
              data-renderer="svg"
              data-default-duration="4.3333333333333333"
              data-duration="0"
            >
              <Image src={OptimizeCard} alt="Optimize Card" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
