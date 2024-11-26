import http from "@/app/utils/http";

type Props = {
  auth?: { token: string };
};

type Response = {
  data: TReview[];
  currentPage: number;
  pageSize: number;
  totalCount: number;
  totalPages: number;
};

export default async function getPopularReviewsApi({ auth }: Props) {
  const response: Response = await http("/reviews/popular?page=1", {
    method: "GET",
    includeAuth: true,
    token: auth?.token,
    next: {
      cache: "no-store",
      tags: ["popular-reviews"],
    },
  });

  return response;
}
