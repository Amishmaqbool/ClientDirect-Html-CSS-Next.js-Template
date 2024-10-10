import Image from "next/image";
import Asana from "@/assets/images/image-lead-gen-third.webp";
import Enrichment from "@/assets/images/enrichment.webp";
import Visitor from "@/assets/images/visitor.webp";
import Prospect from "@/assets/images/prospect.webp";

const IdentifySection = () => {
  return (
    <div className="max-w-full bg-[#101828]">
      <div className="px-4 max-w-[1200px] mx-auto flex flex-col justify-center items-center pt-20 text-white">
        <div className="px-48 flex flex-col items-center pb-20">
          <div className="inline-block rounded-2xl bg-[#ffffff1a] border border-[#ffffff1a] pt-1 pb-[2px] px-2 text-xs font-semibold text-center">Identify</div>
          <h2 className="text-center text-4xl font-bold tracking-[-1px] pt-10">Capture and close anonymous visitors</h2>
          <p className="text-[#7d89b0] text-lg text-center pt-5">
          Identify turns your anonymous website traffic into actionable leads and information in real-time. So you can make the most of every marketing dollar and close more deals.          </p>
          <button className="mt-4 flex items-center justify-center gap-2 rounded-full pt-2 pb-[6px] pl-4 pr-3 text-white bg-[#ffffff1a] border-[1.5px] border-[#ffffff1a] text-sm">
            Start 14-Day Free Trial
          </button>
        </div>

        <div className="flex gap-2 pb-28">
          <div className="w-1/2">
            <Image alt="Asana" src={Asana} width={540} height={448} />
          </div>
          <div className="w-1/2">
            <div className="flex gap-5 items-start">
              <Image src={Enrichment} alt="enrichment" width={50} height={50} className="object-contain" />
              <div>
                <h2 className="text-lg font-semibold">Enrichment</h2>
                <p className="text-[#7d89b0] text-lg">Enrich each identified company with detailed information.</p>
              </div>
            </div>

            <div className="flex gap-5 items-start mt-10">
              <Image src={Visitor} alt="visitor" width={50} height={50} className="object-contain" />
              <div>
                <h2 className="text-lg font-semibold">Visitor behavior</h2>
                <p className="text-[#7d89b0] text-lg">Follow lead journeys from source to close.</p>
              </div>
            </div>

            <div className="flex gap-5 items-start mt-10">
              <Image src={Prospect} alt="prospect" width={50} height={50} className="object-contain" />
              <div>
                <h2 className="text-lg font-semibold">Prospect</h2>
                <p className="text-[#7d89b0] text-lg">Use key pieces of information to select the right decision maker.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdentifySection;