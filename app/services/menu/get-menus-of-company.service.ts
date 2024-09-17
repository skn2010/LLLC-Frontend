import http from "@/app/utils/http";

type Props = {
  authorization?: { token: string };
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
  data: TMenu[];
  currentPage: number;
  pageSize: number;
  totalCount: number;
  totalPages: number;
};

export async function getMenusOfCompanyApi({
  authorization,
  params,
  queries,
  ...others
}: Props) {
  const response: Response = await http(
    `menus/of-company/${params.companyId}?page=${queries.page}&pageSize=${queries.pageSize}`,
    {
      method: "GET",
      includeAuth: false,
      headers: {
        "Content-Type": "application/json",
      },
      ...others,
    }
  );

  return response;
}
