import React from "react";
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

const ProjectBox = ({ projectPhoto, projectName, stack }) => {
  const desc = {
    mrChefDesc:
      "It is food order website where users can order and checkout their orders",
    mrChefGithub: "https://github.com/Anuj-16/Food_App",
    mrChefWebsite: "https://deluxe-caramel-2ddeb6.netlify.app/",

    HoneyStoreDesc:
      "A website that has Honey Products made Using React,which is responsive and has a Beautiful UI ",
    HoneyStoreGithub: "https://github.com/shubham007x/Honey-Store",
    HoneyStoreWebsite: "https://github.com/shubham007x/Honey-Store#readme",

    FurnitureStoreDesc:
      "An Commerce website made using REACT CSS REDUX which has Different Furniture Products ",
    FurnitureStoreGithub: "https://github.com/Anuj-16/Furniture-Store",
    FurnitureStoreWebsite: "https://furniture-ebon-two.vercel.app/",

    GlossierDesc:
      "An Commerce website made using HTML CSS JS which has Different Skin Products ",
    GlossierGithub: "https://github.com/rshvraj/Glossier",
    GlossierWebsite: "https://glossier-ten.vercel.app/",
  };

  let show = "";
  if (desc[projectName + "Github"] === "") {
    show = "none";
  }

  return (
    <div className="projectBox project-card">
      <img className="projectPhoto" src={projectPhoto} alt="Project display" />
      <div>
        <br />
        <h3 className="project-title">{projectName}</h3>
        <br />
        <p className="project-description">{desc[projectName + "Desc"]}</p>

        <br />
        <p className="project-tech-stack">{stack}</p>
        <a
          style={{ display: show }}
          href={desc[projectName + "Github"]}
          target="_blank"
        >
          <button className="projectbtn project-github-link">
            <FaGithub /> Github
          </button>
        </a>

        <a href={desc[projectName + "Website"]} target="_blank">
          <button className="projectbtn project-deployed-link">
            <CgFileDocument /> Demo
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectBox;
