import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { projectData } from "./Data";
import { projectsNav } from "./Data";
import WorkItems from "./WorkItems";

const Works = () => {

  return (
    <div>
      <div className="work__container container grid">
        {projectData.map((item) => {
          return <WorkItems item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Works;
