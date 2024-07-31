import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="">
      <div className="flex m-8 p-2 bg-transparent justify-between">
        {/* Logo */}
        <div className="flex flex-col justify-center content-center">
          <div className="flex-col border-b-2 text-5xl pb-3 border-black">
            Rohit Roy
          </div>
          <div className="flex-col text-xl pt-2">Full Stack Developer</div>
        </div>
        {/* Link Menu */}
        <div className="hidden md:flex grow w-fill justify-center content-center text-xl space-x-12">
          <div className="flex">
            <Link to="/" className="justify-center content-center">About</Link>
            <div>{/* user icon */}</div>
          </div>
          <div className="flex">
            <Link to="/skills" className="justify-center content-center">Skills</Link>
            <div>{/* pallete icon */}</div>
          </div>
          <div className="flex">
            <Link to="/projects" className="justify-center content-center">Projects</Link>
            <div>{/* storage icon */}</div>
          </div>
          <div className="flex">
            <Link to="/contact" className="justify-center content-center">Contact</Link>
            <div>{/* email icon */}</div>
          </div>
        </div>
        {/* Hamburger Menu Button */}
        <div className="block md:hidden">
          <button
            onClick={toggleMenu}
            className="flex items-center px-3 py-2 border rounded text-black border-black"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
      </div>
      {/* Dropdown Menu */}
      <div
        className={`md:hidden ${isOpen ? "block" : "hidden"} bg-transparent`}
      >
        <div className="flex flex-col items-center text-xl space-y-4">
          <Link to="/">About</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
}
