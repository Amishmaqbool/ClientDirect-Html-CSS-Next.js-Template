import React from "react";
import Image from "next/image";
import exp from "constants";

const IntegrationSection = () => {
    return(
        <>
          <div className="px-4 max-w-[1200px] mx-auto flex flex-col md:justify-center md:items-center pt-24 text-white">
        <div className="max-w-[790px] flex flex-col items-center pb-12 md:pb-20">
          <div className="inline-block rounded-2xl bg-[#ffffff1a] border border-[#ffffff1a] pt-1 pb-[2px] px-2 text-xs font-semibold text-center">Integrations</div>
          <h2 className="text-center text-4xl font-bold tracking-[-1px] pt-10">The Stack within your Stack</h2>
          <p className="text-[#7d89b0] text-lg text-center pt-5">
          Enrich campaigns and fill sales pipelines by integrating with the products you know and love. With over 5,000+ apps already available, your team’s favourite tools are just a click away.          </p>
          <button className="mt-[18px] flex items-center justify-center gap-2 rounded-full pt-2 pb-[6px] pl-4 pr-3 text-white bg-[#ffffff1a] border-[1.5px] border-[#ffffff1a] text-sm">
            Try Snitcher for Free
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
              <path d="M3.33301 10.6196H16.6663M16.6663 10.6196L11.6663 5.61963M16.6663 10.6196L11.6663 15.6196" stroke="currentColor" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </button>
        </div>



        

        </div>
    </>
    );
}

export default IntegrationSection;