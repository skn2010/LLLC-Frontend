import { redirect } from "next/navigation";
import Footer from "@/app/components/layouts/footer";
import PublicHeader from "@/app/components/layouts/public-header";
import EditCategoryForm from "./container/edit-category-form";
import getUserDataFromServer from "@/app/utils/get-user-data-from-server";

type Props = {
  params: {
    categoryId: string;
  };
};

export default async function EditCategory({ params }: Props) {
  const { token, user } = getUserDataFromServer();

  if (!token || !user?._id || !user.is_admin) {
    redirect("/");
  }
  return (
    <>
      <PublicHeader headerType="white" />
      <main className="_app-layout py-6">
        <div className="_container-layout min-h-[calc(100dvh-150px)]">
          <EditCategoryForm categoryId={params.categoryId} />
        </div>
      </main>
      <Footer />
    </>
  );
}
