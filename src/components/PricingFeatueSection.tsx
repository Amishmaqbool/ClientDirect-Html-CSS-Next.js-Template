import React from "react";
import { featureData } from "@/constants/pricing/pricing";
import BLueTick from "@/assets/svgs/blue-tick.svg";
import Image from "next/image";
import RightArrow from "@/assets/svgs/right-arrow.svg";
import CardImage from "@/assets/svgs/card-image.svg";

export default function pricingfeatuesection() {
  return (
    <div className="max-w-[1280px] mx-auto px-6">
      <div className="">
        <h2 className="font-semibold text-2xl text-center text-[#2970ff]">
          Toate caracteristicile incluse
        </h2>
        <p className="pt-2 max-w-[650px] mx-auto text-center text-[#475467]">
          Indiferent dacă abia începi la prețul nostru de intrare sau până la
          stabilirea prețurilor personalizate – fiecare nivel de preț are acces
          la toate caracteristicile noastre!
        </p>
      </div>

      <div className="max-[490px]:px-0 px-10 pt-10 md:pt-20 grid gap-x-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {featureData.map((item, index) => (
          <div key={index} className="flex sm:gap-2 items-center border-b">
            <div className="flex-shrink-0">
              <Image src={BLueTick} alt="tick" width={15} height={15} />
            </div>
            <p className="max-sm:ml-2 py-3.5 text-[#475467]">{item}</p>
          </div>
        ))}
      </div>

      <div className="mt-20 flex flex-col lg:flex-row gap-0 lg:gap-9 xl:gap-12 items-center">
        <div className="padding-adjustment-pricing w-full lg:w-[35%] py-14 lg:py-[72px] px-6 md:px-8 xl:px-12 rounded-2xl bg-[#101828]">
          <h2 className="font-semibold text-2xl leading-7 text-[#a48afb]">
            Integrarea datelor
          </h2>
          <h4 className="mb-3 font-semibold text-lg text-[#d0d5dd]">
            Pentru furnizorii de software
          </h4>
          <p className="mb-3 text-sm text-[#667085]">
            Generați informații calitative mai profunde care depășesc clicurile
            și vizitatori. Alimentați campanii noi, dovediți rentabilitatea
            investiției și împuterniciți-vă clienții
          </p>
          <div className="flex gap-2 items-center cursor-pointer">
            <p className="font-medium text-base text-[#d0d5dd] hover:text-white">
              Explorați API-ul de identificare
            </p>
            <Image src={RightArrow} alt="Right Arrow" />
          </div>
        </div>

        <div className="max-lg:mt-6 w-full lg:w-[65%] pricing-bg relative overflow-hidden bg-[#101828] rounded-[16px] pt-14 pb-0 max-md:px-6 md:pl-8 flex">
          <div className="w-full md:w-[40%] pb-14">
            <h2 className="font-semibold text-2xl leading-7 text-[#54edf0]">
              Etichetă albă
            </h2>
            <h4 className="mb-3 font-semibold text-lg text-[#d0d5dd]">
              Pentru Agenții
            </h4>
            <p className="mb-3 text-sm text-[#667085]">
              Obțineți statistici mai devreme, adăugați fluxuri de venit și
              generați mai calificați conduce clienții dumneavoastră cu soluția
              noastră cu etichetă albă.s
            </p>
            <div className="flex gap-2 items-center cursor-pointer">
              <p className="font-medium text-base text-[#d0d5dd] hover:text-white">
                Explorați oferta cu etichetă albă
              </p>
              <Image src={RightArrow} alt="Right Arrow" />
            </div>
          </div>

          <div className="hidden md:block absolute bottom-[-15px] right-0 w-[70%] xl:w-auto h-[90%]">
            <Image
              src={CardImage}
              alt="CTA Image"
              width={500}
              height={450}
              className="object-cover h-full w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
