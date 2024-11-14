"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import cn from "@/app/utils/class-names";
import ReviewCard from "@/app/components/review-card";
import { getReviewsOfMenu } from "@/app/services/review/get-reviews-of-menu.service";

type Props = {
  companyId: string;
  menuId: string;
  className?: string;
};

export default function ReviewList({ companyId, menuId, className }: Props) {
  const [page, setPage] = useState(1);
  const [reviews, setReviews] = useState<TReview[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        const response = await getReviewsOfMenu({
          params: { menuId },
          queries: { page, pageSize: 12 },
        });

        setReviews((prev) => [...prev, ...response.data]);
        setTotalPages(response.totalPages);
      } catch (e: any) {
        toast.error(e.message);
      }
      setIsLoading(false);
    };

    loadData();
  }, [page]);

  console.log(reviews);

  return (
    <section className={cn(className, "")}>
      <div className="grid grid-cols-12">
        <div className="col-span-12 lg:col-span-8">
          <div className="">
            <h3 className="text-[16px] md:text-[20px] lg:text-[24px] font-bold text-gray-700">
              Reviews
            </h3>
            <p className="text-md font-medium text-gray-700">
              View all the reviews of this menu
            </p>
          </div>
          <div className="flex justify-end">
            <Link
              href={`/companies/${companyId}/menus/${menuId}/add-review`}
              className="_btn bg-gray-700 text-white hover:bg-gray-900"
            >
              Add review
            </Link>
          </div>

          {reviews.map((review, i) => (
            <ReviewCard key={`review-${i}`} review={review} className="mt-8" />
          ))}

          {page > totalPages || !reviews.length ? null : (
            <div className="mt-12 flex justify-center">
              <button
                onClick={() => {
                  if (!isLoading) {
                    setPage((page) => page + 1);
                  }
                }}
                type="button"
                className="_btn _primary-btn w-[130px] flex items-center justify-center"
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
                  "Load more"
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
