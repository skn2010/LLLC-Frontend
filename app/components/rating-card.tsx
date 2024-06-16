import Link from "next/link";
import Image from "next/image";
import { BsLightbulb } from "react-icons/bs";
import { FaRegHandPeace } from "react-icons/fa6";
import { FiHeart } from "react-icons/fi";
import { FaRegSadTear } from "react-icons/fa";
import cn from "@/app/utils/class-names";
import RatingStar from "./rating-star";

type Props = {
  className?: string;
};

const reactionClass = "cursor-pointer";

export default function RatingCard({ className }: Props) {
  return (
    <div className={cn(className, "rounded-md border border-gray-300")}>
      <div className="p-4 flex items-center gap-x-2">
        <div>
          <Image
            src={"/hero.png"}
            alt="profile-img"
            width={48}
            height={48}
            className="rounded-full aspect-square object-cover"
          />
        </div>
        <div>
          <h4 className="text-[14px] font-semibold text-gray-700">
            Yumick Gharti
          </h4>
          <p className="text-[12px] text-gray-500">20 minutes ago</p>
        </div>
      </div>

      <figure>
        <Image
          src={"/hero.png"}
          alt="profile-img"
          width={400}
          height={400}
          className="w-full aspect-[2/1] object-cover"
        />
      </figure>

      <div className="mt-4 px-4">
        <h3 className="text-[16px] font-bold text-gray-800">
          Hotel Seff Pokhara
        </h3>
        <RatingStar rating={4} size={24} className="mt-1" />

        <p className="_line-clamp-2 mt-1 text-[14px] text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercit
        </p>
        <Link
          href={"/"}
          className="mt-1 text-[14px] font-medium text-secondary"
        >
          Read more
        </Link>
      </div>

      <div className="mt-2 px-4 pb-4">
        <hr />

        <div className="mt-4 flex justify-between items-center gap-x-2">
          <BsLightbulb
            size={22}
            title="Helpful"
            className={cn(reactionClass)}
          />
          <FaRegHandPeace
            size={22}
            title="Thanks"
            className={cn(reactionClass)}
          />
          <FiHeart size={22} title="Love this" className={cn(reactionClass)} />
          <FaRegSadTear size={22} title="Oh no" className={cn(reactionClass)} />
        </div>
      </div>
    </div>
  );
}
