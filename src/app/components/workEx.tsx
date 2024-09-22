"use client";

import WorkExDetail from "./workexDetail";

export default function WorkEx() {
  return (
    <div className="bg-materialgreen h-screen flex flex-col items-center justify-center">
      <div className="w-5/6 md:w-1/3 flex flex-col items-start">
        <p className="font-calistoga text-white text-5xl sm:text-6xl">
          Work Experience
        </p>
        <p className="font-montserrat font-medium text-white text-lg py-8">
          A little bit of history
        </p>
        <div className="flex flex-col space-y-4">
          <WorkExDetail
            title="Lead Front End Developer"
            companyName="PayCrunch, Bangalore"
            detail="I'm creating campaigns for businesses, along with copy and all the designs."
          />
          <WorkExDetail
            title="Member of Technical Staff"
            companyName="Skillwin, Noida"
            detail="Enhanced gameplay with new features, optimized performance, introduced multi-tabling, and diversified the in-game economy with inter-convertible currency for the products Octro Poker 3D (RMG)"
          />
          <WorkExDetail
            title="Game Developer"
            companyName="Hitwicket, Hyderabad"
            detail="I'm creating campaigns for businesses, along with copy and all the designs."
          />
        </div>
      </div>
    </div>
  );
}
