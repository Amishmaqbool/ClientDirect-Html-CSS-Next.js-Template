import React from "react";
import Image from "next/image";

export default function AnalyticsHero() {
  return (
    <div className="max-w-[1248px] mx-auto">
      <div className=""> 
        <div>
          <Image src="" alt="cover-image" />
        </div>
        <div>
          <h2>$48 out of every $50 you spend on ads goes to waste.</h2>
          <p>
            Google Analytics just wasn’t made for B2B and only tracks individual
            visitors. Making it impossible to clearly understand the impact of
            your marketing initiatives. Leading to wasted budget and
            statistically insignificant data to make quality decisions on.
          </p>
          <p>
            You sell to businesses and not visitors, get the full picture and
            turn Google Analytics into an account based analytics solution.
          </p>
        </div>
      </div>
    </div>
  );
}
