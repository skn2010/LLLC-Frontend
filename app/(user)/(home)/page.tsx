import PublicHeader from "@/app/components/layouts/public-header";
import Hero from "./container/hero";
import RecentRatingList from "./container/recent-ratings-list";
import CategoriesList from "./container/categories-list";
import Footer from "@/app/components/layouts/footer";

export default function UserHome() {
  return (
    <>
      <PublicHeader className="lg:absolute lg:top-0" headerType="light" />
      <main>
        <Hero />
        <RecentRatingList className="_app-layout my-16" />
        <hr />
        <CategoriesList className="_app-layout my-16" />
      </main>
      <Footer />
    </>
  );
}
