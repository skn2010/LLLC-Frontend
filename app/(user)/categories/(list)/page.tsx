import Footer from "@/app/components/layouts/footer";
import PublicHeader from "@/app/components/layouts/public-header";
import CategoryList from "./container/category-list";

export default function Profile() {
  return (
    <>
      <PublicHeader headerType="dark" />
      <main className="_app-layout py-6">
        <div className="_container-layout min-h-[calc(100dvh-150px)]">
          <CategoryList />
        </div>
      </main>
      <Footer />
    </>
  );
}
