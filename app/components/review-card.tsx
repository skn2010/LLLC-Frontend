"use client";

import { useState } from "react";
import Image from "next/image";
import { FaRegHandPeace } from "react-icons/fa6";
import { FiHeart } from "react-icons/fi";
import { FaRegFaceAngry } from "react-icons/fa6";
import { FaRegSadTear } from "react-icons/fa";
import RatingStar from "./rating-star";
import cn from "@/app/utils/class-names";
import { timeAgo } from "../utils/time-ago";
import ImageSlider from "./image-slider";

type Props = {
  className?: string;
  review: TReview;
};

const reactionClass = "cursor-pointer";

export default function ReviewCard({ review, className }: Props) {
  const [isReadMoreOpen, setIsReadMoreOpen] = useState(false);

  return (
    <div className={cn(className, "rounded-md border border-gray-300")}>
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
            <span className="text-sm font-bold text-gray-800">
              {review.loveReactions || ""}
            </span>
            <FaRegHandPeace
              size={22}
              title="Helpful"
              className={cn(reactionClass, "text-blue-400")}
            />
          </div>
          <div className="flex gap-[2px] items-center">
            <span className="text-sm font-bold text-gray-800">
              {review.angryReactions || ""}
            </span>
            <FaRegFaceAngry
              size={22}
              title="Helpful"
              className={cn(reactionClass, "text-yellow-900")}
            />
          </div>
          <div className="flex gap-[2px] items-center">
            <span className="text-sm font-bold text-gray-800">
              {review.sadReactions || ""}
            </span>
            <FaRegSadTear
              size={22}
              title="Oh no"
              className={cn(reactionClass, "text-yellow-600")}
            />
          </div>
          <div className="flex gap-[2px] items-center">
            <span className="text-sm font-bold text-gray-800">
              {review.loveReactions || ""}
            </span>
            <FiHeart
              size={22}
              title="Love this"
              className={cn(reactionClass, "text-orange-800")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
