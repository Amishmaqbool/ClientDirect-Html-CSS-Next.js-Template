import React from "react";
import Image from "next/image";
import MessageIcon from "../../assets/svgs/message-icon.svg";
import AquaTick from "../../assets/svgs/aqua-tick.svg";
import CardImage from "../../assets/svgs/card-image.svg";

const CallToActionSection = () => {
  return (
    <div className="max-lg:h-[650px] c-cta--call-pricing relative overflow-hidden bg-[#101828] rounded-[16px] pt-14 pb-0 max-sm:px-6 sm:pl-12 flex max-w-[1024px] mx-auto">
      <div className="w-full lg:w-[40%] pb-14">
        <h3 className="text-[#54edf0] text-left text-2xl font-bold leading-7">
          Creșteți venitul pe client
        </h3>
        <p className="font-semibold text-white mb-6 leading-7">
          Etichetă albă pentru agenții
        </p>
        <div className="mb-3 flex items-start">
          <Image src={AquaTick} alt="Checkmark" width={20} height={20} />
          <p className="text-sm text-white ml-2">
            Acceptați sau respingeți companiile care se potrivesc cu
            precalificarea dvs criterii.
          </p>
        </div>
        <div className="mb-3 flex items-start">
          <Image src={AquaTick} alt="Checkmark" width={20} height={20} />
          <p className="text-sm text-white ml-2">
            Oferă clienților tăi o perioadă de probă gratuită, fără a suporta
            costuri.
          </p>
        </div>
        <div className="mb-3 flex items-start">
          <Image src={AquaTick} alt="Checkmark" width={20} height={20} />
          <p className="text-sm text-white ml-2">
            Primiți reduceri mari prin prețuri bazate pe volum.
          </p>
        </div>
        <div className="mb-9 flex items-start">
          <Image src={AquaTick} alt="Checkmark" width={20} height={20} />
          <p className="text-sm text-white ml-2">
            Gestionați toate conturile client dintr-un singur loc.
          </p>
        </div>
        <div className="flex gap-3 flex-wrap items-center">
          <button className="faq-chat-button px-[20px] text-[14px] max-[474px]:py-2 py-[12px] backdrop-filter-[8px] bg-[#ffffff1a] border border-[#0000] text-white rounded-full h-fit flex gap-2 justify-center items-center">
            <Image src={MessageIcon} alt="Message Icon" />
            <p>Vorbește cu vânzări</p>
          </button>
          <a
            href="/auth/login"
            className="faq-chat-button px-[20px] text-[14px] max-[474px]:py-2 py-[12px] backdrop-filter-[8px] bg-[#ffffff1a] border border-[#0000] text-white rounded-full h-fit flex gap-2 justify-center items-center"
          >
            <div>Vedeți prețurile</div>
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

      <div className="mt-3 absolute bottom-[-15px] right-0 lg:h-[90%]">
        <Image
          src={CardImage}
          alt="CTA Image"
          width={500}
          height={450}
          className="object-cover lg:h-full w-full"
        />
      </div>
    </div>
  );
};

export default CallToActionSection;
