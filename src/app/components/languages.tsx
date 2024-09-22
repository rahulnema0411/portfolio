"use client";

import dart from "../../../public/icons/dart.png";
import c from "../../../public/icons/c.png";
import java from "../../../public/icons/java.png";
import javascript from "../../../public/icons/javascript.png";
import typescript from "../../../public/icons/typescript.png";
import LanguageCard from "./languageCard";

export default function Languages() {
  return (
    <div className="flex flex-col px-8 py-24 sm:items-center space-y-16 bg-white">
      <p className="text-5xl sm:text-6xl font-calistoga text-black">
        Languages I speak...
      </p>
      <div className="grid grid-cols-2 gap-4 sm:flex sm:space-x-16">
        <LanguageCard imageData={dart} name="Dart" />
        <LanguageCard imageData={c} name="C#" />
        <LanguageCard imageData={java} name="Java" />
        <LanguageCard imageData={javascript} name="Javascript" />
        <LanguageCard imageData={typescript} name="Typescript" />
      </div>
    </div>
  );
}
