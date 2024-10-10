import React from 'react';
import Image from 'next/image';
import arrow from '@/assets/svgs/arrow.svg'
import footerCtaLeft from '@/assets/svgs/footer-cta-left-gradient.svg'
import footerCtaRight from '@/assets/svgs/footer-cta-right-gradient.svg'
export default function Panel() {
  return (
    <div>
      <div className="relative max-w-[1216px] -mt-28 mx-auto z-10 bg-[#3257ff] rounded-2xl py-[96px] text-center text-white overflow-hidden -mb-[295px]">
        <div className="max-w-[1000px] mx-auto px-5 lg:px-10 relative z-20">

          <h2 className="text-[33px] lg:text-5xl font-bold -tracking-[2px] leading-[39px] lg:leading-[60px]">
          Struggling to see what $48 out of every $50 buys you?
          </h2>


          <p className="text-lg mb-[30px] mt-4 text-[#d1e0ff]">
            Your target audiences is comparing providers, beat the competition <br className='max-lg:hidden' />
            to the sale by identifying and capturing them first.
          </p>


          <a
            href="https://app.snitcher.com/register?ref=https%3A%2F%2Fwww.upwork.com%2F"
            className="inline-flex items-center justify-center bg-black text-white px-7 py-[15px] rounded-full font-semibold hover:bg-gray-900"
          >
            <p className='leading-[28px] text-[18px]'>
              Try Snitcher For Free
            </p>
            <div>
              <Image src={arrow} alt='footer button arrow' className='ml-3' />

            </div>
          </a>
        </div>


        <div className="absolute inset-0 opacity-10 bg-cover bg-no-repeat z-10" style={{ backgroundImage: 'url(https://cdn.prod.website-files.com/64084dfdb78deb68d06600ed/641c3ad…_noiseBig.png)' }}></div>


        <div className="absolute inset-0 pointer-events-none z-0">
          <Image src={footerCtaLeft} alt="left-gradient" className="absolute left-0 top-0 h-full" />
          <Image src={footerCtaRight} alt="right-gradient" className="absolute right-0 top-0 h-full" />
        </div>
      </div>
    </div>
  );
}
