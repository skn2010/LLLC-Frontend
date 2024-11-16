import http from "@/app/utils/http";

type Props = {
  queries: {
    categoryId?: string;
    companyName?: string;
    page: number;
  };
};

type Response = {
  data: TCompany[];
  currentPage: number;
  pageSize: number;
  totalCount: number;
  totalPages: number;
};

export default async function getCompaniesApi({ queries }: Props) {
  const response: Response = await http(
    `/companies?page=${queries.page}&pageSize=${12}${
      queries.categoryId ? `&categoryId=${queries.categoryId}` : ""
    }${queries.companyName ? `&companyName=${queries.companyName}` : ""}`,
    {
      method: "GET",
      includeAuth: false,
      headers: {
        "Content-Type": "application/json",
      },
      next: {
        cache: "no-store",
        tags: ["company-list"],
      },
    }
  );

  return response;
}
