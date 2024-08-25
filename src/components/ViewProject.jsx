import ProjectDetails from "./ProjectDetails";
import ProjectTasks from "./ProjectTasks";

export default function ViewProject({selectedProject, handleAddProjectTask }) {
  return (
    <div >
      <div className="flex items-center justify-between">
        <h2  className="text-2xl font-bold text-stone-700 mb-4">{selectedProject.title}</h2>
        <button className="text-stone-700 hover:text-red-500">Delete</button>
      </div>
      <p className="mb-4 text-stone-400">{selectedProject.dueDate}</p>
      <p className="flex flex-col gap-1 my-4">{selectedProject.description}</p>
      <hr className="solid"/>
      <ProjectTasks project={selectedProject} handleAddProjectTask={handleAddProjectTask} />
    </div>
  );
}