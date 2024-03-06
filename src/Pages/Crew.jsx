import React, { useState } from "react";
import Navbar from "../Components/Navbar";

import AnsariImage from "../assets/crew/image-anousheh-ansari.png";
import GloverImage from "../assets/crew/image-victor-glover.png";
import MarkImage from "../assets/crew/image-douglas-hurley.png";
import ShuttleImage from "../assets/crew/image-mark-shuttleworth.png";


export default function Crew() {
  const [activeButton, setActiveButton] = useState("button1");
  const [content, setContent] = useState({
    button1: {
      Designation: "Flight Engineer",
      Name: "  Anousheh Ansari",
      About: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ",
      // ansari: {Ansari}
    },
    button2: {
      // glover: "image2.jpg",
      Designation: "  Pilot",
      Name: "Victor Glover",
      About: " Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
    },
    button3: {
      // mark: "image3.jpg",
      Designation: "Mission Specialist",
      Name: " Mark Shuttleworth",
      About: " Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind  the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    },
    button4: {
      // shuttle: "image4.jpg",
      Designation: " Mission Specialist",
      Name: "Mark Shuttleworth",
      About: " Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind  the Linux-based Ubuntu operating system. Shuttleworth became the first South  African to travel to space as a space tourist.",
    },
  });

  // Click event handler for buttons
  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  const renderImage = () => {
    switch (activeButton) {
      case "button1":
        return AnsariImage;
      case "button2":
        return GloverImage;
      case "button3":
        return MarkImage;
      case "button4":
        return ShuttleImage;
      default:
        return AnsariImage;
    }
  };

  return (
    <div className="w-screen h-screen overflow-hidden text-white">
      <div className="crew-hero w-full h-full ">
        <Navbar />
        <div className="Crew">
          <p>
            <span>02</span> Meet Your Crew
          </p>

          {/* Display content based on active button */}
          <div className="content">
         
            <h2>{content[activeButton].Designation}</h2>
            <h1>{content[activeButton].Name}</h1>
            <p>{content[activeButton].About}</p>
          </div>

          <button
            id="button"
            className={activeButton === "button1" ? "active" : ""}
            onClick={() => handleButtonClick("button1")}
          ></button>
          <button
            id="button"
            className={activeButton === "button2" ? "active" : ""}
            onClick={() => handleButtonClick("button2")}
          ></button>
          <button
            id="button"
            className={activeButton === "button3" ? "active" : ""}
            onClick={() => handleButtonClick("button3")}
          ></button>
          <button
            id="button"
            className={activeButton === "button4" ? "active" : ""}
            onClick={() => handleButtonClick("button4")}
          ></button>
        </div>
        <div className="images">
        <img className="absolute bottom-0 left-[60%] " src={renderImage()} alt="Content" />
          
        </div>
      </div>
    </div>
  );
}
