"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import cn from "@/app/utils/class-names";
import ImageUploader from "@/app/components/ui/image-uploader";
import RatingStar from "@/app/components/rating-star";
import createReviewApi from "@/app/services/review/create-review.service";

type Props = {
  companyId: string;
  menuId: string;
  className?: string;
};

export default function AddReviewForm({ companyId, menuId, className }: Props) {
  const router = useRouter();

  const [images, setImages] = useState<any[]>([]);
  const [review, setReview] = useState("");
  const [ratingStar, setRatingStar] = useState(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!ratingStar) {
      toast.error("Select the rating star.");
      return;
    }

    if (!images.length) {
      toast.error("Select at least one image.");
      return;
    }

    if (!review.trim()) {
      toast.error("Write your review.");
      return;
    }

    try {
      const response = await createReviewApi({
        payload: { review, ratingStar, images },
        params: { companyId, menuId },
      });

      toast.success(response.message || "Review added successfully.");
      router.push(`/companies/${companyId}/menus/${menuId}`);
    } catch (e: any) {
      toast.error(e?.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={cn(className)}>
      <div>
        <h3 className="text-[16px] md:text-[20px] lg:text-[24px] font-bold text-gray-700">
          Add a review
        </h3>
        <p className="mt-2.5 text-md text-gray-700">
          Please fill all the fields to post a review.
        </p>
      </div>

      <div className="mt-8">
        <label htmlFor="menu-description" className="_label">
          Rating star
        </label>
        <RatingStar
          rating={ratingStar as 1 | 2 | 3 | 4 | 5}
          setRating={setRatingStar}
          className="mt-1"
        />
      </div>

      <div className="mt-8">
        <label className="_label mb-2">You may include up to 5 images</label>
        <ImageUploader images={images} setImages={setImages} maxImages={5} />
      </div>

      <div className="mt-8">
        <label htmlFor="menu-description" className="_label">
          Review
        </label>
        <textarea
          className="_input mt-1"
          rows={5}
          placeholder="Write your review..."
          value={review}
          onChange={(e) => setReview(e.target.value)}
        ></textarea>
      </div>

      <div className="mt-8 flex gap-4">
        <button type="submit" className="_btn _primary-btn">
          Add review
        </button>
        <Link href={``} className="_btn text-white bg-gray-700">
          Cancel
        </Link>
      </div>
    </form>
  );
}
