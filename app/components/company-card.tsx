import Link from "next/link";
import cn from "../utils/class-names";
import Image from "next/image";

type Props = {
  company: TCompany;
  className?: string;
};

export default function CompanyCard({ company, className }: Props) {
  return (
    <Link href={`/companies/${company._id}`} className={cn(className, "")}>
      <Image
        src={company.cover_image?.url || ""}
        width={400}
        height={300}
        alt="company's cover image"
        className="w-full aspect-video rounded-sm"
      />

      <h2 className="mt-2 text-sm font-bold text-gray-700">{company.name}</h2>
      <p className="mt-1 text-[12px] font-medium text-gray-500">
        {company.email}
      </p>
    </Link>
  );
}
