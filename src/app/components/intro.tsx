"use client";

export default function Intro() {
  return (
    <div className="flex flex-col sm:items-start px-8 md:items-center justify-center h-screen">
      <h1 className="text-md font-montserrat font-bold text-tealblue py-6">
        Hey, I am Rahul Nema 👋
      </h1>
      <p className="text-5xl sm:text-6xl font-calistoga text-black">
        I am a
      </p>
      <p className="text-5xl sm:text-6xl font-calistoga text-black">
        Full Stack
      </p>
      <p className="text-5xl sm:text-6xl font-calistoga text-black">
        Web Developer,
      </p>
      <p className="text-5xl sm:text-6xl font-calistoga text-black">
        App Developer,
      </p>
      <p className="text-5xl sm:text-6xl font-calistoga text-black">
        Game Developer.
      </p>
      <div className="sm:text-center text-md font-montserrat font-medium text-materialsubtitlegrey py-6">
        <p>
          Based in Bengaluru, India 🇮🇳.
        </p>
      </div>
    </div>
  );
}
