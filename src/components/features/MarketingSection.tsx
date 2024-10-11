import React from "react";
import Image from "next/image";
type ContentData = {
  image: string;
  heading: string;
  description: string;
};

type PageProps = {
  contentList: ContentData[];
};

const ContentPage: React.FC<PageProps> = ({ contentList }) => {
  const Heading =
    "Fuel marketing, sales, support and revenue operations, your way.";
  const Paragraph =
    "Deploy Snitcher’s identification layer to add vital context wherever you need it.";
  const Button = "Start 14-Day Free Trial";
  return (
    <div className="relative bg-[#101828]">
      <div className=""></div>
      <p className="bg-[#5c6c77] pt-1 px-2 text-xs flex items-center w-max text-white rounded-full mx-auto mb-5 border border-[#ffffff4d]">
        Use Cases
      </p>
      <h2 className="text-4xl max-w-[570px] tracking-[-1px] mx-auto text-white font-black">
        {Heading}
      </h2>
      <p className="text-[18px] mt-4 text-[#7d89b0] max-w-full mx-auto">
        {Paragraph}
      </p>
      <button className="text-[#fff] bg-[#272f3b] px-4 py-2 rounded-full mt-4 mb-20">
        {Button}
      </button>
      <div className="flex flex-wrap justify-between gap-y-10 lg:px-10 max-w-[1280px] mx-auto items-start">
        {contentList.map((content, index) => (
          <div
            key={index}
            className="content-item w-full lg:max-w-[384px] bg-[#101828] p-4 rounded-2xl text-white flex flex-col items-start"
          >
            <Image
              src={content.image}
              alt={content.heading}
              className="content-image h-full w-full lg:h-[183px]"
              width={400}
              height={400}
            />
            <h3 className="content-heading text-[18px] pl-3 pt-2 tracking-tight">
              {content.heading}
            </h3>
            <p className="content-description text-[14px] pl-3 tracking-tight mt-2 text-[#98a2b3] text-left lg:max-w-[336px]">
              {content.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentPage;
