import React, { useState } from "react";
import profilePic from "/dp.png";

export default function About() {
  const [activeButton, setActiveButton] = useState("PERSONAL");
  const [education, setEducation] = useState("BTECH");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const handleEducationClick = (educationClick) => {
    setEducation(educationClick);
  };

  return (
    <div className="flex-1">
      <div className="block pt-6">
        <div className="flex flex-col md:flex-row items-center relative">
          {/* This will be the left side of the page */}
          <div className="md:basis-1/4 z-10">
            <div className="flex flex-col">
              <button
                onClick={() => handleButtonClick("PERSONAL")}
                className={`font-thin md:text-2xl p-2 m-2 rounded-r-3xl w-fit pr-3 pl-5 self-center ${
                  activeButton === "PERSONAL"
                    ? "bg-gradient-to-l from-violet-500 to-transparent"
                    : "bg-transparent"
                }`}
              >
                PERSONAL
              </button>
              <button
                onClick={() => handleButtonClick("EDUCATION")}
                className={`font-thin md:text-2xl p-2 m-2 rounded-r-3xl w-fit pr-3 pl-5 self-center ${
                  activeButton === "EDUCATION"
                    ? "bg-gradient-to-l from-blue-500 to-transparent"
                    : "bg-transparent"
                }`}
              >
                EDUCATION
              </button>
              <button
                onClick={() => handleButtonClick("CAREER")}
                className={`font-thin md:text-2xl p-2 m-2 rounded-r-3xl w-fit pr-3 pl-5 self-center ${
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
          <div className="flex h-full w-full absolute md:relative md:opacity-100 opacity-30">
            <img
              src={profilePic}
              alt="profile pic"
              className="flex w-full h-full object-cover"
            />
          </div>
          {/* This is the right side of the page */}
          <div className="md:basis-1/3 z-10">
            <div className="flex flex-col items-center md:items-start p-4">
              <div className="md:text-left text-center text-lg">
                {activeButton === "PERSONAL" && (
                  <div className="">
                    <div className="pb-10 pl-5 font-semibold">PERSONAL</div>
                    <div>
                      <div className="font-[250] pb-3 bg-gradient-to-r from-violet-500 to-transparent w-fit self-center md:self-start pl-5 pr-3 p-2 rounded-l-3xl">
                        About Me
                      </div>
                      <div className="font-extralight pl-5 min-w-10 text-justify">
                        I am a tech enthusiast, and I like to explore newer
                        domains as well. Apart from tech, I have interests in
                        finance.
                      </div>
                    </div>
                  </div>
                )}
                {activeButton === "EDUCATION" && (
                  <div>
                    <div className="pb-10 pl-5 font-semibold">EDUCATION</div>
                    <div className="flex flex-col items-center md:items-start">
                      <button
                        onClick={() => handleEducationClick("BTECH")}
                        className={`font-[250] pb-3 w-fit pl-5 pr-3 p-2 rounded-l-3xl self-center md:self-start text-center md:text-left ${
                          education === "BTECH"
                            ? "bg-gradient-to-r from-blue-500 to-transparent"
                            : "bg-transparent"
                        }`}
                      >
                        2024 B.Tech
                      </button>
                      {education === "BTECH" && (
                        <div className="font-extralight pl-5 min-w-10 text-justify self-center md:self-start md:text-left">
                          I did my B.Tech from NIT Silchar in Electronics and
                          Communications. My overall CGPA was 8.28
                        </div>
                      )}
                      <button
                        onClick={() => handleEducationClick("SECONDARY")}
                        className={`font-[250] pb-3 w-fit pl-5 pr-3 p-2 rounded-l-3xl self-center md:self-start text-center md:text-left ${
                          education === "SECONDARY"
                            ? "bg-gradient-to-r from-blue-500 to-transparent"
                            : "bg-transparent"
                        }`}
                      >
                        2019 Higher Secondary
                      </button>
                      {education === "SECONDARY" && (
                        <div className="font-extralight pl-5 min-w-10 text-justify self-center md:self-start md:text-left">
                          I did my Higher Secondary from B.Borooah College from
                          the science department. I had a total score of 78.6%.
                        </div>
                      )}
                    </div>
                  </div>
                )}
                {activeButton === "CAREER" && (
                  <div>
                    <div className="pb-10 pl-5 font-semibold">CAREER</div>
                    <div className="font-[250] pb-3 bg-gradient-to-r from-cyan-500 to-transparent w-fit self-center md:self-start pl-5 pr-3 p-2 rounded-l-3xl">
                      SOFTWARE ENGINEER
                    </div>
                    <div className="font-extralight pl-5 min-w-10 text-justify">
                      I am a fresher and currently I am working as software engineer at GlobalLogic Pvt. Ltd., Chennai
                      office.
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
