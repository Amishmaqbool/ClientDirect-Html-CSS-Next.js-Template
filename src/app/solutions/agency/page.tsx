import React from 'react'
import HeroSection from '@/components/home/HeroSection'
import { agencyHeroData, faqList } from '@/constants/solutions/agency'
import FaqSection from "@/components/common/FaqSection";
export default function page() {
  return (
    <div>
      <HeroSection
        headingText={"Platformă de identificare a vizitatorilor cu etichetă albă"}
        headingLineBreaks={[3]}
        paragraphText={"Identifică companiile de pe site-urile clienților tăi și furnizează echipelor lor de vânzări lead-uri de calitate, fără a te baza pe conversii. Construiește noi servicii și fluxuri de venituri sub propriul tău brand."}
        paragraphLineBreaks={[10, 25]}
        featureContents={agencyHeroData}
        maxWidth="900px"
        bgColor="#070b18"
      />
      <FaqSection faqList={faqList} />
    </div>
  )
}
