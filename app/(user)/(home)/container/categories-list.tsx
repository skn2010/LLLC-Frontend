import cn from "@/app/utils/class-names";
import CategoryCard from "../components/category-card";
import Link from "next/link";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

type Props = {
  categories: TCategory[];
  className?: string;
};

export default function CategoriesList({ categories, className }: Props) {
  return (
    <section className={cn(className)}>
      <h2 className="text-[18px] lg:text-[24px] font-bold text-gray-800 text-center">
        Categories
      </h2>

      <div className="_container-layout mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
        {categories.map((category, i) => (
          <CategoryCard key={`category-${i}`} category={category} />
        ))}
      </div>

      <Link
        href={"/categories"}
        className="mt-14 col-span-4 flex justify-center items-center"
      >
        <MdOutlineKeyboardArrowDown size={24} className="text-secondary" />
        <button className="font-medium text-secondary">More Categories</button>
      </Link>
    </section>
  );
}
