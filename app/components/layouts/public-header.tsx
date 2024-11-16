import Link from "next/link";
import cn from "@/app/utils/class-names";
import { publicNavList } from "@/app/constants";
import Logo from "../ui/logo";
import PublicMobileHeader from "./public-mobile-header";
import { GoogleOAuthProvider } from "@react-oauth/google";
import LoginWithGoogle from "../login-with-google";
import Image from "next/image";
import getUserDataFromServer from "@/app/utils/get-user-data-from-server";
import SearchInput from "../search-input";

type Props = {
  headerType?: "dark" | "light";
  className?: string;
};

export default function PublicHeader({
  headerType = "dark",
  className,
}: Props) {
  const { token, user } = getUserDataFromServer();

  return (
    <GoogleOAuthProvider
      clientId={process.env.NEXT_PUBLIC_GOOGLE_OAUTH_CLIENT_ID || ""}
    >
      <PublicMobileHeader className="_app-layout block py-4 lg:py-6 lg:hidden" />
      <header
        className={cn(
          className,
          "_app-layout py-4 lg:py-6 hidden lg:flex justify-between items-center gap-x-28",
          {
            "shadow-sm": headerType === "dark",
          }
        )}
      >
        <figure className="flex-none">
          <Logo type={headerType === "light" ? "white" : "black"} />
        </figure>
        <SearchInput
          className="grow max-w-[450px] flex justify-end"
          headerType="dark"
        />
        <div className="flex-none flex items-center gap-x-8">
          {publicNavList.map((navItem, i) => {
            return (
              <Link
                key={`nav-item-${i}`}
                href={navItem.link}
                className={cn("font-medium", {
                  "text-white": headerType === "light",
                  "text-gray-700": headerType === "dark",
                })}
              >
                {navItem.name}
              </Link>
            );
          })}
          {user && token ? (
            <Link href="/profile">
              <Image
                src={user?.avatar as string}
                height={30}
                width={30}
                alt="avatar"
              />
            </Link>
          ) : (
            <LoginWithGoogle headerType={headerType} />
          )}
        </div>
      </header>
    </GoogleOAuthProvider>
  );
}
