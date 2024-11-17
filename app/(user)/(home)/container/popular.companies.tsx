import CompanyCard from "@/app/components/company-card";
import getPopularCompaniesApi from "@/app/services/company/get-popular-companies.service";
import cn from "@/app/utils/class-names";
import Link from "next/link";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

type Props = {
  className?: string;
};

export default async function PopularCompanies({ className }: Props) {
  const companiesRes = await getPopularCompaniesApi();

  return (
    <section className={cn(className)}>
      <h2 className="text-[18px] lg:text-[24px] font-bold text-gray-800 text-center">
        Popular Companies
      </h2>
      <div className="mt-16 grid grid-cols-1 sm: grid-cols-2 md:grid-cols-3 gap-8">
        {companiesRes?.data.map((company, i) => (
          <CompanyCard key={`company-${i}`} company={company} />
        ))}
      </div>

      <Link
        href={"/companies"}
        className="mt-14 col-span-4 flex justify-center items-center"
      >
        <MdOutlineKeyboardArrowDown size={24} className="text-secondary" />
        <button className="font-medium text-secondary">More Companies</button>
      </Link>
    </section>
  );
}
