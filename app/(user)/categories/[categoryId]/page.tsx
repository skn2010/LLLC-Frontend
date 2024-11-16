import Footer from "@/app/components/layouts/footer";
import PublicHeader from "@/app/components/layouts/public-header";
import EditCategoryForm from "./container/edit-category-form";

type Props = {
  params: {
    categoryId: string;
  };
};

export default async function EditCategory({ params }: Props) {
  return (
    <>
      <PublicHeader headerType="dark" />
      <main className="_app-layout py-6">
        <div className="_container-layout min-h-[calc(100dvh-150px)]">
          <EditCategoryForm categoryId={params.categoryId} />
        </div>
      </main>
      <Footer />
    </>
  );
}
