import { redirect } from "next/navigation";
import Footer from "@/app/components/layouts/footer";
import PublicHeader from "@/app/components/layouts/public-header";
import EditCompanyForm from "./container/edit-company-form";
import { getCompanyDetailsApi } from "@/app/services/company/get-company.service";
import getUserDataFromServer from "@/app/utils/get-user-data-from-server";
import { getCategoryDropdownApi } from "@/app/services/category/get-category-dropdown.service";

async function loadData(companyId: string) {
  const getCompanyDetails = async () =>
    getCompanyDetailsApi({
      params: { companyId },
      next: {
        cache: "no-store",
      },
    });

  const getCategoryDropdown = async () => {
    return await getCategoryDropdownApi({ next: { cache: "no-store" } });
  };

  try {
    const [companyData, categoryDropdownData] = await Promise.all([
      getCompanyDetails(),
      getCategoryDropdown(),
    ]);
    return [companyData, categoryDropdownData];
  } catch (e) {
    console.log(`Error on companies/${companyId}`);
    console.log(e);
    return [null, null];
  }
}

export default async function EditCompany({
  params,
}: {
  params: { slug: string };
}) {
  const { user } = getUserDataFromServer();
  const [companyData, categoryDropdownData] = await (async () =>
    loadData(params.slug))();

  if (
    !companyData ||
    ((companyData.data as TCompany).created_by as TUser)._id !== user._id
  ) {
    redirect("/");
  }

  return (
    <>
      <PublicHeader headerType="dark" />
      <main className="_app-layout pt-6 pb-10">
        <div className="_container-layout">
          <EditCompanyForm
            companyData={companyData.data as TCompany}
            categoryDropdown={(categoryDropdownData?.data as TCategory[]) || []}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
