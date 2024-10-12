import React from "react";
import TextBlock from "@/components/common/TextBlock";
import {
  analyticsReviewsCards,
  analyticsHeroData,
  MarketingSectionData,
  analyticsFaqList,
} from "@/constants/features";
import RatingCards from "@/components/common/RatingCards";
import HeroSection from "@/components/home/HeroSection";
import MarketingSection from "@/components/common/MarketingComponent";
import FaqSection from "@/components/features/FaqSection";
import RevenueSection from "@/components/RevenueSection";
import OptimizeSection from "../../../components/OptimizeSection";

export default function googleAnalytics() {
  return (
    <div className="">
      <div className="">
        <HeroSection
          headingText="Turn Google Analytics into a platform made for B2B analytics"
          headingLineBreaks={[3, 7]}
          paragraphText="Go beyond the numbers in GA with enriched company information and take back control of your marketing budget"
          paragraphLineBreaks={[10]}
          maxWidth="900px"
          bgColor="#070b18"
          featureContents={analyticsHeroData}
        />
      </div>

      <div className="bacground-gradient-2 py-24">
        <TextBlock
          mainHeading={"$48 out of every $50 you spend on ads goes to waste."}
          subHeading={
            "Google Analytics just wasn’t made for B2B and only tracks individual visitors. Making it impossible to clearly understand the impact of your marketing initiatives. Leading to wasted budget and statistically insignificant data to make quality decisions on."
          }
          description={
            "You sell to businesses and not visitors, get the full picture and turn Google Analytics into an account based analytics solution."
          }
          ctaText={"Start 14-Day Free Trial"}
          lottieUrl="https://cdn.prod.website-files.com/64084dfdb78deb68d06600ed/644678dde63efd7e77fe336e_Sec_17.json"
          isReversed={true}
        />

        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-8 sm:mt-8 ">
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
        tag="Enrich"
        heading="Know your traffic by name."
        description="Numbers without context don’t tell much of a story, Snitcher adds vital context to Google Analytics by enriching the numbers with company identifications. So you can spend less and convert more."
        ctaButton="Start 14-Day Free Trial"
        contentList={MarketingSectionData}
      />
      <RevenueSection />
      <OptimizeSection />

      <FaqSection faqList={analyticsFaqList} />
    </div>
  );
}
