import http from "@/app/utils/http";

type Props = {
  params: {
    categoryId: string;
  };
};

type Response = {
  data: TCategory;
};

export default async function getCategoryDetailsApi({ params }: Props) {
  const response: Response = await http(`/categories/${params.categoryId}`, {
    method: "GET",
    includeAuth: false,
    next: {
      cache: "no-store",
      tags: ["category", `category-details-${params.categoryId}`],
    },
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response;
}
