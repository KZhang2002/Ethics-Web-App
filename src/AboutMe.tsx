import React from "react";
import NavigationBar from "./NavigationBar";

export const AboutMe = () => {
  return (
    <div>
      {/* Background Blue */}
        <div className="w-96 h-[941px] relative bg-indigo-800 overflow-hidden">
  {/* Header Hey Stang!*/}
  <div className="w-44 h-24 left-[101px] top-[40px] absolute">
    <div className="left-[49px] top-0 absolute justify-start text-white text-4xl font-bold font-['Playfair']">Hey</div>
    <div className="left-0 top-[24px] absolute justify-start text-rose-700 text-6xl font-normal font-['Lobster']">Stang!</div>
  </div>
  <div className="w-24 h-24 left-[-7px] top-[-49px] absolute" />
  {/* Content Section */}
  <div data-platform="Mobile" className="w-80 h-[647px] p-6 left-[21px] top-[167px] absolute bg-Background-Default-Default rounded-lg inline-flex flex-col justify-start items-start gap-6">
    <img className="self-stretch h-60" src="/SMUTechOverlay.png" />
    <div className="self-stretch min-w-72 flex flex-col justify-start items-start gap-6">
      <div className="self-stretch inline-flex flex-col justify-start items-start gap-2">
        <div></div>
      </div>
      <div className="self-stretch inline-flex justify-start items-start">
        <div></div>
      </div>
    </div>
  </div>
  {/* Image Section */}
  <img className="w-72 h-60 left-[43px] top-[189px] absolute" src="/SMUTechOverlay.png" />
  <NavigationBar />
    </div>
    </div>
  )
}

export default AboutMe;