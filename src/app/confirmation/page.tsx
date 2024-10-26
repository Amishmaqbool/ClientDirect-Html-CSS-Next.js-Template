import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import RightArrow from "@/assets/svgs/right-arrow.svg";

const TokenToaster = dynamic(() => import("@/components/TokenToaster"), {
  ssr: false,
});

export default function page() {
  return (
    <>
      <TokenToaster />
      <div className="max-w-[900px] mx-auto px-6">
        <div className="pt-20 md:pt-32">
          <h3 className="text-3xl font-semibold">Salutare!</h3>
          <p className="pt-6 text-xl">
            Ne bucurăm că te-ai alăturat{" "}
            <a className="text-blue-800" href="/">
              ClientiDirect.com !
            </a>{" "}
            Solicitarea ta a fost înregistrată cu succes și ești acum pe lista
            noastră de așteptare. Stai aproape – unul dintre colegii noștri te
            va contacta în curând cu toate detaliile de care ai nevoie.
          </p>
          <p className="py-6 text-xl">
            Îți mulțumim pentru răbdare și abia așteptăm să colaborăm!
          </p>
          <p className="text-lg">Cu entuziasm,</p>
          <p className="text-lg">Echipa ClientiDirect</p>

          <Link href="/auth/login">
            <div className="px-4 py-2 w-max mt-10 flex gap-2 items-center max-[420px]:text-xs text-sm border rounded-full text-white border-[#ffffff1a] bg-[#101828] cursor-pointer">
              <p>Autentificare</p>
              <div>
                <Image src={RightArrow} alt="Right Arrow" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
