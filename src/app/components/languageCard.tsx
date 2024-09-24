"use client";

import Image, { StaticImageData } from "next/image";

export default function LanguageCard({
  imageData,
  name,
}: {
  imageData: StaticImageData;
  name: string;
}) {
  return (
    <div
      key="key1"
      className="flex flex-row items-center space-x-2"
    >
      <Image src={imageData} className="h-6 w-6 sm:h-10 sm:w-10" alt="uploadicon" />
      <p className="text-center text-lg sm:text-2xl font-montserrat font-semibold text-black">{name}</p>
    </div>
  );
}
