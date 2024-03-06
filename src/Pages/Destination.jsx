import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Mars from "../assets/destination/image-mars.webp";
import Moon from "../assets/destination/image-moon.webp";
import Europa from "../assets/destination/image-europa.webp";
import Titan from "../assets/destination/image-titan.webp";

export default function Destination() {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div className="w-screen h-screen overflow-hidden">
      <div className="hero-destination w-full h-full ">
        <Navbar />

        <div className="bottom  flex mt-[3rem] ">
          <div className="text w-1/3 text-white pt-10 ml-[20rem]">
            <p className="uppercase text-[2rem] ">
              {" "}
              <span className="">01</span> Pick Your Destination
            </p>
            <div className="mt-20 ml-10">
              {activeButton === "Button1" && (
                <div className="text-white">
                  <img src={Moon} alt="Image 1" />{" "}
                </div>
              )}
              {activeButton === "Button2" && (
                <div className="text-white">
                  <img src={Mars} alt="Image 2" />
                </div>
              )}
              {activeButton === "Button3" && (
                <div className="text-white">
                  <img src={Europa} alt="Image 3" />
                </div>
              )}
              {activeButton === "Button4" && (
                <div className="text-white">
                  <img src={Titan} alt="Image 4" />
                </div>
              )}
            </div>
          </div>

          <div className="comb">
            <div className="Buttons text-white text-[1.5rem]">
              <button onClick={() => handleButtonClick("Button1")}>Moon</button>
              <button
                className="active"
                onClick={() => handleButtonClick("Button2")}
              >
                Mars
              </button>
              <button onClick={() => handleButtonClick("Button3")}>
                Europa
              </button>
              <button onClick={() => handleButtonClick("Button4")}>
                Titan
              </button>
            </div>

            <div className="inner-text">
              {activeButton === "Button1" && (
                <div className="text-white text">
                  <h1>Moon</h1>
                  <p>
                    See our planet as you’ve never seen it before. A perfect
                    relaxing trip away to help regain perspective and come back
                    refreshed. While you’re there, take in some history by
                    visiting the Luna 2 and Apollo 11 landing sites.
                  </p>
                  <hr className="break" />
                  <div className="row flex gap-20 mt-10">
                    <col-4><p className="text-[1rem] tracking-wider font-light">AVG. DISTANCE</p><h1 className="uppercase text-[2rem]"> 384,400 km</h1></col-4>
                    <col-4><p className="text-[1rem] tracking-wider font-light">EST. TRAVEL TIME</p><h1 className="uppercase text-[2rem]"> 3 days</h1></col-4>
                  </div>
                </div>
              )}
              {activeButton === "Button2" && (
                <div className="text-white text">
                  <h1>Mars</h1>
                  <p>
                    {" "}
                    Don’t forget to pack your hiking boots. You’ll need them to
                    tackle Olympus Mons, the tallest planetary mountain in our
                    solar system. It’s two and a half times the size of Everest!
                  </p>
                  <hr className="break" />
                  <div className="row flex gap-20 mt-10">
                    <col-4><p className="text-[1rem] tracking-wider font-light">AVG. DISTANCE</p><h1 className="uppercase text-[2rem]"> 225 Mil. km</h1></col-4>
                    <col-4><p className="text-[1rem] tracking-wider font-light">EST. TRAVEL TIME</p><h1 className="uppercase text-[2rem]">9 months</h1></col-4>
                  </div>
                </div>
              )}
              {activeButton === "Button3" && (
                <div className="text-white text">
                  <h1>Europa</h1>
                  <p>
                    {" "}
                    The smallest of the four Galilean moons orbiting Jupiter,
                    Europa is a winter lover’s dream. With an icy surface, it’s
                    perfect for a bit of ice skating, curling, hockey, or simple
                    relaxation in your snug wintery cabin.
                  </p>
                  <hr className="break" />
                  <div className="row flex gap-20 mt-10">
                    <col-4><p className="text-[1rem] tracking-wider font-light">AVG. DISTANCE</p><h1 className="uppercase text-[2rem]">  628 mil. km</h1></col-4>
                    <col-4><p className="text-[1rem] tracking-wider font-light">EST. TRAVEL TIME</p><h1 className="uppercase text-[2rem]">3 years</h1></col-4>
                  </div>
                </div>
              )}
              {activeButton === "Button4" && (
                <div className="text-white text">
                  <h1>Titan</h1>
                  <p>
                    {" "}
                    The only moon known to have a dense atmosphere other than
                    Earth, Titan is a home away from home (just a few hundred
                    degrees colder!). As a bonus, you get striking views of the
                    Rings of Saturn.
                  </p>
                  <hr className="break" />
                  <div className="row flex gap-20 mt-10">
                    <col-4><p className="text-[1rem] tracking-wider font-light">AVG. DISTANCE</p><h1 className="uppercase text-[2rem]">  1.6 bil. km</h1></col-4>
                    <col-4><p className="text-[1rem] tracking-wider font-light">EST. TRAVEL TIME</p><h1 className="uppercase text-[2rem]"> 7 years</h1></col-4>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
