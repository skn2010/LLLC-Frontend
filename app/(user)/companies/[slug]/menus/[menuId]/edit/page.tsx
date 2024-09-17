import { redirect } from "next/navigation";
import { getMenuDetailsApi } from "@/app/services/menu/get-menu.service";
import PublicHeader from "@/app/components/layouts/public-header";
import AppLayout from "@/app/components/layouts/app-layout";
import ContainerLayout from "@/app/components/layouts/container-layout";
import Footer from "@/app/components/layouts/footer";
import EditMenuForm from "./container/edit-menu-form";

async function loadData(menuId: string): Promise<[TMenuDetails | null]> {
  const menuDetails = async () =>
    getMenuDetailsApi({
      params: { menuId },
      next: {
        cache: "no-store",
        tags: ["menu", `menu-details-${menuId}`],
      },
    });

  try {
    const [menuData] = await Promise.all([menuDetails()]);
    return [menuData.data];
  } catch (e) {
    console.log("Error on companies/id/menus/id/edit");
    console.log(e);
    return [null];
  }
}

export default async function EditMenu({
  params,
}: {
  params: { menuId: string; slug: string };
}) {
  const [menuData] = await loadData(params.menuId);

  if (!menuData) {
    redirect("/");
  }

  return (
    <>
      <PublicHeader headerType="dark" />
      <AppLayout className="pt-6 pb-10">
        <ContainerLayout>
          <EditMenuForm companyId={params.slug} menu={menuData} />
        </ContainerLayout>
      </AppLayout>
      <Footer />
    </>
  );
}