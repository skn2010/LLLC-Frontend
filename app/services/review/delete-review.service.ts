import http from "@/app/utils/http";

type Props = {
  params: {
    reviewId: string;
  };
  [key: string]: unknown;
};

type Response = {
  data: TCompany;
  message: string;
};

export async function deleteReviewApi({ params, ...others }: Props) {
  const response: Response = await http(`/reviews/${params.reviewId}`, {
    method: "DELETE",
    includeAuth: true,
    headers: {
      "Content-Type": "application/json",
    },
    ...others,
  });

  return response;
}
