"use client";

import { SetStateAction, useRef } from "react";
import Image from "next/image";
import { PiImagesSquareDuotone } from "react-icons/pi";
import { MdClear } from "react-icons/md";

type Props = {
  images: any[];
  setImages: React.Dispatch<SetStateAction<any[]>>;
  maxImages: number;
};

export default function ImageUpload({ images, setImages, maxImages }: Props) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.currentTarget.files;

    if (!files || !files?.length) {
      return;
    }
    setImages((prev) => [
      ...prev,
      ...Array.from(files).splice(0, maxImages - images.length),
    ]);
  };

  const handleDelete = (index: number) => {
    setImages((prev) => prev.filter((_item, i) => i !== index));
  };

  return (
    <div>
      <input
        type="file"
        multiple
        accept="image/*"
        style={{ display: "none" }}
        ref={fileInputRef}
        value={undefined}
        onChange={handleChange}
      />
      <button
        type="button"
        onClick={handleButtonClick}
        disabled={images.length >= maxImages}
        className="_btn flex items-center gap-x-2 border text-gray-600 hover:text-gray-900"
      >
        <PiImagesSquareDuotone size={22} />
        Upload Image
      </button>

      {images?.length ? (
        <div className="mt-4 flex flex-wrap gap-4">
          {images.map((file, i) => {
            const isRawImage = !!file.name;

            return (
              <div key={i} className="relative">
                <button
                  type="button"
                  className="absolute top-2 right-2 p-1 aspect-square rounded-full bg-white text-gray-700"
                  title="Delete image"
                  onClick={() => handleDelete(i)}
                >
                  <MdClear size={20} />
                </button>
                <Image
                  src={isRawImage ? URL.createObjectURL(file) : file.url}
                  alt={`Preview img-${i}`}
                  width={500}
                  height={300}
                  className="w-[200px] aspect-video object-cover rounded"
                />
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
