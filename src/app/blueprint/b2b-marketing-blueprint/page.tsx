import Image from "next/image";
import React from "react";

const sectionData = [
  {
    sectionTitle: "Buyer Persona",
    sectionColor: "bg-[#ca8504]",
    sectionBorderColor: "border-[#ca8504]",
    data: [
      {
        id: 1,
        icon: "/images/blueprint-brain.png",
        title: "Deep Understanding",
        description:
          "Knowing who your buyers are is only the tip of the iceberg. The key to effective B2B marketing is understanding them on a deeper level — their motivations, their frustrations, and what they value most.",
        status: "active",
      },
      {
        id: 2,
        icon: "/images/blueprint-thumb.png",
        title: "Goals and Motivations",
        description:
          "Your buyers' decisions are driven by their goals and motivations. By understanding what these are, you can align your marketing messages to resonate with what they care about most.",
        status: "active",
      },
      {
        id: 3,
        icon: "/images/blueprint-heart.png",
        title: "Pain Points",
        description:
          "Every buyer has challenges or 'pain points' that they are looking to resolve. Understanding these challenges can help you position your product or service as the ideal solution.",
        status: "active",
      },
      {
        id: 4,
        icon: "/images/blueprint-deck.png",
        title: "Communication Channels",
        description:
          "Different audiences prefer different communication channels. Whether it's email, social media, or direct mail, you need to reach your audience where they spend their time.",
        status: "comingSoon",
      },
    ],
  },
  {
    sectionTitle: "Content Strategy",
    sectionColor: "bg-[#e04f16]",
    sectionBorderColor: "",
    data: [
      {
        id: 1,
        icon: "/images/blueprint-Deck-Icon-9.png",
        title: "Value Proposition",
        description:
          "Your value proposition communicates the unique benefits your product or service offers to customers. A strong value proposition differentiates your brand and gives potential customers a reason to choose you over competitors.",
        status: "active",
      },
      {
        id: 2,
        icon: "/images/blueprint-Deck-Icon-11.png",
        title: "SEO & Keyword Research",
        description:
          "Search engine optimization (SEO) is a critical part of any content strategy. By optimizing your content for relevant keywords, you can improve your visibility in search engine results and attract more qualified leads.",
        status: "comingSoon",
      },
      {
        id: 3,
        icon: "/images/blueprint-Deck-Icon-13.png",
        title: "Content types & formats",
        description:
          "Different types of content can engage your audience in different ways. From blog posts to white papers, choosing the right format can help you effectively communicate your message and engage your audience.",
        status: "comingSoon",
      },
      {
        id: 4,
        icon: "/images/blueprint-Deck-Icon-15.png",
        title: "Distribution & promotion",
        description:
          "Creating great content is just the first step. You also need to effectively distribute and promote your content to ensure it reaches your target audience and drives results.",
        status: "comingSoon",
      },
    ],
  },
  {
    sectionTitle: "Social Media",
    sectionColor: "bg-[#e62e05]",
    sectionBorderColor: "",
    data: [
      {
        id: 1,
        icon: "/images/blueprint-Deck-Icon-17.png",
        title: "Platform Selection",
        description:
          "Social media platforms are not a one-size-fits-all solution. Different platforms attract different demographics, so it's essential to select the ones that best align with your target audience and business goals.",
        status: "comingSoon",
      },
      {
        id: 2,
        icon: "/images/blueprint-Deck-Icon-19.png",
        title: "Content Calendar",
        description:
          "A content calendar helps to organize, schedule, and coordinate the publication of content across different social media platforms.",
        status: "comingSoon",
      },
      {
        id: 3,
        icon: "/images/blueprint-Deck-Icon-21.png",
        title: "Engagement Metrics",
        description:
          "Engagement metrics provide insight into how users are interacting with your content. They help you gauge the success of your social media efforts and refine your strategy.",
        status: "comingSoon",
      },
      {
        id: 4,
        icon: "/images/blueprint-Deck-Icon-23.png",
        title: "Campaign Strategy",
        description:
          "A well-crafted campaign strategy is key to achieving your social media marketing goals. From brand awareness to lead generation, it should guide all aspects of your campaign.",
        status: "comingSoon",
      },
    ],
  },
  {
    sectionTitle: "Email Marketing",
    sectionColor: "bg-[#e31b54]",
    sectionBorderColor: "",
    data: [
      {
        id: 1,
        icon: "/images/blueprint-Deck-Icon-25.png",
        title: "Platform Selection",
        description:
          "Social media platforms are not a one-size-fits-all solution. Different platforms attract different demographics, so it's essential to select the ones that best align with your target audience and business goals.",
        status: "comingSoon",
      },
      {
        id: 2,
        icon: "/images/blueprint-Deck-Icon-27.png",
        title: "Content Calendar",
        description:
          "A content calendar helps to organize, schedule, and coordinate the publication of content across different social media platforms.",
        status: "comingSoon",
      },
      {
        id: 3,
        icon: "/images/blueprint-Deck-Icon-29.png",
        title: "Engagement Metrics",
        description:
          "Engagement metrics provide insight into how users are interacting with your content. They help you gauge the success of your social media efforts and refine your strategy.",
        status: "comingSoon",
      },
      {
        id: 4,
        icon: "/images/blueprint-Deck-Icon-31.png",
        title: "Campaign Strategy",
        description:
          "A well-crafted campaign strategy is key to achieving your social media marketing goals. From brand awareness to lead generation, it should guide all aspects of your campaign.",
        status: "comingSoon",
      },
    ],
  },
  {
    sectionTitle: "Lead Generation",
    sectionColor: "bg-[#dd2590]",
    sectionBorderColor: "",
    data: [
      {
        id: 1,
        icon: "/images/blueprint-Deck-Icon-33.png",
        title: "Platform Selection",
        description:
          "Social media platforms are not a one-size-fits-all solution. Different platforms attract different demographics, so it's essential to select the ones that best align with your target audience and business goals.",
        status: "comingSoon",
      },
      {
        id: 2,
        icon: "/images/blueprint-Deck-Icon-35.png",
        title: "Content Calendar",
        description:
          "A content calendar helps to organize, schedule, and coordinate the publication of content across different social media platforms.",
        status: "comingSoon",
      },
      {
        id: 3,
        icon: "/images/blueprint-Deck-Icon-37.png",
        title: "Engagement Metrics",
        description:
          "Engagement metrics provide insight into how users are interacting with your content. They help you gauge the success of your social media efforts and refine your strategy.",
        status: "comingSoon",
      },
    ],
  },
  {
    sectionTitle: "Sales Alignment",
    sectionColor: "bg-[#ba24d5]",
    sectionBorderColor: "",
    data: [
      {
        id: 1,
        icon: "/images/blueprint-Deck-Icon-39.png",
        title: "Platform Selection",
        description:
          "Social media platforms are not a one-size-fits-all solution. Different platforms attract different demographics, so it's essential to select the ones that best align with your target audience and business goals.",
        status: "comingSoon",
      },
      {
        id: 2,
        icon: "/images/blueprint-Deck-Icon-41.png",
        title: "Content Calendar",
        description:
          "A content calendar helps to organize, schedule, and coordinate the publication of content across different social media platforms.",
        status: "comingSoon",
      },
      {
        id: 3,
        icon: "/images/blueprint-Deck-Icon-43.png",
        title: "Engagement Metrics",
        description:
          "Engagement metrics provide insight into how users are interacting with your content. They help you gauge the success of your social media efforts and refine your strategy.",
        status: "comingSoon",
      },
    ],
  },
  {
    sectionTitle: "Customer Retention",
    sectionColor: "bg-[#6938ef]",
    sectionBorderColor: "",
    data: [
      {
        id: 1,
        icon: "/images/blueprint-Deck-Icon-45.png",
        title: "Platform Selection",
        description:
          "Social media platforms are not a one-size-fits-all solution. Different platforms attract different demographics, so it's essential to select the ones that best align with your target audience and business goals.",
        status: "comingSoon",
      },
      {
        id: 2,
        icon: "/images/blueprint-Deck-Icon-47.png",
        title: "Content Calendar",
        description:
          "A content calendar helps to organize, schedule, and coordinate the publication of content across different social media platforms.",
        status: "comingSoon",
      },
      {
        id: 3,
        icon: "/images/blueprint-Deck-Icon-49.png",
        title: "Engagement Metrics",
        description:
          "Engagement metrics provide insight into how users are interacting with your content. They help you gauge the success of your social media efforts and refine your strategy.",
        status: "comingSoon",
      },
    ],
  },
  {
    sectionTitle: "Analytics",
    sectionColor: "bg-[#7839ee]",
    sectionBorderColor: "",
    data: [
      {
        id: 1,
        icon: "/images/blueprint-Deck-Icon-51.png",
        title: "Platform Selection",
        description:
          "Social media platforms are not a one-size-fits-all solution. Different platforms attract different demographics, so it's essential to select the ones that best align with your target audience and business goals.",
        status: "comingSoon",
      },
      {
        id: 2,
        icon: "/images/blueprint-Deck-Icon-53.png",
        title: "Content Calendar",
        description:
          "A content calendar helps to organize, schedule, and coordinate the publication of content across different social media platforms.",
        status: "comingSoon",
      },
      {
        id: 3,
        icon: "/images/blueprint-Deck-Icon-55.png",
        title: "Engagement Metrics",
        description:
          "Engagement metrics provide insight into how users are interacting with your content. They help you gauge the success of your social media efforts and refine your strategy.",
        status: "comingSoon",
      },
    ],
  },
  {
    sectionTitle: "Event Marketing",
    sectionColor: "bg-[#444ce7]",
    sectionBorderColor: "",
    data: [
      {
        id: 1,
        icon: "/images/blueprint-Deck-Icon-57.png",
        title: "Platform Selection",
        description:
          "Social media platforms are not a one-size-fits-all solution. Different platforms attract different demographics, so it's essential to select the ones that best align with your target audience and business goals.",
        status: "comingSoon",
      },
      {
        id: 2,
        icon: "/images/blueprint-Deck-Icon-59.png",
        title: "Content Calendar",
        description:
          "A content calendar helps to organize, schedule, and coordinate the publication of content across different social media platforms.",
        status: "comingSoon",
      },
      {
        id: 3,
        icon: "/images/blueprint-Deck-Icon-61.png",
        title: "Engagement Metrics",
        description:
          "Engagement metrics provide insight into how users are interacting with your content. They help you gauge the success of your social media efforts and refine your strategy.",
        status: "comingSoon",
      },
    ],
  },
  {
    sectionTitle: "Account Based Marketing",
    sectionColor: "bg-[#1570ef]",
    sectionBorderColor: "",
    data: [
      {
        id: 1,
        icon: "/images/blueprint-Deck-Icon-63.png",
        title: "Platform Selection",
        description:
          "Social media platforms are not a one-size-fits-all solution. Different platforms attract different demographics, so it's essential to select the ones that best align with your target audience and business goals.",
        status: "comingSoon",
      },
      {
        id: 2,
        icon: "/images/blueprint-Deck-Icon-65.png",
        title: "Content Calendar",
        description:
          "A content calendar helps to organize, schedule, and coordinate the publication of content across different social media platforms.",
        status: "comingSoon",
      },
      {
        id: 3,
        icon: "/images/blueprint-Deck-Icon-67.png",
        title: "Engagement Metrics",
        description:
          "Engagement metrics provide insight into how users are interacting with your content. They help you gauge the success of your social media efforts and refine your strategy.",
        status: "comingSoon",
      },
      {
        id: 4,
        icon: "/images/blueprint-Deck-Icon-69.png",
        title: "Engagement Metrics",
        description:
          "Engagement metrics provide insight into how users are interacting with your content. They help you gauge the success of your social media efforts and refine your strategy.",
        status: "comingSoon",
      },
    ],
  },
  {
    sectionTitle: "Sales Funnel",
    sectionColor: "bg-[#1570ef]",
    sectionBorderColor: "",
    data: [
      {
        id: 1,
        icon: "/images/blueprint-Deck-Icon-71.png",
        title: "Platform Selection",
        description:
          "Social media platforms are not a one-size-fits-all solution. Different platforms attract different demographics, so it's essential to select the ones that best align with your target audience and business goals.",
        status: "comingSoon",
      },
      {
        id: 2,
        icon: "/images/blueprint-Deck-Icon-73.png",
        title: "Content Calendar",
        description:
          "A content calendar helps to organize, schedule, and coordinate the publication of content across different social media platforms.",
        status: "comingSoon",
      },
      {
        id: 3,
        icon: "/images/blueprint-Deck-Icon-75.png",
        title: "Engagement Metrics",
        description:
          "Engagement metrics provide insight into how users are interacting with your content. They help you gauge the success of your social media efforts and refine your strategy.",
        status: "comingSoon",
      },
    ],
  },
  {
    sectionTitle: "Conversion Rate Optimization",
    sectionColor: "bg-[#088ab2]",
    sectionBorderColor: "",
    data: [
      {
        id: 1,
        icon: "/images/blueprint-Deck-Icon-77.png",
        title: "Platform Selection",
        description:
          "Social media platforms are not a one-size-fits-all solution. Different platforms attract different demographics, so it's essential to select the ones that best align with your target audience and business goals.",
        status: "comingSoon",
      },
      {
        id: 2,
        icon: "/images/blueprint-Deck-Icon-79.png",
        title: "Content Calendar",
        description:
          "A content calendar helps to organize, schedule, and coordinate the publication of content across different social media platforms.",
        status: "comingSoon",
      },
      {
        id: 3,
        icon: "/images/blueprint-Deck-Icon-81.png",
        title: "Engagement Metrics",
        description:
          "Engagement metrics provide insight into how users are interacting with your content. They help you gauge the success of your social media efforts and refine your strategy.",
        status: "comingSoon",
      },
    ],
  },
];

const MarketingBlueprint = () => {
  return (
    <div className="relative bg-[#070b18]">
      <div className="p-8 max-w-[780px] mx-auto z-[10000] bg-[#070b18]">
        <h1 className="text-[#fff] text-center max-w-[680px] my-[10px] mx-auto text-[2.5rem] leading-[1.4em] font-bold">
          B2B Marketing Blueprint
        </h1>
        <p className="text-[#9ca0ab] text-center max-w-[620px] mx-auto text-[16px] mb-[48px] leading-[28px]">
        A carefully curated collection of tactical modules to drive your business growth. Each collection encapsulates key marketing strategies, concepts, and best practices, distilled from industry-leading books into actionable steps. Explore the Collections and Modules within this blueprint to develop a powerful and effective B2B marketing strategy.
        </p>

        {sectionData.map((section, index) => (
          <div
            key={index}
            className={`bg-[#101828] border border-gray-800 ${section.sectionBorderColor} text-white rounded-[12px] mb-[24px]`}
          >
            <h2
              className={`text-[#ffffffb3] ${section.sectionColor} rounded-t-[12px] text-center text-[14px] py-[8px] px-[12px] font-bold uppercase`}
            >
              {section.sectionTitle}
            </h2>
            <div className="space-y-4 p-[1rem] px-[2rem]">
              {section.data.map((item) => (
                <div
                  key={item.id}
                  className={`flex gap-[16px] text-white items-center justify-between py-4 border-b border-gray-800 ${item.status === 'comingSoon' ? 'opacity-50' : ''}`}
                >
                  <div className="flex items-center space-x-4">
                    <Image src={item.icon} alt={item.icon} width={68} height={68} />
                    <div>
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p className="text-[#667085] text-[12px] tracking-tighter">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div>
                    {item.status === "active" ? (
                      <span className="text-[#667085] text-[20px]">→</span>
                    ) : (
                      <span className="text-[#667085] tracking-[1px] text-[12px] italic text-nowrap">
                        COMING SOON
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketingBlueprint;
