import PublicHeader from "@/app/components/layouts/public-header";
import Hero from "./container/hero";
import PopularReviews from "./container/popular-reviews";
import CategoriesList from "./container/categories-list";
import PopularCompanies from "./container/popular.companies";
import Footer from "@/app/components/layouts/footer";
import { getCategoriesApi } from "@/app/services/category/get-categories.service";
import getUserDataFromServer from "@/app/utils/get-user-data-from-server";
import getPopularReviewsApi from "@/app/services/review/get-popular-reviews.service";

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

const getPopularMenus = async (token: string) => {
  try {
    const res = await getPopularReviewsApi({ authorization: { token } });
    return res.data;
  } catch {
    return [];
  }
};

export default async function UserHome() {
  const { user, token } = getUserDataFromServer();
  const categories = await getCategories();
  const reviews = await getPopularMenus(token as string);

  return (
    <>
      <PublicHeader className="lg:absolute lg:top-0" headerType="primary" />
      <main>
        <Hero />
        <PopularReviews
          user={user}
          reviews={reviews}
          className="_app-layout mt-16 mb-20"
        />
        <hr />
        <div className="_app-layout">
          <PopularCompanies className="_container-layout my-16" />
        </div>
        <hr />
        <CategoriesList categories={categories} className="_app-layout my-16" />
      </main>
      <Footer />
    </>
  );
}
