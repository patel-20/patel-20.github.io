import React from "react";
import ProjectBox from "./ProjectBox";
import mrChef from "../images/project-3pic.png"
import furniture from "../images/furniture.png";
import HoneyStoreImage from "../images/honey.png";
import glossier from "../images/glossier.png";

const Projects = () => {
  return (
    <section id="projects">
      <h1 className="projectHeading">
        My <b>Projects</b>
      </h1>
      <div className="project">
        <ProjectBox
          projectPhoto={mrChef}
          stack={["HTML ", "CSS ", "JS "]}
          projectName="mrChef"
        />
        <ProjectBox
          projectPhoto={HoneyStoreImage}
          stack={["REACT ", "CSS ", "Redux ", ""]}
          projectName="HoneyStore"
        />
        <ProjectBox
          projectPhoto={furniture}
          stack={["REACT ", "CSS ", "REDUX"]}
          projectName="FurnitureStore"
        />
        <ProjectBox
          projectPhoto={glossier}
          stack={["HTML ", "CSS ", "JS"]}
          projectName="Glossier"
        />
      </div>
    </section>
  );
};

export default Projects;
