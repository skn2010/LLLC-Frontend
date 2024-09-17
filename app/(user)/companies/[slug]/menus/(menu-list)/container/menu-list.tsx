"use client";

import { getMenusOfCompanyApi } from "@/app/services/menu/get-menus-of-company.service";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import MenuTable from "../components/menu-table";
import Pagination from "@/app/components/ui/pagination";

type Props = {
  companyId: string;
  companyName: string;
};

export default function MenuList({ companyId, companyName }: Props) {
  const [menus, setMenus] = useState<TMenu[]>([]);
  const [page, setPage] = useState(1);
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
      <h3 className="text-[16px] md:text-[20px] lg:text-[24px] font-bold text-gray-700">
        All Menus
      </h3>
      <p className="text-[14px] font-semibold text-gray-500">
        of {companyName}
      </p>

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
