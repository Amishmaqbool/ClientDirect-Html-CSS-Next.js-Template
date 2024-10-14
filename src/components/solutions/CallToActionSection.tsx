import React from "react";
import Image from "next/image";
import MessageIcon from "../../assets/svgs/message-icon.svg";

const CallToActionSection = () => {
    return (
        <div className="c-cta--call-pricing relative overflow-hidden bg-[#101828] rounded-[16px] pt-14 pb-0 pl-12 flex max-w-[1024px] mx-auto">
            {/* Left Section */}
            <div className="w-[40%] pb-14">
                <h3 className="text-[#54edf0] text-left text-2xl font-bold leading-7">
                    Grow revenue per client
                </h3>
                <p className="font-semibold text-white mb-6 leading-7">
                    White-label for Agencies
                </p>
                <div className="mb-3 flex items-start">
                    <Image
                        src="https://cdn.prod.website-files.com/64084dfdb78deb68d06600ed/6408b0b0b8c50c5f8b253545_checkmark-aqua.svg"
                        alt="Checkmark"
                        width={20}
                        height={20}
                    />
                    <p className="text-sm text-white ml-2">
                        Accept or reject companies that match your pre-qualification
                        criteria.
                    </p>
                </div>
                <div className="mb-3 flex items-start">
                    <Image
                        src="https://cdn.prod.website-files.com/64084dfdb78deb68d06600ed/6408b0b0b8c50c5f8b253545_checkmark-aqua.svg"
                        alt="Checkmark"
                        width={20}
                        height={20}
                    />
                    <p className="text-sm text-white ml-2">
                        Offer your clients a free trial period, without incurring any costs.
                    </p>
                </div>
                <div className="mb-3 flex items-start">
                    <Image
                        src="https://cdn.prod.website-files.com/64084dfdb78deb68d06600ed/6408b0b0b8c50c5f8b253545_checkmark-aqua.svg"
                        alt="Checkmark"
                        width={20}
                        height={20}
                    />
                    <p className="text-sm text-white ml-2">
                        Receive large discounts through volume-based pricing.
                    </p>
                </div>
                <div className="mb-9 flex items-start">
                    <Image
                        src="https://cdn.prod.website-files.com/64084dfdb78deb68d06600ed/6408b0b0b8c50c5f8b253545_checkmark-aqua.svg"
                        alt="Checkmark"
                        width={20}
                        height={20}
                    />
                    <p className="text-sm text-white ml-2">
                        Manage all client accounts from one place.
                    </p>
                </div>
                <div className="flex gap-3 flex-wrap items-center">
                <button className="faq-chat-button px-[20px] text-[14px] py-[12px] backdrop-filter-[8px] bg-[#ffffff1a] border border-[#0000] text-white rounded-full h-fit flex gap-2 justify-center items-center">
                    <Image src={MessageIcon} alt="Message Icon" />
                    <p>Talk to Sales</p>
                </button>
                <a
                    href="/pricing"
                    className="faq-chat-button px-[20px] text-[14px] py-[12px] backdrop-filter-[8px] bg-[#ffffff1a] border border-[#0000] text-white rounded-full h-fit flex gap-2 justify-center items-center"
                >
                    <div>View Pricing</div>
                    <div className="w-5">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="21"
                            viewBox="0 0 20 21"
                            fill="none"
                        >
                            <path
                                d="M3.33301 10.6196H16.6663M16.6663 10.6196L11.6663 5.61963M16.6663 10.6196L11.6663 15.6196"
                                stroke="currentColor"
                                strokeWidth="1.66667"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                </a>
            </div>
        </div>

            {/* Right Section with image */ }
    <div className="absolute bottom-[-15px] right-0 h-[90%]">
        <Image
            src="https://cdn.prod.website-files.com/64084dfdb78deb68d06600ed/6408aeb484b6bfc92a67b070_Group%202299.svg"
            alt="CTA Image"
            width={500}
            height={450}
            className="object-cover h-full w-full"
        />
    </div>
        </div >
    );
};

export default CallToActionSection;
