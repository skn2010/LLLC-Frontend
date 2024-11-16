"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import ImageUploader from "@/app/components/ui/image-uploader";
import createCategoryApi from "@/app/services/category/create-category.service";

export default function CreateCategoryForm() {
  const [name, setName] = useState("");
  const [images, setImages] = useState<File[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const resetFields = () => {
    setName("");
    setImages([]);
  };

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
      const response = await createCategoryApi({
        payload: { name, image: images[0] },
      });
      toast.success(response.message || "Category created successfully.");
      resetFields();
    } catch (e: any) {
      toast.error(e.message);
    }

    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h3 className="text-[16px] md:text-[20px] lg:text-[24px] font-bold text-gray-700">
          Create a category
        </h3>
        <p className="mt-2.5 text-md text-gray-700">
          Please fill all the fields to create a category.
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
          Create
        </button>
      </div>
    </form>
  );
}
