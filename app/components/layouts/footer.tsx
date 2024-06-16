import Link from "next/link";
import Logo from "../ui/logo";

export default function Footer() {
  return (
    <footer className="_app-layout py-16 bg-[#F7F7F7]">
      <div className="_container-layout grid grid-cols-12 gap-x-6 gap-y-8">
        <div className="col-span-12 lg:col-span-6">
          <Logo type="black" />
          <p className="mt-4 text-[14px] text-gray-600">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry`s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries.
          </p>
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-3">
          <h4 className="font-semibold text-gray-800">Useful links</h4>
          <Link href={"/"} className="mt-4 block text-[14px] text-gray-600">
            Home
          </Link>
          <Link href={"/"} className="mt-2 block text-[14px] text-gray-600">
            About
          </Link>
          <Link href={"/"} className="mt-2 block text-[14px] text-gray-600">
            Business
          </Link>
          <Link href={"/"} className="mt-2 block text-[14px] text-gray-600">
            Career
          </Link>
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-3">
          <h4 className="font-semibold text-gray-800">Languages</h4>
          <p className="mt-4 text-[14px] text-gray-600">English</p>
        </div>
      </div>
    </footer>
  );
}
