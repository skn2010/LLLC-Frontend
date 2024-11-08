"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import cn from "@/app/utils/class-names";
import ImageUploader from "@/app/components/ui/image-uploader";
import { updateMenuApi } from "@/app/services/menu/update-menu.service";
import { revalidateTagInServerComponent } from "@/app/services/revalidation-cache/revalidate-sever-component-cache";

type Props = { className?: string; companyId: string; menu: TMenuDetails };

export default function EditMenuForm({ className, companyId, menu }: Props) {
  const router = useRouter();

  const [images, setImages] = useState<any[]>([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState<number>(0);
  const [tag, setTag] = useState("NEW");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setName(menu.name);
    setPrice(menu?.price || 0);
    setTag(menu.tag);
    setDescription(menu.description);
    setImages(menu.images);
  }, [menu]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await updateMenuApi({
        payload: { name, price, tag, description, images },
        params: { menuId: menu._id },
      });

      await revalidateTagInServerComponent({
        tags: ["menu"],
      });

      toast.success(response.message);
      router.push(`/companies/${companyId}/menus`);
      router.refresh();
    } catch (e: any) {
      toast.error(e.message);
    }

    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className={cn(className, "")}>
      <div>
        <h3 className="text-[16px] md:text-[20px] lg:text-[24px] font-bold text-gray-700">
          Update a menu
        </h3>
        <p className="mt-2.5 text-md text-gray-700">
          Please fill all the fields to update a menu.
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
        <label className="_label mb-2">You may include up to 5 images</label>
        <ImageUploader images={images} setImages={setImages} maxImages={5} />
      </div>

      <div className="mt-12 flex justify-end">
        <button
          disabled={isLoading}
          className="_btn _secondary-dark-outline-btn"
          type="submit"
        >
          {isLoading ? "Updating..." : "Update"}
        </button>
      </div>
    </form>
  );
}
