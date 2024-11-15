import http from "@/app/utils/http";

type Props = {
  params: {
    reviewId: string;
  };
  payload: {
    reactionType: string;
  };
};

type Response = {
  data: any;
  message: string;
};

export default async function reactOnReviewApi({ params, payload }: Props) {
  const response: Response = await http(
    `/reviews/${params.reviewId}/reactions`,
    {
      method: "POST",
      includeAuth: true,
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return response;
}
