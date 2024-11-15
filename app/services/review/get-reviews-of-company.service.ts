import http from "@/app/utils/http";

type Props = {
  params: {
    companyId: string;
  };
  queries: {
    page: number;
    pageSize: number;
  };

  [key: string]: unknown;
};

type Response = {
  data: TReview[];
  currentPage: number;
  pageSize: number;
  totalCount: number;
  totalPages: number;
};

export async function getReviewsOfCompanyApi({
  params,
  queries,
  ...others
}: Props) {
  const response: Response = await http(
    `reviews/of-company/${params.companyId}?page=${queries.page}&pageSize=${queries.pageSize}`,
    {
      method: "GET",
      includeAuth: true,
      headers: {
        "Content-Type": "application/json",
      },
      ...others,
      next: {
        cache: "no-store",
        tags: ["menu-reviews", `reviews-of-${params.companyId}`],
      },
    }
  );
  return response;
}
