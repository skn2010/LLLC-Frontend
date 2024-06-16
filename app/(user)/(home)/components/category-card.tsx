import cn from "@/app/utils/class-names";
import Image from "next/image";
import Link from "next/link";

type Props = {
  className?: string;
};

export default function CategoryCard({ className }: Props) {
  return (
    <Link
      href={"/"}
      className={cn(
        className,
        "aspect-[1/0.7] flex justify-center items-center rounded-md border border-gray-300 hover:shadow-md"
      )}
    >
      <div>
        <figure className="flex justify-center">
          <Image
            src={"/hero.png"}
            alt="profile-img"
            width={48}
            height={48}
            className="rounded-full aspect-square object-cover"
          />
        </figure>
        <h4 className="mt-4 font-semibold text-center text-gray-700">
          Category name
        </h4>
      </div>
    </Link>
  );
}
