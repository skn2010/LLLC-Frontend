import Footer from "@/app/components/layouts/footer";
import PublicHeader from "@/app/components/layouts/public-header";

export default async function Menus() {
  return (
    <>
      <PublicHeader headerType="dark" />
      <main className="_app-layout pt-6 pb-10">
        <div className="_container-layout"></div>
      </main>
      <Footer />
    </>
  );
}
