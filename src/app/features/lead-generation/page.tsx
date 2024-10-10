import React from "react";
import HeroSection from "@/components/home/HeroSection";
import ReviewSection from "@/components/features/lead-gen/ReviewsSection";
import ProsSection from "@/components/features/lead-gen/ProsSection";
import DataSection from "@/components/features/lead-gen/DataSection";
import IdentifySection from "@/components/features/lead-gen/IdentifySection";
import SegmentSection from "@/components/features/lead-gen/SegmentSection";
import Image from "next/image";
import gradientImage from '@/assets/images/colours.webp';
import gradientPurple from "@/assets/images/img-second-leadgen.webp";
import jumpLead from "@/assets/images/jump-lead-gen.webp";

export default function LeadGen() {
  return (
    <>
      <HeroSection
        headingText="Capture leads from your website you didn&apos;t know you had."
        headingLineBreaks={[3, 7]}
        paragraphText="Snitcher reveals who&apos;s behind your anonymous traffic to turn your website into your most valuable asset!"
        paragraphLineBreaks={[7]}
        maxWidth="900px"
        bgColor="#070b18"
      />
      
      <div
        className="w-full"
        style={{
          backgroundImage: `url(${gradientImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
        <div className="max-w-[1200px] mx-auto flex flex-col justify-center items-center">
          <div className="flex flex-col gap-16 mb-24 pt-[100px]">
            <div className="flex gap-20">
              <div className="w-1/2">
                <h2 className="text-4xl leading-[44px] font-bold text-black">
                  Snitcher&apos;s data is just better. <br /><span>See it for yourself.</span>
                </h2>
                <p className="text-[#475467] text-lg mt-4">
                  We believe great data is at the heart of growth. So we made it our mission to continually evolve our identification rates and quality to give you the edge to win more customers.
                  <span className="block pt-6">Fill sales pipelines and supercharge your marketing machine today!</span>
                </p>
                <button className="mt-7 flex items-center justify-center gap-2 font-semibold rounded-full py-2 pl-4 pr-3 text-white bg-[#101828] border-[1.5px] border-[#00000026] text-sm">
                  Start 14-Day Free Trial<svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                    <path d="M3.33301 10.6196H16.6663M16.6663 10.6196L11.6663 5.61963M16.6663 10.6196L11.6663 15.6196" stroke="currentColor" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                </button>
              </div>
              <div className="w-1/2">
                <Image alt="snitcher" src={jumpLead} width={560} height={363} />
              </div>
            </div>

            <ReviewSection />
          </div>
        </div>
      </div>

      <div className="max-w-full bg-[#101828]" style={{ backgroundImage: `url(${gradientPurple})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: 'center' }}>
        <IdentifySection />
      </div>

      <div className="px-4 max-w-[1200px] mx-auto flex flex-col justify-center items-center pt-20 pb-8">
        <SegmentSection />
        <ProsSection />
      </div>


      <div className="px-4 max-w-[1200px] mx-auto flex flex-col justify-center items-center pt-32 pb-8">
        <DataSection />
      </div>
    </>
  );
}