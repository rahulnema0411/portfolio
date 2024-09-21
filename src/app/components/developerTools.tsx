"use client";

import flutter from "../../../public/icons/flutter.png";
import react from "../../../public/icons/react.png";
import next from "../../../public/icons/nextjs.png";
import unity from "../../../public/icons/unity.png";
import node from "../../../public/icons/nodejs.png";
import express from "../../../public/icons/expressjs.png";
import aws from "../../../public/icons/aws.png";
import firebase from "../../../public/icons/firebase.png";
import github from "../../../public/icons/github.png";

import ToolCard from "./toolCard";

export default function DeveloperTools() {
  return (
    <div className="flex flex-col sm:flex-row py-24 sm:py-0 sm:items-center justify-between bg-tealblue h-screen px-8">
      <div className="sm:w-1/2">
        <p className="text-5xl sm:text-6xl py-8 sm:py-40 font-calistoga text-white">
          I love building <span className="text-materialyellow">ideas</span>{" "}
          into <span className="text-lightblue">reality</span>
        </p>
      </div>
      <div className="sm:w-1/2">
        <p className="py-4 sm:px-32 font-montserrat font-medium text-lg">Frameworks I love to use</p>
        <div className="sm:px-32 grid grid-cols-3 gap-8">
          <ToolCard imageData={flutter} />
          <ToolCard imageData={react} />
          <ToolCard imageData={next} />
          <ToolCard imageData={unity} />
          <ToolCard imageData={node} />
          <ToolCard imageData={express} />
        </div>
        <br />
        <p className="py-4 sm:px-32 font-montserrat font-medium text-lg">Tools I am comfortable with</p>
        <div className="sm:px-32 grid grid-cols-3 gap-8">
          <ToolCard imageData={aws} />
          <ToolCard imageData={firebase} />
          <ToolCard imageData={github} />
        </div>
      </div>
    </div>
  );
}
