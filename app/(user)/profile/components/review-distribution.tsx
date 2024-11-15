import cn from "@/app/utils/class-names";

type Props = {
  reaction: any;
  className?: string;
};

export default function ReviewDistribution({ reaction, className }: Props) {
  const totalReaction = reaction?.totalReactions;

  const calculateReaction = (value: number) => {
    if (!totalReaction || !value) {
      return 2;
    }

    return (value * 100) / totalReaction;
  };

  return (
    <div className={cn(className, "")}>
      <h4 className="text-[16px] md:text-[20px] lg:text-[24px] font-bold text-gray-700">
        Review distribution
      </h4>
      <div className="mt-3 p-6 border rounded-md">
        <p className="text-sm font-semibold text-gray-800">Ratings</p>
        <div className="mt-6 flex flex-col md:flex-row gap-x-10 gap-y-8">
          <div className="grow flex flex-col gap-4">
            <p className="w-full h-[10px] rounded-lg bg-red-800"></p>
            <p
              style={{
                width: `${calculateReaction(reaction?.reactionCounts?.LIKE)}%`,
              }}
              className="h-[10px] rounded-lg bg-red-700"
            ></p>
            <p
              style={{
                width: `${calculateReaction(reaction?.reactionCounts?.ANGRY)}%`,
              }}
              className="w-[60%] h-[10px] rounded-lg bg-red-600"
            ></p>
            <p
              style={{
                width: `${calculateReaction(reaction?.reactionCounts?.SAD)}%`,
              }}
              className="w-[70%] h-[10px] rounded-lg bg-red-500"
            ></p>
            <p
              style={{
                width: `${calculateReaction(reaction?.reactionCounts?.HEART)}%`,
              }}
              className="w-[20%] h-[10px] rounded-lg bg-red-400"
            ></p>
          </div>
          <div className="hidden sm:block flex-none border-r border-gray-500"></div>
          <div className="grow flex flex-col gap-2">
            <p className="text-[11px] font-bold text-gray-600">
              Total Reactions
            </p>
            <p className="text-[11px] font-bold text-gray-600">
              Like Reactions
            </p>
            <p className="text-[11px] font-bold text-gray-600">
              Angry Reactions
            </p>
            <p className="text-[11px] font-bold text-gray-600">Sad Reactions</p>
            <p className="text-[11px] font-bold text-gray-600">
              Heart Reactions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
