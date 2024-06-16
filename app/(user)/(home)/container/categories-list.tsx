import cn from "@/app/utils/class-names";
import CategoryCard from "../components/category-card";

type Props = {
  className?: string;
};

export default function CategoriesList({ className }: Props) {
  return (
    <section className={cn(className)}>
      <h2 className="text-[18px] lg:text-[24px] font-bold text-gray-800 text-center">
        Categories
      </h2>

      <div className="_container-layout mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </div>
    </section>
  );
}
