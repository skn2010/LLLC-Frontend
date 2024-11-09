import http from "@/app/utils/http";

type Props = {
  params: {
    companyId: string;
  };
};

type Response = {
  data: TMenu[];
  currentPage: number;
  pageSize: number;
  totalCount: number;
  totalPages: number;
};

export default async function getPopularMenusOfCompanyApi({
  params,
  ...others
}: Props) {
  const response: Response = await http(
    `/menus/popular/of-company/${params.companyId}`,
    {
      method: "GET",
      includeAuth: false,
      headers: {
        "Content-Type": "application/json",
      },
      ...others,
      next: {
        cache: "no-store",
        tags: ["company-popular-menus", `popular-menus-of-${params.companyId}`],
      },
    }
  );

  return response;
}
