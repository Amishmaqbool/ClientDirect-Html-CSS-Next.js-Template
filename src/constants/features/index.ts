import BackdropImage from "../../../src/assets/svgs/backdrop.svg"
import AutoViewerImage from "../../../src/assets/svgs/auto-viewer.svg"
import ThreeCircles from "../../../src/assets/svgs/three-circles.svg"

export const reviews = [
  {
    id: 1,
    rating: 5,
    reviewBy: "Snitcher outperformed them all",
    content:
      "Out of all similar tools we trialed, Snitcher outperformed them all. Other vendors detect about 60-70% fewer companies.",
    reviewer: "Inga B.",
  },
  {
    id: 2,
    rating: 5,
    reviewBy: "Amazingly accurate data for a fair price",
    content:
      "Find the B2B players coming to our website to target for cold outreach – Amazingly accurate company data for a fair price.",
    reviewer: "Courtenay F.",
  },
  {
    id: 3,
    rating: 4.5,
    reviewBy: "Clear, accurate Lead Gen & Visitor Tracking",
    content:
      "I'm not sure how they are doing it, but Snitcher was able to accurately identify the highest percentage of our traffic.",
    reviewer: "Becca R.",
  },
];

export const analyticsReviewsCards = [
  {
    id: 1,
    rating: 5,
    reviewBy: "“Great tool to add to your marketing toolbox”",
    content:
      "“Snitcher helps us better understand the traffic on our website. We appreciate the ease of use and analytics”",
    reviewer: "Marsha H",
  },
  {
    id: 2,
    rating: 5,
    reviewBy: "“Hidden gem”",
    content:
      "“It helps us bring all of our marketing efforts together and see which channels are effective.”",
    reviewer: "Courtenay F.",
  },
  {
    id: 3,
    rating: 4.5,
    reviewBy: "“Snitcher gets the job done!”",
    content:
      "“Google analytics wasn't cutting it, so I needed more info, andSnitcher does it in real-time for me”",
    reviewer: "Sean D.",
  },
];

export const analyticsHeroData = [
  {
    imageSrc:
      "https://cdn.prod.website-files.com/64084dfdb78deb68d06600ed/6409aa5ec602fe3124e5cbaa_icons.svg",
    altText: "Image One",
    description: "Enrich anonymous GA traffic with detailed company data",
  },
  {
    imageSrc:
      "https://cdn.prod.website-files.com/64084dfdb78deb68d06600ed/6409aa67142ec437e0a29fb5_icons.svg",
    altText: "Image Two",
    description: "Analyse marketing actions in context with confidence",
  },
  {
    imageSrc:
      "https://cdn.prod.website-files.com/64084dfdb78deb68d06600ed/6408aa2be0e5f454083a1979_icons.svg",
    altText: "Image Three",
    description: "Optimize and test your way to hitting bigger targets",
  },
];

export const MarketingSectionData = [
  {
    image:
      "https://cdn.prod.website-files.com/64084dfdb78deb68d06600ed/6425400853ab14e32d876c6b_marketplaces.png",
    alt: "Image One",
    title: "From numbers to companies",
    content:
      "Using real-time identification data Snitcher adds company names and firmographic information to sessions, without relying on conversions.",
  },
  {
    image:
      "https://cdn.prod.website-files.com/64084dfdb78deb68d06600ed/64253fdb0acd1707e2869897_chatbots.png",
    alt: "Image Two",
    title: "Powerful custom dimensions",
    content:
      "Access company names, sizes, industries and more throughout Google Analytics with custom dimensions.",
  },
  {
    image:
      "https://cdn.prod.website-files.com/64084dfdb78deb68d06600ed/642540260946358de5caac12_saas.png",
    alt: "Image Two",
    title: "Complete buyer journeys",
    content:
      "Tie multiple visitors and devices to a company so you get a complete picture of the journey accounts take to become customers.",
  },
];

export const revenueSectionData = [
  {
    image:
      "https://cdn.prod.website-files.com/64084dfdb78deb68d06600ed/6409a4352b71f3dc806fead5_Featured%20icon.svg",
    heading: "Segment",
    subHeading:
      "Use company firmographic filters to create segments made up of visitors matching your ideal customer profile.",
  },
  {
    image:
      "https://cdn.prod.website-files.com/64084dfdb78deb68d06600ed/6409a44e26e7bf5860d0f6d8_Featured%20icon.svg",
    heading: "Audiences",
    subHeading:
      "Build audiences from companies that turn into customers so your ad spend doesn’t go to visitors that will never purchase.",
  },
  {
    image:
      "https://cdn.prod.website-files.com/64084dfdb78deb68d06600ed/6409a46a15a31d4987483764_Featured%20icon.svg",
    heading: "Analyse",
    subHeading:
      "Map behaviour and activities against your ideal customer profile to understand what works and what wastes budget.",
  },
  {
    image:
      "https://cdn.prod.website-files.com/64084dfdb78deb68d06600ed/6409a48413f6c8004c52d716_Featured%20icon.svg",
    heading: "Retarget",
    subHeading:
      "Only retarget good fit companies across search and display while excluding bad fit visitors from future paid campaigns.",
  },
];

export const OptimizeCardData = [
  {
    icon: BackdropImage,
    heading: "Test",
    description:
      "Get immediate feedback on your tests and reach statistical relevance without spending while you wait for conversions.",
  },
  {
    icon: AutoViewerImage,
    heading: "Optimize",
    description:
      "Make better decisions with the full picture on how each of your actions perform at driving visitors in your target market.",
  },
  {
    icon: ThreeCircles,
    heading: "Dashboard",
    description:
      "Build custom dashboards in Google Data Studio or use our templates",
  },
];

export const analyticsFaqList = [
  {
    question:
      "Can I choose what information Snitcher sends to Google Analytics?",
    answer: [
      "Yes, it’s possible to select which company attributes you would like to sync into Google Analytics.",
      "Examples include:",
      "Company name",
      "Company domain",
      "Company size",
      "Company industry",
      "Company location and more",
    ],
  },
  {
    question: "How do I access Snitcher data in GA?",
    answer:
      "Company attributes are synced into Google Analytics as custom dimension with which you can enrich or filter reports, create audiences and build dashboards from.",
  },
  {
    question: "How can I get started?",
    answer:
      "Get the ball rolling with a free trial and head over to the integrations page in your settings to configure the integration.",
  },
  {
    question: "Do I need technical know how to configure the integration?",
    answer:
      "Nope, no technical skills are required to set up the integrations. It's just a one-click install. We are also available to support you if required.",
  },
  {
    question: "Does Snitcher support GA4?",
    answer: "Yes we do!",
  },
  {
    question: "Will I receive support on best practices and implementation?",
    answer:
      "We appreciate that using company data within Google Analytics is a newer way of working, so we are happy to jump on a call and walk you through the best ways of getting to valuable insights and building audiences. Our guides are also full of helpful tips and best practices to get you started.",
  },
  {
    question: "How does pricing work?",
    answer:
      "You can test the integration through your free trial. To make use of Google Analytics enrichment after the free trial has ended you will need to start a subscription with us. The integration is included within the subscription cost of your account and you can see the pricing tiers to see what this fee will be.",
  },
  {
    question: "What if I need help building reports and dashboards?",
    answer:
      "We have pre-built Looker Studio (GDS) dashboards for you that include website overviews, paid and organic marketing reports along with account based reporting dashboards.",
  },
];

export const landingReviewsCards = [
  {
    id: 1,
    rating: 5,
    reviewBy: "A great tool to add to your marketing toolbox",
    content:
      "The team at Snitcher is not only easy to work with, but they have designed an intuitive and efficient platform. Snitcher helps us better understand the traffic on our website. We appreciate the ease of use and analytics. It also integrates into our CRM which is the cherry on top.",
    reviewer: "Germans F.",
  },
  {
    id: 2,
    rating: 5,
    reviewBy: "Good Data Quality Compared to Price",
    content:
      "Out of all the tools we put through a trial phase, Snitcher outperformed them all in relation to how many companies it found and what kind of additional information we could glean from the data it pulled from the companies visiting our website. For example – other vendors which provide similar data detect (on average) about 60-70% fewer companies than Snitcher.",
    reviewer: "Germans F.",
  },
  {
    id: 3,
    rating: 5,
    reviewBy: "Great insights, easy setup, friendly and responsive support team",
    content:
      "I like the easy setup, data quality that's coming through, and self-serve capabilities to manage things on my own for the most part. They have great documentation and are happy to answer questions quickly and comprehensively.",
    reviewer: "Hisham I.",
  },
  {
    id: 4,
    rating: 5,
    reviewBy: "Best platform to find the right leads",
    content:
      "Its better than google analytics and adobe and give us more information about the right traffic, so we are in touch with the leads faster with their contact details provided by Snitcher.",
    reviewer: "Marsha H.",
  },
  {
    id: 5,
    rating: 5,
    reviewBy: "Hidden Gem",
    content:
      "I accidentally stumbled upon Snitcher while looking for another tool but I am very glad I did! Being in B2B, this is a hidden gem to see what companies are visiting your website. This helps us identify what channels are effective at bringing in traffic and also supplements our cold email strategy.",
    reviewer: "Vencel M.",
  },
  {
    id: 6,
    rating: 5,
    reviewBy: "Very effective tool for sourcing leads",
    content:
      "Snitcher is not only a great tool to keep track of website visitors and understand who potential leads are, but it's also straightforward to install. Our team had it up and running in 10 minutes and got results.",
    reviewer: "Verified user in Computer Sofware",
  },
  {
    id: 7,
    rating: 5,
    reviewBy: "Good Data Quality Compared to Price",
    content:
      "Very good data quality compared to price. Customer support is very responsive and is always ready to go the extra mile to help solve a challenge. It is a developing software solution that launches new features frequently and is always open for feedback.",
    reviewer: "Germans F.",
  },
  {
    id: 8,
    rating: 5,
    reviewBy: "Good Data Quality Compared to Price",
    content:
      "Out of all the tools we put through a trial phase, Snitcher outperformed them all in relation to how many companies it found and what kind of additional information we could glean from the data it pulled from the companies visiting our website. For example – other vendors which provide similar data detect (on average) about 60-70% fewer companies than Snitcher.",
    reviewer: "Lesya L.",
  },
  {
    id: 9,
    rating: 5,
    reviewBy: "Great for visitor identification and segmenting companies in Google Analytics",
    content:
      "I like the great features and data it has of identifying leads that were not filling out our form. We also like the Google Analytics integration where we can see the lead details right in Google Analytics.",
    reviewer: "Verified user in Computer Software",
  },
];
