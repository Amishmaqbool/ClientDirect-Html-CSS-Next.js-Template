import React from "react";
import Image from "next/image";

type CompanyData = {
  imagesrc: string;
  altText: string;
};

type Feature = {
  title: string;
  description: string;
  icon: string;
};

type IPCompanyProps = {
  companyData: CompanyData;
  features: Feature[];
};

const IPCompany: React.FC<IPCompanyProps> = ({ companyData, features }) => {
  const Heading = "Turn any IP into a company object";
  const Paragraph =
    "We track multiple market signals and data sources to provide the highest identification rates at the best quality in the market. Old school static IP to company databases are a thing of the past.";
  return (
    <div className="company-section flex max-lg:flex-col-reverse items-center gap-14 w-full max-w-[1280px] px-4 mx-auto">
      <div className="company-info lg:max-w-[50%]">
        <Image
          src={companyData.imagesrc}
          alt={companyData.altText}
          width={700}
          height={700}
        />
      </div>
      <div className="features lg:max-w-[50%]">
        <h2 className="text-4xl tracking-tight font-bold mb-4">{Heading}</h2>
        <p className="text-lg max-w-xl text-gray-500">{Paragraph}</p>
        {features.map((feature, index) => (
          <div key={index} className="feature-item flex gap-2 my-5">
            <div className="icon">
              <Image
                src={feature.icon}
                alt={feature.title}
                width={50}
                height={50}
              />
            </div>
            <div className="feature-content max-w-md">
              <h4 className="text-xl tracking-tight">{feature.title}</h4>
              <p className="text-gray-500 text-md tracking-tight">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
        <div className="cta flex gap-4 mt-10">
          <button className="cta-button px-4 py-1 h-fit bg-black text-white rounded-full">
            Start Free Trial
          </button>
          <button className="cta-button px-4 py-1 h-fit border border-gray-300 text-black rounded-full">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default IPCompany;
