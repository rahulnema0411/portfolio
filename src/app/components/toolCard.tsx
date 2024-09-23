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
    <div className= "m-2 flex items-center rounded-xl bg-white space-x-4">
      <Image src={imageData} className="h-14 w-14" alt="uploadicon" />
      <p className="text-black text-lg font-montserrat font-semibold pr-4">{title}</p>
    </div>
  );
}
