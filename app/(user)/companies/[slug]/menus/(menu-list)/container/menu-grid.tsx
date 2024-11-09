"use client";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import cn from "@/app/utils/class-names";
import MenuCard from "../components/menu-card";
import { getMenusOfCompanyApi } from "@/app/services/menu/get-menus-of-company.service";

type Props = {
  companyId: string;
  companyName: string;
  className?: string;
};

export default function MenuGrid({
  companyId,
  companyName,
  className = "",
}: Props) {
  const [page, setPage] = useState(1);
  const [menus, setMenus] = useState<TMenu[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
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
      setIsLoading(false);
    };

    loadData();
  }, [page, companyId]);

  return (
    <div className={cn(className, "")}>
      <div>
        <h3 className="text-[16px] md:text-[20px] lg:text-[24px] font-bold text-gray-700">
          Menus of {companyName}
        </h3>
        <p className="mt-1 text-sm font-semibold text-gray-600">
          View all the menus
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {menus.map((item, index) => (
          <MenuCard menu={item} key={index + "-menu"} companyId={companyId} />
        ))}
      </div>

      {page > totalPages ? null : (
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => {
              if (!isLoading) {
                setPage((page) => page + 1);
              }
            }}
            type="button"
            className="_btn _primary-btn w-[180px] flex items-center justify-center"
          >
            {isLoading ? (
              <span className="flex items-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Loading...
              </span>
            ) : (
              "Load more menus"
            )}
          </button>
        </div>
      )}
    </div>
  );
}
