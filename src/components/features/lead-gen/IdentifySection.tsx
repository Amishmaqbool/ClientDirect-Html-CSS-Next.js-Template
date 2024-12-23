import Image from "next/image";
import Asana from "@/assets/images/image-lead-gen-third.webp";
import AsanaSmall from "@/assets/images/asanda-small.webp";
import Enrichment from "@/assets/images/enrichment.webp";
import Visitor from "@/assets/images/visitor.webp";
import Prospect from "@/assets/images/prospect.webp";
import manLead from "@/assets/images/man-lead.webp";
import Button from "@/components/common/Button";

const IdentifySection = () => {
  return (
    <div className="px-4 max-w-[1200px] mx-auto flex flex-col md:justify-center md:items-center pt-24 text-white">
      <div className="max-w-[790px] flex flex-col items-center pb-12 md:pb-20">
        <div className="inline-block rounded-2xl bg-[#ffffff1a] border border-[#ffffff1a] pt-1 pb-[2px] px-2 text-xs font-semibold text-center">
          Identifică
        </div>
        <h2 className="text-center text-4xl font-bold tracking-[-1px] pt-10">
          Capturează și convertește vizitatorii anonimi
        </h2>
        <p className="text-[#7d89b0] text-lg text-center pt-5">
          Identifică îți transformă traficul anonim de pe site în leaduri
          acționabile și informații în timp real. Astfel, poți valorifica
          fiecare dolar investit în marketing și închide mai multe afaceri.
        </p>

        <Button
          bgColor="bg-[#ffffff1a]"
          textColor="text-white"
          borderRadius="rounded-[100px]"
          className="mt-[18px] max-[420px]:text-xs text-sm border border-[#ffffff1a]"
          showChevron={true}
          chevronColor="text-white"
          buttonText="Începe perioada de probă gratuită de 14 zile"
        />
      </div>

      <div className="flex gap-20 max-lg:gap-8 pb-28 max-lg:flex-col">
        <div className="hidden lg:block lg:w-1/2 w-full">
          <Image alt="Asana" src={Asana} width={540} height={448} />
        </div>

        <div className="flex lg:hidden w-full justify-center">
          <Image alt="Asana-Small" src={AsanaSmall} width={395} height={520} />
        </div>

        <div className="w-1/2 max-lg:w-full">
          <div className="flex gap-5 items-start">
            <Image
              src={Enrichment}
              alt="enrichment"
              width={50}
              height={50}
              className="object-contain"
            />
            <div>
              <h2 className="text-lg font-semibold">Îmbogățire</h2>
              <p className="text-[#7d89b0] text-base mt-[2px]">
                Îmbogățește fiecare companie identificată cu informații
                detaliate.
              </p>
            </div>
          </div>

          <div className="flex gap-5 items-start mt-10">
            <Image
              src={Visitor}
              alt="visitor"
              width={50}
              height={50}
              className="object-contain"
            />
            <div>
              <h2 className="text-lg font-semibold">
                Comportamentul vizitatorilor
              </h2>
              <p className="text-[#7d89b0] text-base mt-[2px]">
                Urmărește parcursul leadurilor de la sursă până la conversie.
              </p>
            </div>
          </div>

          <div className="flex gap-5 items-start mt-10">
            <Image
              src={Prospect}
              alt="prospect"
              width={50}
              height={50}
              className="object-contain"
            />
            <div>
              <h2 className="text-lg font-semibold">Prospect</h2>
              <p className="text-[#7d89b0] text-base mt-[2px]">
                Folosește informațiile cheie pentru a selecta factorul de
                decizie potrivit.
              </p>
            </div>
          </div>

          <div
            className="w-full h-[1px] mt-10"
            style={{
              background:
                "linear-gradient(110.65deg, rgba(255, 255, 255, 0) 1.16%, rgba(255, 255, 255, 0.1) 51.61%, rgba(255, 255, 255, 0) 100%)",
            }}
          ></div>

          <div className="flex max-md:flex-col items-start gap-4 max-w-full lg:max-w-[80%] mt-14">
            <Image
              src={manLead}
              alt="man"
              width={48}
              height={48}
              className="object-contain"
            />
            <div className="text-xs font-semibold">
              <p className="italic text-[#eaecf0] ">
                &quot;Designul software-ului este grozav - Este un instrument ideal pentru marketing bazat pe conturi și ajută la obținerea de leaduri noi.&quot;
              </p>
              <div className="text-[#b9c0d4] flex gap-2 items-center pt-[14px]">
                Marc-Antoine C.
                <span className="w-[15px] bg-[#98a2b3] h-[2px] -mt-[2px] inline-block"></span>
                <span className="text-[#7d89b0]">
                  Coordonator Marketing și Vânzări
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default IdentifySection;