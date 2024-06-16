import Link from "next/link";
import { RiSearch2Line } from "react-icons/ri";

import cn from "@/app/utils/class-names";
import { publicNavList } from "@/app/constants";
import Logo from "../ui/logo";
import PublicMobileHeader from "./public-mobile-header";

type Props = {
  headerType?: "dark" | "light";
  className?: string;
};

export default function PublicHeader({
  headerType = "dark",
  className,
}: Props) {
  return (
    <>
      <PublicMobileHeader className="_app-layout block py-4 lg:py-6 lg:hidden" />
      <header
        className={cn(
          "_app-layout py-4 lg:py-6 hidden lg:flex justify-between items-center gap-x-28",
          className
        )}
      >
        <figure className="flex-none">
          <Logo type={headerType === "light" ? "white" : "black"} />
        </figure>
        <form className="grow flex justify-end">
          <div className="w-full max-w-[900px] flex items-center shadow rounded-md overflow-hidden bg-white">
            <input
              type="search"
              placeholder="Search the business you want to review..."
              className="w-full px-4 py-2 outline-none"
            />
            <button type="submit" className="p-2.5 bg-primary">
              <RiSearch2Line size={28} color="white" />
            </button>
          </div>
        </form>
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

          <button
            className={cn("_btn", {
              "_secondary-light-outline-btn": headerType === "light",
              "_secondary-dark-outline-btn": headerType === "dark",
            })}
          >
            Login
          </button>
          <button className="_btn _primary-btn">Sign Up</button>
        </div>
      </header>
    </>
  );
}
