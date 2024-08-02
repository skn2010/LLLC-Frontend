import Link from "next/link";
import Image from "next/image";
import cn from "@/app/utils/class-names";

type Props = {
  width?: number;
  height?: number;
  type?: "white" | "black";
  className?: string;
};

export default function Logo({
  width = 90,
  height = 40,
  type = "white",
  className = "",
}: Props) {
  return (
    <Link href={"/"}>
      <Image
        src={type === "white" ? "/white-logo.png" : "/black-logo.png"}
        alt="logo"
        width={width}
        height={height}
        className={cn("", className)}
      />
    </Link>
  );
}
