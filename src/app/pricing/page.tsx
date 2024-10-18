import React from "react";
import HeroSection from "@/components/home/HeroSection";
import Pricingcard from "@/components/pricing-card";
import FaqSection from "@/components/common/FaqSection"
import { pricingFaqsData } from "@/constants/pricing/pricing";

export default function page() {
  return (
    <div>
      <div>
        <HeroSection
          headingText="Obțineți prețuri flexibile la potrivi nevoilor tale"
          headingLineBreaks={[5]}
          paragraphText="Descoperiți o estimare a prețului dvs. Snitcher, pe baza dimensiunii afacerii dvs. și a traficului web"
          paragraphLineBreaks={[20]}
          maxWidth="900px"
          bgColor="#070b18"
          buttonVisible={false}
        />
      </div>

      <Pricingcard />
      <FaqSection faqList={pricingFaqsData} />
    </div>
  );
}
