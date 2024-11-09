import Link from "next/link";
import cn from "@/app/utils/class-names";

type Props = {
  menu: TMenu;
  companyId: string;
  className?: string;
};

export default function MenuCard({ menu, companyId, className }: Props) {
  return (
    <Link
      href={`/companies/${companyId}/menus/${menu._id}`}
      className={cn(className)}
    >
      <div
        style={{ backgroundImage: `url(${menu.images[0].url})` }}
        className={cn(
          "w-full aspect-video rounded-md bg-no-repeat bg-cover bg-center overflow-hidden"
        )}
      >
        <div className="p-4 aspect-video flex justify-start items-end bg-gray-600 bg-opacity-5 hover:bg-opacity-0">
          <p className="text-md font-semibold text-white">$ {menu.price}</p>
        </div>
      </div>

      <div className="mt-4">
        <h4 className="text-md font-semibold text-gray-800">{menu.name}</h4>
        <p className="mt-2 text-sm text-gray-600">
          {menu.images.length} photos
        </p>
      </div>
    </Link>
  );
}
