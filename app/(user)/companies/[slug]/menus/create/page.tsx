import AppLayout from "@/app/components/layouts/app-layout";
import ContainerLayout from "@/app/components/layouts/container-layout";
import Footer from "@/app/components/layouts/footer";
import PublicHeader from "@/app/components/layouts/public-header";
import CreateMenuForm from "./container/create-menu-form";

export default async function CreateMenus({
  params,
}: {
  params: { slug: string };
}) {
  const companyId = params.slug;
  return (
    <>
      <PublicHeader headerType="dark" />
      <AppLayout className="pt-6 pb-10">
        <ContainerLayout className="_container-layout">
          <CreateMenuForm companyId={companyId} />
        </ContainerLayout>
      </AppLayout>
      <Footer />
    </>
  );
}
