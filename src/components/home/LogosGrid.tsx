import React from 'react';
import Image from 'next/image';
import Zenefits from "../../assets/svgs/zenefits.svg"
import Percona from "../../assets/svgs/percona.svg"
import IBM from "../../assets/svgs/ibm.svg"
import Recurly from "../../assets/svgs/recurly.svg"
import Typeform from "../../assets/svgs/typeform.svg"
import Hll from "../../assets/svgs/hll.svg"
import Rollbar from "../../assets/svgs/rollbar.svg"
import Nokia from "../../assets/svgs/nokia.svg"
import Unity from "../../assets/svgs/unity.svg"
import Writer from "../../assets/svgs/writer.svg"
import Gumroad from "../../assets/svgs/gumroad.svg"
import Kixie from "../../assets/svgs/kixie.svg"
import Shopify from "../../assets/svgs/shopify.svg"

const logos = [
    {
        src: Zenefits,
        alt: "Zenefits",
        width: 119
    },
    {
        src: Percona,
        alt: "Percona",
        width: 152
    },
    {
        src: IBM,
        alt: "IBM",
        width: 69
    },
    {
        src: Recurly,
        alt: "Recurly",
        width: 92
    },
    {
        src: Typeform,
        alt: "Typeform",
        width: 124
    },
    {
        src: Hll,
        alt: "HLL",
        width: 75
    },
    {
        src: Rollbar,
        alt: "Rollbar",
        width: 135
    },
    {
        src: Nokia,
        alt: "Nokia",
        width: 119
    },
    {
        src: Unity,
        alt: "Unity",
        width: 110
    },
    {
        src: Writer,
        alt: "Writer",
        width: 86
    },
    {
        src: Gumroad,
        alt: "Gumroad",
        width: 131
    },
    {
        src: Kixie,
        alt: "Kixie",
        width: 89
    },
    {
        src: Shopify,
        alt: "Shopify",
        width: 113
    },
];

const LogoGrid: React.FC = () => {
    const firstRowLogos = logos.slice(0, 6);
    const secondRowLogos = logos.slice(6);

    return (
        <div className="flex flex-col items-center justify-center w-full max-w-full px-4 md:px-0 my-16 overflow-hidden">
            <h3 className="text-[#475467] text-center font-semibold text-base leading-6 mb-8">
                De încredere de mii de echipe de vânzări și marketing B2B din întreaga lume
            </h3>

            <div className="flex justify-center items-center flex-wrap gap-8 md:gap-12 mb-8 max-w-full">
                {firstRowLogos.map((logo, index) => (
                    <div key={index} className="relative" style={{ width: logo.width, height: 'auto' }}>
                        <Image
                            src={logo.src}
                            alt={logo.alt}
                            width={logo.width}
                            height={50}
                            objectFit="contain"
                            loading="lazy"
                        />
                    </div>
                ))}
            </div>

            {/* Second Row of Logos */}
            <div className="flex justify-center items-center flex-wrap gap-8 md:gap-12 max-w-full">
                {secondRowLogos.map((logo, index) => (
                    <div key={index} className="relative" style={{ width: logo.width, height: 'auto' }}>
                        <Image
                            src={logo.src}
                            alt={logo.alt}
                            width={logo.width}
                            height={50}
                            objectFit="contain"
                            loading="lazy"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LogoGrid;