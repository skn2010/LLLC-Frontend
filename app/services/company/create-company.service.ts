import http from "@/app/utils/http";

type Props = {
  data: Omit<Partial<TCompany>, "_id">;
  [key: string]: unknown;
};

type Response = {
  data: TCompany;
  message: string;
};

export async function createCompanyApi({ data, ...others }: Props) {
  const company: Response = await http("/companies", {
    method: "POST",
    includeAuth: true,
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
    ...others,
  });

  return company;
}
