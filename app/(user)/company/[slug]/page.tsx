import PublicHeader from "@/app/components/layouts/public-header";
import Footer from "@/app/components/layouts/footer";
import Hero from "./container/hero";
import ShortCutBtns from "./components/short-cut-btns";
import CompanyProfileDetails from "./components/company-profile-details";
import AboutCompany from "./components/about-company";
import MenuList from "./container/menu-list";
import ReviewList from "./container/review-list";
import CompanyLocation from "./components/company-location";

export default function CompanyDetails() {
  return (
    <>
      <PublicHeader headerType="dark" />
      <main className="pt-6 pb-10">
        <Hero />
        <div className="_app-layout">
          <div className="_container-layout flex flex-col md:flex-row gap-x-8 gap-y-12 overflow-hidden">
            <div id="leftContainer" className="s">
              <ShortCutBtns className="mt-10" />
              <hr className="my-10" />
              <AboutCompany />
              <MenuList className="mt-10" />
              <ReviewList className="mt-10" />
            </div>
            <div className="mt-10 w-full md:max-w-[350px]">
              <CompanyProfileDetails />
              <CompanyLocation className="mt-10" />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
