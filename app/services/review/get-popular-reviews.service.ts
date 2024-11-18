import http from "@/app/utils/http";

type Response = {
  data: TReview[];
  currentPage: number;
  pageSize: number;
  totalCount: number;
  totalPages: number;
};

export default async function getPopularReviewsApi() {
  const response: Response = await http("/reviews/popular?page=1", {
    method: "GET",
    includeAuth: false,
    next: {
      cache: "no-store",
      tags: ["popular-reviews"],
    },
  });

  return response;
}
