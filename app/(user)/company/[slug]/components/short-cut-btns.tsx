import { IoMdStarOutline } from "react-icons/io";
import { HiSaveAs } from "react-icons/hi";
import { LuBadgeAlert } from "react-icons/lu";
import cn from "@/app/utils/class-names";

type Props = {
  className?: string;
};

export default function ShortCutBtns({ className }: Props) {
  return (
    <section className={cn(className, "flex flex-wrap gap-3")}>
      <button className="_btn _primary-btn flex items-center gap-x-2">
        <IoMdStarOutline size={20} className="text-white" />
        <span>Write a review</span>
      </button>
      <button className="_btn border border-gray-400 flex items-center gap-x-2">
        <HiSaveAs size={20} />
        <span>Save</span>
      </button>
      <button className="_btn border border-gray-400 flex items-center gap-x-2">
        <LuBadgeAlert size={20} />
        <span>Follow</span>
      </button>
    </section>
  );
}
