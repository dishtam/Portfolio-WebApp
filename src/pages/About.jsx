import React, { useState } from "react";
import profilePic from "../assets/dp.png";

export default function About() {
  const [activeButton, setActiveButton] = useState("PERSONAL");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div>
      <div className="block">
        <div className="flex border items-center">
          {/* This will be the left side of the page */}
          <div className="basis-1/4">
            <div className="flex flex-col">
              <button
                onClick={() => handleButtonClick("PERSONAL")}
                className={`text-2xl p-2 m-2 rounded-r-3xl w-fit pr-3 pl-5 ${
                  activeButton === "PERSONAL"
                    ? "bg-gradient-to-l from-violet-500 to-transparent"
                    : "bg-transparent"
                }`}
              >
                PERSONAL
              </button>
              <button
                onClick={() => handleButtonClick("EDUCATION")}
                className={`text-2xl p-2 m-2 rounded-r-3xl w-fit pr-3 pl-5 ${
                  activeButton === "EDUCATION"
                    ? "bg-gradient-to-l from-blue-500 to-transparent"
                    : "bg-transparent"
                }`}
              >
                EDUCATION
              </button>
              <button
                onClick={() => handleButtonClick("CAREER")}
                className={`text-2xl p-2 m-2 rounded-r-3xl w-fit pr-3 pl-5 ${
                  activeButton === "CAREER"
                    ? "bg-gradient-to-l from-cyan-500 to-transparent"
                    : "bg-transparent"
                }`}
              >
                CAREER
              </button>
            </div>
          </div>
          {/* This part has the profile pic */}
          <div className="basis-1/2">
            <img src={profilePic} alt="profile pic" />
          </div>
          {/* This is the right side of the page */}
          <div className="basis-1/3">right side</div>
        </div>
      </div>
    </div>
  );
}
