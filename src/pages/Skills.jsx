import React from 'react'
import profilePic from "/dp.png"; 
import SkillMenu from '../components/SkillMenu';

export default function Skills() {
  return (
    <div className="flex-1">
      <div className="flex h-full w-full relative justify-center">
        {/* left part of the screen */}
        <div className="flex items-stretch h-full absolute opacity-25 -z-10 sm:relative sm:opacity-100 sm:z-0 ">
          <img src={profilePic} alt="profile pic" />
        </div>
        {/* Right part of the screen */}
        <div className="flex items-stretch h-full">
          <SkillMenu />
        </div>
      </div>
    </div>
  );
}
