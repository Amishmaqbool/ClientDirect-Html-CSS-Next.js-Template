import React from "react";
import dynamic from "next/dynamic";

const TokenToaster = dynamic(() => import("@/components/TokenToaster"), {
    ssr: false, 
  });

export default function page() {
  return (
    <>
      <TokenToaster />
      <div className="max-w-[900px] mx-auto px-6">
        <div className="pt-32">
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
        </div>
      </div>
    </>
  );
}
