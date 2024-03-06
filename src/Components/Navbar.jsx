import React from "react";
import { Link } from "react-router-dom"; // Added import statement for Link component
import Logo from "../assets/shared/logo.svg";

export default function Navbar() {
  return (
    <div className="navbar h-[100px] flex justify-between pl-10 items-center pt-20">
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>

      <div className="divider"></div>

      <div className="links text-white flex pl-[20rem] pr-[10rem] p-10 gap-[3rem] text-[1.2rem] cursor-auto">
        <Link to="/">
          <p className="uppercase font-light cursor-pointer">
            <span className="font-bold">00</span> Home
          </p>
        </Link>
        <Link to="/destination">
          <p className="uppercase font-light cursor-pointer">
            <span className="font-bold">01</span> Destination
          </p>
        </Link>
        <Link to="/crew">
          {" "}
          <p className="uppercase font-light cursor-pointer">
            <span className="font-bold">02</span> Crew
          </p>
        </Link>
        <Link to="/technology">
          {" "}
          <p className="uppercase font-light cursor-pointer">
            <span className="font-bold">03</span> Technology
          </p>
        </Link>
      </div>
    </div>
  );
}
