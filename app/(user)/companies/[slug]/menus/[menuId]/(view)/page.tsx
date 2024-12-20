import { redirect } from "next/navigation";
import AppLayout from "@/app/components/layouts/app-layout";
import ContainerLayout from "@/app/components/layouts/container-layout";
import Footer from "@/app/components/layouts/footer";
import PublicHeader from "@/app/components/layouts/public-header";
import ImageSlider from "./container/image-slider";
import MenuInfo from "./container/menu-info";
import ReviewList from "./container/review-list";
import { getMenuDetailsApi } from "@/app/services/menu/get-menu.service";
import getUserDataFromServer from "@/app/utils/get-user-data-from-server";

async function loadData(menuId: string): Promise<[TMenuDetails | null]> {
  const menuDetails = async () =>
    getMenuDetailsApi({
      params: { menuId },
    });

  try {
    const [menuData] = await Promise.all([menuDetails()]);
    return [menuData.data];
  } catch (e) {
    console.log("Error on companies/id/menus/id");
    console.log(e);
    return [null];
  }
}

export default async function ViewMenu({
  params,
}: {
  params: { menuId: string; slug: string };
}) {
  const [menuData] = await loadData(params.menuId);
  const { user } = getUserDataFromServer();

  if (!menuData) {
    redirect("/");
  }

  return (
    <>
      <PublicHeader headerType="white" />
      <AppLayout className="pt-6 pb-10">
        <ContainerLayout>
          <ImageSlider images={menuData.images.map((item) => item.url)} />
          <MenuInfo menu={menuData} className="mt-8" />
          <ReviewList
            companyId={params.slug}
            menuId={params.menuId}
            user={user}
            className="mt-12"
          />
        </ContainerLayout>
      </AppLayout>
      <Footer />
    </>
  );
}
