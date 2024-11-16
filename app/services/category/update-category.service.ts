import http from "@/app/utils/http";
import { revalidateTagInServerComponent } from "../revalidation-cache/revalidate-sever-component-cache";

type Props = {
  payload: {
    name: string;
    image: any;
    is_active: boolean;
  };
  params: {
    categoryId: string;
  };
};

type Response = {
  data: TCategory;
  message: string;
};

export default async function updateCategoryApi({ params, payload }: Props) {
  const formData = new FormData();
  formData.append("name", payload.name);
  formData.append("is_active", `${payload.is_active}`);

  if (!!payload.name) {
    formData.append("cover_image", payload.image);
  } else {
    formData.append("cover_image", JSON.stringify(payload.image));
  }

  const response: Response = await http(`/categories/${params.categoryId}`, {
    method: "PATCH",
    includeAuth: true,
    body: formData,
  });

  await revalidateTagInServerComponent({
    tags: ["category", `category-details-${params.categoryId}`],
  });

  return response;
}
