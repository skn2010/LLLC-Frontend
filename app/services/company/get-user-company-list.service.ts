import http from "@/app/utils/http";

type Props = {
  authorization?: { token: string };
  [key: string]: unknown;
};

type ResponseData = {
  data: TCompany[];
};

export async function getUsersCompanyList({ authorization, ...others }: Props) {
  const response: ResponseData = await http("/companies/of-user", {
    method: "GET",
    includeAuth: true,
    token: authorization?.token,
    headers: {
      "Content-Type": "application/json",
    },
    ...others,
  });

  return response;
}
