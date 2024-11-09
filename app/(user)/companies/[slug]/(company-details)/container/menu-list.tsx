"use client";

import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import cn from "@/app/utils/class-names";
import MenuCard from "../components/menu-card";

type Props = {
  companyId: string;
  menus: TMenu[];
  className?: string;
};

export default function MenuList({ menus, companyId, className }: Props) {
  if (!menus.length) {
    return null;
  }

  return (
    <div className={cn(className, "")}>
      <h3 className="text-[16px] md:text-[20px] lg:text-[24px] font-bold text-gray-700">
        Menus
      </h3>
      <div className="mt-4 flex justify-between items-center gap-2">
        <h5 className="text-md font-medium text-gray-700">Popular menus</h5>
        <Link
          href={`/companies/${companyId}/menus`}
          className="flex items-center gap-x-1"
        >
          <span>View all menu</span>
          <IoIosArrowForward />
        </Link>
      </div>

      <div className="mt-6 _hide-scrollbar flex gap-x-6 overflow-auto">
        {menus.map((item, index) => (
          <div
            key={index + "-menu"}
            className="flex-none w-[80%] sm:w-1/2 lg:w-1/3"
          >
            <MenuCard menu={item} companyId={companyId} />
          </div>
        ))}
      </div>
    </div>
  );
}
