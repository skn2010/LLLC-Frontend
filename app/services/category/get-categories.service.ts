import http from "@/app/utils/http";

type Props = {
  queries: {
    page: number;
    pageSize: number;
  };

  [key: string]: unknown;
};

type Response = {
  data: TCategory[];
  currentPage: number;
  pageSize: number;
  totalCount: number;
  totalPages: number;
};

export async function getCategoriesApi({ queries, ...others }: Props) {
  const response: Response = await http(
    `categories?page=${queries.page}&pageSize=${queries.pageSize}`,
    {
      method: "GET",
      includeAuth: false,
      headers: {
        "Content-Type": "application/json",
      },
      ...others,
      next: {
        cache: "no-store",
        tags: ["categories"],
      },
    }
  );

  return response;
}
