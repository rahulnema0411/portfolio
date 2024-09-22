"use client";

import { MdOutlineWork } from "react-icons/md";

export default function WorkExDetail({
  title,
  companyName,
  detail,
}: {
  title: string;
  companyName: string;
  detail: string;
}) {
  return (
    <div className="flex items-center space-x-4 border-2 border-dashed border-materialgreenlighter p-4 rounded-2xl">
      <div className="bg-white bg-opacity-20 p-4 rounded-2xl">
        <MdOutlineWork color="white" size={24} />
      </div>
      <div className="space-y-2">
        <p className="font-montserrat font-semibold">{title}</p>
        <p className="font-montserrat font-black">{companyName}</p>
        <p className="font-montserrat font-medium">{detail}</p>
      </div>
    </div>
  );
}
