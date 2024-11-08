"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { toast } from "react-toastify";
import MenuTable from "../components/menu-table";
import Pagination from "@/app/components/ui/pagination";
import { getMenusOfCompanyApi } from "@/app/services/menu/get-menus-of-company.service";

type Props = {
  companyId: string;
  companyName: string;
};

export default function MenuList({ companyId, companyName }: Props) {
  const [page, setPage] = useState(1);
  const [menus, setMenus] = useState<TMenu[]>([]);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await getMenusOfCompanyApi({
          params: { companyId },
          queries: { page, pageSize: 16 },
        });

        setMenus(response.data);
        setTotalPages(response.totalPages);
      } catch (e: any) {
        toast.error(e.message);
      }
    };

    loadData();
  }, [page, companyId]);

  return (
    <section>
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-[16px] md:text-[20px] lg:text-[24px] font-bold text-gray-700">
            All Menus
          </h3>
          <p className="text-[14px] font-semibold text-gray-500">
            of {companyName}
          </p>
        </div>
        <div>
          <Link
            href={`/companies/${companyId}/menus/create`}
            className="_btn border border-gray-400 flex items-center gap-x-2"
          >
            Create menu
          </Link>
        </div>
      </div>

      <MenuTable menus={menus} companyId={companyId} />
      <div className="mt-4 flex justify-end">
        <Pagination
          currentPage={page}
          setCurrentPage={setPage}
          totalPages={totalPages}
        />
      </div>
    </section>
  );
}
