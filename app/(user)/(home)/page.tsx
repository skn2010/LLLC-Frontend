import PublicHeader from "@/app/components/layouts/public-header";
import Hero from "./container/hero";
import RecentRatingList from "./container/recent-ratings-list";
import CategoriesList from "./container/categories-list";
import Footer from "@/app/components/layouts/footer";
import { getCategoriesApi } from "@/app/services/category/get-categories.service";

const getCategories = async () => {
  try {
    const response = await getCategoriesApi({
      queries: { page: 1, pageSize: 12 },
    });

    return response.data;
  } catch (e: any) {
    return [];
  }
};

export default async function UserHome() {
  const categories = await getCategories();

  return (
    <>
      <PublicHeader className="lg:absolute lg:top-0" headerType="light" />
      <main>
        <Hero />
        <RecentRatingList className="_app-layout my-16" />
        <hr />
        <CategoriesList categories={categories} className="_app-layout my-16" />
      </main>
      <Footer />
    </>
  );
}
