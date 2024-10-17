import React from "react";
import HeroSection from "@/components/home/HeroSection";
import { marketingHeroData } from "@/constants/solutions/marketing";
import SolutionSection from "@/components/solutions/SolutionSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ClientiDirect | Marketing solutions for B2B | Free Trial",
  description:
    "Convert your target audience into paying customers while cutting out wasted spend. Drive revenue! Try ClientiDirect for Free. No credit card required.",
  metadataBase: new URL("https://clientidirect.com/solutions/marketing"),
};

export default function page() {
  return (
    <div>
      <HeroSection
        headingText={"Generează venituri, nu doar clicuri."}
        headingLineBreaks={[3, 5]}
        paragraphText={
          "Te-ai săturat să vezi cum bugetul pentru reclame dispare în abisul vizitatorilor anonimi? \n Ce-ar fi dacă ai putea asocia un logo cu cifrele și să irosești mai puțin din buget? \n \n Convertește mai mult din audiența ta țintă în clienți plătitori."}
        paragraphLineBreaks={[10]}
        featureContents={marketingHeroData}
        maxWidth="900px"
        bgColor="#070b18"
      />
      <SolutionSection
        title="Află ce își doresc cu adevărat vizitatorii țintă"
        description="Știi cum vizitatorii ideali găsesc și interacționează cu site-ul tău? Analitica tradițională arată cele mai vizitate pagini și surse, dar aceasta nu reflectă vocea clienților tăi."
        paragraphs={[
          "Îmbogățește analiza bazată pe cifre cu date despre companii, astfel încât să poți reduce cheltuielile inutile și să creezi conținutul pe care îl doresc clienții tăi.",
        ]}
       buttonPrimaryText="Începe perioada de probă gratuită"
       buttonSecondaryText="Află mai multe"
        flexDirection="row-reverse"
        lottieUrl="https://lottie.host/f6345aeb-07cc-46cb-95c4-8d53a6843776/6q267JMB8h.json"
      />

      <SolutionSection
        title="Investește bugetul de publicitate în cumpărători, nu în navigatori."
        description="Bugetul tău de publicitate se irosește pe vizitatori care nu vor cumpăra niciodată de la tine? Sau te chinui să legi mai mulți vizitatori și dispozitive pentru atribuire?"
        paragraphs={[
          "Urmărește comportamentul complet al contului astfel încât să poți construi audiențe țintă de companii și să convertești mai mult cu un buget mai mic.",
        ]}
        buttonPrimaryText="Începe perioada de probă gratuită"
        buttonSecondaryText="Află mai multe"
        lottieUrl="https://lottie.host/e4382fd0-b46d-400a-967b-6215228eb33a/fBaLWbHaYm.json"
        flexDirection="row"
      />

      <SolutionSection
        title="Transmite fără întreruperi mesajul potrivit la momentul potrivit"
        description="Vrei să vezi cum ratele de respingere scad și implicarea crește? Îmbunătățește-ți strategia cu personalizarea site-ului care se adaptează în funcție de tipul de companie din care provine vizitatorul tău."
        paragraphs={[
          "Asigură-te că găsesc conținutul despre care știi că va rezona cu ei înainte să iasă și să genereze conversii.",
        ]}
        buttonPrimaryText="Începe perioada de probă gratuită"
        buttonSecondaryText="Află mai multe"
        flexDirection="row-reverse"
        lottieUrl="https://lottie.host/a0823732-82a1-42cb-93ae-e24d198d5410/uakxoKutzx.json"
      />

      <SolutionSection
        title="Nu rata vizitatorii cu care echipa ta de vânzări vrea să vorbească."
        description="Conversiile inbound nu sunt întotdeauna pe placul echipelor tale de vânzări? Evaluează, grupează și direcționează lead-urile care se potrivesc profilului clientului tău ideal."
        paragraphs={[
          "Oferă echipei de vânzări ceea ce au nevoie pentru a menține traseele de vânzări pe drumul cel bun, chiar și atunci când conversiile sunt scăzute.",
        ]}
        buttonPrimaryText="Începe perioada de probă gratuită"
        buttonSecondaryText="Află mai multe"
        lottieUrl="https://lottie.host/99c99765-0406-472c-80cd-3bbea0bdd7e2/qbrPPDZWeX.json"
        flexDirection="row"
      />
    </div>
  );
}
