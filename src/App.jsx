import Content from "./components/Content";
import Sidebar from "./components/sidebar";
import { useState } from "react";

function App() {
  const [projects, setProjects] = useState([]);
  const [isAddingNewProject, setIsAddingNewProject] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  function handleCreateNewProject() {
    setIsAddingNewProject(true);
  }

  function hideNewProjectForm() {
    setIsAddingNewProject(false);
  }

  function addProject(newProject) {
    setProjects((prevProjects) => {
      const newProjectsList = [...prevProjects];
      newProjectsList.push(newProject);

      return newProjectsList;
    });
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar onCreateNewProject={handleCreateNewProject} projects={projects}></Sidebar>
      <Content onCreateNewProject={handleCreateNewProject} addProject={addProject} hideNewProjectForm={hideNewProjectForm} isAddingNewProject={isAddingNewProject} ></Content>
    </main>    
  );
}

export default App;
