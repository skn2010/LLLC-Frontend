import Footer from "@/app/components/layouts/footer";
import PublicHeader from "@/app/components/layouts/public-header";
import ProfileSection from "./container/profile-section";

export default function Profile() {
  return (
    <>
      <PublicHeader headerType="dark" />
      <main className="_app-layout py-6">
        <ProfileSection className="_container-layout" />
      </main>
      <Footer />
    </>
  );
}
