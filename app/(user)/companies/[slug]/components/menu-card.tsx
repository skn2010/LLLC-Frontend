import Link from "next/link";
import cn from "@/app/utils/class-names";

type Props = {
  className?: string;
};

export default function MenuCard({ className }: Props) {
  return (
    <Link href={""} className={cn(className)}>
      <div
        style={{ backgroundImage: `url(${"/hero.png"})` }}
        className={cn(
          "w-full aspect-video rounded-md bg-no-repeat bg-cover bg-center"
        )}
      >
        <div className="p-4 aspect-video flex justify-start items-end bg-gray-600 bg-opacity-50">
          <p className="text-md font-semibold text-white">$ 20</p>
        </div>
      </div>

      <div className="mt-4">
        <h4 className="text-md font-semibold text-gray-800">
          Pork Xiao Long Bao
        </h4>
        <p className="mt-2 text-sm text-gray-600">20 photos - 200 reviews</p>
      </div>
    </Link>
  );
}
