"use client";

import Image, { StaticImageData } from "next/image";

export default function ProductCard({
  title,
  imageData,
}: {
  title: string;
  imageData: StaticImageData;
}) {
  return (
    <div key="key1" className="bg-white rounded-2xl h-20 w-20 border-black border shadow-xl">
      <Image src={imageData} className="p-4 rounded-full" alt="uploadicon" />
      <p className="text-center text-2xl font-montserrat font-bold text-black">{title}</p>
    </div>
  );
}
