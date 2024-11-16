"use client";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import getCompaniesApi from "@/app/services/company/get-company-list.service";
import CompanyCard from "@/app/components/company-card";

type Props = {
  categoryId?: string;
  companyName?: string;
};

export default function CompanyList({ categoryId, companyName }: Props) {
  const [page, setPage] = useState(1);
  const [companies, setCompanies] = useState<TCompany[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const loadData = async () => {
    setIsLoading(true);
    try {
      const response = await getCompaniesApi({
        queries: { page, categoryId, companyName },
      });

      if (page === 1) {
        setCompanies(response.data);
      } else {
        setCompanies((prev) => [...prev, ...response.data]);
      }

      setTotalPages(response.totalPages);
    } catch (e: any) {
      toast.error(e.message);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    loadData();
  }, [page]);

  // When the user is the current page (/companies) and if he/she searches something, the page should re-load new data based
  // the search input text
  useEffect(() => {
    if (page === 1) {
      loadData();
    } else {
      setPage(1);
    }
  }, [categoryId, companyName]);

  return (
    <section>
      <div>
        <h3 className="text-[16px] md:text-[20px] lg:text-[24px] font-bold text-gray-700">
          Company List
        </h3>
        <p className="mt-2 text-sm font-semibold max-w-[500px] text-gray-700">
          Click one to see all the reviews and add a review to this company.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 sm: grid-cols-2 md:grid-cols-3 gap-8">
        {companies.map((company, i) => (
          <CompanyCard key={`company-${i}`} company={company} />
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
            className="_btn border w-[210px] flex items-center justify-center text-gray-600 border-gray-500"
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
              "Load more companies"
            )}
          </button>
        </div>
      )}
    </section>
  );
}
