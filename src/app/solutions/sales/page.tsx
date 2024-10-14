import React from 'react'
import HeroSection from '@/components/home/HeroSection'
import { salesHeroData } from '@/constants/solutions/sales'
import TextBlock from '@/components/common/TextBlock'
export default function page() {
    return (
        <div>
            <HeroSection
                headingText={"Transformă traficul în conductă."}
                headingLineBreaks={[3, 5]}
                paragraphText={"Te străduiești să generezi suficiente lead-uri de calitate pentru a-ți atinge ținta? Sau outbound-ul rece pur și simplu nu generează rezultatele de care ai nevoie?"}
                paragraphLineBreaks={[10]}
                featureContents={salesHeroData}
                maxWidth="900px"
                bgColor="#070b18"
            />
        </div>
    )
}
