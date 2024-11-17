import cn from "@/app/utils/class-names";
import ReviewCard from "@/app/components/review-card";

type Props = {
  reviews: TReview[];
  user?: TUser;
  className?: string;
};

export default async function PopularReviews({
  reviews,
  user,
  className,
}: Props) {
  return (
    <section className={cn(className)}>
      <h2 className="text-[18px] lg:text-[24px] font-bold text-gray-800 text-center">
        Most Reacted Reviews
      </h2>

      <div className="_container-layout mt-16 columns-1 md:columns-2 lg:columns-3 gap-6 lg:gab-8">
        {reviews.map((review, i) => (
          <ReviewCard
            user={user}
            key={`review-${i}`}
            review={review}
            className="break-inside-avoid mb-6 lg:mb-8"
          />
        ))}
      </div>
    </section>
  );
}
