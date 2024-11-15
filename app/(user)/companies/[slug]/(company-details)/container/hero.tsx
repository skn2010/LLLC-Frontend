import Image from "next/image";
import cn from "@/app/utils/class-names";
import RatingStar from "@/app/components/rating-star";

type Props = {
  className?: string;
  companyDetails: TCompany;
  reviewStats: TCompanyReviewStats;
};

export default function Hero({
  companyDetails,
  reviewStats,
  className,
}: Props) {
  return (
    <section
      style={{ backgroundImage: `url(${companyDetails.cover_image?.url})` }}
      className={cn(
        className,
        "h-[80dvh] lg:h-[50dvh] flex items-end bg-no-repeat bg-cover bg-center bg-black"
      )}
    >
      <div className="_app-layout text-white">
        <div className="_container-layout pb-10">
          <h1 className="text-2xl lg:text-4xl font-bold">
            {companyDetails.name}
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-4">
            <RatingStar
              rating={reviewStats.averageRating as 1 | 2 | 3 | 4 | 5}
            />
            <p className="text-sm font-semibold">
              {reviewStats.averageRating} ({reviewStats.totalReviews} reviews)
            </p>
          </div>

          <div className="mt-4">
            <p className="text-sm font-semibold">
              {`${companyDetails.opening_time} - ${companyDetails.closing_time} `}
              | created in {companyDetails.created_date.split("T")[0]}
            </p>
          </div>

          <div className="mt-6 flex items-center gap-x-4">
            <figure>
              <Image
                src={(companyDetails.created_by as TUser).avatar || "/hero.png"}
                alt="profile-img"
                width={80}
                height={80}
                className="w-full max-w-[50px] aspect-[1/1] rounded-full object-cover"
              />
            </figure>
            <div>
              <h4 className="text-sm font-bold capitalize text-gray-100">
                {(companyDetails.created_by as TUser).full_name}
              </h4>
              <p className="mt-1 text-xs text-gray-100">
                {(companyDetails.created_by as TUser).address || "-"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
