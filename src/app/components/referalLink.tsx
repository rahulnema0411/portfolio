import Image from "next/image";
import { ReferalProps } from "../interfaces/referalProps";

export default function ReferalLink({ title, icon, link }: ReferalProps) {
  return (
    <div>
      <Image src={icon} className="h-16 w-16" alt="icon" />
      <p>{title}</p>
      <a href={link}>{link}</a>
    </div>
  );
}