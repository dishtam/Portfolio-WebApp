import React from 'react'

export default function Button({text,size,color,dir,isActive,onClick}) {
  return (
    <div>
      <button
        onClick={onClick}
        className={`text-${size} font-thin p-2 m-2 rounded-${dir=="r"?"l":"r"}-3xl w-fit pr-3 pl-5 self-center text-center md:text-left
        ${isActive?`bg-gradient-to-${dir} from-${color}-500 to-transparent`:"bg-transparent"}`}
      >
        {text}
      </button>
    </div>
  );
}
