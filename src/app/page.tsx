import HeroSection from "@/components/home/HeroSection";
import TextBlock from "@/components/common/TextBlock";
import gradientPurple from "@/assets/images/img-second-leadgen.webp";
import IntegrationSection from "@/components/home/IntegrationsSection";
import { Metadata } from "next";
import CardsScrollAnimation from "@/components/CardsScrollAnimation";
import VideoSection from "@/components/VideoSection";

export const metadata: Metadata = {
  title:
    "ClientiDirect | Identificarea vizitatorilor pentru agenții | Probă gratuită",
  description:
    "Oferiți clienților dvs. o soluție puternică de identificare a vizitatorilor cu etichetă albă cu ClientiDirect. Creșteți veniturile, generați lead-uri și susțineți serviciile existente.",
  metadataBase: new URL("https://clientidirect.com/"),
};
export default function Home() {
  const mainHeading =
    "Oferă vânzărilor avantajul pentru a găsi și a încheia mai multe oferte";
  const subHeading =
    "Primiți notificări atunci când companiile țintă vă vizitează site-ul web și vedeți ce le interesează. Ajutați echipele să înceapă și să țină conversații mai relevante pe parcursul ciclului de vânzări.";
  const ctaText = "Începeți proba gratuită";
  const secondaryCtaText = "Explorați ClientiDirect pentru vânzări";
  const FirstTestimonial = {
    quote:
      "Recomand în mod constant ClientiDirect - în testarea noastră, ei nu numai că au adunat informații despre un număr mai mare de clienți potențiali decât concurenții săi, dar au avut și informații mai detaliate despre acești clienți potențiali.",
    author: "David G.",
    role: "Head of Sales",
  };

  const SecondTestimonial = {
    quote:
      "ClientiDirect ne-a permis să știm ce companii ne vizitează site-ul web. Este un instrument ideal pentru marketing bazat pe cont și ajută la adunarea de noi clienți potențiali.",
    author: "Marc-Antoine C.",
    role: "Marketing and Sales Coordinator",
  };

  const ThirdTestimonial = {
    quote:
      "Oamenii navighează pe piața noastră, iar ClientiDirect este mecanismul prin care putem înțelege cine caută produsele noastre și de ce.",
    author: "Tyler E.",
    role: "Founder and CEO",
  };

  return (
    <>
      <div className="">
        <HeroSection
          headingText="Aflați cine se află pe site-ul dvs. și obțineți mai multe venituri."
          paragraphText="ClientiDirect dă putere echipelor B2B să înțeleagă, să implice și să transforme vizitatorii anonimi ai site-ului web în potențiali clienți potențiali, utilizând tehnologia de ultimă oră de identificare, urmărirea în timp real a vizitatorilor și informații despre public bazate pe date."
          maxWidth="960px"
          bgColor="#070b18"
        />

        <VideoSection />

        <TextBlock
          mainHeading={mainHeading}
          subHeading={subHeading}
          ctaText={ctaText}
          secondaryCtaText={secondaryCtaText}
          testimonial={FirstTestimonial}
          lottieUrl="https://lottie.host/67c29b1c-f8f5-4262-9529-d7d089de0a37/ZooYErX6nm.json"
          isReversed={false}
        />

        <TextBlock
          mainHeading={
            "Reduceți cheltuielile publicitare risipite și convertiți mai mulți vizitatori vizați"
          }
          subHeading={
            "Redirecționați sau excludeți vizitatori pentru a îmbunătăți continuu performanța campaniei dvs. Personalizați călătoriile și difuzați conținut relevant publicului dvs. la momentul potrivit"
          }
          ctaText={"Începeți proba gratuită"}
          secondaryCtaText={"Explorați ClientiDirect pentru vânzări"}
          testimonial={SecondTestimonial}
          lottieUrl="https://lottie.host/e7e6bfef-6fd9-4b22-8825-dc67d973bfb9/1diB1j1H81.json"
          isReversed={true}
        />
        <TextBlock
          mainHeading={"Înțelegeți ce își dorește de fapt publicul țintă"}
          subHeading={
            "Obțineți informații mult mai profunde despre ceea ce atrage, antrenează și convertește vizitatorii dvs. ideali. Nu mai investiți în reclame și conținut cu un ROI scăzut și începeți să optimizați pentru venituri."
          }
          ctaText={"Începeți proba gratuită"}
          secondaryCtaText={"Explorați ClientiDirect pentru vânzări"}
          testimonial={ThirdTestimonial}
          lottieUrl="https://lottie.host/ade35443-289d-416d-98a7-12f616efb5bd/GxNxOf0TXi.json"
          isReversed={false}
        />
      </div>
      <div
        className="max-w-full bg-[#101828] pb-[97px]"
        style={{
          backgroundImage: `url(${gradientPurple})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <IntegrationSection />
      </div>
      <div className="bg-[#fcfcfd]">
        <div className="max-w-[1200px] flex flex-col justify-center items-center mx-auto">
          {/* <DriveBudget /> */}
          <CardsScrollAnimation />
        </div>
      </div>
    </>
  );
}
