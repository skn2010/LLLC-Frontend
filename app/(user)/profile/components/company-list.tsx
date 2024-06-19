import Link from "next/link";
import Image from "next/image";
import cn from "@/app/utils/class-names";

type Props = {
  className?: string;
};

export default function CompanyList({ className }: Props) {
  return (
    <div className={cn(className, "max-h-[500px] rounded-lg overflow-auto")}>
      <h4 className="text-xs font-bold text-gray-600">My Listed companies</h4>
      <Link href={"/"} className="mt-6 flex items-center gap-x-4">
        <figure>
          <Image
            src={"/hero.png"}
            alt="profile-img"
            width={80}
            height={80}
            className="w-full max-w-[50px] aspect-[1/1] rounded-md object-cover"
          />
        </figure>
        <div>
          <h4 className="text-sm font-bold text-gray-700">
            Tighter Top Restaurant
          </h4>
          <p className="mt-1 text-xs text-gray-700">Pokhara Kaski</p>
        </div>
      </Link>

      <Link href={"/"} className="mt-6 flex items-center gap-x-4">
        <figure>
          <Image
            src={"/hero.png"}
            alt="profile-img"
            width={80}
            height={80}
            className="w-full max-w-[50px] aspect-[1/1] rounded-md object-cover"
          />
        </figure>
        <div>
          <h4 className="text-sm font-bold text-gray-700">
            Tighter Top Restaurant
          </h4>
          <p className="mt-1 text-xs text-gray-700">Pokhara Kaski</p>
        </div>
      </Link>
      <Link href={"/"} className="mt-6 flex items-center gap-x-4">
        <figure>
          <Image
            src={"/hero.png"}
            alt="profile-img"
            width={80}
            height={80}
            className="w-full max-w-[50px] aspect-[1/1] rounded-md object-cover"
          />
        </figure>
        <div>
          <h4 className="text-sm font-bold text-gray-700">
            Tighter Top Restaurant
          </h4>
          <p className="mt-1 text-xs text-gray-700">Pokhara Kaski</p>
        </div>
      </Link>
    </div>
  );
}
