"use client";

import Image, { StaticImageData } from "next/image";
import { TbWorldWww } from "react-icons/tb";
import { BiLogoPlayStore } from "react-icons/bi";
import { FaAppStoreIos } from "react-icons/fa6";

export default function ProductCard({
  title,
  imageData,
  websiteLink,
  playstoreLink,
  appstoreLink,
}: {
  title: string;
  imageData: StaticImageData;
  websiteLink: string;
  playstoreLink: string;
  appstoreLink: string;
}) {
  return (
    <div className="bg-white border-2 border-black rounded-xl w-72 my-4">
      <Image src={imageData} className="rounded-t-lg" alt="uploadicon" />
      <div className="px-4 pt-2">
        <p className="font-montserrat font-semibold text-lg text-black">{title}</p>
        <hr className="border-t-2 border-materialgrey my-2" />
      </div>
      <div className="flex flex-row px-4 pb-2 space-x-4">
        <button className="" onClick={() => window.open(websiteLink, "_blank")}>
          <div className="flex flex-row items-center space-x-1">
            <TbWorldWww color="grey" />
            <p className="text-black900 text-sm font-montserrat font-medium">visit</p>
          </div>
        </button>
        <button className="" onClick={() => window.open(playstoreLink, "_blank")}>
          <div className="flex flex-row items-center space-x-1">
            <BiLogoPlayStore color="grey" />
            <p className="text-black900 text-sm font-montserrat font-medium">playstore</p>
          </div>
        </button>
        <button className="" onClick={() => window.open(appstoreLink, "_blank")}>
          <div className="flex flex-row items-center space-x-1">
            <FaAppStoreIos color="grey" />
            <p className="text-black900 text-sm font-montserrat font-medium">appstore</p>
          </div>
        </button>
      </div>
    </div>
  );
}
