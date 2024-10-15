import React from "react";
import Image from "next/image";
import Logo from "../../assets/images/logo-icon.png";
import GlobeIcon from "../../assets/svgs/globe.svg";
import SearchIcon from "../../assets/svgs/search-icon.svg";

export default function FaqHeader() {
  return (
    <div>
      <nav className="flex flex-col">
        <div className="relative pb-9 faq-header">
          <div className="max-w-[960px] mx-auto px-6 flex flex-col h-full items-center">
            <div className="relative w-full mb-6 pb-6">
              <div className="pt-6 leading-none">
                <div className="flex justify-between items-center">
                  <Image className="cursor-pointer" src={Logo} alt="Logo" width={35} height={35} />
                  <div className="flex gap-1 items-center">
                    <Image src={GlobeIcon} alt="Globe Icon" />
                    <select name="language" id="language-select">
                      <option value="Romania">Romania</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-[-webkit-fill-available] max-w-[960px] p-4 bg-[#333333] hover:bg-[hsla(0deg 0% 100% / 27%)] rounded-[10px]">
              <div className="flex gap-1.5 items-center">
                <div>
                  <Image src={SearchIcon} alt="Search Icon" />
                </div>
                <input
                  className="max-w-[960px] w-full text-white placeholder:text-white"
                  type="search"
                  id="search-input"
                  placeholder="Search for articles..."
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
