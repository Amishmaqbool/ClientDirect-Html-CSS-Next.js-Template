import Image from 'next/image';
import Filter from "@/assets/images/filter.webp";
import Invision from "@/assets/images/lead-gen-four.webp";
import ManReview from "@/assets/images/man2.webp";

const SegmentSection = () => {
  return (
    <div className="max-w-[1200px] mx-auto flex flex-col justify-center items-center xl:pt-20 pb-8">
      <div className="lg:px-32 max-lg:px-4 max-md:px-3 flex flex-col items-center max-md:pb-14 md:pb-20">
        <div className="inline-block rounded-2xl bg-[#d1e0ff] border border-[#d1e0ff] pt-1 pb-[2px] px-4 text-xs font-bold text-center text-[#0040c1]">
          Segment
        </div>
        <h2 className="text-center text-4xl font-bold tracking-[-1px] pt-10">Build lead lists that turn into customers</h2>
        <p className="text-lg text-center pt-5 text-[#475467]">
          Group and segment leads by company attributes and behaviours so you can put your marketing and sales resources to work on customers, not browsers.
        </p>
      </div>

      <div className="flex gap-0 max-md:flex-col">
        <div className="w-[38%] max-md:w-full max-xl:px-4">
          <Image alt="filter" src={Filter} width={48} height={48} className="object-contain" />
          <div className="mt-8">
            <h2 className="text-[#344054] font-bold text-2xl">Score</h2>
            <p className="text-[#667085] text-base leading-7 tracking-wide md:pr-6">
              Define company attributes and behaviours to configure lead scoring. Trigger automations and manage your website traffic intelligently.
              <span className="block pt-4">Collect great fit leads on autopilot so you can spend more time retargeting and selling to buyers, not browsers.</span>
            </p>
          </div>

          <button className="mt-7 flex items-center justify-center gap-2 font-semibold rounded-full py-2 pl-4 pr-3 text-white bg-[#101828] border-[1.5px] border-[#00000026] text-sm">
            Start 14-Day Free Trial
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
              <path d="M3.33301 10.6196H16.6663M16.6663 10.6196L11.6663 5.61963M16.6663 10.6196L11.6663 15.6196" stroke="currentColor" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </button>

          <div
              className="w-full h-[1px] mt-8"
              style={{
                background: 'repeating-linear-gradient(110.65deg, #0000 1.16%, #00000026 51.09%, #0000)',
              }}>
            </div>

          <div className="flex max-md:flex-col items-start gap-4 max-w-[75%] md:max-w-[80%] mt-10 max-md:mt-8 max-md:pb-20">
            <Image src={ManReview} alt="man" width={48} height={48} className="object-contain" />
            <div className="text-xs font-semibold">
              <p className="italic text-[#344054]">
                &quot;We could find the contact information with a few clicks and reach out to possible deals&quot;
              </p>
              <p className="text-[#101828] flex gap-2 items-center pt-3">
                Vencel M.<span><div className="w-[15px] bg-[#98a2b3] h-[2px] -mt-[2px]"></div></span>
                <span className="text-[#667085]">Head of Growth, Partner</span>
              </p>
            </div>
          </div>
        </div>

        <div className="w-[62%] max-md:w-full">
          <Image alt="Invision" src={Invision} width={800} height={580} className="object-contain" />
        </div>
      </div>
    </div>
  );
};

export default SegmentSection;