"use client";

import Image, { StaticImageData } from "next/image";

export default function ToolCard({
  title,
  imageData,
}: {
  title: string;
  imageData: StaticImageData;
}) {
  return (
    <div className= "m-2 flex items-center rounded-xl bg-white space-x-2">
      <Image src={imageData} className="h-10 w-10 sm:h-14 sm:w-14" alt="uploadicon" />
      <p className="text-black text-sm sm:text-lg font-montserrat font-semibold pr-4">{title}</p>
    </div>
  );
}
