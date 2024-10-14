import React from "react";
import Marquee from "react-fast-marquee";
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
    <div className="relative flex justify-center items-center pt-24 pb-8 bg-white">
      <div className="absolute z-10">
        <Image src={HighPerformSummer} alt="Snitcher Logo" width={128} height={166} className="max-md:w-[98px] max-md:h-[122px]" />
      </div>

      <div className="w-full grayscale hover:grayscale-0 transition duration-300">
        <Marquee gradient={true} speed={40} loop={0}>
          <div className="flex gap-4 items-center">
            {badges.concat(badges).map((badge, index) => (
              <div
                key={index}
                className={`flex-shrink-0 ${index === 0 ? 'ml-4' : ''}`}>
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
        </Marquee>
      </div>
    </div>
  );
};

export default BadgeCarousel;