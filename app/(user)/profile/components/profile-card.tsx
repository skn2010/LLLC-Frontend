"use client";

import Image from "next/image";
import cn from "@/app/utils/class-names";

import { BsLightbulb } from "react-icons/bs";
import { FaRegHandPeace } from "react-icons/fa6";
import { FiHeart } from "react-icons/fi";
import { useState } from "react";
import EditProfileDetailsModal from "./edit-profile-details.modal";

type Props = {
  user: TUser;
  className?: string;
};

export default function ProfileCard({ user, className }: Props) {
  const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState(false);

  const editProfileDetails = () => {
    setIsEditProfileModalOpen(true);
  };

  return (
    <>
      <div className={cn(className, "border px-5 py-10 rounded-lg")}>
        <figure className="flex justify-center">
          <Image
            src={user.avatar}
            alt="profile-img"
            width={120}
            height={120}
            className="rounded-full aspect-square object-cover"
          />
        </figure>
        <h4 className="mt-4 text-[16px] lg:text-[22px] font-bold text-center text-gray-700">
          {user.full_name}
        </h4>

        <p className="mt-4 text-[16px] text-center text-gray-600">
          {user.address || "Address is messing"}
        </p>
        <p className="mt-3 text-[16px] text-center text-gray-600">
          {user.contact || "Contact is messing"}
        </p>

        <div className="mt-4 flex justify-center items-center gap-x-6">
          <span className="flex justify-center items-center gap-x-1">
            <BsLightbulb size={14} title="Helpful" className="text-gray-500" />
            <p className="text-gray-500">12</p>
          </span>
          <span className="flex justify-center items-center gap-x-1">
            <FaRegHandPeace
              size={14}
              title="Thanks"
              className="text-gray-500"
            />
            <p className="text-gray-500">10</p>
          </span>
          <span className="flex justify-center items-center gap-x-1">
            <FiHeart size={14} title="Love this" className="text-gray-500" />
            <p className="text-gray-500">102</p>
          </span>
        </div>

        <div className="mt-8 flex justify-center">
          <button
            onClick={editProfileDetails}
            className="_btn _primary-btn py-2 px-3"
          >
            Edit profile details
          </button>
        </div>
      </div>

      <EditProfileDetailsModal
        isOpen={isEditProfileModalOpen}
        setIsOpen={setIsEditProfileModalOpen}
        user={user}
      />
    </>
  );
}
