import React from "react";
import gradientImage from "@/assets/images/colours.webp";
import gradientPruple from "@/assets/images/img-second-leadgen.webp";
import { reviews } from "@/constants/features";
import fullStars from "@/assets/images/five-stars.webp";
import halfStars from "@/assets/images/four-five-stars.webp";
import reviewIcon from "@/assets/images/review-icon.webp";
import jumpLead from "@/assets/images/jump-lead-gen.webp";
import Asana from "@/assets/images/image-lead-gen-third.webp";
import Enrichment from "@/assets/images/enrichment.webp";
import Visitor from "@/assets/images/visitor.webp";
import Prospect from "@/assets/images/prospect.webp";
import manLead from "@/assets/images/man-lead.webp";
import Filter from "@/assets/images/filter.webp";
import Invision from "@/assets/images/lead-gen-four.webp";
import manTest from "@/assets/images/man2.webp";
import Image from "next/image";
import HeroSection from "@/components/home/HeroSection";
export default function LeadGen() {
  const renderStars = (rating: number) => {
    if (rating === 5) {
      return <Image src={fullStars} alt="Five Stars" width={110} height={22} />;
    } else if (rating === 4.5) {
      return (
        <Image
          src={halfStars}
          alt="Four and a Half Stars"
          width={110}
          height={22}
        />
      );
    }
    return null;
  };

  return (
    <>
      <HeroSection
        headingText="Capture leads from your website you didn’t know you had."
        headingLineBreaks={[3, 7]}
        paragraphText="Snitcher reveals who’s behind your anonymous traffic to turn your website into your most valuable asset!"
        paragraphLineBreaks={[7]}
        paragraphColor="#d0d5dd"
        maxWidth="900px"
        bgColor="#070b18"
      />
      <div
        className="w-full"
        style={{
          backgroundImage: `url(${gradientImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-[1200px] px-2 mx-auto flex flex-col justify-center items-center">
          <div className="flex flex-col gap-16 mb-12">
            <div className="flex gap-20">
              <div className="w-1/2">
                <h2 className="text-4xl leading-[44px] font-bold text-black">
                  Snitcher&apos;s data is just better. <br></br>
                  <span>See it for yourself.</span>
                </h2>

                <p className="text-[#475467] text-lg mt-4">
                  We believe great data is at the heart of growth. So we made it
                  our mission to continually evolve our identification rates and
                  quality to give you the edge to win more customers.
                  <br />
                  <span className="block pt-6">
                    Fill sales pipelines and supercharge your marketing machine
                    today!
                  </span>
                </p>

                <button className="mt-7 flex items-center justify-center gap-2 font-semibold rounded-full py-2 pl-4 pr-3 text-white bg-[#101828] border-[1.5px] border-[#00000026] text-sm">
                  Start 14-Day Free Trial
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                  >
                    <path
                      d="M3.33301 10.6196H16.6663M16.6663 10.6196L11.6663 5.61963M16.6663 10.6196L11.6663 15.6196"
                      stroke="currentColor"
                      stroke-width="1.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </button>
              </div>

              <div className="w-1/2">
                <Image alt="snitcher" src={jumpLead} width={560} height={363} />
              </div>
            </div>

            <div className="flex justify-between gap-6 mt-8">
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="bg-white py-6 px-[17.5px] border-black border rounded-lg w-full max-w-md"
                >
                  <div className="flex items-center mb-4">
                    {renderStars(review.rating)}
                  </div>
                  <h3 className="text-base font-semibold mb-4 text-black">{`"${review.reviewBy}"`}</h3>
                  <p className="text-[#475467] font-xs mb-4">
                    {review.content}
                  </p>
                  <div className="flex items-center gap-3">
                    <Image
                      src={reviewIcon}
                      alt="Reviewer Icon"
                      width={24}
                      height={24}
                    />
                    <div className="bg-[#475467] w-[15px] h-[2px]"></div>
                    <p className="ml-2 text-black text-sm font-semibold">
                      {review.reviewer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className="max-w-full bg-[#101828]"
        style={{
          backgroundImage: `url(${gradientPruple})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="px-4 max-w-[1200px] mx-auto flex flex-col justify-center items-center pt-20 text-white">
          <div className="px-32 flex flex-col items-center pb-20">
            <div className="inline-block rounded-2xl bg-[#ffffff1a] border border-[#ffffff1a] pt-1 pb-[2px] px-2 text-xs font-semibold text-center">
              Identify
            </div>
            <h2 className="text-center text-4xl font-bold tracking-[-1px] pt-10">
              Capture and close anonymous visitors
            </h2>
            <p className="text-[#7d89b0] text-lg text-center pt-5 ">
              Identify turns your anonymous website traffic into actionable
              leads and information in real-time. So you can make the most of
              every marketing dollar and close more deals.
            </p>
            <button className="mt-4 flex items-center justify-center gap-2 rounded-full pt-2 pb-[6px] pl-4 pr-3 text-white bg-[#ffffff1a] border-[1.5px] border-[#ffffff1a] text-sm backdrop-filter">
              Start 14-Day Free Trial
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
              >
                <path
                  d="M3.33301 10.6196H16.6663M16.6663 10.6196L11.6663 5.61963M16.6663 10.6196L11.6663 15.6196"
                  stroke="currentColor"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </button>
          </div>

          <div className="flex gap-2 pb-28">
            <div className="w-1/2">
              <Image alt="Asana" src={Asana} width={540} height={448} />
            </div>
            <div className="w-1/2">
              <div className="flex gap-5 items-start">
                <Image
                  src={Enrichment}
                  alt="enrichment"
                  width={50}
                  height={50}
                  className="object-contain"
                />
                <div>
                  <h2 className="text-lg font-semibold">Enrichment</h2>
                  <p className="text-[#7d89b0] text-lg">
                    Enrich each identified company and your CRM with up to date
                    and detailed information such as industry, size, location
                    etc.
                  </p>
                </div>
              </div>

              <div className="flex gap-5 items-start mt-10">
                <Image
                  src={Visitor}
                  alt="visitor"
                  width={50}
                  height={50}
                  className="object-contain"
                />
                <div>
                  <h2 className="text-lg font-semibold">Visitor behavior</h2>
                  <p className="text-[#7d89b0] text-lg">
                    Follow lead journeys from source to close – get the full
                    picture on what leads are doing, not only those who convert.
                  </p>
                </div>
              </div>

              <div className="flex gap-5 items-start mt-10">
                <Image
                  src={Prospect}
                  alt="propsect"
                  width={50}
                  height={50}
                  className="object-contain"
                />
                <div>
                  <h2 className="text-lg font-semibold">Propsect</h2>
                  <p className="text-[#7d89b0] text-lg">
                    Use key pieces of information to to select the right
                    decision maker and pull contact details from the dashboard.
                  </p>
                </div>
              </div>

              <div
                className="w-full h-[1px] mt-10"
                style={{
                  background:
                    "linear-gradient(110.65deg, rgba(255, 255, 255, 0) 1.16%, rgba(255, 255, 255, 0.1) 51.61%, rgba(255, 255, 255, 0) 100%)",
                }}
              ></div>

              <div className="flex items-start gap-4 max-w-[80%] mt-14">
                <Image
                  src={manLead}
                  alt="man"
                  width={48}
                  height={48}
                  className="object-contain"
                />
                <div className="text-xs font-semibold">
                  <p className="italic text-[#eaecf0] ">
                    &quot;The software design is great - It&apos;s an ideal tool
                    for Account Based Marketing and helps to gather new
                    leads.&quot;
                  </p>
                  <p className="text-[#b9c0d4] flex gap-2 items-center pt-3">
                    Marc-Antoine C.
                    <span>
                      <div className="w-[15px] bg-[#98a2b3] h-[2px] -mt-[2px]"></div>
                    </span>{" "}
                    <span className="text-[#7d89b0]">
                      Marketing and Sales Coordinator
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 max-w-[1200px] mx-auto flex flex-col justify-center items-center pt-20">
        <div className="px-32 flex flex-col items-center pb-20">
          <div className="inline-block rounded-2xl bg-[#d1e0ff] border border-[#d1e0ff] pt-1 pb-[2px] px-4 text-xs font-bold text-center text-[#0040c1]">
            Segment
          </div>
          <h2 className="text-center text-4xl font-bold tracking-[-1px] pt-10">
            Build lead lists that turn into customers
          </h2>
          <p className="text-lg text-center pt-5 text-[#475467]">
            Group and segment leads by company attributes and behaviours so you
            can put your marketing and sales resources to work on customers, not
            browsers.
          </p>
        </div>

        <div className="flex gap-2">
          <div className="w-2/6">
            <Image
              alt="filter"
              src={Filter}
              width={48}
              height={48}
              className="object-contain"
            />

            <div className="mt-8">
              <h2 className="text-[#344054] font-bold text-2xl">Score</h2>
              <p className="text-[#667085] text-base leading-7 tracking-wide">
                Define company attributes and behaviours to configure lead
                scoring. Trigger automations and manage your website traffic
                intelligently. <br></br>
                <span className="block pt-4">
                  Collect great fit leads on autopilot so you can spend more
                  time retargeting and selling to buyers, not browsers.
                </span>
              </p>
            </div>

            <button className="mt-7 flex items-center justify-center gap-2 font-semibold rounded-full py-2 pl-4 pr-3 text-white bg-[#101828] border-[1.5px] border-[#00000026] text-sm">
              Start 14-Day Free Trial
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
              >
                <path
                  d="M3.33301 10.6196H16.6663M16.6663 10.6196L11.6663 5.61963M16.6663 10.6196L11.6663 15.6196"
                  stroke="currentColor"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </button>

            <div
              className="w-full h-[1px] mt-8"
              style={{
                background:
                  "repeating-linear-gradient(110.65deg, #0000 1.16%, #00000026 51.09%, #0000)",
              }}
            ></div>

            <div className="flex items-start gap-4 max-w-[80%] mt-10">
              <Image
                src={manTest}
                alt="man"
                width={48}
                height={48}
                className="object-contain"
              />
              <div className="text-xs font-semibold">
                <p className="italic text-[#344054] ">
                  &quot;We could find the contact information with a few clicks
                  and reach out to possible deals&quot;
                </p>
                <p className="text-[#101828] flex gap-2 items-center pt-3">
                  Vencel M.
                  <span>
                    <div className="w-[15px] bg-[#98a2b3] h-[2px] -mt-[2px]"></div>
                  </span>{" "}
                  <span className="text-[#667085]">
                    Head of Growth, Partner
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="w-4/6">
            <Image
              alt="Invision"
              src={Invision}
              width={790}
              height={552}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </>
  );
}
