import Image from "next/image";
import cn from "@/app/utils/class-names";

type Props = {
  menu: TMenuDetails;
  className?: string;
};

export default function MenuInfo({ menu, className }: Props) {
  return (
    <div className={cn(className, "grid grid-cols-12")}>
      <div className="col-span-12 lg:col-span-8">
        <div className="mt-6 flex items-center gap-x-4">
          <figure>
            <Image
              src={menu.created_by?.avatar || "/home-hero.jpg"}
              alt="profile-img"
              width={80}
              height={80}
              className="w-full max-w-[50px] aspect-[1/1] rounded-full object-cover"
            />
          </figure>
          <div>
            <h4 className="text-sm font-bold capitalize text-gray-700">
              {menu.company?.name}
            </h4>
            <p className="mt-1 text-xs text-gray-700">{menu.company?.email}</p>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap gap-4 justify-between">
          <div>
            <h4 className="text-[18px] font-semibold text-gray-700">
              {menu.name}
            </h4>
            <h3 className="mt-2 text-[22px] font-bold text-gray-700">
              ${menu.price}
            </h3>
            <p className="mt-4 font-medium text-gray-700">
              Created in {menu.created_date.split("T")[0]}
            </p>
          </div>

          <div>
            <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded">
              {menu.tag}
            </span>
          </div>
        </div>
        <p className="mt-4 text-gray-700">{menu.description}</p>
      </div>
    </div>
  );
}
