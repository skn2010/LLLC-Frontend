import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import cn from "@/app/utils/class-names";
import RatingCard from "@/app/components/rating-card";

type Props = {
  className?: string;
};

export default function RecentRatingList({ className }: Props) {
  return (
    <section className={cn(className)}>
      <h2 className="text-[18px] lg:text-[24px] font-bold text-gray-800 text-center">
        Recent Activity
      </h2>

      <div className="_container-layout mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        <RatingCard />
        <RatingCard />
        <RatingCard />
        <RatingCard />
        <RatingCard />
        <RatingCard />
      </div>

      <div className="mt-14 flex justify-center items-center gap-2">
        <MdOutlineKeyboardArrowDown size={20} className="text-secondary" />
        <button className="font-medium text-secondary">
          Show more activity
        </button>
      </div>
    </section>
  );
}
