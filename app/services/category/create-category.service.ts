import http from "@/app/utils/http";

type Props = {
  payload: {
    name: string;
    image: any;
  };
};

type Response = {
  data: TCategory;
  message: string;
};

export default async function createCategoryApi({ payload }: Props) {
  const formData = new FormData();
  formData.append("name", payload.name);
  formData.append("image", payload.image);

  const response: Response = await http("/categories", {
    method: "POST",
    includeAuth: true,
    body: formData,
  });

  return response;
}
