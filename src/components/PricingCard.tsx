"use client";
import React, { useState } from "react";
import Image from "next/image";
import BLueTick from "@/assets/svgs/blue-tick.svg";
import Button from "./common/Button";
import PricingFeatureSection from "@/components/PricingFeatueSection";
import {
  companiesData,
  data,
} from "@/constants/pricing/pricing";

export default function PricingCard() {
  const [isMonthly, setIsMonthly] = useState(true);
  const [selectedCompany, setSelectedCompany] = useState(companiesData[0]);

  const handleSelectCompany = (company: React.SetStateAction<{ value: string; monthlyPrice: string; annualPrice: string; }>) => {
    setSelectedCompany(company);
  };

  return (
    <div className="pricing-gradient-1">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="container-pricing grid grid-cols-1 lg:grid-cols-2 gap-8 py-12 px-8 relative top-[-90px] rounded-lg bg-[rgb(242 244 247 / 60%)] z-50">
          <div className="px-0 sm:px-24 sm:pl-8">
            <h3 className="mb-[9px] font-semibold text-xl text-center text-[#000]">
              Prețul la
            </h3>
            <h1 className="font-bold text-[60px] text-center leading-[72px] text-[#000]">
              {isMonthly
                ? `${selectedCompany.monthlyPrice.replace("RON/lună", "")}`
                : `${selectedCompany.annualPrice.replace("RON/lună", "")}`}
              <span className="font-semibold text-xl text-[#98a2b3]">RON/lună</span>
            </h1>
            <p className="mb-8 font-semibold text-base text-center text-[#667085]">
              Pentru până la{" "}
              {selectedCompany.value.includes("-")
                ? selectedCompany.value.split("-")[1]?.trim() ||
                  selectedCompany.value
                : selectedCompany.value.includes("+")
                ? selectedCompany.value.split("+")[1]?.trim() ||
                  selectedCompany.value
                : selectedCompany.value.toLowerCase().includes("până la")
                ? selectedCompany.value
                    .toLowerCase()
                    .split("până la")[1]
                    ?.trim() || selectedCompany.value
                : selectedCompany.value}{" "} 
               identificări unice
            </p>

            {data.map((item, index) => (
              <div key={index} className="mb-4 flex gap-2 items-start">
                <div className="flex-shrink-0">
                  <Image src={BLueTick} alt="tick" width={15} height={15} />
                </div>
                <p className="text-[#000]">{item}</p>
              </div>
            ))}

            <div className="flex justify-center py-10">
              <Button
                bgColor="bg-[#101828]"
                textColor="text-white"
                borderRadius="rounded-[100px]"
                className="max-[420px]:text-xs text-sm border border-[#ffffff1a]"
                showChevron={true}
                chevronColor="text-white"
                buttonText="Încercați ClientiDirect gratuit"
              />
            </div>
          </div>

          <div className="lg:pl-8">
            <div>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-full grid grid-cols-2 bg-gray-200 rounded-lg p-1">
                  <button
                    onClick={() => setIsMonthly(true)}
                    className={`${
                      isMonthly
                        ? "bg-white text-black"
                        : "text-gray-600 cursor-pointer"
                    } py-1.5 px-4 rounded-lg font-medium text-xs transition duration-300`}
                  >
                    Lunar
                  </button>

                  <button
                    onClick={() => setIsMonthly(false)}
                    className={`${
                      !isMonthly
                        ? "flex gap-2 justify-center items-center rounded-md bg-white text-black"
                        : "flex gap-2 justify-center items-center text-gray-600 cursor-pointer"
                    } py-1.5 px-4 rounded-full font-semibold transition duration-300 cursor-pointer`}
                  >
                    <p className="font-medium text-xs">Anual</p>
                    <div className="max-[550px]:hidden flex items-center bg-green-100 text-green-600 text-xs font-semibold px-3 py-1 rounded-md">
                      <span className="mr-1">🔥</span>
                      3,5 luni GRATUIT!
                    </div>
                  </button>
                </div>
              </div>

              <div className="lg:pl-4 pt-5 flex justify-between">
                <p className="text-[#000]">Identificări unice ale companiei</p>
                <p className="text-[#000]">Pret pe luna</p>
              </div>

              <div className="pt-4 -ml-8">
                <div className="pl-8 lg:border-l border-white">
                  {companiesData.map((item, index) => (
                    <div className="border-b border-white" key={index}>
                      <div
                        className={`px-4 py-3 flex justify-between cursor-pointer max-[500px]:rounded-lg rounded-full transition duration-200 ${
                          selectedCompany === item
                            ? "bg-[#3257ff] text-white"
                            : ""
                        }`}
                        onClick={() => handleSelectCompany(item)}
                      >
                        <p className="font-medium text-sm">{item.value}</p>
                        <div className="flex max-[500px]:flex-col-reverse flex-row gap-2 text-right">
                          {!isMonthly && (
                            <del
                              className={`text-sm ${
                                selectedCompany === item
                                  ? "text-white"
                                  : "text-xs italic text-gray-500"
                              }`}
                            >
                              {item.monthlyPrice}
                            </del>
                          )}
                          <p
                            className={`text-sm ${
                              selectedCompany === item
                                ? "font-semibold text-white"
                                : isMonthly
                                ? "font-medium"
                                : "font-semibold text-[#16a54a]"
                            } ml-2`}
                          >
                            {isMonthly ? item.monthlyPrice : item.annualPrice}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <PricingFeatureSection />
    </div>
  );
}
