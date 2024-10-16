import React from "react";
import TextBlock from "@/components/common/TextBlock";
import {
  analyticsReviewsCards,
  analyticsHeroData,
  MarketingSectionData,
  analyticsFaqList,
} from "@/constants/features/google-analytics";
import RatingCards from "@/components/common/RatingCards";
import HeroSection from "@/components/home/HeroSection";
import MarketingSection from "@/components/common/MarketingComponent";
import FaqSection from "@/components/common/FaqSection";
import RevenueSection from "@/components/RevenueSection";
import OptimizeSection from "../../../components/OptimizeSection";

export default function googleAnalytics() {
  return (
    <div className="">
      <div className="">
        <HeroSection
          headingText="Transformă Google Analytics într-o platformă creată pentru analize B2B"
          headingLineBreaks={[5]}
          paragraphText="Depășește limitele numerelor din GA cu informații îmbogățite despre companii și preia controlul asupra bugetului tău de marketing."
          paragraphLineBreaks={[20]}
          maxWidth="900px"
          bgColor="#070b18"
          featureContents={analyticsHeroData}
        />
      </div>

      <div className="bacground-gradient-2 sm:pt-16 md:pt-24 pb-[90px]">
        <TextBlock
          mainHeading={"$48 din fiecare $50 pe care îi cheltuiești pe reclame sunt irosiți."}
          subHeading={
            "Google Analytics nu a fost creat pentru B2B și urmărește doar vizitatori individuali. Acest lucru face imposibilă înțelegerea clară a impactului inițiativelor tale de marketing, ducând la bugete irosite și date statistic nesemnificative pentru a lua decizii de calitate."
          }
          description={
            "Vinzi către companii, nu către vizitatori. Obține imaginea completă și transformă Google Analytics într-o soluție de analiză bazată pe conturi."
          }
          ctaText={"Începe perioada de probă gratuită de 14 zile"}
          lottieUrl="https://cdn.prod.website-files.com/64084dfdb78deb68d06600ed/644678dde63efd7e77fe336e_Sec_17.json"
          isReversed={true}
        />

        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-8 sm:mt-8">
          {analyticsReviewsCards.map((review, index) => (
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
                  reviewer: "text-sm" 
                }}
                marginClass = "mt-3.5 md:-mt-4"
              />
            </div>
          ))}
        </div>
      </div>

      <MarketingSection
        tag="Îmbogățește"
        heading="Cunoaște-ți traficul pe nume."
        description="Cifrele fără context nu spun prea multe, Snitcher adaugă context vital în Google Analytics prin îmbogățirea cifrelor cu identificări de companii. Astfel, poți cheltui mai puțin și converti mai mult."
        ctaButton="Începe perioada de probă gratuită de 14 zile"
        contentList={MarketingSectionData}
      />
      <RevenueSection />
      <OptimizeSection />

      <FaqSection faqList={analyticsFaqList} />
    </div>
  );
}
