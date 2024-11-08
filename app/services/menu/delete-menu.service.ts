import http from "@/app/utils/http";
import { revalidateTagInServerComponent } from "../revalidation-cache/revalidate-sever-component-cache";

type Props = {
  params: {
    menuId: string;
  };
};

export default async function deleteMenuApi({ params }: Props) {
  const response = await http(`/menus/${params.menuId}`, {
    method: "DELETE",
  });

  await revalidateTagInServerComponent({ tags: ["menu"] });
  return response;
}
