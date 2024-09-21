"use client";

import flutter from "../../../public/icons/flutter.png";
import react from "../../../public/icons/react.png";
import next from "../../../public/icons/nextjs.png";
import unity from "../../../public/icons/unity.png";
import node from "../../../public/icons/nodejs.png";
import express from "../../../public/icons/expressjs.png";
import ToolCard from "./toolCard";

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
        <div className="px-32 grid grid-cols-3 gap-8">
          <ToolCard imageData={flutter} />
          <ToolCard imageData={react} />
          <ToolCard imageData={next} />
          <ToolCard imageData={unity} />
          <ToolCard imageData={node} />
          <ToolCard imageData={express} />
        </div>
      </div>
    </div>
  );
}
