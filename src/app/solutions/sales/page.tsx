import React from 'react'
import HeroSection from '@/components/home/HeroSection'
import { salesHeroData } from '@/constants/solutions/sales'
import SolutionSection from '@/components/solutions/SolutionSection'

export default function page() {
    return (
        <div>
            <HeroSection
                headingText={"Transformă traficul în oportunități."}
                headingLineBreaks={[3, 5]}
                paragraphText={"Te străduiești să generezi suficiente lead-uri de calitate pentru a-ți atinge obiectivele? Sau prospectarea la rece pur și simplu nu aduce rezultatele de care ai nevoie?"}
                paragraphLineBreaks={[10]}
                featureContents={salesHeroData}
                maxWidth="900px"
                bgColor="#070b18"
            />
            <SolutionSection
                title="Nu mai rata vizitele companiilor țintă"
                description="Snitcher dezvăluie companiile din spatele traficului tău anonim, fără a depinde de conversii sau formulare."
                listItems={[
                    "Aplică scorarea lead-urilor pentru a pre-califica și segmenta companiile potrivite.",
                    "Combină detaliile companiei cu comportamentul pentru a găsi ceea ce este important pentru tine.",
                    "Nu mai pierde timp cu companii nepotrivite, în timp ce cele potrivite trec neobservate și nu mai apar."
                ]}
                buttonPrimaryText="Începe perioada de probă gratuită"
                buttonSecondaryText="Află mai multe"
                flexDirection='row-reverse'
                lottieUrl="https://lottie.host/4e38670a-55ad-4f80-abf3-2b04665f2f92/CDVLxeHZmc.json"
            />

            <SolutionSection
                title="Acceptă, respinge, bucură-te"
                description="Rămâi organizat, păstrează-ți CRM-ul ordonat și asigură-te că lead-urile continuă să avanseze în pipeline-ul tău."
                listItems={[
                    "Acceptă sau respinge companiile care îndeplinesc criteriile tale de pre-calificare.",
                    "Trimite lead-urile în CRM-ul tău și îmbogățește înregistrările existente.",
                    "Atribuie lead-uri echipei și declanșează automatizări."
                ]}
                buttonPrimaryText="Începe perioada de probă gratuită"
                buttonSecondaryText="Află mai multe"
                lottieUrl="https://lottie.host/4034954f-25fe-4bf1-a097-e167d0a704b1/hkHD3PaOGg.json"
                flexDirection='row'
            />

            <SolutionSection
                title="Programează mai multe întâlniri cu date de intenție în timp real"
                description="Pare a fi un joc de noroc atunci când alegi potențiali clienți pe care să te concentrezi? Sau te-ai săturat să urmărești lead-uri care nu au nicio intenție să cumpere vreodată de la tine?"
                paragraphs={["Scapă de munca manuală și folosește semnalele de intenție în timp real, astfel încât să poți prioritiza lead-urile care manifestă un comportament de cumpărare."]}
                buttonPrimaryText="Începe perioada de probă gratuită"
                buttonSecondaryText="Află mai multe"
                flexDirection='row-reverse'
                lottieUrl="https://lottie.host/b9c7eb6d-576c-4e6c-9a5b-97df1a6856c5/opnZv2yByD.json"
            />

            <SolutionSection
                title="Păstrează conversațiile relevante și închide mai multe tranzacții"
                description="Rămâi în joc, identifică noi factori de decizie și împiedică tranzacțiile să se răcească cu profiluri complete de comportament și notificări în timp real."
                paragraphs={["Astfel, poți să îți sprijini potențialii clienți cu informațiile de care au nevoie pentru a merge mai departe."]}
                buttonPrimaryText="Începe perioada de probă gratuită"
                buttonSecondaryText="Află mai multe"
                flexDirection='row'
                lottieUrl="https://lottie.host/a4fe1792-f10a-4117-b671-41b4111f9351/7HDIuexqf8.json"
            />

        </div>
    )
}
