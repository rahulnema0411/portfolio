"use client";

import Image from "next/image";
import profilePic from "../../../public/profile_pic.jpg";

export default function Intro() {
  return (
    <div className="flex flex-col bg-slate-500 items-start justify-end gap-y-4 h-screen pb-20">
      <Image src={profilePic} className="w-36" alt="profile pic here" />
      <h1 className="text-2xl">Hi, I am Rahul Nema</h1>
      <p className="text-lg w-72">
        Full Stack software developer with experience in Front-End and Back-End
        technologies
      </p>
      <p>And I love bringing ideas to life.</p>
    </div>
  );
}
