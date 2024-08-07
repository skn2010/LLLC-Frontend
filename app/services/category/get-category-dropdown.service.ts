import http from "@/app/utils/http";

type Props = {
  [key: string]: unknown;
};

type Response = {
  data: TCategory[];
};

export async function getCategoryDropdownApi({ ...others }: Props) {
  const response: Response = await http("/categories/dropdown", {
    method: "GET",
    includeAuth: false,
    headers: {
      "Content-Type": "application/json",
    },
    ...others,
  });

  return response;
}
