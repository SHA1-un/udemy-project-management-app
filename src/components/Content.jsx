import NewProject from "./NewProject";
import ViewProject from "./ViewProject";
import Sidebar from "./Sidebar";

import { useState } from "react";;

export default function Content() {
  const [projects, setProjects] = useState([]);
  const [isAddingNewProject, setIsAddingNewProject] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  
  const selectedProject = projects.find(project => project.id === selectedProjectId);

  function handleCreateNewProject() {
    setIsAddingNewProject(true);
    setSelectedProjectId(null)
  }

  function hideNewProjectForm() {
    setIsAddingNewProject(false);
  }

  function addProject(newProject) {
    setProjects(prevProjects => {
      const updatedProjectsList = [...prevProjects];
      newProject.id = updatedProjectsList.length + 1;
      newProject.tasks = [];
      updatedProjectsList.push(newProject);

      return updatedProjectsList;
    });
  }

  function addProjectTask(project, task) {
    setProjects(prevProjects => {
      const updatedProjectsList = [];
      for (const proj of prevProjects) {
        const copiedProject = {...proj};
        copiedProject.tasks = [...proj.tasks];
        updatedProjectsList.push(copiedProject);
      }
      const updatedProject = updatedProjectsList.find(_project => _project.id === project.id);

      if (!updatedProject) {
        console.log(`Could not find project with id ${project.id}`);
        return updatedProjectsList;
      }

      task.id = updatedProject.tasks.length + 1;
      updatedProject.tasks.push(task);
      console.log("updated list")
      console.log(updatedProjectsList)
      return updatedProjectsList;
    });
  }

  function handleSelectProject(project) {
    if (project.id === selectedProject?.id) {
      setSelectedProjectId(null);
    } else {
      setSelectedProjectId(project.id);
    }
  }


  return (
    <>
      <Sidebar onCreateNewProject={handleCreateNewProject} onProjectSelect={handleSelectProject} projects={projects} selectedProject={selectedProject} />

      {(!isAddingNewProject && !selectedProjectId) &&
        <div className="mt-24 text-center w-2/3">
          <img src="src\assets\no-projects.png" className="w-16 h-16 object-contain mx-auto" />
          <h2 className="text-xl font-bold text-stone-700 my-4">No Project Selected</h2>
          <p className="text-stone-600 mb-4">Select a project or get started with a new one</p>
          <button onClick={handleCreateNewProject} className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100">Create new project</button>
        </div>
      }
      {isAddingNewProject && <NewProject handleAddProject={addProject} hideNewProjectForm={hideNewProjectForm} />}

      {(!isAddingNewProject && selectedProjectId) &&
        <ViewProject selectedProject={selectedProject} handleAddProjectTask={addProjectTask} />
      }
    </>

  )
}