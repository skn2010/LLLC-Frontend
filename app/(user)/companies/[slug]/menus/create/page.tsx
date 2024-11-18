import { redirect } from "next/navigation";
import AppLayout from "@/app/components/layouts/app-layout";
import ContainerLayout from "@/app/components/layouts/container-layout";
import Footer from "@/app/components/layouts/footer";
import PublicHeader from "@/app/components/layouts/public-header";
import CreateMenuForm from "./container/create-menu-form";
import getUserDataFromServer from "@/app/utils/get-user-data-from-server";
import { getCompanyDetailsApi } from "@/app/services/company/get-company.service";

const getCompanyDetails = async (companyId: string) => {
  try {
    const response = await getCompanyDetailsApi({ params: { companyId } });
    return response.data;
  } catch {
    return null;
  }
};

export default async function CreateMenus({
  params,
}: {
  params: { slug: string };
}) {
  const companyId = params.slug;
  const companyData = await getCompanyDetails(companyId);
  const { token, user } = getUserDataFromServer();

  if (!token || !user?._id || !companyData) {
    redirect("/login");
  }

  if (companyData.created_by !== user?._id && !user?.is_admin) {
    redirect("/");
  }

  return (
    <>
      <PublicHeader headerType="white" />
      <AppLayout className="pt-6 pb-10">
        <ContainerLayout className="_container-layout">
          <CreateMenuForm companyId={companyId} />
        </ContainerLayout>
      </AppLayout>
      <Footer />
    </>
  );
}
