import PublicHeader from "@/app/components/layouts/public-header";
import Footer from "@/app/components/layouts/footer";
import CreateCompanyForm from "./container/create-company-form";

export default function CreateCompany() {
  return (
    <>
      <PublicHeader headerType="dark" />
      <main className="_app-layout pt-6 pb-10">
        <div className="_container-layout">
          <CreateCompanyForm />
        </div>
      </main>
      <Footer />
    </>
  );
}
