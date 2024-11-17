"use client";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import CategoryCard from "@/app/(user)/(home)/components/category-card";
import { getCategoriesApi } from "@/app/services/category/get-categories.service";

export default function CategoryList() {
  const [page, setPage] = useState(1);
  const [categories, setCategories] = useState<TCategory[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        const response = await getCategoriesApi({
          queries: { page, pageSize: 16 },
        });

        setCategories((prev) => [...prev, ...response.data]);
        setTotalPages(response.totalPages);
      } catch (e: any) {
        toast.error(e.message);
      }
      setIsLoading(false);
    };

    loadData();
  }, [page]);

  return (
    <section>
      <div>
        <h3 className="text-[16px] md:text-[20px] lg:text-[24px] font-bold text-gray-700">
          Category List
        </h3>
        <p className="mt-2 text-sm font-semibold max-w-[500px] text-gray-700">
          Click one to see all the companies list that are related to this
          category.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
        {categories.map((item, i) => (
          <CategoryCard key={`categories-${i}`} category={item} />
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
            className="_btn w-[180px] flex items-center justify-center border border-gray-600 text-gray-700"
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
                    strokeWidth="4"
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
    </section>
  );
}
