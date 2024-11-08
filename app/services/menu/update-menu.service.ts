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
    menuId: string;
  };
};

type Response = {
  data: TMenu;
  message: string;
};

export async function updateMenuApi({ payload, params }: Props) {
  const formData = new FormData();
  formData.append("name", payload.name);
  formData.append("price", payload.price.toString());
  formData.append("tag", payload.tag);
  formData.append("description", payload.description);

  const unchangedImages: TImage[] = [];

  payload.images.forEach((image) => {
    if (typeof image === "object" && image.url) {
      unchangedImages.push(image);
    } else {
      formData.append("images", image);
    }
  });

  if (unchangedImages.length) {
    formData.append("images", JSON.stringify(unchangedImages));
  }

  const menuResponse: Response = await http(`/menus/${params.menuId}`, {
    method: "PATCH",
    body: formData,
    includeAuth: true,
  });

  return menuResponse;
}
