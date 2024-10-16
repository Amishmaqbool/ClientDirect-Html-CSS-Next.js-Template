import Image from "next/image";
import React from "react";
import BackgroundImage from "../../../public/images/background-customer-stories-image.png";
import HeroSection from "@/components/home/HeroSection";
import Arrow from "@/assets/svgs/arrow.svg";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customer Stories",
  description:
    "Discover how businesses like yours use Snitcher to identify, engage, and acquire new customers",
  metadataBase: new URL("https://snitchers.vercel.app/customer-stories"),
};

const caseStudies = [
  {
    title:
      "Cum Usersnap a obținut vizibilitate critică asupra campaniilor de marketing cu Snitcher",
    description:
      "Usersnap își optimizează campaniile de marketing și vânzări cu Snitcher, obținând informații critice despre segmentarea vizitatorilor și tendințele din industrie, ceea ce duce la strategii mai bine țintite și mai eficiente, care rezonează cu audiența lor corporativă.",
    logo: "/images/customer-stories-image.png",
    link: "/",
  },
  {
    title: "Cum Waylay a crescut ratele de conversie cu 4,7%",
    description:
      "Waylay folosește datele precise și capacitățile de integrare ale Snitcher pentru a-și alimenta procesele de generare de lead-uri și vânzări, realizând o creștere de 4,7% a ratelor de conversie și optimizându-și interacțiunile cu persona țintă.",
    logo: "/images/customer-stories-image2.png",
    link: "/",
  },
  {
    title: "Cum Fleetdm a crescut veniturile cu 70 de conturi noi de la Snitcher",
    description:
      "Fleetdm își crește eficient pipeline-ul cu 70 de conturi noi implementând Snitcher, îmbunătățind procesul de calificare a lead-urilor și interacțiunea în vânzări, asigurând astfel o abordare țintită către prospecte interesate, ceea ce duce la o creștere semnificativă a veniturilor.",
    logo: "/images/customer-stories-image3.png",
    link: "/",
  },
  {
    title: "Cum TalentDesk a câștigat un client valoros în 30 de zile de la utilizarea Snitcher",
    description:
      "TalentDesk câștigă un client valoros în 30 de zile de la începutul utilizării Snitcher, alimentându-și strategiile de marketing și procesele de vânzări pentru a ținti și converti eficient lead-uri care anterior erau trecute cu vederea în campaniile digitale și procesele de vânzări.",
    logo: "/images/customer-stories-image4.png",
    link: "/",
  },
  {
    title: "Adacta descoperă funnel-ul ascuns identificând cu 500% mai multe companii",
    description:
      "Adacta a crescut dramatic vizibilitatea traficului de pe site-ul lor web, integrând fără efort Snitcher în stack-ul lor tehnologic pentru a înțelege în profunzime călătoria cumpărătorului și pentru a alimenta campaniile ABM țintite.",
    logo: "/images/customer-stories-image5.png",
    link: "/",
  },
  {
    title:
      "Cum Influential Software a închis $10k MRR în 6 săptămâni și a îmbunătățit ratele de succes cu 5%",
    description:
      "În doar șase săptămâni, Influential Software își îmbunătățește dramatic eficiența în vânzări și identificarea lead-urilor, rezultând într-o creștere a ratei de succes și o creștere puternică a veniturilor, datorită implementării strategice a Snitcher.",
    logo: "/images/customer-stories-image6.png",
    link: "/",
  },
];

const CaseStudyList = () => {
  return (
    <div>
      <HeroSection
        headingText={"Poveștile clienților \n"}
        paragraphText={"Descoperă cum afaceri ca a ta folosesc Snitcher pentru a identifica, \n implica și achiziționa noi clienți."}
        maxWidth="960px"
        bgColor="#070b18"
        buttonVisible = {false}
      />
      <div
        className="relative max-lg:px-4 pb-20"
        style={{
          backgroundImage: `url(${BackgroundImage.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'repeat',
        }}>
        <div className="case-study-list grid gap-[64px] lg:px-24 mb-[32px] z-[1] max-w-[1280px] -mt-8 pt-16 mx-auto p-[20px] max-base:px-1 max-xs:px-6 md:grid-cols-2">
          {caseStudies.map((caseStudy, index) => (
            <div
              key={index}
              className="case-study-item max-w-full md:max-w-[512px] max-lg:mb-[32px]">
              <Image
                src={caseStudy.logo}
                alt={caseStudy.title}
                className="case-study-logo"
                width={100}
                height={100}
              />
              <h3 className="mt-[24px] mb-[16px] text-[24px] leading-[28px] tracking-[-.48px] font-bold min-h-[55px]">
                {caseStudy.title}
              </h3>
              <p className="mb-[24px] text-[#667085] text-[16px] leading-[28px]">
                {caseStudy.description}
              </p>
              <a
                href={caseStudy.link}
                className="learn-more-button flex w-fit gap-2 items-end bg-[#101828] border border-[#00000026] text-[14px] leading-[20px] py-[10px] h-fit px-[16px] text-white rounded-full">
                <p className="self-end">Află mai multe</p>
                <Image src={Arrow} alt="Arrow" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudyList;