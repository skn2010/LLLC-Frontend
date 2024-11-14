import AppLayout from "@/app/components/layouts/app-layout";
import ContainerLayout from "@/app/components/layouts/container-layout";
import Footer from "@/app/components/layouts/footer";
import PublicHeader from "@/app/components/layouts/public-header";
import AddReviewForm from "./container/add-review-form";

export default async function ViewMenu({
  params,
}: {
  params: { menuId: string; slug: string };
}) {
  return (
    <>
      <PublicHeader headerType="dark" />
      <AppLayout className="pt-6 pb-10">
        <ContainerLayout>
          <AddReviewForm companyId={params.slug} menuId={params.menuId} />
        </ContainerLayout>
      </AppLayout>
      <Footer />
    </>
  );
}
