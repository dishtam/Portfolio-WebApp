import LevelBox from "./LevelBox";
import data from "../data/skillsData";
import Button from "./Button";

import React, { useState } from "react";

export default function SkillMenu() {
  const [active, setActive] = useState("FRONT");

  return (
    <div className="flex flex-col justify-start items-end">
      <div className="flex flex-col items-end space-y-2">
        <Button
          text="FRONT-END"
          size="xl"
          dir="r"
          color="cyan"
          isActive={active === "FRONT"}
          onClick={() => setActive("FRONT")}
        />
        <Button
          text="BACK-END"
          size="xl"
          dir="r"
          color="cyan"
          isActive={active === "BACK"}
          onClick={() => setActive("BACK")}
        />
      </div>

      {/* FRONT END list */}
      <div className="">
        {active === "FRONT" && (
          <div className="flex flex-col items-end">
            {data.frontend.map(({ id, title, level }) => (
              <LevelBox
                key={id}
                title={title}
                level={level}
                className="w-full"
              />
            ))}
          </div>
        )}
      </div>
      {/* BACK END list */}
      <div className="justify-self-end">
        {active === "BACK" && (
          <div className="flex flex-col items-end">
            {data.backend.map(({ id, title, level }) => (
              <LevelBox
                key={id}
                title={title}
                level={level}
                className="w-full"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
