"use client";

import { useEffect, useState } from "react";
import Modal from "@/app/components/ui/modal";
import { updateUser } from "@/app/services/user/user-user.service";
import { revalidateTagInServerComponent } from "@/app/services/revalidation-cache/revalidate-sever-component-cache";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

type Props = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  user: TUser;
};

export default function EditProfileDetailsModal(props: Props) {
  const router = useRouter();

  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");

  useEffect(() => {
    if (!props.isOpen) {
      return;
    }

    setAddress(props.user.address || "");
    setContact(props.user.contact || "");
  }, [props]);

  const resetFields = () => {
    setAddress("");
    setContact("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!address.trim()) {
      toast.error("Please enter the address.");
      return;
    }

    if (!contact) {
      toast.error("Please enter the contact number.");
      return;
    }

    // Let's update user details
    try {
      const response = await updateUser({
        data: { address, contact },
        userId: props.user._id,
      });

      // Revalidate and refresh the page
      revalidateTagInServerComponent({ tags: ["user-details"] });
      router.refresh(); // Because revalidate the fetch request only works when you revisit the page

      // Close the modal and reset the fields
      props.setIsOpen(false);
      resetFields();
      toast.success(response.message || "User's details updated successfully.");
    } catch (e) {
      console.log(e);
      toast.error("Oops, something went wrong.");
      return null;
    }
  };

  const closeBtn = () => {
    props.setIsOpen(false);
    resetFields;
  };

  return (
    <Modal
      {...props}
      dialogTile="Edit Your Profile"
      className="mt-6 max-w-[600px]"
    >
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="address" className="_label">
            address
          </label>
          <input
            type="text"
            required
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
            className="_input mt-1"
          />
        </div>

        <div className="mt-6">
          <label htmlFor="address" className="_label">
            Contact Number
          </label>
          <input
            type="text"
            required
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            className="_input mt-1"
          />
        </div>

        <div className="mt-8 flex justify-end gap-x-4">
          <button onClick={closeBtn} className="_btn" type="button">
            Cancel
          </button>
          <button className="_btn _primary-btn" type="submit">
            Save
          </button>
        </div>
      </form>
    </Modal>
  );
}
