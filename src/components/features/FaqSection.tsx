"use client";
import Image from "next/image";
import React, { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQProps = {
  faqList: FAQItem[];
};

const FAQ: React.FC<FAQProps> = ({ faqList }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Toggle the active FAQ item
  const toggleFAQ = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="faq-section lg:max-w-[720px] mx-auto mt-28 max-lg:mx-4">
      <h2 className="faq-heading text-4xl mb-16 font-black text-center">
        Frequently asked questions
      </h2>
      {faqList.map((faq, index) => (
        <div
          key={index}
          className="faq-item max-lg:px-[24px] border-b border-[#eaecf0] mb-[24px]"
        >
          <div
            className="faq-question flex justify-between cursor-pointer mb-[24px]"
            onClick={() => toggleFAQ(index)}
          >
            <h3 className="text-[18px] font-bold">{faq.question}</h3>
            <span>
              {" "}
              <Image
                src={
                  activeIndex === index
                    ? "https://cdn.prod.website-files.com/64084dfdb78deb68d06600ed/6408b5ebb8c50c493e25989f_minus-circle.svg"
                    : "https://cdn.prod.website-files.com/64084dfdb78deb68d06600ed/6408b60c8ca916b019f2a0e3_plus-circle.svg"
                }
                alt={activeIndex === index ? "Collapse" : "Expand"}
                width={24}
                height={24}
                className="min-w-6 min-h-6"
              />
            </span>
          </div>
          {activeIndex === index && (
            <div className="faq-answer mb-[24px] mt-[-10px] text-[#333] text-[16px] leading-[20px]">
              <p className="max-w-[90%] leading-[24px]">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
      <div className="faq-footer text-center">
        <h4 className="text-[#101828] text-[20px] leading-[30px] font-[600]">Still have questions?</h4>
        <p className="mt-[8px] mb-[32px] text-[#475467] max-w-[790px] leading-[28px] text-[18px]">Can’t find the answer you’re looking for? Shoot us a message.</p>
        <button className="faq-chat-button px-[20px] text-[14px] py-[12px] bg-black text-white rounded-full h-fit">Start a chat</button>
      </div>
    </div>
  );
};

export default FAQ;