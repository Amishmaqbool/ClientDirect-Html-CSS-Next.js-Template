import HeroSection from "@/components/home/HeroSection";
import LogoGrid from "@/components/home/LogosGrid";
import TextBlock from "@/components/common/TextBlock";
import gradientPurple from "@/assets/images/img-second-leadgen.webp";
import IntegrationSection from "@/components/home/IntegrationsSection";
import { landingReviewsCards } from "@/constants/features";
import RatingCards from "@/components/common/RatingCards";

export default function Home() {
  const mainHeading = "Give sales the edge to find and close more deals";
  const subHeading =
    "Get notified when target companies visit your website and see what they are interested in. Help teams start and hold more relevant conversations throughout the sales cycle.";
  const ctaText = "Start Free Trial";
  const secondaryCtaText = "Explore Snitcher for Sales";
  const FirstTestimonial = {
    quote:
      "I consistently recommend Snitcher – in our testing they not only gathered insights on a higher number of leads than its competitors, but also had more detailed information about those leads.",
    author: "David G.",
    role: "Head of Sales",
  };

  const SecondTestimonial = {
    quote:
      "Snitcher allowed us to know which businesses were visiting our website. It's an ideal tool for Account Based Marketing and helps to gather new leads.",
    author: "Marc-Antoine C.",
    role: "Marketing and Sales Coordinator",
  };

  const ThirdTestimonial = {
    quote:
      "People are browsing our marketplace and Snitcher is the mechanism by which we're able to understand who's looking for our products and why.",
    author: "Tyler E.",
    role: "Founder and CEO",
  };

  return (
    <>
      <div className="">
        <HeroSection
          headingText="Know who’s on your website, drive more revenue."
          headingLineBreaks={[2, 5]}
          paragraphText="Snitcher empowers B2B teams to understand, engage, and convert anonymous website visitors into potential leads using cutting-edge identification technology, real-time visitor tracking, and data-driven audience insights."
          maxWidth="960px"
          bgColor="#070b18"
        />

        <LogoGrid />

        <TextBlock
          mainHeading={mainHeading}
          subHeading={subHeading}
          ctaText={ctaText}
          secondaryCtaText={secondaryCtaText}
          testimonial={FirstTestimonial}
          lottieUrl="https://lottie.host/67c29b1c-f8f5-4262-9529-d7d089de0a37/ZooYErX6nm.json"
          isReversed={false}
        />

        <TextBlock
          mainHeading={
            "Reduce wasted ad-spend and convert more target visitors"
          }
          subHeading={
            "Re-target or exclude visitors to continually improve your campaign performance. Personalize journeys and serve relevant content to your audience at the right time"
          }
          ctaText={"Start Free Trial"}
          secondaryCtaText={"Explore Snitcher for Marketing"}
          testimonial={SecondTestimonial}
          lottieUrl="https://lottie.host/e7e6bfef-6fd9-4b22-8825-dc67d973bfb9/1diB1j1H81.json"
          isReversed={true}
        />
        <TextBlock
          mainHeading={"Understand what your target audience actually wants"}
          subHeading={
            "Get much deeper insights on what’s attracting, engaging and converting your ideal visitors. Stop investing in ads and content with a poor ROI and start optimizing for revenue."
          }
          ctaText={"Start Free Trial"}
          secondaryCtaText={"Explore Snitcher for Marketing"}
          testimonial={ThirdTestimonial}
          lottieUrl="https://lottie.host/ade35443-289d-416d-98a7-12f616efb5bd/GxNxOf0TXi.json"
          isReversed={false}
        />
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
        <IntegrationSection />

        <div className="c-review-cards">
          <div className="absolute inset-x-0 top-0 bottom-auto h-32 z-[9]"></div>
          <div className="review-gradient is--bot"></div>
          <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {landingReviewsCards.map((review, index) => (
              <div key={index} className="animate-scroll">
                <RatingCards
                  rating={review.rating}
                  reviewBy={review.reviewBy}
                  content={review.content}
                  reviewer={review.reviewer}
                  hasCardClass={false}
                  hasBorder={true}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
