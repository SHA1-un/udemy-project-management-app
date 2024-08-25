import NewProject from "./NewProject";
import ViewProject from "./ViewProject";
import Sidebar from "./Sidebar";

import { useState, useRef } from "react";;

export default function Content() {
  const [projects, setProjects] = useState([]);
  const [isAddingNewProject, setIsAddingNewProject] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  function handleCreateNewProject() {
    setIsAddingNewProject(true);
    setSelectedProject(null)
  }

  function hideNewProjectForm() {
    setIsAddingNewProject(false);
  }

  function addProject(newProject) {
    setProjects((prevProjects) => {
      const newProjectsList = [...prevProjects];
      newProject.id = newProjectsList.length + 1;
      newProjectsList.push(newProject);

      return newProjectsList;
    });
  }

  function handleSelectProject(project) {
    if (project.id === selectedProject?.id) {
      setSelectedProject(null);
    } else {
      setSelectedProject(project);
    }
  }


  return (
    <>
      <Sidebar onCreateNewProject={handleCreateNewProject} onProjectSelect={handleSelectProject} projects={projects} selectedProject={selectedProject} />

      {(!isAddingNewProject && !selectedProject) &&
        <div className="mt-24 text-center w-2/3">
          <img src="src\assets\no-projects.png" className="w-16 h-16 object-contain mx-auto" />
          <h2 className="text-xl font-bold text-stone-700 my-4">No Project Selected</h2>
          <p className="text-stone-600 mb-4">Select a project or get started with a new one</p>
          <button onClick={handleCreateNewProject} className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100">Create new project</button>
        </div>
      }
      {isAddingNewProject && <NewProject handleAddProject={addProject} hideNewProjectForm={hideNewProjectForm} />}

      {(!isAddingNewProject && !!selectedProject) &&
        <ViewProject project={selectedProject} />
      }
    </>

  )
}