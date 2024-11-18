import Link from "next/link";
import cn from "@/app/utils/class-names";

type Props = {
  className?: string;
};

export default function Logo({ className = "" }: Props) {
  return (
    <Link
      href={"/"}
      className={cn(className, "font-bold text-[20px] text-primary")}
    >
      Rate Craft.
    </Link>
  );
}
