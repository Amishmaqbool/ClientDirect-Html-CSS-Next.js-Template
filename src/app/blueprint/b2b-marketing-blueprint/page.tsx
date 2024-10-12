import Image from "next/image";
import React from "react";
import BackgroundOne from "../../../../public/images/background-blueprint.png";
import BackgroundTwo from "../../../../public/images/background-blueprint2.png";
import { sectionData } from "@/constants/b2b/sectionData";

const MarketingBlueprint = () => {
  return (
    <div className="relative bg-[#070b18] max-lg:-mb-40 lg:-mb-60 max-lg:pb-36 lg:pb-72">
      <Image src={BackgroundOne} alt="BackgroundOne" className="absolute object-fill block inset-0 h-[500px] w-[700px] mr-32 ml-auto z-[0]"/>
      <Image src={BackgroundTwo} alt="BackgroundTwo" className="absolute top-0 left-[43%] translate-x-[-50%] z-[0] object-fill"/>
      <div className="py-8 pb-0 lg:pt-24 lg:w-[780px] mx-auto z-[10000] bg-[#070b18]">
        <h1 className="text-[#fff] text-center max-lg:mx-8 relative z-0 lg:w-[680px] my-[10px] mx-auto text-[24px] lg:text-[2.5rem] leading-[1.4em] font-bold">
          B2B Marketing Blueprint
        </h1>
        <p className="text-[#9ca0ab] text-center max-lg:mx-12 relative z-0 lg:max-w-[620px] mx-auto text-[12px] lg:text-[16px] mb-[28px] leading-[20px] lg:leading-[28px]">
        A carefully curated collection of tactical modules to drive your business growth. Each collection encapsulates key marketing strategies, concepts, and best practices, distilled from industry-leading books into actionable steps. Explore the Collections and Modules within this blueprint to develop a powerful and effective B2B marketing strategy.
        </p>
        <div className="relative z-0 max-lg:px-20 max-md:px-2">
        {sectionData.map((section, index) => (
          <div
            key={index}
            className={`bg-[#101828] border z-[1000] max-lg:mx-4 max-xs:mx-2 border-gray-800 ${section.sectionBorderColor} text-white rounded-[12px] mb-[32px]`}
          >
            <h2
              className={`text-[#ffffffb3] ${section.sectionColor} tracking-wider rounded-t-[12px] text-center text-[14px] py-[8px] px-[12px] font-bold uppercase`}
            >
              {section.sectionTitle}
            </h2>
            <div className="p-[1rem] px-[1rem]">
              {section.data.map((item) => (
                <div
                  key={item.id}
                  className={`flex max-xs:flex-col gap-3 max-xs:gap-2 text-white items-center align-middle justify-between p-4 max-xs:px-2 rounded-2xl border-b border-gray-800 last:border-b-0 ${item.status === 'comingSoon' ? 'opacity-50' : ''}  cursor-pointer hover:bg-slate-800`}>
                  <div className="flex max-xs:flex-col max-xs:text-center max-xs:gap-2 max-lg:gap-3 gap-4 items-center">
                    <Image src={item.icon} alt={item.icon} width={68} height={68} className="flex items-center pb-4"/>
                    <div className="px-2">
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p className="text-[#667085] text-[12px] leading-[20px] tracking-[-0.01rem]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div>
                    {item.status === "active" ? (
                      <span className="text-[#667085] text-[20px]">→</span>
                    ) : (
                      <span className="text-[#667085] tracking-[1px] text-[12px] italic text-nowrap">
                        COMING SOON
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default MarketingBlueprint;
