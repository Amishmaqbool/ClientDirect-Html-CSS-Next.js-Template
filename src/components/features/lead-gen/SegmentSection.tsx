import Image from "next/image";
import Filter from "@/assets/images/filter.webp";
import Invision from "@/assets/images/lead-gen-four.webp";
import ManReview from "@/assets/images/man2.webp";
import Button from "@/components/common/Button";

const SegmentSection = () => {
  return (
    <div className="max-w-[1200px] mx-auto flex flex-col justify-center items-center xl:pt-20 pb-8">
      <div className="max-w-[790px] max-md:px-2 flex flex-col items-center max-md:pb-14 md:pb-20">
        <div className="inline-block rounded-2xl bg-[#d1e0ff] border border-[#d1e0ff] pt-1 pb-[2px] px-4 text-xs font-bold text-center text-[#0040c1]">
          Segmentează
        </div>
        <h2 className="text-center text-4xl font-bold tracking-[-1px] pt-10">
          Creează liste de leaduri care se transformă în clienți
        </h2>
        <p className="text-lg text-center pt-5 text-[#475467]">
          Grupează și segmentează leadurile după atributele și comportamentele
          companiei, astfel încât să poți folosi resursele de marketing și
          vânzări pentru clienți, nu doar pentru vizitatori.{" "}
        </p>
      </div>

      <div className="flex gap-0 max-lg:flex-col">
        <div className="w-[38%] max-lg:w-full max-xl:px-4">
          <Image
            alt="filter"
            src={Filter}
            width={48}
            height={48}
            className="object-contain"
          />
          <div className="mt-8">
            <h2 className="text-[#344054] font-bold text-2xl">Scor</h2>
            <p className="text-[#667085] text-base leading-7 tracking-wide md:pr-6">
              Defineste atributele și comportamentele companiilor pentru a
              configura scorul leadurilor. Declanșează automatizări și
              gestionează inteligent traficul pe site-ul tău.
              <span className="block pt-4">
                Colectează automat leaduri relevante pentru a putea petrece mai
                mult timp retargetând și vânzând către cumpărători, nu doar
                către vizitatori.
              </span>
            </p>
          </div>

          <Button
            bgColor="bg-[#101828]"
            textColor="text-white"
            borderRadius="rounded-[100px]"
            className="mt-[18px] max-[420px]:text-xs text-sm border border-[#ffffff1a]"
            showChevron={true}
            chevronColor="text-white"
            buttonText="Începe perioada de probă gratuită de 14 zile"
          />

          <div
            className="w-full h-[1px] mt-8"
            style={{
              background:
                "repeating-linear-gradient(110.65deg, #0000 1.16%, #00000026 51.09%, #0000)",
            }}
          ></div>

          <div className="flex max-md:flex-col items-start gap-4 max-w-[75%] md:max-w-[80%] mt-10 max-md:mt-8 max-md:pb-20">
            <Image
              src={ManReview}
              alt="man"
              width={48}
              height={48}
              className="object-contain"
            />
            <div className="text-xs font-semibold">
              <p className="italic text-[#344054]">
                &quot;Am putut găsi informațiile de contact în câteva clicuri și
                am contactat posibile oportunități de afaceri.&quot;
              </p>
              <div className="text-[#101828] flex gap-2 items-center pt-3">
                Vencel M.
                <span>
                  <div className="w-[15px] bg-[#98a2b3] h-[2px] -mt-[2px]"></div>
                </span>
                <span className="text-[#667085]">Șef Dezvoltare, Partner</span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[62%] max-lg:w-full">
          <Image
            alt="Invision"
            src={Invision}
            width={800}
            height={580}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default SegmentSection;
