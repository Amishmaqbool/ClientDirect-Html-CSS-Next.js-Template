import React from "react";
import Image from "next/image";
import HighPerformSmallSummer from "@/assets/svgs/high-perform-small-summer-orange.svg";
import HighEMEA from "@/assets/svgs/high-emea.svg";
import HighUK from "@/assets/svgs/high-performer-uk.svg";
import HighAsia from "@/assets/svgs/high-asia.svg";
import SmallHighEurope from "@/assets/svgs/small-high-europe.svg";
import MomentumLeader from "@/assets/svgs/momentum-leader-orange.svg";
import HighPerformSummer from "@/assets/svgs/high-performer-summer.svg";

const badges = [
  { src: HighPerformSmallSummer, alt: "High Performer Summer" },
  { src: HighEMEA, alt: "High Performer EMEA" },
  { src: HighUK, alt: "High Performer UK" },
  { src: HighAsia, alt: "High Performer Asia" },
  { src: SmallHighEurope, alt: "Small Business High Performer Europe" },
  { src: MomentumLeader, alt: "Momentum Leader" },
];

const BadgeCarousel = () => {
  return (
    <div className="bg-white w-full">
      <div className="max-w-[1280px] mx-auto sm:px-6 relative flex justify-center items-center pt-24 pb-8">
        <div className="fade-left z-50"></div>
        <div className="fade-right z-50"></div>

        <div className="absolute z-50">
          <Image
            src={HighPerformSummer}
            alt="ClientiDirect Logo"
            width={128}
            height={166}
            className="max-md:w-[98px] max-md:h-[122px]"
          />
        </div>

        <div className="w-full lg:max-w-[900px] overflow-hidden relative z-20">
          <div className="marquee-container">
            <div className="marquee-scroll grayscale hover:grayscale-0">
              {badges
                .concat(badges)
                .concat(badges)
                .map((badge, index) => (
                  <div
                    key={index}
                    className={`inline-block flex-shrink-0 px-2 ${
                      index === 0 ? "ml-4" : ""
                    }`}
                  >
                    <Image
                      src={badge.src}
                      alt={badge.alt}
                      width={90}
                      height={116}
                      objectFit="contain"
                      loading="lazy"
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BadgeCarousel;
