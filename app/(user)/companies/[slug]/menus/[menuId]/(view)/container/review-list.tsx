"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import cn from "@/app/utils/class-names";
import ReviewCard from "@/app/components/review-card";
import { getReviewsOfMenu } from "@/app/services/review/get-reviews-of-menu.service";
import Pagination from "@/app/components/ui/pagination";

type Props = {
  companyId: string;
  menuId: string;
  user: TUser | null;
  className?: string;
};

export default function ReviewList({
  companyId,
  menuId,
  user,
  className,
}: Props) {
  const [page, setPage] = useState(1);
  const [reviews, setReviews] = useState<TReview[]>([]);
  const [totalPages, setTotalPages] = useState(1);

  const loadData = async () => {
    try {
      const response = await getReviewsOfMenu({
        params: { menuId },
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
      </div>
    </section>
  );
}
