import http from "@/app/utils/http";

type Props = {
  params: {
    companyId: string;
  };
  [key: string]: unknown;
};

type ResponseData = {
  data: TCompanyDetails;
};

export async function getCompanyDetailsApi({ params, ...others }: Props) {
  const response: ResponseData = await http(`/companies/${params.companyId}`, {
    method: "GET",
    includeAuth: false,
    headers: {
      "Content-Type": "application/json",
    },
    next: {
      cache: "no-store",
      tags: ["company", `company-details-${params.companyId}`],
    },
    ...others,
  });

  return response;
}
