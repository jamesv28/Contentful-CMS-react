import React from "react";
import { useFetchRequests } from "../fetchProjects";

const Projects = () => {
  const { loading, projects } = useFetchRequests();
  console.log("projects", projects);
  return (
    <div>
      <h2>Projects</h2>
    </div>
  );
};

export default Projects;
