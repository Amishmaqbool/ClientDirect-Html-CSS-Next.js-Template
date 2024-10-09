import React from "react";
import gradientImage from '@/assets/images/colours.webp';
import { reviews } from "@/constants/features/lead-generation";
import fullStars from "@/assets/images/five-stars.webp";
import halfStars from "@/assets/images/four-five-stars.webp";
import reviewIcon from "@/assets/images/review-icon.webp";
import jumpLead from "@/assets/images/jump-lead-gen.webp";
import Image from "next/image";

export default function LeadGen() {
    const renderStars = (rating: number) => {
        if (rating === 5) {
          return <Image src={fullStars} alt="Five Stars" width={110} height={22} />; 
        } else if (rating === 4.5) {
          return <Image src={halfStars} alt="Four and a Half Stars" width={110} height={22} />;
        }
        return null; 
      };

    return (
        <div
        className="w-full"
        style={{
            backgroundImage: `url(${gradientImage})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',
        }}>
        <div className="max-w-[1200px] px-2 mx-auto flex flex-col justify-center items-center">
        <div className="flex flex-col gap-16 mb-24">
        <div className="flex gap-20">
          <div className="w-1/2">
            <h2 className="text-4xl leading-[44px] font-bold text-black">Snitcher's data is just better. <br></br><span>See it for yourself.</span></h2>
             
            <p className="text-[#475467] text-lg mt-4">We believe great data is at the heart of growth. So we made it our mission to continually evolve our identification rates and quality to give you the edge to win more customers.<br/>
            <span className="block pt-6">Fill sales pipelines and supercharge your marketing machine today!</span></p>
          
            <button className="mt-7 flex items-center justify-center gap-2 rounded-full py-2 pl-4 pr-3 text-white bg-[#101828] border-[1.5px] border-[#00000026] text-sm">Start you 14-day trial now <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
            <path d="M3.33301 10.6196H16.6663M16.6663 10.6196L11.6663 5.61963M16.6663 10.6196L11.6663 15.6196" stroke="currentColor" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg></button>
          </div>

          <div className="w-1/2">
          <Image alt="snitcher" src={jumpLead} width={560} height={363}/>
          </div>
          </div>

          <div className="flex justify-between gap-6 mt-8">
            {reviews.map((review) => (
                <div key={review.id} className="bg-white py-6 px-[17.5px] border-black border rounded-lg w-full max-w-md">
                <div className="flex items-center mb-4">
                    {renderStars(review.rating)} 
                </div>
                <h3 className="text-base font-semibold mb-4 text-black">{`"${review.review}"`}</h3>
                <p className="text-[#475467] font-xs mb-4">{review.content}</p>
                <div className="flex items-center gap-3">
                    <Image src={reviewIcon} alt="Reviewer Icon" width={24} height={24} />
                    <div className="bg-[#475467] w-[15px] h-[2px]"></div>
                    <p className="ml-2 text-black text-sm font-semibold">{review.reviewer}</p>
                </div>
                </div>
            ))}
            </div>

        </div>
       </div>
       
       </div>


      
    );
}

