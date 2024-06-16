import Image from "next/image";
import { BsLightbulb } from "react-icons/bs";
import { FaRegHandPeace } from "react-icons/fa6";
import { FiHeart } from "react-icons/fi";
import cn from "@/app/utils/class-names";
import { FaRegSadTear } from "react-icons/fa";

type Props = {
  className?: string;
};

export default function ProfileSection({ className }: Props) {
  return (
    <div
      className={cn(className, "flex flex-col md:flex-row gap-x-8 gap-y-12")}
    >
      <div className="w-full md:max-w-[350px]">
        <section className="border px-5 py-10 rounded-lg">
          <figure className="flex justify-center">
            <Image
              src={"/hero.png"}
              alt="profile-img"
              width={120}
              height={120}
              className="rounded-full aspect-square object-cover"
            />
          </figure>
          <h4 className="mt-4 text-[16px] lg:text-[22px] font-bold text-center text-gray-700">
            Yumick Gharti
          </h4>

          <p className="mt-4 text-[16px] font-medium text-center text-gray-600">
            Pokahra, Kaski
          </p>

          <div className="mt-4 flex justify-center items-center gap-x-6">
            <span className="flex justify-center items-center gap-x-1">
              <BsLightbulb
                size={14}
                title="Helpful"
                className="text-gray-500"
              />
              <p className="text-gray-500">12</p>
            </span>
            <span className="flex justify-center items-center gap-x-1">
              <FaRegHandPeace
                size={14}
                title="Thanks"
                className="text-gray-500"
              />
              <p className="text-gray-500">10</p>
            </span>
            <span className="flex justify-center items-center gap-x-1">
              <FiHeart size={14} title="Love this" className="text-gray-500" />
              <p className="text-gray-500">102</p>
            </span>
          </div>

          <div className="mt-8 flex justify-center">
            <button className="_btn _primary-btn py-2 px-3">Follow me</button>
          </div>
        </section>
      </div>

      <div className="grow">
        <h4 className="text-[16px] md:text-[20px] lg:text-[24px] font-bold text-gray-700">
          Impact
        </h4>
        <div className="mt-3 p-6 border rounded-md">
          <p className="text-sm font-semibold text-gray-800">Review Reaction</p>
          <div className="mt-6 flex items-center gap-4 lg:gap-x-10 xl:gap-x-12">
            <div>
              <BsLightbulb size={22} title="Helpful" />
              <p className="mt-2 text-xs">Helpful</p>
              <p className="mt-2 text-sm font-bold">12</p>
            </div>
            <div>
              <FaRegHandPeace size={22} title="Thanks" />
              <p className="mt-2 text-sm">Thanks</p>
              <p className="mt-2 text-sm font-bold">10</p>
            </div>
            <div>
              <FaRegSadTear size={22} title="Oh no" />
              <p className="mt-2 text-sm">Oh no</p>
              <p className="mt-2 text-sm font-bold">120</p>
            </div>
            <div>
              <FiHeart size={22} title="Love this" />
              <p className="mt-2 text-sm">Love this</p>
              <p className="mt-2 text-sm font-bold">60</p>
            </div>
          </div>
        </div>

        <h4 className="mt-10 text-[16px] md:text-[20px] lg:text-[24px] font-bold text-gray-700">
          Review distribution
        </h4>
        <div className="mt-3 p-6 border rounded-md">
          <p className="text-sm font-semibold text-gray-800">Ratings</p>
          <div className="mt-6 flex flex-col md:flex-row gap-x-10 gap-y-8">
            <div className="grow flex flex-col gap-4">
              <p className="w-full h-[10px] rounded-lg bg-red-800"></p>
              <p className="w-[50%] h-[10px] rounded-lg bg-red-700"></p>
              <p className="w-[60%] h-[10px] rounded-lg bg-red-600"></p>
              <p className="w-[70%] h-[10px] rounded-lg bg-red-500"></p>
              <p className="w-[20%] h-[10px] rounded-lg bg-red-400"></p>
            </div>
            <div className="hidden sm:block flex-none border-r border-gray-500"></div>
            <div className="grow flex flex-col gap-2">
              <p className="text-[11px] font-bold text-gray-600">Category-1</p>
              <p className="text-[11px] font-bold text-gray-600">Category-2</p>
              <p className="text-[11px] font-bold text-gray-600">Category-3</p>
              <p className="text-[11px] font-bold text-gray-600">Category-4</p>
              <p className="text-[11px] font-bold text-gray-600">Category-5</p>
            </div>
          </div>
        </div>

        <h4 className="mt-10 text-[16px] md:text-[20px] lg:text-[24px] font-bold text-gray-700">
          More about me
        </h4>

        <div className="mt-3 p-6 border rounded-md grid grid-cols-2">
          <div className="col-span-2 sm:col-span-1">
            <p className="text-sm font-semibold text-gray-700">Location</p>
            <p className="mt-1 text-sm text-gray-700">Pokhara, Kaski</p>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <p className="text-sm font-semibold text-gray-700">Joined since</p>
            <p className="mt-1 text-sm text-gray-700">2020-11-12</p>
          </div>
        </div>
      </div>
    </div>
  );
}
