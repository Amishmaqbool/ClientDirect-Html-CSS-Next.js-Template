import Image from "next/image";
import Asana from "@/assets/images/image-lead-gen-third.webp";
import AsanaSmall from "@/assets/images/asanda-small.webp";
import Enrichment from "@/assets/images/enrichment.webp";
import Visitor from "@/assets/images/visitor.webp";
import Prospect from "@/assets/images/prospect.webp";
import manLead from "@/assets/images/man-lead.webp"

const IdentifySection = () => {
  return (
      <div className="px-4 max-w-[1200px] mx-auto flex flex-col md:justify-center md:items-center pt-24 text-white">
        <div className="max-w-[790px] flex flex-col items-center pb-12 md:pb-20">
          <div className="inline-block rounded-2xl bg-[#ffffff1a] border border-[#ffffff1a] pt-1 pb-[2px] px-2 text-xs font-semibold text-center">Identifică</div>
          <h2 className="text-center text-4xl font-bold tracking-[-1px] pt-10">Capturează și convertește vizitatorii anonimi</h2>
          <p className="text-[#7d89b0] text-lg text-center pt-5">
          Identifică îți transformă traficul anonim de pe site în leaduri acționabile și informații în timp real. Astfel, poți valorifica fiecare dolar investit în marketing și închide mai multe afaceri.
          </p>
          <button className="mt-[18px] flex items-center justify-center gap-2 rounded-full pt-2 pb-[6px] pl-4 pr-3 text-white bg-[#ffffff1a] border-[1.5px] border-[#ffffff1a] text-sm">
          Începe perioada de probă gratuită de 14 zile
           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
              <path d="M3.33301 10.6196H16.6663M16.6663 10.6196L11.6663 5.61963M16.6663 10.6196L11.6663 15.6196" stroke="currentColor" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </button>
        </div>

        <div className="flex gap-20 max-md:gap-8 pb-28 max-md:flex-col">
          <div className="hidden md:block md:w-1/2 w-full">
            <Image alt="Asana" src={Asana} width={540} height={448} />
          </div>

          <div className="flex md:hidden w-full justify-center">
           <Image alt="Asana-Small" src={AsanaSmall} width={395} height={520}/>
          </div>

          <div className="w-1/2 max-md:w-full">
            <div className="flex gap-5 items-start">
              <Image src={Enrichment} alt="enrichment" width={50} height={50} className="object-contain" />
              <div>
                <h2 className="text-lg font-semibold">Îmbogățire</h2>
                <p className="text-[#7d89b0] text-base mt-[2px]">Îmbogățește fiecare companie identificată cu informații detaliate.</p>
              </div>
            </div>

            <div className="flex gap-5 items-start mt-10">
              <Image src={Visitor} alt="visitor" width={50} height={50} className="object-contain" />
              <div>
                <h2 className="text-lg font-semibold">Comportamentul vizitatorilor</h2>
                <p className="text-[#7d89b0] text-base mt-[2px]">Urmărește parcursul leadurilor de la sursă până la conversie.</p>
              </div>
            </div>

            <div className="flex gap-5 items-start mt-10">
              <Image src={Prospect} alt="prospect" width={50} height={50} className="object-contain" />
              <div>
                <h2 className="text-lg font-semibold">Prospect</h2>
                <p className="text-[#7d89b0] text-base mt-[2px]">Folosește informațiile cheie pentru a selecta factorul de decizie potrivit.</p>
              </div>
            </div>

            <div
                className="w-full h-[1px] mt-10"
                style={{
                  background: 'linear-gradient(110.65deg, rgba(255, 255, 255, 0) 1.16%, rgba(255, 255, 255, 0.1) 51.61%, rgba(255, 255, 255, 0) 100%)'
                }}>
              </div>

              <div className="flex max-md:flex-col items-start gap-4 max-w-full lg:max-w-[80%] mt-14">
                <Image src={manLead} alt="man" width={48} height={48} className="object-contain" />
                <div className="text-xs font-semibold">
                  <p className="italic text-[#eaecf0] ">&quot;Designul software-ului este grozav - Este un instrument ideal pentru marketing bazat pe conturi și ajută la obținerea de leaduri noi.&quot;</p>
                  <p className="text-[#b9c0d4] flex gap-2 items-center pt-[14px]">Marc-Antoine C.<span><div className="w-[15px] bg-[#98a2b3] h-[2px] -mt-[2px]"></div></span> <span className="text-[#7d89b0]">Coordonator Marketing și Vânzări</span></p>
                </div>
              </div>

          </div>
        </div>
      </div>
  );
};

export default IdentifySection;