import cn from "@/app/utils/class-names";
import ReviewCard from "../components/review-card";

type Props = {
  className?: string;
};

export default function ReviewList({ className }: Props) {
  return (
    <section className={cn(className, "")}>
      <h4 className="text-[16px] md:text-[20px] lg:text-[24px] font-bold text-gray-700">
        Reviews
      </h4>

      <div className="mt-10 grid gap-y-16">
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </div>
    </section>
  );
}
