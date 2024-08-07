import PublicHeader from "@/app/components/layouts/public-header";
import Footer from "@/app/components/layouts/footer";
import CreateCompanyForm from "./container/create-company-form";
import { getCategoryDropdownApi } from "@/app/services/category/get-category-dropdown.service";

export default async function CreateCompany() {
  const categoryData = await (async () => {
    try {
      return await getCategoryDropdownApi({ next: { cache: "no-store" } });
    } catch {
      return null;
    }
  })();

  return (
    <>
      <PublicHeader headerType="dark" />
      <main className="_app-layout pt-6 pb-10">
        <div className="_container-layout">
          <CreateCompanyForm categoryDropdown={categoryData?.data || []} />
        </div>
      </main>
      <Footer />
    </>
  );
}
