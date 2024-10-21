"use client";
import React from "react";
import Image from "next/image";
import Button from "./common/Button";
import { OptimizeCardData } from "@/constants/features/google-analytics";
import Script from "next/script";
import WomenAvatar from "../assets/svgs/women-avatar.svg";

export default function OptimizeSection() {
  return (
    <div className="">
      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="pt-24 max-md:pb-0 pb-[94px] flex flex-col items-center">
          <div className="mb-3 py-1 px-4 border border-[#ffffff4d] rounded-full bg-[#d1e0ff]">
            <p className="font-bold text-xs text-[#0040c1]">Optimizează</p>
          </div>
          <h1 className="max-w-[768px] my-0 font-bold text-4xl text-center tracking-[-1px] text-[#000]">
            Rulează mai multe teste și atinge-ți obiectivul mai repede.
          </h1>
          <p className="max-w-[790px] py-5 text-center text-base sm:text-lg leading-[28px] text-[#475467]">
            Urmărește schimbările pe care le faci fără să aștepți conversii,
            astfel încât să poți testa mai mult cu riscuri mai mici și să te
            asiguri că îți atingi obiectivul în limitele bugetului.
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

          <div className="mt-16 grid max-md:gap-0 gap-[77px] grid-cols-1 lg:grid-cols-2">
            <div className="col-span-1 row-span-1">
              {OptimizeCardData.map((item, index) => (
                <div
                  key={index}
                  className={`pb-9 flex ${
                    index === 2 ? "border-b border-[#EAECF0]" : ""
                  }`}
                >
                  <div className="flex gap-[18px] items-start">
                    <div className="w-11 sm:w-[72px] h-11 sm:h-[72px] aspect-square">
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

              <div className="pt-9 flex flex-col sm:flex-row gap-4 items-start">
                <Image src={WomenAvatar} alt="Avatar" width={48} height={48} />
                <div className="testimonial text-left max-w-lg w-full lg:w-full mb-8">
                  <blockquote className="text-gray-700 italic text-sm">
                    &quot;ClientiDirect, împreună cu contul nostru de Google
                    Analytics, oferă echipei noastre web mai multe informații
                    despre audiența noastră și despre cum interacționează
                    anumite tipuri de utilizatori cu site-ul nostru.&quot;
                  </blockquote>
                  <cite className="text-xs text-gray-500 not-italic">
                    <span className="text-black">Becca R</span> - Director
                    Dezvoltare Software
                  </cite>
                </div>
              </div>
            </div>

            <div className="col-span-1 row-span-1 lg:pt-32 flex justify-center">
              <iframe
                className="w-[300px] sm:w-[496px] lg:w-[400px] xl:w-[496px] h-[200px] sm:h-[396px] lg:h-[300px] xl:h-[396px]"
                src="https://lottie.host/embed/0d1f9ed0-a78b-4a9d-9904-9f0498c0f011/oZO9OT8IX6.lottie"
              ></iframe>
              <Script
                src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs"
                strategy="lazyOnload"
                type="module"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
