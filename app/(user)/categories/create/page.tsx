import { redirect } from "next/navigation";
import Footer from "@/app/components/layouts/footer";
import PublicHeader from "@/app/components/layouts/public-header";
import CreateCategoryForm from "./container/create-category-form";
import getUserDataFromServer from "@/app/utils/get-user-data-from-server";

export default function Profile() {
  const { token, user } = getUserDataFromServer();

  if (!token || !user?._id || !user.is_admin) {
    redirect("/");
  }
  return (
    <>
      <PublicHeader headerType="white" />
      <main className="_app-layout py-6">
        <div className="_container-layout min-h-[calc(100dvh-150px)]">
          <CreateCategoryForm />
        </div>
      </main>
      <Footer />
    </>
  );
}
