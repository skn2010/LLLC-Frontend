import http from "@/app/utils/http";

type Props = {
  payload: { review: string; ratingStar: number; images: any[] };
  params: { menuId: string; companyId: string };
};

type Response = {
  data: any;
  message: string;
};

export default async function createReviewApi({ payload, params }: Props) {
  const formData = new FormData();

  formData.append("review", payload.review);
  formData.append("rating_star", payload.ratingStar.toString());
  formData.append("company", params.companyId);
  formData.append("menu", params.menuId);

  payload.images.forEach((image) => {
    formData.append("images", image);
  });

  const menuResponse: Response = await http("/reviews", {
    method: "POST",
    body: formData,
    includeAuth: true,
  });

  return menuResponse;
}
