"use client";

import flutter from "../../../public/tools/flutter.png";
import react from "../../../public/tools/react.png";
import next from "../../../public/tools/next.png";
import unity from "../../../public/tools/unity.png";
import node from "../../../public/tools/node.png";
import express from "../../../public/tools/express.png";
import aws from "../../../public/tools/aws.png";
import firebase from "../../../public/tools/firebase.png";
import github from "../../../public/tools/github.png";
import tailwind from "../../../public/tools/tailwind.png";

import ToolCard from "./toolCard";

export default function DeveloperTools() {


  return (
    <div className="flex flex-col sm:flex-row py-24 sm:py-0 sm:items-center justify-between bg-tealblue h-1/2 px-8">
      <div className="sm:w-1/2 py-8 sm:py-40">
        <p className="text-5xl sm:text-6xl font-calistoga text-white">
          I love to transform <span className="text-materialyellow">ideas</span>{" "}
          into <span className="text-lightblue">reality</span> using code.
        </p>
        <p className="py-4 text-lg font-montserrat font-medium text-white">
          With an experience of over three years of developing mobile applications, games and web applications using the latest technologies and full-fledged APIs. 👨‍💻
        </p>
      </div>
      <div className="sm:w-1/2">
        <div className="flex flex-wrap justify-center px-12">
          <ToolCard title="Flutter" imageData={flutter} />
          <ToolCard title="ReactJS" imageData={react} />
          <ToolCard title="NextJS" imageData={next} />
          <ToolCard title="Unity 3D" imageData={unity} />
          <ToolCard title="NodeJS" imageData={node} />
          <ToolCard title="ExpressJS" imageData={express} />
          <ToolCard title="Amazon Web Services" imageData={aws} />
          <ToolCard title="Google Firebase" imageData={firebase} />
          <ToolCard title="Github" imageData={github} />
          <ToolCard title="Tailwind CSS" imageData={tailwind} />
        </div>
      </div>
    </div>
  );
}



