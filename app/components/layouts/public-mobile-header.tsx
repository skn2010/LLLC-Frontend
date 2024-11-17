import Link from "next/link";
import Image from "next/image";
import cn from "@/app/utils/class-names";
import Logo from "../ui/logo";
import SearchInput from "../search-input";
import getUserDataFromServer from "@/app/utils/get-user-data-from-server";
import LoginWithGoogle from "../login-with-google";

type Props = {
  className?: string;
};

export default function PublicMobileHeader({ className }: Props) {
  const { token, user } = getUserDataFromServer();

  return (
    <header className={cn(className, "")}>
      <div className="flex justify-between items-center gap-x-4">
        <Logo type="primary" className="text-red-600" />
        {user && token ? (
          <Link href="/profile">
            <Image
              src={user?.avatar as string}
              height={30}
              width={30}
              alt="avatar"
              className="rounded"
            />
          </Link>
        ) : (
          <LoginWithGoogle headerType={"primary"} />
        )}
      </div>

      <SearchInput className="mt-4" />
    </header>
  );
}
