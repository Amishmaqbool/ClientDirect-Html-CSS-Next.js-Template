// components/SalesSection.tsx
import Image from 'next/image';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

interface Insight {
  image: string;
  title: string;
  description: string;
  change: number;
  metric: string;
  style: React.CSSProperties;
}

interface SalesSectionProps {
  mainHeading: string;
  subHeading: string;
  ctaText: string;
  secondaryCtaText: string;
  testimonial: Testimonial;
  insights: Insight[];
  mainImage: string
}

const SalesSection: React.FC<SalesSectionProps> = ({
  mainHeading,
  subHeading,
  ctaText,
  secondaryCtaText,
  testimonial,
  insights,
  mainImage,
}) => {
  return (
    <section className="sales-section py-12 px-12">
      <div className="container mx-auto flex gap-0 max-w-[1280px] text-left">
        <div className='max-w-[40%]'>
        <h1 className="text-4xl font-bold mb-4">{mainHeading}</h1>
        <p className="text-lg mb-6 text-gray-600">{subHeading}</p>
        <div className="flex justify-start gap-4 mb-8">
          <button className="bg-black rounded-full text-white px-6 py-0 text-sm">{ctaText}</button>
          <button className="border border-gray-300 px-6 py-3 rounded-full text-sm">{secondaryCtaText}</button>
        </div>
        <div className="testimonial text-left max-w-lg w-full lg:w-full mb-8">
          <blockquote className="text-gray-700 italic text-sm">&quot;{testimonial.quote}&quot;</blockquote>
          <cite className="text-xs text-gray-500 not-italic">
             <span className='text-black'>{testimonial.author}</span> - {testimonial.role}
          </cite>
        </div>
        </div>
        
        <div className="relative mx-auto w-full lg:max-w-[40%] h-96">
          <Image
            src={mainImage}
            alt="Main background"
            layout="fill"
            objectFit="contain"
            className="rounded-lg"
          />

          {/* Insight Cards Overlayed on the Main Image */}
          {insights.map((insight, index) => (
            <div
              key={index}
              style={insight.style} // Custom style for positioning
              className="absolute p-4 border rounded-lg shadow bg-white"
            >
              <Image src={insight.image} alt={insight.title} width={50} height={50} />
              <h4 className="font-bold text-xl mt-2">{insight.title}</h4>
              <p className="text-sm text-gray-500">{insight.description}</p>
              <p className={`text-sm ${insight.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                {insight.change >= 0 ? '+' : '-'}{Math.abs(insight.change)}% {insight.metric}
              </p>
            </div>
          ))}
      </div>
      </div>
    </section>
  );
};

export default SalesSection;
