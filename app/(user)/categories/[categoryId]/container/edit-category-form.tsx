"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import ImageUploader from "@/app/components/ui/image-uploader";
import updateCategoryApi from "@/app/services/category/update-category.service";
import getCategoryDetailsApi from "@/app/services/category/get-category-details.service";

type Props = {
  categoryId: string;
};

export default function EditCategoryForm({ categoryId }: Props) {
  const router = useRouter();

  const [name, setName] = useState("");
  const [isActive, setIsActive] = useState(true);
  const [images, setImages] = useState<File[] | object[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadCategoryData = async () => {
      try {
        const response = await getCategoryDetailsApi({
          params: { categoryId },
        });

        const categoryData = response.data;
        setName(categoryData.name);
        setIsActive(categoryData.is_active);
        if (categoryData.image) {
          setImages([categoryData.image]);
        }

        return response.data;
      } catch (e: any) {
        toast.error(e.message);
        router.back();
      }
    };

    loadCategoryData();
  }, [categoryId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim().length) {
      toast.error("Enter the category name.");
      return;
    }

    if (!images.length) {
      toast.error("Select a image for the category.");
      return;
    }

    setIsLoading(true);
    try {
      const response = await updateCategoryApi({
        params: { categoryId },
        payload: {
          name,
          image: images.length ? images[0] : "no img",
          is_active: isActive,
        },
      });
      toast.success(response.message || "Category updated successfully.");
      router.push("/categories");
    } catch (e: any) {
      toast.error(e.message);
    }

    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h3 className="text-[16px] md:text-[20px] lg:text-[24px] font-bold text-gray-700">
          Edit category
        </h3>
        <p className="mt-2.5 text-md text-gray-700">
          Please fill all the fields to edit a category.
        </p>
      </div>

      <div className="mt-8">
        <label htmlFor="category-name" className="_label">
          Category name
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="_input mt-1 max-w-[500px]"
        />
      </div>

      <div className="mt-8 flex items-center gap-2">
        <input
          type="radio"
          checked={isActive}
          onChange={() => {}}
          onClick={() => setIsActive((prev) => !prev)}
        />
        <label htmlFor="category-name" className="_label">
          Is active category
        </label>
      </div>

      <div className="mt-8">
        <label className="_label mb-2">Add a image</label>
        <ImageUploader images={images} setImages={setImages} maxImages={1} />
      </div>

      <div className="mt-12">
        <button
          type="submit"
          disabled={isLoading}
          className="_btn _primary-btn"
        >
          Edit Category
        </button>
      </div>
    </form>
  );
}
