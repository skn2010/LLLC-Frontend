import { FaRegFaceAngry, FaRegHandPeace } from "react-icons/fa6";
import { FiHeart } from "react-icons/fi";
import { FaRegSadTear } from "react-icons/fa";
import cn from "@/app/utils/class-names";

type Props = {
  reaction: any;
  className?: string;
};

export default function TotalReviewStatistics({ reaction, className }: Props) {
  return (
    <div className={cn(className, "")}>
      <h4 className="text-[16px] md:text-[20px] lg:text-[24px] font-bold text-gray-700">
        Impact
      </h4>
      <div className="mt-3 p-6 border rounded-md">
        <p className="text-sm font-semibold text-gray-800">Review Reaction</p>
        <div className="mt-6 flex items-center gap-4 lg:gap-x-10 xl:gap-x-12">
          <div>
            <FaRegHandPeace
              size={22}
              title="Helpful"
              className="text-blue-600"
            />
            <p className="mt-2 text-xs">Like</p>
            <p className="mt-2 text-sm font-bold">
              {reaction?.reactionCounts?.LIKE || "0"}
            </p>
          </div>
          <div>
            <FaRegFaceAngry size={22} title="Thanks" className="text-red-600" />
            <p className="mt-2 text-sm">Angry</p>
            <p className="mt-2 text-sm font-bold">
              {reaction?.reactionCounts?.ANGRY || "0"}
            </p>
          </div>
          <div>
            <FaRegSadTear size={22} title="Oh no" className="text-yellow-600" />
            <p className="mt-2 text-sm">Sad</p>
            <p className="mt-2 text-sm font-bold">
              {reaction?.reactionCounts?.SAD || "0"}
            </p>
          </div>
          <div>
            <FiHeart size={22} title="Love this" className="text-orange-600" />
            <p className="mt-2 text-sm">Love</p>
            <p className="mt-2 text-sm font-bold">
              {reaction?.reactionCounts?.HEART || "0"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
