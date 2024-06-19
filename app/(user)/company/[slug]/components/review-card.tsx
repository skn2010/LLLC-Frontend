import Image from "next/image";
import { MdMoreHoriz } from "react-icons/md";
import { BsLightbulb } from "react-icons/bs";
import { FaRegHandPeace } from "react-icons/fa6";
import { FaRegSadTear } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import cn from "@/app/utils/class-names";
import RatingStar from "@/app/components/rating-star";

type Props = {
  className?: string;
};

export default function ReviewCard({ className }: Props) {
  return (
    <div className={cn(className, "")}>
      <div className="flex justify-between">
        <div className="flex items-center gap-x-4">
          <figure>
            <Image
              src={"/hero.png"}
              alt="profile-img"
              width={80}
              height={80}
              className="w-full max-w-[40px] aspect-[1/1] rounded-full object-cover"
            />
          </figure>
          <div>
            <h4 className="text-sm font-bold text-gray-700">Yumick gharti</h4>
            <p className="mt-1 text-xs text-gray-700">Pokhara Kaski</p>
          </div>
        </div>
        <div>
          <MdMoreHoriz size={20} />
        </div>
      </div>

      <div className="mt-4 flex items-center gap-x-4">
        <RatingStar size={30} rating={4} />
        <p className="text-sm text-gray-700">15, June, 2021</p>
      </div>

      <div className="mt-6">
        <p className="text-md text-gray-700">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in.
        </p>
      </div>

      <figure className="mt-6">
        <Image
          src={"/hero.png"}
          alt="profile-img"
          width={600}
          height={600}
          className="w-full aspect-video rounded-sm object-cover"
        />
      </figure>

      <div className="mt-6 flex items-center gap-x-8">
        <div className="flex items-center gap-x-2 cursor-pointer text-gray-700">
          <BsLightbulb size={18} title="Helpful" />
          <p className="text-sm font-medium">12</p>
        </div>
        <div className="flex items-center gap-x-2 cursor-pointer text-gray-700">
          <FaRegHandPeace size={18} title="Thanks" />
          <p className="text-sm font-medium">10</p>
        </div>
        <div className="flex items-center gap-x-2 cursor-pointer text-gray-700">
          <FaRegSadTear size={18} title="Oh no" />
          <p className="text-sm font-medium">120</p>
        </div>
        <div className="flex items-center gap-x-2 cursor-pointer text-gray-700">
          <FiHeart size={18} title="Love this" />
          <p className="text-sm font-medium">60</p>
        </div>
      </div>
    </div>
  );
}
