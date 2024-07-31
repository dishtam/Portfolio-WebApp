import React, { useState } from "react";
import profilePic from "../assets/dp.png";

export default function About() {
  const [activeButton, setActiveButton] = useState("PERSONAL");
  const [education, setEducation] = useState(null);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const handleEducationClick = (educationClick) => {
    setEducation(educationClick);
  };

  return (
    <div className="">
      <div className="block pt-6">
        <div className="flex flex-col md:flex-row items-center relative">
          {/* This will be the left side of the page */}
          <div className="md:basis-1/4 z-10">
            <div className="flex flex-col">
              <button
                onClick={() => handleButtonClick("PERSONAL")}
                className={`md:text-2xl p-2 m-2 rounded-r-3xl w-fit pr-3 pl-5 self-center ${
                  activeButton === "PERSONAL"
                    ? "bg-gradient-to-l from-violet-500 to-transparent"
                    : "bg-transparent"
                }`}
              >
                PERSONAL
              </button>
              <button
                onClick={() => handleButtonClick("EDUCATION")}
                className={`md:text-2xl p-2 m-2 rounded-r-3xl w-fit pr-3 pl-5 self-center ${
                  activeButton === "EDUCATION"
                    ? "bg-gradient-to-l from-blue-500 to-transparent"
                    : "bg-transparent"
                }`}
              >
                EDUCATION
              </button>
              <button
                onClick={() => handleButtonClick("CAREER")}
                className={`md:text-2xl p-2 m-2 rounded-r-3xl w-fit pr-3 pl-5 self-center ${
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
          <div className="bottom-0 h-full w-full absolute md:relative md:opacity-100 opacity-30">
            <img
              src={profilePic}
              alt="profile pic"
              className="w-full h-full object-cover"
            />
          </div>
          {/* This is the right side of the page */}
          <div className="md:basis-1/3 z-10">
            <div className="flex flex-col items-center md:items-start p-4">
              <div className="md:text-left text-center text-lg md:text-lg">
                {activeButton === "PERSONAL" && (
                  <div>
                    <div>PERSONAL</div>
                    <div>
                      <div>About Me</div>
                      <div>
                        <div>My interests lies in tech and finance.</div>
                      </div>
                    </div>
                  </div>
                )}
                {activeButton === "EDUCATION" && (
                  <div className="flex flex-col items-center md:items-start p-4">
                    <div className="md:text-left text-center text-lg md:text-lg">
                      <div className="md:text-left text-center text-lg md:text-lg">
                        EDUCATION
                      </div>
                      <div className="flex flex-col items-center md:items-start">
                        <button
                          onClick={() => handleEducationClick("BTECH")}
                          className="self-center md:self-start text-center md:text-left"
                        >
                          2024 B.Tech
                        </button>
                        {education === "BTECH" && (
                          <div className="self-center md:self-start text-center md:text-left">
                            I did my B.Tech from NIT Silchar.
                          </div>
                        )}
                        <button
                          onClick={() => handleEducationClick("SECONDARY")}
                          className="self-center md:self-start text-center md:text-left"
                        >
                          2019 Higher Secondary
                        </button>
                        {education === "SECONDARY" && (
                          <div className="self-center md:self-start text-center md:text-left">
                            I did my Higher Secondary from B.Borooah College
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
                {activeButton === "CAREER" && (
                  <div>
                    <div>
                      <div>CAREER</div>
                      <div>SOFTWARE ENGINEER</div>
                      <div>
                        I am a software engineer at GlobalLogic Pvt. Ltd.
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
