import http from "@/app/utils/http";

type Props = {
  params: {
    menuId: string;
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

export async function getReviewsOfMenu({ params, queries, ...others }: Props) {
  const response: Response = await http(
    `reviews/of-menu/${params.menuId}?page=${queries.page}&pageSize=${queries.pageSize}`,
    {
      method: "GET",
      includeAuth: false,
      headers: {
        "Content-Type": "application/json",
      },
      ...others,
      next: {
        cache: "no-store",
        tags: ["menu-reviews", `reviews-of-${params.menuId}`],
      },
    }
  );
  return response;
}
