"use client";
import React from "react";
import HeroSection from "@/components/home/HeroSection";
import ProsSection from "@/components/features/lead-gen/ProsSection";
import DataSection from "@/components/features/lead-gen/DataSection";
import IdentifySection from "@/components/features/lead-gen/IdentifySection";
import SegmentSection from "@/components/features/lead-gen/SegmentSection";
import gradientImage from "@/assets/images/colours.webp";
import gradientPurple from "@/assets/images/img-second-leadgen.webp";
import { leadHeroData, reviews } from "@/constants/features/lead-generation";
import RatingCards from "@/components/common/RatingCards";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Button from "@/components/common/Button";
// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "ClientiDirect | Identificarea vizitatorilor pentru agenții | Probă gratuită",
//   description:
//     "Oferiți clienților dvs. o soluție puternică de identificare a vizitatorilor cu etichetă albă cu ClientiDirect. Creșteți veniturile, generați lead-uri și susțineți serviciile existente.",  metadataBase: new URL("https://clientidirect.com/"),
// };

export default function LeadGen() {
  return (
    <>
      <HeroSection
        headingText="Capturează leaduri de pe site-ul tău pe care nu știai că le ai."
        headingLineBreaks={[3, 8]}
        paragraphText="ClientiDirect dezvăluie cine se află în spatele traficului anonim pentru a transforma site-ul tău în cel mai valoros atu!"
        paragraphLineBreaks={[7]}
        maxWidth="900px"
        bgColor="#070b18"
        featureContents={leadHeroData}
      />

      <div
        className="w-full"
        style={{
          backgroundImage: `url(${gradientImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bacground-gradient-2">
          <div className="max-w-[1280px] mx-auto px-6 flex flex-col justify-center items-center">
            <div className="flex flex-col gap-16 max-md:gap-6 mb-24 pt-16 max-md:pt-14">
              <div className="flex gap-20 max-lg:flex-col-reverse max-md:gap-12">
                <div className="w-1/2 max-lg:w-full pb-8 pt-9">
                  <h2 className="text-4xl leading-[44px] font-bold text-black">
                    Datele ClientiDirect sunt pur și simplu mai bune.
                    <br />
                    <span>Vezi cu ochii tăi.</span>
                  </h2>
                  <p className="text-[#475467] text-lg mt-4">
                    Credem că datele de calitate sunt esențiale pentru creștere.
                    De aceea, ne-am propus să evoluăm continuu ratele noastre de
                    identificare și calitatea acestora pentru a-ți oferi
                    avantajul de a câștiga mai mulți clienți.
                    <span className="block pt-6">
                      Umple canalele de vânzări și superchargează-ți mașina de
                      marketing chiar astăzi!
                    </span>
                  </p>

                  <Button
                    bgColor="bg-[#101828]"
                    textColor="text-white"
                    borderRadius="rounded-[100px]"
                    className="mt-[18px] max-[420px]:text-xs text-sm border border-[#ffffff1a]"
                    showChevron={true}
                    chevronColor="text-white"
                    buttonText="Începe perioada de probă gratuită de 14 zile"
                  />
                </div>
                <div className="w-1/2 max-lg:w-full max-lg:flex max-lg:justify-center">
                  <DotLottieReact
                    src="https://lottie.host/b871977f-5b98-40d7-8a81-84feba62224a/yrwVnOrz2C.json"
                    autoplay
                    loop
                    width={560}
                    height={363}
                  />
                </div>
              </div>

              <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 sm:mt-8">
                {reviews.map((review, index) => (
                  <div key={index}>
                    <RatingCards
                      rating={review.rating}
                      reviewBy={review.reviewBy}
                      content={review.content}
                      reviewer={review.reviewer}
                      hasCardClass={true}
                      hasBorder={false}
                      textSize={{
                        title: "text-base",
                        content: "text-xs",
                        reviewer: "text-sm",
                      }}
                      marginClass="mt-3.5 md:-mt-4"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="max-w-full bg-[#101828]"
        style={{
          backgroundImage: `url(${gradientPurple})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <IdentifySection />
      </div>

      <div className="max-w-[1200px] mx-auto flex flex-col justify-center items-center pt-20 pb-8">
        <SegmentSection />
        <ProsSection />
      </div>

      <div className="px-4 max-w-[1200px] mx-auto flex flex-col justify-center items-center pt-20 lg:pt-32 pb-8">
        <DataSection />
      </div>
    </>
  );
}
