"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

type ImageSliderProps = {
  images: string[];
};

export default function ImageSlider({ images }: ImageSliderProps) {
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const [containerHeight, setContainerHeight] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const updateContainerHeight = () => {
      if (imageContainerRef.current) {
        setContainerHeight(imageContainerRef.current.offsetHeight);
      }
    };

    updateContainerHeight();
    window.addEventListener("resize", updateContainerHeight);
    return () => window.removeEventListener("resize", updateContainerHeight);
  }, []);

  return (
    <div className="grid grid-cols-12 gap-4">
      <div
        ref={imageContainerRef}
        className="relative w-full overflow-hidden col-span-12 lg:col-span-9"
      >
        <div className="relative aspect-video">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-500 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={image}
                alt={`Slide ${index}`}
                width={1200}
                height={1200}
                className="object-cover w-full h-full rounded-sm"
              />
            </div>
          ))}
        </div>
        <button
          onClick={handlePrevClick}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-3 rounded-full focus:outline-none hover:bg-opacity-75"
        >
          <MdOutlineKeyboardArrowLeft size={22} />
        </button>
        <button
          onClick={handleNextClick}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-3 rounded-full focus:outline-none hover:bg-opacity-75"
        >
          <MdOutlineKeyboardArrowRight size={22} />
        </button>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === currentIndex ? "bg-primary" : "bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>

      <div
        style={{ height: `${containerHeight}px` }}
        className="hidden lg:block lg:col-span-3 overflow-scroll"
      >
        <div className="grid grid-cols-1 gap-4">
          {images.map((image, i) => (
            <Image
              key={`img-${i}`}
              width={300}
              height={300}
              src={image}
              alt="menu image"
              className="w-full aspect-video rounded"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
