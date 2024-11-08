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
import getUserDataFromServer from "@/app/utils/get-user-data-from-server";

async function loadData(companyId: string) {
  const companyDetails = async () =>
    getCompanyDetailsApi({
      params: { companyId },
    });

  try {
    const [companyData] = await Promise.all([companyDetails()]);
    return [companyData];
  } catch (e) {
    console.log(`Error on companies/${companyId}`);
    return [null];
  }
}

export default async function CompanyDetails({
  params,
}: {
  params: { slug: string };
}) {
  const { user } = getUserDataFromServer();
  const [companyData] = await (async () => loadData(params.slug))();

  if (!companyData) {
    redirect("/");
  }

  return (
    <>
      <PublicHeader headerType="dark" />
      <main className="pt-6 pb-10">
        <Hero companyDetails={companyData.data} />
        <div className="_app-layout">
          <div className="_container-layout flex flex-col md:flex-row gap-x-8 gap-y-12 overflow-hidden">
            <div id="leftContainer" className="s">
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
              <MenuList companyId={params.slug} className="mt-10" />
              <ReviewList className="mt-10" />
            </div>
            <div className="mt-10 w-full md:max-w-[350px]">
              <CompanyProfileDetails companyDetails={companyData.data} />
              <CompanyLocation
                location={(companyData.data as TCompany).location}
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
