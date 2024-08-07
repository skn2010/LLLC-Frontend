import http from "@/app/utils/http";

type Props = {
  payload: Omit<Partial<TCompany>, "_id">;
  params: {
    companyId: string;
  };
  [key: string]: unknown;
};

type Response = {
  data: TCompany;
  message: string;
};

export async function updateCompanyApi({ payload, params, ...others }: Props) {
  const company: Response = await http(`/companies/${params.companyId}`, {
    method: "PATCH",
    includeAuth: true,
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
    },
    ...others,
  });

  return company;
}
