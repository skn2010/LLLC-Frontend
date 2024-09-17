"use client";

import { useState } from "react";
import Link from "next/link";
import cn from "@/app/utils/class-names";
import { IoMdStarOutline } from "react-icons/io";
import { HiSaveAs } from "react-icons/hi";
import { LuBadgeAlert } from "react-icons/lu";
import { TbUserEdit } from "react-icons/tb";
import { MdDeleteOutline } from "react-icons/md";
import DeleteCompanyModal from "./delete-company-modal";

type Props = {
  className?: string;
  companyId: string;
  companyName: string;
  isUserOwnerOfCompany: boolean;
};

export default function ShortCutBtns({
  companyId,
  companyName,
  isUserOwnerOfCompany,
  className,
}: Props) {
  const [isCompanyDeleteModalOpen, setIsCompanyDeleteModalOpen] =
    useState(false);

  return (
    <>
      <section className={cn(className, "flex flex-wrap gap-3")}>
        {!isUserOwnerOfCompany ? (
          <button className="_btn _primary-btn flex items-center gap-x-2">
            <IoMdStarOutline size={20} className="text-white" />
            <span>Write a review</span>
          </button>
        ) : null}

        <button className="_btn border border-gray-400 flex items-center gap-x-2">
          <LuBadgeAlert size={20} />
          <span>Follow</span>
        </button>
        {isUserOwnerOfCompany ? (
          <>
            <Link
              href={`/companies/${companyId}/edit`}
              className="_btn border border-gray-400 flex items-center gap-x-2"
            >
              <TbUserEdit size={20} />
              <span>Edit</span>
            </Link>

            <button
              onClick={() => setIsCompanyDeleteModalOpen(true)}
              className="_btn flex items-center gap-x-2 bg-red-500 text-white"
            >
              <MdDeleteOutline size={20} />
              <span>Delete</span>
            </button>
          </>
        ) : null}
      </section>

      <DeleteCompanyModal
        isOpen={isCompanyDeleteModalOpen}
        setIsOpen={setIsCompanyDeleteModalOpen}
        companyData={{ id: companyId, name: companyName }}
      />
    </>
  );
}
