"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import deleteMenuApi from "@/app/services/menu/delete-menu.service";

type Props = {
  menuId: string;
  name: string;
};

export default function DeleteMenu({ menuId, name }: Props) {
  const router = useRouter();

  const [inputName, setInputName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (name !== inputName) {
      toast.error("Enter the correct menu's name.");
      return;
    }

    setIsLoading(true);

    try {
      const response = await deleteMenuApi({ params: { menuId } });
      toast.success(response.message || "Menu deleted successfully.");
      router.refresh();
      router.back();
    } catch (e: any) {
      toast.error(e.message);
    }

    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4 className="text-[16px] md:text-[20px] lg:text-[24px] font-bold text-gray-700">
        Delete Menu
      </h4>
      <p className="mt-2.5 text-md text-gray-700 font-semibold">
        Enter the "{name}" to delete this menu
      </p>

      <input
        type="text"
        placeholder="Enter the menu's name to delete"
        className="_input mt-2 max-w-[500px]"
        value={inputName}
        onChange={(e) => setInputName(e.target.value)}
      />

      <button type="submit" className="_btn _primary-btn mt-3">
        {isLoading ? "Deleting this menu..." : " Delete this menu"}
      </button>
    </form>
  );
}
