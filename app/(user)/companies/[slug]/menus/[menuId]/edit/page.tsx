import { redirect } from "next/navigation";
import PublicHeader from "@/app/components/layouts/public-header";
import AppLayout from "@/app/components/layouts/app-layout";
import ContainerLayout from "@/app/components/layouts/container-layout";
import Footer from "@/app/components/layouts/footer";
import EditMenuForm from "./container/edit-menu-form";
import DeleteMenu from "./container/delete-menu-form";
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
  const { token, user } = getUserDataFromServer();
  const [menuData] = await loadData(params.menuId);

  if (!menuData || !token || !user?._id) {
    redirect("/");
  }

  // Object level authorization and allow admin to access
  if (menuData.created_by?._id !== user?._id && user?._is_admin) {
    redirect("/");
  }

  return (
    <>
      <PublicHeader headerType="white" />
      <AppLayout className="pt-6 pb-10">
        <ContainerLayout>
          <EditMenuForm companyId={params.slug} menu={menuData} />
          <DeleteMenu name={menuData.name} menuId={menuData._id} />
        </ContainerLayout>
      </AppLayout>
      <Footer />
    </>
  );
}
