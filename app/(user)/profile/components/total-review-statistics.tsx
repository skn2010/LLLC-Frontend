import { BsLightbulb } from "react-icons/bs";
import { FaRegHandPeace } from "react-icons/fa6";
import { FiHeart } from "react-icons/fi";
import { FaRegSadTear } from "react-icons/fa";
import cn from "@/app/utils/class-names";

type Props = {
  className?: string;
};

export default function TotalReviewStatistics({ className }: Props) {
  return (
    <div className={cn(className, "")}>
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
    </div>
  );
}
