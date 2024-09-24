"use client";


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
    <div className="flex space-x-4 border-2 border-dashed border-materialgreenlighter p-4 rounded-2xl">
      <div className="space-y-2">
        <p className="font-montserrat font-semibold">{title}</p>
        <p className="font-montserrat font-black">{companyName}</p>
        <p className="font-montserrat font-medium">{detail}</p>
      </div>
    </div>
  );
}
