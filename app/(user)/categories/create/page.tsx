import Footer from "@/app/components/layouts/footer";
import PublicHeader from "@/app/components/layouts/public-header";
import CreateCategoryForm from "./container/create-category-form";

export default function Profile() {
  return (
    <>
      <PublicHeader headerType="dark" />
      <main className="_app-layout py-6">
        <div className="_container-layout min-h-[calc(100dvh-150px)]">
          <CreateCategoryForm />
        </div>
      </main>
      <Footer />
    </>
  );
}
