import http from "@/app/utils/http";

type Props = {
  params: {
    reviewId: string;
  };
};

type Response = {
  data: any;
  message: string;
};

export default async function removeReactOnReviewApi({ params }: Props) {
  const response: Response = await http(
    `/reviews/${params.reviewId}/reactions`,
    {
      method: "DELETE",
      includeAuth: true,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return response;
}
