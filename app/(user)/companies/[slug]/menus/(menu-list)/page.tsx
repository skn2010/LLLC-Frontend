import { redirect } from "next/navigation";
import PublicHeader from "@/app/components/layouts/public-header";
import Footer from "@/app/components/layouts/footer";
import ContainerLayout from "@/app/components/layouts/container-layout";
import AppLayout from "@/app/components/layouts/app-layout";
import MenuList from "./container/menu-list";
import { getCompanyDetailsApi } from "@/app/services/company/get-company.service";

async function loadData(companyId: string) {
  const companyDetails = async () =>
    getCompanyDetailsApi({
      params: { companyId },
      next: {
        cache: "no-store",
        tags: ["company", `company-details-${companyId}`],
      },
    });

  try {
    const [companyData] = await Promise.all([companyDetails()]);
    return [companyData];
  } catch (e) {
    console.log(`Error on companies/${companyId}`);
    console.log(e);
    return [null];
  }
}

export default async function Menus({ params }: { params: { slug: string } }) {
  const companyId = params.slug;
  const [companyData] = await loadData(companyId);

  if (!companyData) {
    redirect("/");
  }
  return (
    <>
      <PublicHeader headerType="dark" />
      <AppLayout className="pt-6 pb-10">
        <ContainerLayout>
          <MenuList companyId={companyId} companyName={companyData.data.name} />
        </ContainerLayout>
      </AppLayout>
      <Footer />
    </>
  );
}
