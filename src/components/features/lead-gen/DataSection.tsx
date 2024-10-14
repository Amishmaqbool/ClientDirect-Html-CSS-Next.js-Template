import Image from "next/image";
import { data } from "@/constants/features/lead-generation";
import Button from "@/components/common/Button";

const DataSection = () => {
  return (
    <>
      <div className="max-w-[790px] flex flex-col items-center pb-10 md:pb-32">
        <div className="inline-block rounded-2xl bg-[#d1e0ff] border border-[#d1e0ff] pt-1 pb-[2px] px-4 text-xs font-bold text-center text-[#0040c1]">
          Automatizează
        </div>
        <h2 className="text-center text-4xl font-bold tracking-[-1px] pt-7">
          Mută tranzacțiile prin pipeline-ul tău.
        </h2>
        <p className="text-lg text-center pt-5 text-[#475467] mb-5">
          Trimite leaduri către instrumentele tale preferate și susține echipele
          de vânzări cu actualizări despre intenții, astfel încât tranzacțiile
          să progreseze, iar marketingul să le poată retargeta.
        </p>

        <Button
          bgColor="bg-[#101828]"
          textColor="text-white"
          borderRadius="rounded-[100px]"
          className="mt-[18px] max-[420px]:text-xs text-sm border border-[#ffffff1a]"
          showChevron={true}
          chevronColor="text-white"
          buttonText="Începe perioada de probă gratuită de 14 zile"
        />
      </div>

      <div className="flex max-md:flex-wrap justify-center gap-7 mt-8 max-xl:px-4 max-md:px-0 max-sm:mb-20 mb-2">
        {data.map((item) => (
          <div
            key={item.id}
            className={`relative w-[384px] md:h-[346px] h-[346px] sm:h-[450px] max-md:w-full max-xl:w-2/6 rounded-xl overflow-hidden shadow-lg flex-shrink-0`}
            style={{
              backgroundColor:
                item.id === 1
                  ? "#101726"
                  : item.id === 2
                  ? "#3257ff"
                  : "#06aed4",
            }}
          >
            <Image
              src={item.image}
              alt={item.title}
              width={384}
              height={250}
              objectFit="contain"
              className="max-md:w-full"
            />

            <div className="absolute inset-0 flex flex-col justify-end px-6 pt-6 pb-[30px]">
              <h2 className="text-white text-lg font-semibold">{item.title}</h2>
              <p
                className="text-white mt-2 font-normal text-sm"
                style={{
                  color:
                    item.id === 1
                      ? "#98a2b3"
                      : item.id === 2
                      ? "#b2ccff"
                      : "#cff9fe",
                }}
              >
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
