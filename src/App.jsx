import Content from "./components/Content";
import Sidebar from "./components/sidebar";
import { useState } from "react";

function App() {
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
    <main className="h-screen my-8 flex gap-8">
      <Sidebar onCreateNewProject={handleCreateNewProject} onProjectSelect={handleSelectProject} projects={projects} selectedProject={selectedProject} ></Sidebar>
      <Content onCreateNewProject={handleCreateNewProject} addProject={addProject} hideNewProjectForm={hideNewProjectForm} isAddingNewProject={isAddingNewProject} selectedProject={selectedProject}></Content>
    </main>
  );
}

export default App;
