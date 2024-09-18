"use client";

import JobInfo from "./jobInfo";
import payCrunchIcon from "../../../public/paycrunch_icon.png";

export default function WorkEx() {
  return (
    <div className="flex flex-col bg-slate-500 items-start gap-y-4 h-screen pb-20">
      <h1 className="text-2xl">
        Here’s some of the many things I have helped build so far
      </h1>
      <p className="text-lg w-72">In the office</p>
      <JobInfo title="Software Developer" subtitle="At some company" icon={payCrunchIcon}  />
    </div>
  );
}
