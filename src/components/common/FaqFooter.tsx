import React from "react";
import Image from "next/image";
import LogoIcon from "../../assets/images/logo-icon.png";
import LinkdinIcon from "../../assets/svgs/linkdin.svg";
import IntercomIcon from "../../assets/svgs/intercom.svg";

export default function FaqFooter() {
  return (
<<<<<<< HEAD
    <div className="flex justify-center" style={{ fontFamily: "system-ui" }}>
=======
    <div className="bg-[#fcfcfd] flex justify-center" style={{ fontFamily: "system-ui" }}>
>>>>>>> c986dc8 (Auth updates)
      <div>
        <a href="/faq">
          <div className="flex justify-center cursor-pointer">
            <Image src={LogoIcon} alt="Logo Icon" width={32} height={32} />
          </div>
        </a>
        <div className="mt-10 mb-4 flex gap-4 items-center">
          <p className="font-normal text-sm text-[#929BA5] cursor-pointer">
            Sign in
          </p>
          <p className="font-normal text-sm text-[#929BA5] cursor-pointer">
            Start Free Trial
          </p>
          <p className="font-normal text-sm text-[#929BA5] cursor-pointer">
            Dashboard
          </p>
        </div>
        <div className="flex justify-center cursor-pointer">
          <Image src={LinkdinIcon} alt="Linkdin Icon" width={16} height={16} />
        </div>
        <div className="pb-12 mt-10 flex gap-2 justify-center items-center cursor-pointer">
          <Image
            src={IntercomIcon}
            alt="Intercom Icon"
            width={14}
            height={14}
          />
          <p className="font-normal text-sm text-[#929BA5] ">We run on intercom</p>
        </div>
      </div>
    </div>
  );
}
