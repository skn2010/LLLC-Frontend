"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Modal from "@/app/components/ui/modal";
import { deleteCompanyApi } from "@/app/services/company/delete-company.service";

type Props = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  companyData: {
    id: string;
    name: string;
  };
};

export default function DeleteCompanyModal({
  isOpen,
  setIsOpen,
  companyData,
}: Props) {
  const router = useRouter();

  const [name, setName] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    setError("");
  }, [name]);

  useEffect(() => {
    if (!isOpen) {
      setName("");
      setError("");
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (name !== companyData.name) {
      setError("Enter the valid company name.");
      return;
    }

    try {
      const response = await deleteCompanyApi({
        params: { companyId: companyData.id },
      });

      toast.success(response.message);
      router.push("/profile");
      setIsOpen(false);
    } catch (e: any) {
      toast.error(e.message);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      dialogTile="Delete the company"
      className="mt-6 max-w-[400px]"
    >
      <form onSubmit={handleSubmit}>
        <div className="mt-4">
          <p className="text-sm text-red-500 font-medium">
            After deleting your company details, we'll retain the information
            for one year for security, then it will be automatically removed.
          </p>
          <p className="text-sm mt-2">
            Enter the company name {`"${companyData.name}"`} to proceed to
            delete operation.
          </p>

          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="_input mt-1"
            placeholder="Enter the company name to delete"
          />
          {error ? (
            <p className="mt-1 text-[13px] text-red-500">{error}</p>
          ) : null}
        </div>

        <div className="mt-8 flex justify-end gap-x-4">
          <button
            className="_btn"
            type="button"
            onClick={() => setIsOpen(false)}
          >
            Cancel
          </button>
          <button className="_btn bg-red-600 text-white" type="submit">
            Delete
          </button>
        </div>
      </form>
    </Modal>
  );
}
