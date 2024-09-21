"use client";

import StackGrid from "react-stack-grid";
import flutter from "../../../public/icons/flutter.png";
import react from "../../../public/icons/react.png";
import next from "../../../public/icons/nextjs.png";
import Image from "next/image";

export default function DeveloperTools() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center bg-tealblue h-screen px-8">
      <div className="w-1/2">
        <p className="text-5xl sm:text-6xl py-8 sm:py-40 font-recoleta font-bold text-white">
          I love building <span className="text-materialyellow">ideas</span>{" "}
          into <span className="text-lightblue">reality</span>
        </p>
      </div>
      <div className="w-1/2">
        <StackGrid columnWidth={90} gutterHeight={12} gutterWidth={24}>
          <div key="key1" className="bg-slate-100 py-4 rounded-2xl">
            <Image
              src={flutter}
              className="h-12 w-12 ml-5 rounded-full"
              alt="uploadicon"
            />
          </div>
          <div key="key2" className="bg-slate-100 py-4 rounded-2xl">
            <Image
              src={react}
              className="h-12 w-12 ml-5 rounded-full"
              alt="uploadicon"
            />
          </div>
          <div key="key3" className="bg-slate-100 py-4 rounded-2xl">
            <Image
              src={next}
              className="h-12 w-12 ml-5 rounded-full"
              alt="uploadicon"
            />
          </div>
        </StackGrid>
      </div>
    </div>
  );
}
