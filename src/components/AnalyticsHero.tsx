import React from "react";
import Image from "next/image";
import RectangleImage from "../assets/images/Rectangle.jpg"

export default function AnalyticsHero() {
  return (
    <div className="max-w-[1248px] mx-auto">
      <div className="grid grid-cols-2"> 
        <div>
          <Image src={RectangleImage} alt="cover-image" />
        </div>
        <div>
          <h2 className="font-bold text-[34px]">$48 out of every $50 you spend on ads goes to waste.</h2>
          <p className="pt-4 font-norml text-lg text-[#475467]">
            Google Analytics just wasn’t made for B2B and only tracks individual
            visitors. Making it impossible to clearly understand the impact of
            your marketing initiatives. Leading to wasted budget and
            statistically insignificant data to make quality decisions on.
          </p>
          <p className="pt-[30px] font-norml text-lg text-[#475467]">
            You sell to businesses and not visitors, get the full picture and
            turn Google Analytics into an account based analytics solution.
          </p>
        </div>
      </div>
    </div>
  );
}
