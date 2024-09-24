"use client";

import WorkExDetail from "./workexDetail";

export default function WorkEx() {
  return (
    <div className="bg-materialgreen py-16 sm:h-screen flex flex-col items-center justify-center">
      <div className="sm:w-5/6 px-8 sm:px-0 xl:w-1/3 flex flex-col items-start">
        <div>
          <p className="font-calistoga text-white text-5xl sm:text-6xl py-4">
            Work Experience
          </p>
        </div>
        <div className="flex flex-col space-y-4">
          <WorkExDetail
            title="Front End Developer"
            companyName="PayCrunch, Bangalore (February 2024 - Present)"
            detail="Working on the development of the PayCrunch flutter application, focusing on creating seamless user experience."
          />
          <WorkExDetail
            title="Member of Technical Staff"
            companyName="Skillwin, Noida (December 2022 - January 2024)"
            detail="Enhanced gameplay with new features, optimized performance, introduced multi-tabling, and diversified the in-game economy with inter-convertible currency for the products Octro Poker 3D (RMG)"
          />
          <WorkExDetail
            title="Game Developer"
            companyName="Hitwicket, Hyderabad (June 2021 - November 2022)"
            detail="Enhanced engagement with new features, improved retention via A/B testing, developed real-time PVP, and ensured maintainable code using SOLID principles."
          />
        </div>
      </div>
    </div>
  );
}
