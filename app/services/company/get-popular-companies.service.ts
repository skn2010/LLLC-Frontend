import http from "@/app/utils/http";

type Response = {
  data: TCompany[];
};

export default async function getPopularCompaniesApi() {
  const response: Response = await http("/companies/popular", {
    method: "GET",
    includeAuth: false,
    next: {
      cache: "no-store",
      tags: ["popular-companies"],
    },
  });

  return response;
}
