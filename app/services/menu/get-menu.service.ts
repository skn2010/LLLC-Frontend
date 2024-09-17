import http from "@/app/utils/http";

type Props = {
  params: {
    menuId: string;
  };
  [key: string]: unknown;
};

type ResponseData = {
  data: TMenuDetails;
};

export async function getMenuDetailsApi({ params, ...others }: Props) {
  const response: ResponseData = await http(`/menus/${params.menuId}`, {
    method: "GET",
    includeAuth: false,
    headers: {
      "Content-Type": "application/json",
    },
    ...others,
  });

  return response;
}
