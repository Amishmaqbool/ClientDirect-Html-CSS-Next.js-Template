import React from 'react';
import Image from 'next/image';
import arrow from '../assets/svgs/arrow.svg'
import footerCtaLeft from '../assets/svgs/footer-cta-left-gradient.svg'
import footerCtaRight from '../assets/svgs/footer-cta-right-gradient.svg'
export default function Panel() {
  return (
    <div className='max-xl:px-8 max-md:px-4'>
      <div className="relative max-w-[1216px] -mt-28 px-[255px] max-md:px-5 mx-auto z-10 bg-[#3257ff] rounded-2xl py-[100px] text-center text-white overflow-hidden">
        <div className="max-w-[706px] flex flex-col items-center justify-center relative z-20 max-md:max-w-[918.4px]">
          
          <h2 className="text-5xl font-bold -tracking-[2px] leading-[60px] max-sm:text-[33px] max-sm:leading-[39px]">
            Still waiting for conversions? your competitors aren't...
          </h2>    
          <p className="text-lg mb-[30px] mt-[10px] text-[#d1e0ff] max-w-[560px] -tracking-[0.1px]">
            Your target audiences is comparing providers, beat the competition
            to the sale by identifying and capturing them first.
          </p>
          {/* py-[15px] */}
          <a 
            href="https://app.snitcher.com/register?ref=https%3A%2F%2Fwww.upwork.com%2F" 
            className="inline-flex items-center justify-center bg-black text-white px-7 h-[59px] rounded-full  hover:bg-gray-900"
          >
            <p className='leading-[28px] text-[18px] -mb-[4px] font-semibold'>
            Try Snitcher For Free
            </p>
            <div>
            {/* <Image src={arrow} alt='footer button arrow' className='ml-3' /> */}
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 21" fill="none" className="ml-3 h-[21px] w-5">
              <path 
                d="M3.33301 10.6196H16.6663M16.6663 10.6196L11.6663 5.61963M16.6663 10.6196L11.6663 15.6196" 
                stroke="white" 
                strokeWidth="1.66667" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              ></path>
            </svg>
            
            </div>
          </a>
        </div>

        {/* absolute */}
        <div className="absolute inset-0 opacity-10 bg-cover bg-no-repeat z-10" style={{ backgroundImage: 'url(https://cdn.prod.website-files.com/64084dfdb78deb68d06600ed/641c3ad…_noiseBig.png)' }}></div>

        
        <div className="absolute inset-0 pointer-events-none z-0">
        <Image src={footerCtaLeft}  alt="left-gradient" className="absolute left-0 top-0 h-full" />
        <Image src={footerCtaRight} alt="right-gradient"  className="absolute right-0 top-0 h-full" />          
        </div>
      </div>
    </div>
    
  );
}
