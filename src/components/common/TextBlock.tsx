"use client"
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

interface Testimonial {
    quote: string;
    author: string;
    role: string;
}

interface SalesSectionProps {
    mainHeading: string;
    subHeading: string;
    ctaText: string;
    secondaryCtaText: string;
    testimonial: Testimonial;
    lottieUrl: string; 
    isReversed?: boolean; 
}

const TextBlock: React.FC<SalesSectionProps> = ({
    mainHeading,
    subHeading,
    ctaText,
    secondaryCtaText,
    testimonial,
    lottieUrl,
    isReversed = false,
}) => {
    return (
        <section className="py-12">
            <div className={`max-w-[1280px] mx-auto p-4 flex ${isReversed ? 'flex-col-reverse lg:flex-row-reverse' : 'flex-col lg:flex-row'} justify-between items-center flex-`}>
                <div className='w-full lg:w-[45%]'>
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

                <div className="relative flex justify-end items-center h-96">
                    <DotLottieReact
                        src={lottieUrl}
                        autoplay
                        loop
                        style={{ height: "600px", width: "600px" }}
                    />
                </div>
            </div>
        </section>
    );
};

export default TextBlock;
