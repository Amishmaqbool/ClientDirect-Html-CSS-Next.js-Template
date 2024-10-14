import React from "react";
import Image, {StaticImageData} from "next/image";
import { pros } from "@/constants/features/lead-generation";
import Qualify from "@/assets/images/qualify.webp";
import Prioritize from "@/assets/images/prioritize.webp";
import Assign from "@/assets/images/assign.webp";
import Export from "@/assets/images/export.webp";

const imageMap: { [key: string]: StaticImageData } = {
    "qualify.webp": Qualify,
    "prioritize.webp": Prioritize,
    "assign.webp": Assign,
    "export.webp": Export,
};

const ProsSection = () => {
    return (
      <div className="flex max-md:flex-col gap-5 items-center justify-center mt-8 md:mt-10 px-4">
        {pros.map((item) => (
          <div key={item.id} className="flex flex-col gap-5 items-center justify-center">
            <Image src={imageMap[item.image]} alt={item.title} width={70} height={70} className="object-contain" />
            <div className="text-center -mt-4">
              <h2 className="text-xl leading-8 text-[#344054] font-semibold">{item.title}</h2>
              <p className="text-[#667085] mt-2 text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
export default ProsSection;