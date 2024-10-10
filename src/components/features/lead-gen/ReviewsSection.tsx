import Image from "next/image";
import { reviews } from "@/constants/features/lead-generation";
import fullStars from "@/assets/images/five-stars.webp";
import halfStars from "@/assets/images/four-five-stars.webp";
import reviewIcon from "@/assets/images/review-icon.webp";

const ReviewSection = () => {
  const renderStars = (rating: any) => {
    if (rating === 5) {
      return <Image src={fullStars} alt="Five Stars" width={110} height={22} />;
    } else if (rating === 4.5) {
      return <Image src={halfStars} alt="Four and a Half Stars" width={110} height={22} />;
    }
    return null;
  };

  return (
    <div className="flex max-md:flex-col justify-between gap-6 mt-8 px-4">
      {reviews.map((review) => (
        <div key={review.id} className="bg-white py-6 px-[17.5px] border-black border rounded-lg w-full md:max-w-md">
          <div className="flex items-center mb-4">{renderStars(review.rating)}</div>
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
  );
};

export default ReviewSection;