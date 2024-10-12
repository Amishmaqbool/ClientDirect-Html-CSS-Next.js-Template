import React from "react";
import Image from "next/image";
import ReviewIcon from "@/assets/images/review-icon.webp";
import FullStars from "@/assets/images/five-stars.webp";
import HalfStars from "@/assets/images/four-five-stars.webp";

interface RatingCardProps {
  rating: number;
  reviewBy: string;
  content: string;
  reviewer: string;
  hasCardClass?: boolean;
  hasBorder?: boolean;
  textSize?: {
    title?: string;
    content?: string;
    reviewer?: string; 
  };
  marginClass?: string;
}

const RatingCards: React.FC<RatingCardProps> = ({
  rating,
  reviewBy,
  content,
  reviewer,
  hasCardClass = true,
  hasBorder = false,
  textSize = { title: "text-base", content: "text-xs", reviewer: "text-sm" }, 
  marginClass = "mt-3.5 md:-mt-4",
}) => {
  const renderStars = (rating: number) => {
    if (rating === 5) {
      return <Image src={FullStars} alt="Five Stars" width={110} height={22} />;
    } else if (rating === 4.5) {
      return (
        <Image
          src={HalfStars}
          alt="Four and a Half Stars"
          width={110}
          height={22}
        />
      );
    }
    return null;
  };

  return (
    <div
      className={`md:flex justify-between gap-6 md:mt-8 max-md:w-full md:h-full ${
        hasBorder ? "border rounded-[10px] border-[#eaecf0]" : ""
      }`}
    >
      <div
        className={`flex flex-col justify-between py-6 px-[17.5px] rounded-[10px] bg-white ${
          hasCardClass ? "review-lead--card" : ""
        }`}
      >
        <div>
          <div className="flex items-center mb-3.5">{renderStars(rating)}</div>

          <h3 className={`${textSize?.title} font-bold mb-2.5 text-black`}>
            {reviewBy}
          </h3>

          <p className={`text-[#475467] font-normal ${textSize?.content}`}>
            {content}
          </p>
        </div>

        <div className={`${marginClass} flex items-center gap-3`}>
          <Image src={ReviewIcon} alt="Reviewer Icon" width={24} height={24} />
          <div className="bg-[#475467] w-[15px] h-[2px]"></div>

          <p className={`ml-2 text-black font-semibold ${textSize?.reviewer}`}>
            {reviewer}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RatingCards;
