"use client";

import dart from "../../../public/icons/dart.png";
import c from "../../../public/icons/c.png";
import ProductCard from "./productCard";

export default function ProductsSection() {
  return (
    <div className="flex flex-col px-8 py-24 sm:items-center space-y-16 bg-white">
    <p className="w-1/2 text-5xl sm:text-6xl font-calistoga text-black text-center mx-auto">
      Here are some of the products I have helped build so far
    </p>
      <div className="grid grid-cols-2 gap-4 sm:flex sm:space-x-16">
        <ProductCard imageData={dart} title="Dart" />
        <ProductCard imageData={c} title="C#" />
      </div>
    </div>
  );
}
