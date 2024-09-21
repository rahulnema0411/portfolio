"use client";

import Image, { StaticImageData } from "next/image";

export default function ToolCard({
  imageData,
}: {
  imageData: StaticImageData;
}) {
  return (
    <div key="key1" className="bg-slate-100 rounded-2xl h-20 w-20 border-black border">
      <Image src={imageData} className="p-4 rounded-full" alt="uploadicon" />
    </div>
  );
}
