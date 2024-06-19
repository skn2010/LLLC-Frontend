import Image from "next/image";
import { FiPhoneCall } from "react-icons/fi";
import { MdDateRange, MdMenuOpen } from "react-icons/md";
import cn from "@/app/utils/class-names";

type Props = {
  className?: string;
};

export default function CompanyProfileDetails({ className }: Props) {
  return (
    <section className={cn(className, "border p-8 rounded-lg")}>
      <div className="flex flex-wrap items-center gap-2">
        <figure className="flex justify-center">
          <Image
            src={"/hero.png"}
            alt="profile-img"
            width={40}
            height={40}
            className="rounded-md aspect-square object-cover"
          />
        </figure>
        <div className="grow">
          <h3 className="text-md font-medium text-gray-700">Dumpling Home</h3>
          <p className="text-xs text-gray-500">Pokhara, Kaski</p>
        </div>
      </div>

      <div className="mt-8">
        <div className="flex items-center gap-2">
          <FiPhoneCall size={12} className="text-gray-700" />
          <span className="text-sm text-gray-700">9777 9806131392</span>
        </div>

        <div className="mt-4 flex items-center gap-2">
          <MdDateRange size={12} className="text-gray-700" />
          <span className="text-sm text-gray-700">2024-11-11</span>
        </div>

        <div className="mt-4 flex items-center gap-2">
          <MdMenuOpen size={12} className="text-gray-700" />
          <span className="text-sm text-gray-700">10:30 Am - 5:30 PM</span>
          <span className="text-sm font-bold text-blue-600">Open</span>
        </div>
      </div>
    </section>
  );
}
