import { MdStarBorder } from "react-icons/md";
import cn from "../utils/class-names";

type Props = {
  rating: 1 | 2 | 3 | 4 | 5;
  size?: number;
  className?: string;
  [key: string]: unknown;
};

export default function RatingStar({
  rating,
  className,
  size = 30,
  ...others
}: Props) {
  return (
    <div className={cn(className, "flex items-center gap-x-1")} {...others}>
      {Array(5)
        .fill(0)
        .map((_, index) => index + 1)
        .map((count) => (
          <MdStarBorder
            key={`count-${count}`}
            size={size}
            color={count <= rating ? "orange" : "gray"}
            className={cn("p-1 border rounded-sm", {
              "border-orange-200": count <= rating,
            })}
          />
        ))}
    </div>
  );
}
