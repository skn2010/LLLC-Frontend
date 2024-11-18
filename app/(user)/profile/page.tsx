import { redirect } from "next/navigation";
import Footer from "@/app/components/layouts/footer";
import PublicHeader from "@/app/components/layouts/public-header";
import ProfileSection from "./container/profile-section";
import getUserDataFromServer from "@/app/utils/get-user-data-from-server";

export default function Profile() {
  const { token, user } = getUserDataFromServer();

  if (!token || !user?._id) {
    redirect("/login");
  }

  return (
    <>
      <PublicHeader headerType="white" />
      <main className="_app-layout py-6">
        <ProfileSection className="_container-layout" />
      </main>
      <Footer />
    </>
  );
}
