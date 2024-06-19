import cn from "@/app/utils/class-names";
import ReviewDetailsCard from "@/app/components/review-details-card";
import ProfileCard from "../components/profile-card";
import TotalReviewStatistics from "../components/total-review-statistics";
import ReviewDistribution from "../components/review-distribution";
import CompanyList from "../components/company-list";

type Props = {
  className?: string;
};

export default function ProfileSection({ className }: Props) {
  return (
    <div
      className={cn(className, "flex flex-col md:flex-row gap-x-8 gap-y-12")}
    >
      <div className="w-full md:max-w-[350px]">
        <ProfileCard />
        <CompanyList className="mt-16" />
        <button className="mt-10 text-sm font-semibold underline text-secondary">
          Add new company
        </button>
      </div>

      <div className="grow">
        <TotalReviewStatistics />
        <ReviewDistribution className="mt-10" />
        <h4 className="mt-10 text-[16px] md:text-[20px] lg:text-[24px] font-bold text-gray-700">
          More about me
        </h4>
        <div className="mt-3 p-6 border rounded-md grid grid-cols-2">
          <div className="col-span-2 sm:col-span-1">
            <p className="text-sm font-semibold text-gray-700">Location</p>
            <p className="mt-1 text-sm text-gray-700">Pokhara, Kaski</p>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <p className="text-sm font-semibold text-gray-700">Joined since</p>
            <p className="mt-1 text-sm text-gray-700">2020-11-12</p>
          </div>
        </div>

        <h4 className="mt-10 text-[16px] md:text-[20px] lg:text-[24px] font-bold text-gray-700">
          Reviews
        </h4>

        <div className="mt-8 grid gap-y-16">
          <ReviewDetailsCard />
          <ReviewDetailsCard />
          <ReviewDetailsCard />
          <ReviewDetailsCard />
        </div>
      </div>
    </div>
  );
}
