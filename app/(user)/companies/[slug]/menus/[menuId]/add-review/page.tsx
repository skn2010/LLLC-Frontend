import { redirect } from "next/navigation";
import AppLayout from "@/app/components/layouts/app-layout";
import ContainerLayout from "@/app/components/layouts/container-layout";
import Footer from "@/app/components/layouts/footer";
import PublicHeader from "@/app/components/layouts/public-header";
import AddReviewForm from "./container/add-review-form";
import getUserDataFromServer from "@/app/utils/get-user-data-from-server";

export default async function ViewMenu({
  params,
}: {
  params: { menuId: string; slug: string };
}) {
  const { token, user } = getUserDataFromServer();

  if (!token || !user?._id) {
    redirect("/login");
  }

  return (
    <>
      <PublicHeader headerType="white" />
      <AppLayout className="pt-6 pb-10">
        <ContainerLayout>
          <AddReviewForm companyId={params.slug} menuId={params.menuId} />
        </ContainerLayout>
      </AppLayout>
      <Footer />
    </>
  );
}
