import http from "@/app/utils/http";

type Props = {
  authorization?: {
    token: string;
  };
};

type Response = {
  data: TReview[];
  currentPage: number;
  pageSize: number;
  totalCount: number;
  totalPages: number;
};

export default async function getPopularReviewsApi({ authorization }: Props) {
  const response: Response = await http("/reviews/popular?page=1", {
    method: "GET",
    includeAuth: true,
    token: authorization?.token,
    next: {
      cache: "no-store",
      tags: ["popular-reviews"],
    },
  });

  return response;
}
