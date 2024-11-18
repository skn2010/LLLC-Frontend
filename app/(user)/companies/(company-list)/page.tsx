import PublicHeader from "@/app/components/layouts/public-header";
import CompanyList from "./container/company-list";
import Footer from "@/app/components/layouts/footer";

type Props = {
  searchParams: {
    categoryId?: string;
    companyName?: string;
  };
};

export default function CompanyListPage({ searchParams }: Props) {
  return (
    <>
      <PublicHeader headerType="white" />
      <main className="pb-10">
        <div className="_container-layout min-h-[calc(100dvh-150px)] mt-10">
          <CompanyList
            categoryId={searchParams.categoryId}
            companyName={searchParams.companyName}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
