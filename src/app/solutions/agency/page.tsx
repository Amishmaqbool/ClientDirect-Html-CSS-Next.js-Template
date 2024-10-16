import React from "react";
import HeroSection from "@/components/home/HeroSection";
import { agencyHeroData, faqList } from "@/constants/solutions/agency";
import FaqSection from "@/components/common/FaqSection";
import SolutionSection from "@/components/solutions/SolutionSection";
import CallToActionSection from '@/components/solutions/CallToActionSection';
export default function page() {
  return (
    <div>
      <HeroSection
        headingText={
<<<<<<< HEAD
          "Platformă de identificare a vizitatorilor cu etichetă albă"
        }
        headingLineBreaks={[3]}
        paragraphText={
          "Identifică companiile de pe site-urile clienților tăi și furnizează echipelor lor de vânzări lead-uri de calitate, fără a te baza pe conversii. Construiește noi servicii și fluxuri de venituri sub propriul tău brand."
=======
          "Platformă de identificare a vizitatorilor sub marcă proprie"
        }
        headingLineBreaks={[3]}
        paragraphText={
          "Identifică companiile de pe site-urile clienților tăi și furnizează echipelor \n lor de vânzări lead-uri de calitate, fără a te baza pe conversii. Construiește noi \nservicii și fluxuri de venituri sub propriul tău brand."
>>>>>>> c986dc8 (Auth updates)
        }
        paragraphLineBreaks={[10, 25]}
        featureContents={agencyHeroData}
        maxWidth="900px"
        bgColor="#070b18"
      />

      <SolutionSection
        title="Transformă cheltuielile de marketing în venituri în mod previzibil"
        description="Noi ne ocupăm de date și detalii tehnice, astfel încât tu să îți poți ajuta clienții să atingă noi culmi și să își depășească obiectivele de creștere."
        paragraphs={[
<<<<<<< HEAD
          "Test with confidence and deliver brilliant marketing strategies backed by the best identification data on the market.",
        ]}
        buttonPrimaryText="Start Free Trial"
        buttonSecondaryText="Learn More"
=======
          "Testează cu încredere și oferă strategii de marketing extraordinare, susținute de cele mai bune date de identificare de pe piață."       ]}
        buttonPrimaryText="Începe perioada de probă gratuită"
        buttonSecondaryText="Află mai multe"
>>>>>>> c986dc8 (Auth updates)
        flexDirection="row-reverse"
        lottieUrl="https://lottie.host/3241f51c-46c3-4f29-9853-7b6610b4bb6d/lMbhlLEoat.json"
      />

      <SolutionSection
        title="Lead-urile câștigate cu greu se răcesc? Nu cât timp ești tu la conducere."
        description="Ești obosit să generezi lead-uri doar pentru a vedea cum clienții încep să le valorifice după luni de zile? Sau poate niciodată? Direcționează lead-urile cu intenție ridicată acolo unde clienții tăi le doresc cu adevărat."
        paragraphs={[
          "Configurează propriile notificări în timp real pentru a te asigura că echipele lor de vânzări urmează lead-urile înainte ca acestea să se răcească.",
        ]}
<<<<<<< HEAD
        buttonPrimaryText="Start Free Trial"
        buttonSecondaryText="Learn More"
=======
        buttonPrimaryText="Începe perioada de probă gratuită"
        buttonSecondaryText="Află mai multe"
>>>>>>> c986dc8 (Auth updates)
        lottieUrl="https://lottie.host/341efba8-0380-4af5-9c4f-463bacd25cc0/VJlTuACijC.json"
        flexDirection="row"
      />

      <SolutionSection
        title="Completează imaginea cu analize îmbogățite"
        description="Te chinui să convingi clienții că strategia ta funcționează cu rapoarte de metrici de fațadă? Mergi dincolo de cifre și analizează calitatea."
        paragraphs={[
          "Astfel încât să poți investi cu încredere bugetul echipei și al clienților în strategii și tactici care atrag cumpărători, nu doar navigatori.",
        ]}
<<<<<<< HEAD
        buttonPrimaryText="Start Free Trial"
        buttonSecondaryText="Learn More"
=======
        buttonPrimaryText="Începe perioada de probă gratuită"
        buttonSecondaryText="Află mai multe"
>>>>>>> c986dc8 (Auth updates)
        flexDirection="row-reverse"
        lottieUrl="https://lottie.host/71525d32-3e1e-40a5-9c2a-762a999e498b/saCSwu80fh.json"
      />

      <CallToActionSection />
      <FaqSection faqList={faqList} />
    </div>
  );
}
