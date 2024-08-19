"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { updateCompanyApi } from "@/app/services/company/update-company.service";

type Props = {
  categoryDropdown: TCategory[];
  companyData: TCompany;
};

type Location = {
  latitude: string | number;
  longitude: string | number;
};

export default function EditCompanyForm({
  categoryDropdown,
  companyData,
}: Props) {
  const router = useRouter();

  // Required state for creating a restaurant
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [time, setTime] = useState({
    openingTime: "",
    closingTime: "",
  });
  const [location, setLocation] = useState<Location>({
    latitude: "",
    longitude: "",
  });
  const [category, setCategory] = useState<string>("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    setName(companyData.name);
    setEmail(companyData.email);
    setContactNumber(companyData.contact_number);
    setTime({
      openingTime: companyData.opening_time,
      closingTime: companyData.closing_time,
    });
    setLocation(companyData.location);
    setCategory(companyData.category as string);
    setDescription(companyData.description);
  }, [companyData]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await updateCompanyApi({
        params: { companyId: companyData._id },
        payload: {
          name,
          email,
          contact_number: contactNumber,
          opening_time: time.openingTime,
          closing_time: time.closingTime,
          location,
          category,
          description,
        },
      });

      toast.success(response.message || "Category created successfully.");
      router.back();
    } catch (e: any) {
      toast.error(e.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h3 className="text-[16px] md:text-[20px] lg:text-[24px] font-bold text-gray-700">
          Edit a company
        </h3>
        <p className="mt-2.5 text-md text-gray-700">
          Please fill all the fields to create a company.
        </p>
      </div>

      <div className="mt-10">
        <label className="_label">Name</label>
        <input
          type="text"
          className="_input mt-1"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-6">
        <div>
          <label className="_label">Contact Number</label>
          <input
            type="text"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            className="_input mt-1"
          />
        </div>
        <div>
          <label className="_label">Email</label>
          <input
            type="email"
            className="_input mt-1"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>

      <p className="mt-10 text-secondary">Time (opening and closing)</p>
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-6">
        <div>
          <label className="_label">Opening time</label>
          <input
            type="time"
            className="_input mt-1"
            required
            value={time.openingTime}
            onChange={(e) => {
              setTime((prev) => ({ ...prev, openingTime: e.target.value }));
            }}
          />
        </div>
        <div>
          <label className="_label">Closing Time</label>
          <input
            type="time"
            className="_input mt-1"
            required
            value={time.closingTime}
            onChange={(e) => {
              setTime((prev) => ({ ...prev, closingTime: e.target.value }));
            }}
          />
        </div>
      </div>

      <p className="mt-10 text-secondary">Location</p>
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-6">
        <div>
          <label className="_label">Latitude</label>
          <input
            type="text"
            className="_input mt-1"
            value={location.latitude}
            onChange={(e) =>
              setLocation((prev) => ({ ...prev, latitude: e.target.value }))
            }
          />
        </div>
        <div>
          <label className="_label">Longitude</label>
          <input
            type="text"
            className="_input mt-1"
            value={location.longitude}
            onChange={(e) =>
              setLocation((prev) => ({ ...prev, longitude: e.target.value }))
            }
          />
        </div>
      </div>

      <div className="mt-6">
        <label className="_label">Category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="_input mt-1 bg-transparent"
        >
          {categoryDropdown.map((item) => {
            return (
              <option key={`category-dropdown` + item._id} value={item._id}>
                {item.name}
              </option>
            );
          })}
        </select>
      </div>

      <div className="mt-6">
        <label className="_label">Description</label>
        <textarea
          rows={5}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="_input mt-1"
        />
      </div>

      <div className="mt-12 flex justify-end">
        <button className="_btn _primary-btn">Update Details</button>
      </div>
    </form>
  );
}
