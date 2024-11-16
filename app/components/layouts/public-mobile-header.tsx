import { HiMenu } from "react-icons/hi";
import cn from "@/app/utils/class-names";
import Logo from "../ui/logo";
import SearchInput from "../search-input";

type Props = {
  className?: string;
};

export default function PublicMobileHeader({ className }: Props) {
  return (
    <header className={cn(className, "bg-primary")}>
      <div className="flex justify-between items-center gap-x-4">
        <Logo type={"white"} />
        <HiMenu size={24} color="white" />
      </div>

      <SearchInput className="mt-4" />
    </header>
  );
}
