import { redirect } from "next/navigation";
import PublicHeader from "@/app/components/layouts/public-header";
import Footer from "@/app/components/layouts/footer";
import Hero from "./container/hero";
import ShortCutBtns from "./components/short-cut-btns";
import CompanyProfileDetails from "./components/company-profile-details";
import AboutCompany from "./components/about-company";
import MenuList from "./container/menu-list";
import ReviewList from "./container/review-list";
import CompanyLocation from "./components/company-location";

import { getCompanyDetailsApi } from "@/app/services/company/get-company.service";
import getPopularMenusOfCompanyApi from "@/app/services/menu/get-popular-menus-of-company.service";
import getUserDataFromServer from "@/app/utils/get-user-data-from-server";

type TCompanyDetailsWithStats = {
  data: TCompanyDetails;
  reviewStats: TCompanyReviewStats;
};

async function loadData(
  companyId: string
): Promise<[TCompanyDetailsWithStats | null, TMenu[] | null]> {
  const companyDetails = async () =>
    getCompanyDetailsApi({ params: { companyId } });

  const popularMenus = async () =>
    getPopularMenusOfCompanyApi({ params: { companyId } });

  try {
    const [companyData, popularMenuData] = await Promise.all([
      companyDetails(),
      popularMenus(),
    ]);
    return [companyData, popularMenuData.data];
  } catch (e) {
    console.log(`Error on companies/${companyId}`);
    return [null, null];
  }
}

export default async function CompanyDetails({
  params,
}: {
  params: { slug: string };
}) {
  const { user } = getUserDataFromServer();
  const [companyData, popularMenuData] = await (async () =>
    loadData(params.slug))();

  if (!companyData?.data) {
    redirect("/");
  }

  return (
    <>
      <PublicHeader headerType="dark" />
      <main className="pb-10">
        <Hero
          companyDetails={companyData.data}
          reviewStats={companyData.reviewStats}
        />
        <div className="_app-layout">
          <div className="_container-layout flex flex-col md:flex-row gap-x-8 gap-y-12 overflow-hidden">
            <div className="w-full">
              <ShortCutBtns
                isUserOwnerOfCompany={
                  (companyData.data.created_by as TUser)._id === user._id
                }
                companyId={params.slug}
                companyName={companyData.data.name}
                className="mt-10"
              />
              <hr className="my-10" />
              <AboutCompany companyDescription={companyData.data.description} />
              <MenuList
                companyId={params.slug}
                className="mt-10"
                menus={popularMenuData || []}
              />
              <ReviewList
                className="mt-10"
                companyId={params.slug}
                user={user || null}
              />
            </div>
            <div className="mt-10 w-full md:max-w-[350px]">
              <CompanyProfileDetails companyDetails={companyData.data} />
              <CompanyLocation
                location={companyData.data.location}
                className="mt-10"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
