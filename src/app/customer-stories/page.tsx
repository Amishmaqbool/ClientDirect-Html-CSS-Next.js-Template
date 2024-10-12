// CaseStudyList.tsx
import Image from "next/image";
import React from "react";
import BackgroundImage from "../../../public/images/background-customer-stories-image.png";
import HeroSection from "@/components/home/HeroSection";
import Arrow from "@/assets/svgs/arrow.svg";

const caseStudies = [
  {
    title:
      "How Usersnap gained critical visibility into marketing campaigns with Snitcher",
    description:
      "Usersnap optimises their marketing and sales campaigns with Snitcher, gaining critical insights into visitor segmentation and industry trends, leading to more targeted and effective strategies that resonate with their enterprise audience.",
    logo: "/images/customer-stories-image.png",
    link: "/",
  },
  {
    title: "How Waylay increased conversion rates by 4,7%",
    description:
      "Waylay harnesses Snitcher's accurate data and integration capabilities to power their lead-generation and sales processes, achieving a 4.7% increase in conversion rates while streamlining their engagement with targets personas.",
    logo: "/images/customer-stories-image2.png",
    link: "/",
  },
  {
    title: "How Fleetdm grew revenue with 70 new accounts from Snitcher",
    description:
      "Fleetdm efficiently grows their pipeline with 70 new accounts by implementing Snitcher, enhancing their lead qualification and sales engagement process, and ensuring targeted outreach to interested prospects, leading to a substantial increase in revenue.",
    logo: "/images/customer-stories-image3.png",
    link: "/",
  },
  {
    title:
      "How TalentDesk won a high value client within 30 days of using Snitcher",
    description:
      "TalentDesk wins a high-value client within 30 days of starting with Snitcher, fueling their marketing strategies and sales processes to effectively target and convert leads previously overlooked in their digital campaigns and sales processes.",
    logo: "/images/customer-stories-image4.png",
    link: "/",
  },
  {
    title: "Adacta uncovers the dark funnel by identifying 500% more companies",
    description:
      "Adacta dramatically increased visibility into their website traffic, seamlessly integrating Snitcher into their teck stack to deeply understand their buyer's journey and power targeted ABM campaigns.",
    logo: "/images/customer-stories-image5.png",
    link: "/",
  },
  {
    title:
      "How Influential Software closed $10k MRR in 6 weeks and improved win rates by 5%",
    description:
      "In just six weeks, Influential Software dramatically improves their sales efficiency and lead identification, resulting in higher win rates and strong revenue growth, thanks to the strategic implementation of Snitcher.",
    logo: "/images/customer-stories-image6.png",
    link: "/",
  },
];

const CaseStudyList = () => {
  return (
    <div>
      <HeroSection
        headingText="Customer Stories"
        headingLineBreaks={[2, 5]}
        paragraphText="Discover how businesses like yours use Snitcher to identify, engage, and acquire new customers."
        maxWidth="960px"
        bgColor="#070b18"
      />
      <div
        className="relative max-lg:px-4"
        style={{
          backgroundImage: `url(${BackgroundImage.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}>
        <div className="case-study-list grid gap-[64px] lg:px-24 mb-[32px] z-[1] max-w-[1280px] -mt-8 pt-16 mx-auto p-[20px] max-base:px-1 max-xs:px-6 md:grid-cols-2">
          {caseStudies.map((caseStudy, index) => (
            <div
              key={index}
              className="case-study-item max-w-full md:max-w-[512px] max-lg:mb-[32px]">
              <Image
                src={caseStudy.logo}
                alt={caseStudy.title}
                className="case-study-logo"
                width={100}
                height={100}
              />
              <h3 className="mt-[24px] mb-[16px] text-[24px] leading-[28px] tracking-[-.48px] font-bold min-h-[55px]">
                {caseStudy.title}
              </h3>
              <p className="mb-[24px] text-[#667085] text-[16px] leading-[28px]">
                {caseStudy.description}
              </p>
              <a
                href={caseStudy.link}
                className="learn-more-button flex w-fit gap-2 items-end bg-[#101828] border border-[#00000026] text-[14px] leading-[20px] py-[10px] h-fit px-[16px] text-white rounded-full">
                <p className="self-end">Learn More</p>
                <Image src={Arrow} alt="Arrow" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudyList;