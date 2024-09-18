import Image from "next/image";
import { JobInfoProps } from "../interfaces/jobInfoProps";

export default function JobInfo({ title, subtitle, icon }: JobInfoProps) {
  return (
    <div>
      <Image src={icon} className="h-16 w-16" alt="icon" />
      <p>{title}</p>
      <p>{subtitle}</p>
    </div>
  );
}
