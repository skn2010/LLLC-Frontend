"use client";

import { useState } from "react";
import ImageUploader from "@/app/components/ui/image-uploader";
import cn from "@/app/utils/class-names";
import { createMenuApi } from "@/app/services/menu/create-menu.service";
import { toast } from "react-toastify";

type Props = { className?: string; companyId: string };

export default function CreateMenuForm({ className, companyId }: Props) {
  const [images, setImages] = useState<any[]>([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState<number>(0);
  const [tag, setTag] = useState("NEW");
  const [description, setDescription] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      const response = await createMenuApi({
        payload: { name, price, tag, description, images },
        params: { companyId },
      });

      toast.success(response.message);
    } catch (e: any) {
      toast.error(e.message);
    }

    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className={cn(className, "")}>
      <div>
        <h3 className="text-[16px] md:text-[20px] lg:text-[24px] font-bold text-gray-700">
          Create a menu
        </h3>
        <p className="mt-2.5 text-md text-gray-700">
          Please fill all the fields to create a menu.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <label htmlFor="menu-name" className="_label">
            Name
          </label>
          <input
            type="text"
            className="_input mt-1"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="menu-price" className="_label">
            Price
          </label>
          <input
            type="number"
            className="_input mt-1"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
          />
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <label htmlFor="menu-name" className="_label">
            Tag
          </label>
          <select
            value={tag}
            onChange={(e) => setTag(e.target.value)}
            className="_input mt-1"
          >
            <option value="NEW">New</option>
            <option value="POPULAR">Popular</option>
          </select>
        </div>
      </div>

      <div className="mt-8">
        <label htmlFor="menu-description" className="_label">
          Description
        </label>
        <textarea
          className="_input mt-1"
          rows={5}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>

      <div className="mt-8">
        <ImageUploader images={images} setImages={setImages} maxImages={5} />
      </div>

      <div className="mt-12 flex justify-end">
        <button
          disabled={isLoading}
          className="_btn _primary-btn"
          type="submit"
        >
          Create
        </button>
      </div>
    </form>
  );
}
