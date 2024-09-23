"use client";

import Image, { StaticImageData } from "next/image";

export default function ToolCard({
  imageData,
}: {
  imageData: StaticImageData;
}) {
  return (
    <div className= "h-20 w-20">
      <Image src={imageData} alt="uploadicon" />
    </div>
  );
}
