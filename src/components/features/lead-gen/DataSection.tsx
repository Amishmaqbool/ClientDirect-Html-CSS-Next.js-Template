import Image from "next/image";
import { data } from "@/constants/features/lead-generation";

const DataSection = () => {
  return (
    <>
    <div className="px-32 flex flex-col items-center pb-20">
        <div className="inline-block rounded-2xl bg-[#d1e0ff] border border-[#d1e0ff] pt-1 pb-[2px] px-4 text-xs font-bold text-center text-[#0040c1]">
          Automate
        </div>
        <h2 className="text-center text-4xl font-bold tracking-[-1px] pt-10">Move deals through your pipeline.</h2>
        <p className="text-xl text-center pt-5 text-[#475467] mb-5">Group and segment leads by company attributes and behaviours so you can put your marketing and sales resources to work on customers, not browsers.</p>
          
        <button className="mt-7 flex items-center justify-center gap-2 font-semibold rounded-full py-2 pl-4 pr-3 text-white bg-[#101828] border-[1.5px] border-[#00000026] text-sm">Start 14-Day Free Trial<svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
            <path d="M3.33301 10.6196H16.6663M16.6663 10.6196L11.6663 5.61963M16.6663 10.6196L11.6663 15.6196" stroke="currentColor" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"></path>
         </svg></button>
    </div>
    <div className="flex gap-6 justify-center mt-10">
      {data.map((item, index) => (
        <div
          key={item.id}
          className={`relative w-[384px] h-[346px] rounded-xl overflow-hidden shadow-lg`}
          style={{
            backgroundColor: item.id === 1 ? '#101726' : item.id === 2 ? '#3257ff' : '#06aed4',
          }}>
          <Image src={item.image} alt={item.title} width={384} height={346} objectFit="contain" className="absolute inset-0" />
          <div className="absolute inset-0 flex flex-col justify-end px-6 pt-6 pb-[30px]">
            <h2 className="text-white text-lg font-semibold">{item.title}</h2>
            <p className="text-white mt-2 font-normal text-sm"
              style={{
                color: item.id === 1 ? '#98a2b3' : item.id === 2 ? '#b2ccff' : '#cff9fe',
              }}>
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default DataSection;