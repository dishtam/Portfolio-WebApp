import React from 'react'
import profilePic from "/dp.png"; 
import SkillMenu from '../components/skills/SkillMenu';

export default function Skills() {
  return (
    <div className='flex-1'>
      <div className='flex h-full w-full'>
        {/* left part of the screen */}
        <div className='flex h-full'><img src={profilePic} alt="profile pic" /></div>
        {/* Right part of the screen */}
        <div className='flex h-full'>
          <SkillMenu/>
        </div>
      </div>
    </div>
  )
}
