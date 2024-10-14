import React from "react";
import BadgeCarousel from "./BadgeCarousel";

const DriveBudget = () =>{
    return (
        <>
        <div className="w-full max-w-[900px] mx-auto flex flex-col items-center justify-center">
          <BadgeCarousel />
        </div>
        
        <div className="max-w-[790px] max-md:px-2 flex flex-col items-center max-md:pb-14 md:pb-20">
        <h2 className="text-center max-lg:text-[32px] text-4xl font-bold tracking-[-1px]">Drive more revenue from your existing budget</h2>
        
        <p className="text-xl max-lg:text-lg text-center pt-5 text-[#475467]">
        Snitcher supplies thousands of B2B sales and marketing teams worldwide with the insights they need to drive more revenue from their existing budgets.
        </p>

        <button className="mt-6 flex items-center justify-center gap-2 font-semibold rounded-full py-2 pl-4 pr-3 text-white bg-[#101828] border-[1.5px] border-[#00000026] text-sm">
            Start 14-Day Free Trial<svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
            <path d="M3.33301 10.6196H16.6663M16.6663 10.6196L11.6663 5.61963M16.6663 10.6196L11.6663 15.6196" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
        </button>

      </div>
      </>
    );
}

export default DriveBudget;