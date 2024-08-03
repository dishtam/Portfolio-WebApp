import React from "react";

export default function LevelBox({ title, level }) {
  return (
    <div className="flex justify-center content-center">
      <div className="pr-2">{title}</div>
      {/* //Level Box */}
      <div className="flex w-60 h-8 p-0.5 justify-between">
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className={`flex w-9 border-black border ${
              level >= index + 1
                ? "bg-gradient-to-b from-yellow-300 to-yellow-50"
                : "bg-gradient-to-b from-yellow-50"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
