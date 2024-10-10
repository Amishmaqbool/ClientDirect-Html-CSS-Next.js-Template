import React from "react";
import AnalyticsHero from "@/components/AnalyticsHero";
import TextBlock from "@/components/common/TextBlock";
import { analyticsReviewsCards } from "@/constants/features";
import RatingCards from "@/components/common/RatingCards";
import Cards from "@/components/common/Cards";

export default function googleAnalytics() {
  return (
    <div className="">
      <AnalyticsHero />

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
          lottieUrl="https://lottie.host/ade35443-289d-416d-98a7-12f616efb5bd/GxNxOf0TXi.json"
          isReversed={true}
        />

        <div className="max-w-[1280px] mx-auto px-6 flex justify-between gap-8 mt-8">
          {analyticsReviewsCards.map((review: any, index: any) => (
            <div key={index}>
              <RatingCards
                rating={review.rating}
                reviewBy={review.reviewBy}
                content={review.content}
                reviewer={review.reviewer}
              />
            </div>
          ))}
        </div>
      </div>

      <Cards />
    </div>
  );
}
