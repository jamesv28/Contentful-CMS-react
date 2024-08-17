import React from "react";
import { useFetchProjects } from "../fetchProjects";

const Projects = () => {
  const { loading, projects } = useFetchProjects();
  console.log("projects", projects);
  return (
    <div>
      <h2>Projects</h2>
    </div>
  );
};

export default Projects;
