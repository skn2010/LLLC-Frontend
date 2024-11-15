"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { toast } from "react-toastify";
import { FaRegHandPeace } from "react-icons/fa6";
import { FaRegFaceAngry } from "react-icons/fa6";
import { FaRegSadTear } from "react-icons/fa";
import { IoMdMore } from "react-icons/io";
import { IoHeartSharp } from "react-icons/io5";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import RatingStar from "./rating-star";
import cn from "@/app/utils/class-names";
import { timeAgo } from "../utils/time-ago";
import ImageSlider from "./image-slider";
import { deleteReviewApi } from "../services/review/delete-review.service";
import reactOnReviewApi from "../services/review/react-on-review.service";
import removeReactOnReviewApi from "../services/review/remove-reaction-on-review.service";

type Props = {
  className?: string;
  review: TReview;
  user?: TUser | null;
  reloadData?: () => void;
};

const reactionClass = "cursor-pointer";

export default function ReviewCard({
  review,
  user,
  reloadData,
  className,
}: Props) {
  const [isReadMoreOpen, setIsReadMoreOpen] = useState(false);
  const [react, setReact] = useState<string | null>(null);

  useEffect(() => {
    if (review.reacted_type_by_user) {
      setReact(review.reacted_type_by_user);
    } else {
      setReact(null);
    }
  }, [review]);

  const isAuthorizedUserToDeleteReview = () => {
    if (!user) {
      return false;
    }

    if (user.is_admin) {
      return true;
    }

    if (review.company?.created_by === user._id) {
      return true;
    }

    if (review.review_by?._id === user._id) {
      return true;
    }

    return false;
  };

  const handleDelete = async () => {
    try {
      const response = await deleteReviewApi({
        params: { reviewId: review._id },
      });
      toast.success(response.message || "Review deleted successfully.");
      reloadData && reloadData();
    } catch (e: any) {
      toast.error(e.message);
    }
  };

  const reactOnReview = async (reactValue: string) => {
    if (react === reactValue) {
      setReact(null);
      try {
        await removeReactOnReviewApi({ params: { reviewId: review._id } });
        reloadData && reloadData();
      } catch (e: any) {
        toast.error(e.message);
      }
    } else {
      setReact(reactValue);
      reloadData && reloadData();

      try {
        await reactOnReviewApi({
          params: { reviewId: review._id },
          payload: { reactionType: reactValue },
        });

        reloadData && reloadData();
      } catch (e: any) {
        toast.error(e.message);
      }
    }
  };

  return (
    <div className={cn(className, "rounded-md border border-gray-300")}>
      <div className="flex justify-between">
        <div className="p-4 flex items-center gap-x-2">
          <div>
            <Image
              src={"/hero.png"}
              alt="profile-img"
              width={48}
              height={48}
              className="rounded-full aspect-square object-cover"
            />
          </div>
          <div>
            <h4 className="text-[14px] font-semibold text-gray-700">
              {review?.review_by?.full_name || "Undefined"}
            </h4>
            <p className="text-[12px] text-gray-500">
              {timeAgo(review.created_date)}
            </p>
          </div>
        </div>

        {isAuthorizedUserToDeleteReview() ? (
          <Menu>
            <MenuButton className="pr-4">
              <IoMdMore size={20} />
            </MenuButton>

            <MenuItems
              transition
              anchor="bottom end"
              className="w-52 origin-top-right rounded-xl border border-white/5 bg-white/5 p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
            >
              <MenuItem>
                <button
                  onClick={() => {
                    handleDelete();
                  }}
                  className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10"
                >
                  Delete
                </button>
              </MenuItem>
            </MenuItems>
          </Menu>
        ) : null}
      </div>

      <ImageSlider images={review.images.map((img) => img.url)} />

      <div className="mt-4 px-4">
        <h3 className="text-[16px] font-bold text-gray-800">
          {review?.company?.name || "Undefined"}
        </h3>
        <RatingStar
          rating={review.rating_star as 1 | 2 | 3 | 4 | 5}
          size={24}
          className="mt-1"
        />

        <p
          className={cn("mt-1 text-[14px] text-gray-700", {
            "_line-clamp-2 ": !isReadMoreOpen,
          })}
        >
          {review.review}
        </p>
        <button
          onClick={() => setIsReadMoreOpen((prev) => !prev)}
          className="mt-1 text-[14px] font-medium text-secondary"
        >
          {isReadMoreOpen ? "Read less" : "Read more"}
        </button>
      </div>

      <div className="mt-2 px-4 pb-4">
        <hr />

        <div className="mt-4 flex justify-between items-center gap-x-2">
          <div className="flex gap-[2px] items-center">
            <FaRegHandPeace
              size={22}
              title="Helpful"
              onClick={() => {
                reactOnReview("LIKE");
              }}
              className={cn(reactionClass, {
                "text-red-700": react === "LIKE",
                "text-gray-500": react !== "LIKE",
              })}
            />
            {review.likeReactions ? (
              <div>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-0.5 rounded">
                  {review.likeReactions}
                </span>
              </div>
            ) : null}
          </div>
          <div className="flex gap-[2px] items-center">
            <FaRegFaceAngry
              size={22}
              title="Helpful"
              onClick={() => {
                reactOnReview("ANGRY");
              }}
              className={cn(reactionClass, {
                "text-red-700": react === "ANGRY",
                "text-gray-500": react !== "ANGRY",
              })}
            />
            {review.angryReactions ? (
              <div>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-0.5 rounded">
                  {review.angryReactions}
                </span>
              </div>
            ) : null}
          </div>
          <div className="flex gap-[2px] items-center">
            <FaRegSadTear
              size={22}
              title="Oh no"
              onClick={() => {
                reactOnReview("SAD");
              }}
              className={cn(reactionClass, {
                "text-red-700": react === "SAD",
                "text-gray-500": react !== "SAD",
              })}
            />
            {review.sadReactions ? (
              <div>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-0.5 rounded">
                  {review.sadReactions}
                </span>
              </div>
            ) : null}
          </div>
          <div className="flex gap-[2px] items-center">
            <IoHeartSharp
              size={22}
              title="Love this"
              onClick={() => {
                reactOnReview("HEART");
              }}
              className={cn(reactionClass, {
                "text-red-700": react === "HEART",
                "text-gray-500": react !== "HEART",
              })}
            />
            {review.heartReactions ? (
              <div>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-0.5 rounded">
                  {review.heartReactions}
                </span>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
