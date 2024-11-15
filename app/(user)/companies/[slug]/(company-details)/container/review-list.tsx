"use client";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import cn from "@/app/utils/class-names";
import { getReviewsOfCompanyApi } from "@/app/services/review/get-reviews-of-company.service";
import ReviewCard from "@/app/components/review-card";
import Pagination from "@/app/components/ui/pagination";

type Props = {
  companyId: string;
  user: TUser | null;
  className?: string;
};

export default function ReviewList({ companyId, user, className }: Props) {
  const [page, setPage] = useState(1);
  const [reviews, setReviews] = useState<TReview[]>([]);
  const [totalPages, setTotalPages] = useState(1);

  const loadData = async () => {
    try {
      const response = await getReviewsOfCompanyApi({
        params: { companyId },
        queries: { page, pageSize: 12 },
      });

      setReviews(response.data);
      setTotalPages(response.totalPages);
    } catch (e: any) {
      toast.error(e.message);
    }
  };

  useEffect(() => {
    loadData();
  }, [page]);

  return (
    <section className={cn(className, "")}>
      <h4 className="text-[16px] md:text-[20px] lg:text-[24px] font-bold text-gray-700">
        Reviews
      </h4>
      <p className="text-md font-medium text-gray-700">
        View all the reviews of the company
      </p>

      <div className="mt-10 grid gap-y-16">
        {reviews.map((review, i) => (
          <ReviewCard
            key={`review-${i}`}
            review={review}
            user={user}
            reloadData={loadData}
            className="mt-8"
          />
        ))}

        {page > totalPages || !reviews.length ? null : (
          <div className="mt-8 flex justify-end">
            <Pagination
              currentPage={page}
              setCurrentPage={setPage}
              totalPages={totalPages}
            />
          </div>
        )}
      </div>
    </section>
  );
}
