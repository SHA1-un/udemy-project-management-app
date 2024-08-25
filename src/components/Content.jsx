import NewProject from "./NewProject";
import ViewProject from "./ViewProject";
import Sidebar from "./Sidebar";

import { useState } from "react";;

export default function Content() {
  const [projects, setProjects] = useState([]);
  const [isAddingNewProject, setIsAddingNewProject] = useState(false);
  
  const selectedProject = projects.find(project => project.isSelected);

  function handleCreateNewProject() {
    setIsAddingNewProject(true);
    handleSelectProject(null)
  }

  function hideNewProjectForm() {
    setIsAddingNewProject(false);
  }

  function addProject(newProject) {
    setProjects(prevProjects => {
      const updatedProjectsList = [...prevProjects];
      newProject.id = updatedProjectsList.length + 1;
      newProject.isSelected = false;
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
      return updatedProjectsList;
    });
  }

  function removeProjectTask(project, task) {
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

      const taskIndexToRemove = updatedProject.tasks.findIndex(_task => _task.id === task.id);
      updatedProject.tasks.splice(taskIndexToRemove, 1);
      return updatedProjectsList;
    });
  }

  function deleteProject(project) {
    setProjects(prevProjects => {
      const updatedProjectsList = [];
      for (const proj of prevProjects) {
        const copiedProject = {...proj};
        updatedProjectsList.push(copiedProject);
      }
     
      const projectToDeleteIndex = updatedProjectsList.findIndex(_project => _project.id === project.id);

      if (projectToDeleteIndex < 0) {
        console.log(`Could not find project with id ${project.id}`);
        return updatedProjectsList;
      }

      updatedProjectsList.splice(projectToDeleteIndex, 1);
      return updatedProjectsList;
    });

  }

  function handleSelectProject(project) {
    setProjects(prevProjects => {
      const updatedProjectsList = [];
      for (const proj of prevProjects) {
        const copiedProject = {...proj};
        updatedProjectsList.push(copiedProject);
      }
      
      for (const _project of updatedProjectsList) {
        if (_project.isSelected && _project.id === project?.id) {
          _project.isSelected = false;
        } else {
          _project.isSelected = _project.id === project?.id;
        }
      }
      return updatedProjectsList;
    });
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

      {(!isAddingNewProject && selectedProject) &&
        <ViewProject selectedProject={selectedProject} handleAddProjectTask={addProjectTask} handleRemoveProjectTask={removeProjectTask} handleProjectDelete={deleteProject}/>
      }
    </>

  )
}