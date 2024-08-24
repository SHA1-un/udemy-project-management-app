import Content from "./components/Content";
import Sidebar from "./components/sidebar";
import { useState } from "react";

function App() {
  const [projects, setProjects] = useState([]);
  const [showNewProjForm, setShowNewProjForm] = useState(false);

  function showNewProjectForm() {
    setShowNewProjForm(true);
  }

  function hideNewProjectForm() {
    setShowNewProjForm(false);
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
      <Sidebar handleAddProject={showNewProjectForm} projects={projects}></Sidebar>
      <Content handleAddProject={showNewProjectForm} handleSave={addProject} handleCancel={hideNewProjectForm} isAddingNewProj={showNewProjForm} ></Content>
    </main>    
  );
}

export default App;
