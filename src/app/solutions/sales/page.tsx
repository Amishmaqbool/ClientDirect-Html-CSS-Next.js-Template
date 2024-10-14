import React from 'react'
import HeroSection from '@/components/home/HeroSection'
import { salesHeroData } from '@/constants/solutions/sales'
import SolutionSection from '@/components/solutions/SolutionSection'
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
            <SolutionSection
                title="Never miss target company visits, again"
                description="Snitcher reveals the companies behind your anonymous traffic, without depending on conversions or form submissions."
                listItems={[
                    "Apply lead scoring to pre-qualify and segment good fit leads.",
                    "Mix and match company details with behavior to find what’s important to you.",
                    "Stop wasting your time on bad fit companies while the good ones slip through the cracks, never to be seen again."
                ]}
                buttonPrimaryText="Start Free Trial"
                buttonSecondaryText="Learn More"
                flexDirection='row-reverse'
                lottieUrl="https://lottie.host/4e38670a-55ad-4f80-abf3-2b04665f2f92/CDVLxeHZmc.json"
            />


            <SolutionSection
                title="Accept, Reject, Rejoice"
                description="Stay organised, keep your CRM tidy and ensure leads continue moving through your pipeline."
                listItems={[
                    "Accept or reject companies that match your pre-qualification criteria.",
                    "Route leads to your CRM and enrich your existing records.",
                    "Assign team members and trigger automations."
                ]}
                buttonPrimaryText="Start Free Trial"
                buttonSecondaryText="Learn More"
                lottieUrl="https://lottie.host/4034954f-25fe-4bf1-a097-e167d0a704b1/hkHD3PaOGg.json"
                flexDirection='row'
            />



        </div>
    )
}
