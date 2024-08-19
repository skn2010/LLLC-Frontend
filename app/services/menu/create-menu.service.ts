import http from "@/app/utils/http";

type Props = {
  payload: {
    name: string;
    description: string;
    images: any[];
    price: number;
    tag: string;
  };
  params: {
    companyId: string;
  };
};

type Response = {
  data: TMenu;
  message: string;
};

export async function createMenuApi({ payload, params }: Props) {
  const formData = new FormData();
  formData.append("name", payload.name);
  formData.append("price", payload.price.toString());
  formData.append("tag", payload.tag);
  formData.append("description", payload.description);
  formData.append("company", params.companyId);

  payload.images.forEach((image) => {
    formData.append("images", image);
  });

  const menuResponse: Response = await http("/menus", {
    method: "POST",
    body: formData,
    includeAuth: true,
  });

  return menuResponse;
}
