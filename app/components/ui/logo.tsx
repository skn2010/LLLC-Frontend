import Link from "next/link";
import cn from "@/app/utils/class-names";

type Props = {
  type?: "white" | "primary";
  className?: string;
};

export default function Logo({ type = "white", className = "" }: Props) {
  return (
    <Link
      href={"/"}
      className={cn(className, "font-bold text-[20px]", {
        "text-white": type === "white",
        "text-primary": type === "primary",
      })}
    >
      Rate Craft.
    </Link>
  );
}
