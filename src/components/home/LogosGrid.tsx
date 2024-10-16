import React from 'react';
import Image from 'next/image';
<<<<<<< HEAD

const logos = [
    {
        src: "https://cdn.prod.website-files.com/64084dfdb78deb68d06600ed/64086395eddd7ac132745c2a_zenefits.svg",
=======
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
>>>>>>> c986dc8 (Auth updates)
        alt: "Zenefits",
        width: 119
    },
    {
<<<<<<< HEAD
        src: "https://cdn.prod.website-files.com/64084dfdb78deb68d06600ed/64086396b78deb8d4567536d_percona.svg",
=======
        src: Percona,
>>>>>>> c986dc8 (Auth updates)
        alt: "Percona",
        width: 152
    },
    {
<<<<<<< HEAD
        src: "https://cdn.prod.website-files.com/64084dfdb78deb68d06600ed/64086396532983b6aa642537_ibm.svg",
=======
        src: IBM,
>>>>>>> c986dc8 (Auth updates)
        alt: "IBM",
        width: 69
    },
    {
<<<<<<< HEAD
        src: "https://cdn.prod.website-files.com/64084dfdb78deb68d06600ed/6408639623b04ac8e9bf2a98_recurly.svg",
=======
        src: Recurly,
>>>>>>> c986dc8 (Auth updates)
        alt: "Recurly",
        width: 92
    },
    {
<<<<<<< HEAD
        src: "https://cdn.prod.website-files.com/64084dfdb78deb68d06600ed/64086396259d86f649d69226_typeform.svg",
=======
        src: Typeform,
>>>>>>> c986dc8 (Auth updates)
        alt: "Typeform",
        width: 124
    },
    {
<<<<<<< HEAD
        src: "https://cdn.prod.website-files.com/64084dfdb78deb68d06600ed/640863957186c61f1f00f564_hll.svg",
=======
        src: Hll,
>>>>>>> c986dc8 (Auth updates)
        alt: "HLL",
        width: 75
    },
    {
<<<<<<< HEAD
        src: "https://cdn.prod.website-files.com/64084dfdb78deb68d06600ed/640863969b6cbb477245ba5b_rollbar.svg",
=======
        src: Rollbar,
>>>>>>> c986dc8 (Auth updates)
        alt: "Rollbar",
        width: 135
    },
    {
<<<<<<< HEAD
        src: "https://cdn.prod.website-files.com/64084dfdb78deb68d06600ed/640863957186c630ff00f563_nokia.svg",
=======
        src: Nokia,
>>>>>>> c986dc8 (Auth updates)
        alt: "Nokia",
        width: 119
    },
    {
<<<<<<< HEAD
        src: "https://cdn.prod.website-files.com/64084dfdb78deb68d06600ed/640863951004c571222f863d_unity.svg",
=======
        src: Unity,
>>>>>>> c986dc8 (Auth updates)
        alt: "Unity",
        width: 110
    },
    {
<<<<<<< HEAD
        src: "https://cdn.prod.website-files.com/64084dfdb78deb68d06600ed/640863954d8dae093bcaa01d_writer.svg",
=======
        src: Writer,
>>>>>>> c986dc8 (Auth updates)
        alt: "Writer",
        width: 86
    },
    {
<<<<<<< HEAD
        src: "https://cdn.prod.website-files.com/64084dfdb78deb68d06600ed/64086395334037c26b4d9c1c_gumroad.svg",
=======
        src: Gumroad,
>>>>>>> c986dc8 (Auth updates)
        alt: "Gumroad",
        width: 131
    },
    {
<<<<<<< HEAD
        src: "https://cdn.prod.website-files.com/64084dfdb78deb68d06600ed/640863954280e0dbfa5ca5ce_kixie.svg",
=======
        src: Kixie,
>>>>>>> c986dc8 (Auth updates)
        alt: "Kixie",
        width: 89
    },
    {
<<<<<<< HEAD
        src: "https://cdn.prod.website-files.com/64084dfdb78deb68d06600ed/64086395dacfd353b26ccb77_shopify.svg",
=======
        src: Shopify,
>>>>>>> c986dc8 (Auth updates)
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

<<<<<<< HEAD
            {/* First Row of Logos */}
=======
>>>>>>> c986dc8 (Auth updates)
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