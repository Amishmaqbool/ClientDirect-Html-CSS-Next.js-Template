"use client";
import Image from "next/image";
import MessageIcon from "../../assets/svgs/message-icon.svg";
import React, { useState, useEffect } from "react";

type FAQItem = {
  question: string;
  answer: string | string[];
};

type FAQProps = {
  faqList: FAQItem[];
};

const FAQ: React.FC<FAQProps> = ({ faqList }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleFAQ = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  if (!mounted) return null;

  return (
    <div className="faq-section lg:max-w-[720px] mx-auto mt-16 sm:mt-28 max-lg:mx-4">
      <h2 className="faq-heading text-4xl mb-16 font-black text-center">
        Întrebări frecvente
      </h2>
      {faqList.map((faq, index) => (
        <div
          key={index}
          className="faq-item px-2 sm:px-[24px] lg:px-0 border-b border-[#eaecf0] mb-[24px]"
        >
          <div
            className="faq- flex justify-between cursor-pointer mb-[24px]"
            onClick={() => toggleFAQ(index)}
          >
            <h3 className="text-[18px] font-bold">{faq.question}</h3>
            <span>
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
              {Array.isArray(faq.answer) ? (
                faq.answer.map((ans, ansIndex) => (
                  <p key={ansIndex} className="mt-2 leading-[24px]">
                    {ans}
                  </p>
                ))
              ) : (
                <p className="leading-[24px]">{faq.answer}</p>
              )}
            </div>
          )}
        </div>
      ))}
      <div className="faq-footer text-center">
        <h4 className="text-[#101828] text-[20px] leading-[30px] font-[600]">
          Ai încă întrebări?
        </h4>
        <p className="mt-[8px] mb-[32px] text-[#475467] max-w-[790px] leading-[28px] text-[18px]">
          Nu găsești răspunsul pe care îl cauți? Trimite-ne un mesaj.
        </p>
        <div className="flex justify-center">
          <button className="faq-chat-button px-[20px] text-[14px] py-[12px] bg-black text-white rounded-full h-fit flex gap-2 justify-center items-center">
            <Image src={MessageIcon} alt="Message Icon" />
            <p>Începe un chat</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
