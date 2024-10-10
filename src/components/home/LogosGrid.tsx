import React from 'react';
const logos = [
    {
        src: "https://cdn.prod.website-files.com/64084dfdb78deb68d06600ed/64086395eddd7ac132745c2a_zenefits.svg",
        alt: "Zenefits",
        width: 119
    },
    {
        src: "https://cdn.prod.website-files.com/64084dfdb78deb68d06600ed/64086396b78deb8d4567536d_percona.svg",
        alt: "Percona",
        width: 152
    },
    {
        src: "https://cdn.prod.website-files.com/64084dfdb78deb68d06600ed/64086396532983b6aa642537_ibm.svg",
        alt: "IBM",
        width: 69
    },
    {
        src: "https://cdn.prod.website-files.com/64084dfdb78deb68d06600ed/6408639623b04ac8e9bf2a98_recurly.svg",
        alt: "Recurly",
        width: 92
    },
    {
        src: "https://cdn.prod.website-files.com/64084dfdb78deb68d06600ed/64086396259d86f649d69226_typeform.svg",
        alt: "Typeform",
        width: 124
    },
    {
        src: "https://cdn.prod.website-files.com/64084dfdb78deb68d06600ed/640863957186c61f1f00f564_hll.svg",
        alt: "HLL",
        width: 75
    },
    {
        src: "https://cdn.prod.website-files.com/64084dfdb78deb68d06600ed/640863969b6cbb477245ba5b_rollbar.svg",
        alt: "Rollbar",
        width: 135
    },
    {
        src: "https://cdn.prod.website-files.com/64084dfdb78deb68d06600ed/640863957186c630ff00f563_nokia.svg",
        alt: "Nokia",
        width: 119
    },
    {
        src: "https://cdn.prod.website-files.com/64084dfdb78deb68d06600ed/640863951004c571222f863d_unity.svg",
        alt: "Unity",
        width: 110
    },
    {
        src: "https://cdn.prod.website-files.com/64084dfdb78deb68d06600ed/640863954d8dae093bcaa01d_writer.svg",
        alt: "Writer",
        width: 86
    },
    {
        src: "https://cdn.prod.website-files.com/64084dfdb78deb68d06600ed/64086395334037c26b4d9c1c_gumroad.svg",
        alt: "Gumroad",
        width: 131
    },
    {
        src: "https://cdn.prod.website-files.com/64084dfdb78deb68d06600ed/640863954280e0dbfa5ca5ce_kixie.svg",
        alt: "Kixie",
        width: 89
    },
    {
        src: "https://cdn.prod.website-files.com/64084dfdb78deb68d06600ed/64086395dacfd353b26ccb77_shopify.svg",
        alt: "Shopify",
        width: 113
    },
];

const LogoGrid: React.FC = () => {
    const firstRowLogos = logos.slice(0, 6);
    const secondRowLogos = logos.slice(6);

    return (
        <div className="flex flex-col items-center justify-center container mx-auto my-16">
            <h3 className="text-[#475467] text-center font-semibold text-base leading-6 mb-8">
                Trusted by thousands of B2B sales and marketing teams worldwide
            </h3>
            
            <div className="flex justify-center items-center gap-12 mb-8">
                {firstRowLogos.map((logo, index) => (
                    <img
                        key={index}
                        src={logo.src}
                        alt={logo.alt}
                        width={logo.width}
                        loading="lazy"
                        className="h-auto"
                    />
                ))}
            </div>

            <div className="flex justify-center items-center gap-12">
                {secondRowLogos.map((logo, index) => (
                    <img
                        key={index}
                        src={logo.src}
                        alt={logo.alt}
                        width={logo.width}
                        loading="lazy"
                        className="h-auto"
                    />
                ))}
            </div>
        </div>
    );
};

export default LogoGrid;
