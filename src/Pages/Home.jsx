import React from "react";

import Navbar from "../Components/Navbar";
export default function Home() {
  return (
    <div className="w-screen h-screen overflow-hidden">
      <div className="hero w-full h-full ">
       
        <Navbar />

        <div className="bottom  flex mt-[15rem] ">
          <div className="text w-1/3 text-white p-20">
            <p className="uppercase text-[2rem] ">So you want to travel to</p>
            <h1 className="text-[8.5rem] uppercase ">Space</h1>
            <p className="text-[1.2rem] font-light">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>

          <div className="explore">
            <p>Explore</p>
          </div>
        </div>
      </div>
    </div>
  );
}
