import React from "react";
import navIcon from "../../public/icon/Logo.png";
export default function NavBar() {
  return (
    <div className="flex justify-between px-16 pt-5  text-xl font-bold">
      <div className="">
        <img className="w-40" src={navIcon} alt="" />
      </div>
      <ul className="flex space-x-3 items-center">
        <li>Home</li>
        <li>Features</li>
        <li>About</li>
        <li>Download</li>
        <li>Our Team</li>
      </ul>
    </div>
  );
}
