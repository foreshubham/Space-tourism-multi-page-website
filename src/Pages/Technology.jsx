import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Rocket from "../assets/technology/image-launch-vehicle-portrait.jpg";

export default function Technology() {
  const [activeButton, setActiveButton] = useState("btn1");
  const [content, setContent] = useState({
    btn1: {
      series: "1",
      heading: "Launch Vehicle",
      abt: "Description for Launch Vehicle 1",
    },
    btn2: {
      series: "2",
      heading: "Launch Vehicle",
      abt: "Description for Launch Vehicle 2",
    },
    btn3: {
      series: "3",
      heading: "Launch Vehicle",
      abt: "Description for Launch Vehicle 3",
    },
  });

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  return (
    <div className="w-screen h-screen overflow-hidden">
      <div className="techno-hero w-full h-full ">
        <Navbar />
        <div className="bottom flex mt-[15rem]">
          <div className="text w-1/3 text-white p-20">
            <p className="uppercase text-[2rem] ">
              <span>03</span> Space Launch 101{" "}
            </p>
            <button
              className={activeButton === "btn1" ? "active" : ""}
              onClick={() => handleButtonClick("btn1")}
            >
              01
            </button>
            <button
              className={activeButton === "btn2" ? "active" : ""}
              onClick={() => handleButtonClick("btn2")}
            >
              02
            </button>
            <button
              className={activeButton === "btn3" ? "active" : ""}
              onClick={() => handleButtonClick("btn3")}
            >
              03
            </button>
            <p>{content[activeButton].series}</p>
          </div>
          <div className="rocket">
            <img src={Rocket} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
