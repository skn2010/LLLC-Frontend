import { HiMenu } from "react-icons/hi";
import cn from "@/app/utils/class-names";
import Logo from "../ui/logo";

type Props = {
  className?: string;
};

export default function PublicMobileHeader({ className }: Props) {
  return (
    <header className={cn(className, "bg-primary")}>
      <div className="flex justify-between items-center gap-x-4">
        <Logo width={60} height={30} type={"white"} />
        <HiMenu size={24} color="white" />
      </div>

      <form className="mt-4">
        <input
          type="search"
          placeholder="Search the business you want to review..."
          className="w-full px-4 py-2 outline-none rounded-md bg-white"
        />
      </form>
    </header>
  );
}
