import React from "react";
import Image from "next/image";
import HeroSection from "@/components/home/HeroSection";
import IPCompany from '@/components/features/CompanySection';
import MarketingSection from '@/components/features/MarketingSection';
import FaqSection from '@/components/features/FaqSection';

export default function LeadGen() {
  interface DataItem {
    imageSrc: string;
    altText: string;
    description: string;
  }
  const faqList = [
    {
      question: 'Is there a free trial available?',
      answer: 'Yes, you can try us for free for 14 days. Our free trial includes access to the real-time identification API.',
    },
    {
      question: 'How does the API pricing work?',
      answer: '‘Unique company identifications’ are unique visits to your site by a single company. For example, if a company visited your site 25 times in one month, it’s still considered just one unique company identification; you’re not paying for multiple visits from the same company. Because Snitcher filters out ISPs and irrelevant traffic, you’re only paying for unique, quality identifications and always have the power to remove any irrelevant traffic so it’s not counted against your Snitcher credits.',
    },
    {
      question: 'Are there any rate limits?',
      answer: 'Rate limits default to 100 requests per minute. Additionally, you are limited based on your monthly plan. See our pricing page for an overview. Feel free to reach out if your use-case requires higher limits!',
    },
    {
      question: 'Do you have examples of integrations that can be built with this API?',
      answer: 'You can find a list of examples integrations here.',
    },
  ];
  
  const contentList = [
    {
      image: 'https://cdn.prod.website-files.com/64084dfdb78deb68d06600ed/6409b845c602fed68fe6a157_Illustration%20Card.svg',
      heading: 'Website personalization',
      description: 'Create unforgettable website journeys to improve on site engagement and conversion rates by getting the right content in front of your target audience in real-time.',
    },
    {
      image: 'https://cdn.prod.website-files.com/64084dfdb78deb68d06600ed/6424394ec69da7e9cfed9328_Illustration%20Card.png',
      heading: 'Platform enrichment',
      description: 'Customize what you send to CRM’s and sales enablement tools for sales and rev ops. Create new or enrich existing accounts with anonymous visits and company firmographics.',
    },
    {
        image: 'https://cdn.prod.website-files.com/64084dfdb78deb68d06600ed/64253faf2fee17641bf3a901_automation-p-500.png',
        heading: 'Marketing automation',
        description: 'Tie multiple visitors and devices to companies so you can enrol them in workflows while getting a complete picture of the journey accounts take to become customers.',
      },
      {
        image: 'https://cdn.prod.website-files.com/64084dfdb78deb68d06600ed/64253fdb0acd1707e2869897_chatbots-p-500.png',
        heading: 'Chatbots',
        description: 'Power chatbots and support tools with enriched company names so you can focus on high value accounts, assign the right team member and personalise responses.',
      },
      {
        image: 'https://cdn.prod.website-files.com/64084dfdb78deb68d06600ed/6425400853ab14e32d876c6b_marketplaces-p-500.png',
        heading: 'Marketplaces and publishers',
        description: 'Build a a revenue channel by offering customers intent data from your websites. Or increase the volume and quality of your existing data to grow the channel further.',
      },
      {
        image: 'https://cdn.prod.website-files.com/64084dfdb78deb68d06600ed/642540260946358de5caac12_saas-p-500.png',
        heading: 'SaaS platform data enrichment',
        description: 'Do you want to fuel your product with the best identification data? Build new products and offer your clients our data all from within your own platform.',
      },
  ];
  const companyData = {
    imagesrc:'https://cdn.prod.website-files.com/64084dfdb78deb68d06600ed/641043b84ae27925c33b1397_Group%202301.png',
    altText:'https://cdn.prod.website-files.com/64084dfdb78deb68d06600ed/641043b84ae27925c33b1397_Group%202301.png',
  };
 
  const features = [
    { title: 'Unrivaled match rates', description: 'Leverage Snitcher’s proprietary database to translate IPs into companies, even when the visitor is working remotely.', icon: 'https://cdn.prod.website-files.com/64084dfdb78deb68d06600ed/6409b37a5d6654d7fe2082d8_Featured%20icon.svg' },
    { title: 'Actionable data', description: 'Get relevant firmographic data such as Industry, Location, Size, and more.', icon: 'https://cdn.prod.website-files.com/64084dfdb78deb68d06600ed/6409b37a5d6654d7fe2082d8_Featured%20icon.svg' },
    { title: 'Privacy compliant', description: 'Fully compliant with GDPR and other privacy laws.', icon: 'https://cdn.prod.website-files.com/64084dfdb78deb68d06600ed/6409b38a64f2b378baf69567_Featured%20icon.svg' },
  ];
  const data: DataItem[] = [
    {
      imageSrc:
        "https://cdn.prod.website-files.com/64084dfdb78deb68d06600ed/6409b25de77edc98274ef21c_icons.svg",
      altText: "ImageOne",
      description: "Enrich anonymous traffic with detailed company data",
    },
    {
      imageSrc:
        "https://cdn.prod.website-files.com/64084dfdb78deb68d06600ed/6408ad0a90ee1f016fe655db_icons.svg",
      altText: "ImageOne",
      description: "Personalize buyer journeys for specific company verticals",
    },
    {
      imageSrc:
        "https://cdn.prod.website-files.com/64084dfdb78deb68d06600ed/6408a12a6f91b114d2a0a24d_i.svg",
      altText: "ImageOne",
      description: "Pipe account-level data to downstream platforms",
    },
  ];
  return (
    <div>
      <HeroSection
        headingText="World’s most accurate IP to Company API"
        headingLineBreaks={[3, 7]}
        paragraphText="Instantly reveal the company operating behind any IP address. Enriched with accurate firmographic data, all in real-time."
        paragraphLineBreaks={[10]}
        maxWidth="900px"
        bgColor="#070b18"
      />
      <div className="flex max-lg:flex-col max-lg:px-4 max-lg:pb-[60px] max-lg:bg-[#070b18] max-lg:gap-10 max-w-[1280px] mx-auto w-full items-center justify-between -mt-32 mb-20 z-[1000]">
        {data.map((item, index) => (
          <div key={index} className="z-[1000] flex gap-5 items-center">
            <Image
              src={item.imageSrc}
              alt={item.altText}
              width={70}
              height={70}
            />
            <p className="text-white max-w-xs text-[16px] max-lg:leading-[30px] lg:text-xl">{item.description}</p>
          </div>
        ))}
      </div>
      <IPCompany companyData={companyData} features={features} />
      <MarketingSection contentList={contentList} />
      <FaqSection faqList={faqList} />
    </div>
  );
}
