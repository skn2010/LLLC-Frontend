import http from "@/app/utils/http";

type Props = {
  params: {
    companyId: string;
  };
  [key: string]: unknown;
};

type Response = {
  data: TCompany;
  message: string;
};

export async function deleteCompanyApi({ params, ...others }: Props) {
  const response: Response = await http(`/companies/${params.companyId}`, {
    method: "DELETE",
    includeAuth: true,
    headers: {
      "Content-Type": "application/json",
    },
    ...others,
  });

  return response;
}
