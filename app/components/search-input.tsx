"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import cn from "../utils/class-names";

type Props = {
  headerType?: string;
  className?: string;
};

export default function SearchInput({
  className,
  headerType = "light",
}: Props) {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/companies?companyName=${search.trim()}`);
    setSearch("");
  };

  return (
    <form onSubmit={handleSubmit} className={cn(className)}>
      <div
        className={cn(
          "w-full max-w-[900px] hover:shadow focus:shadow rounded-md overflow-hidden border border-gray-300 text-gray-500"
        )}
      >
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search businesses for reviews..."
          className="w-full px-4 py-2 outline-none bg-transparent"
        />
      </div>
    </form>
  );
}
