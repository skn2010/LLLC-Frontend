import Link from "next/link";
import Image from "next/image";
import cn from "@/app/utils/class-names";

type Props = {
  companyList: TCompany[];
  className?: string;
};

export default function CompanyList({ companyList, className }: Props) {
  return (
    <div className={cn(className, "max-h-[500px] rounded-lg overflow-auto")}>
      <h4 className="text-xs font-bold text-gray-600">My Listed companies</h4>
      {companyList.map((item, index) => (
        <Link
          key={`company-${index}`}
          href={`/companies/${item._id}`}
          className="mt-6 flex items-center gap-x-4"
        >
          <figure>
            <Image
              src={item.cover_image?.url || ""}
              alt="profile-img"
              width={80}
              height={80}
              className="w-full max-w-[50px] aspect-[1/1] rounded-md object-cover"
            />
          </figure>
          <div>
            <h4 className="text-sm font-bold text-gray-700">{item.name}</h4>
            <p className="mt-1 text-xs text-gray-700">{item.contact_number}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
