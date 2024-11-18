import Image from "next/image";
import { FiPhoneCall } from "react-icons/fi";
import { MdDateRange, MdMenuOpen } from "react-icons/md";
import cn from "@/app/utils/class-names";

type Props = {
  className?: string;
  companyDetails: TCompany;
};

export default function CompanyProfileDetails({
  companyDetails,
  className,
}: Props) {
  return (
    <section className={cn(className, "border p-8 rounded-lg")}>
      <div className="flex flex-wrap items-center gap-2">
        <figure className="flex justify-center">
          <Image
            src={companyDetails?.cover_image?.url || "/home-hero.jpg"}
            alt="profile-img"
            width={40}
            height={40}
            className="rounded-md aspect-square object-cover"
          />
        </figure>
        <div className="grow">
          <h3 className="text-md font-medium text-gray-700">
            {companyDetails.name}
          </h3>
          <p className="text-xs text-gray-500">{companyDetails.email}</p>
        </div>
      </div>

      <div className="mt-8">
        <div className="flex items-center gap-2">
          <FiPhoneCall size={12} className="text-gray-700" />
          <span className="text-sm text-gray-700">
            {companyDetails.contact_number}
          </span>
        </div>

        <div className="mt-4 flex items-center gap-2">
          <MdDateRange size={12} className="text-gray-700" />
          <span className="text-sm text-gray-700">
            {companyDetails.created_date.split("T")[0]}
          </span>
        </div>

        <div className="mt-4 flex items-center gap-2">
          <MdMenuOpen size={12} className="text-gray-700" />
          <span className="text-sm text-gray-700">
            {`${companyDetails.opening_time} - ${companyDetails.closing_time} `}
          </span>
          <span className="text-sm font-bold text-blue-600">Open</span>
        </div>
      </div>
    </section>
  );
}
