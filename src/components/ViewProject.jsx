import ProjectDetails from "./ProjectDetails";
import ProjectTasks from "./ProjectTasks";

export default function ViewProject({project}) {
  return (
    <>
      <ProjectDetails project={project}/>
      <div/>
      <ProjectTasks project={project}/>
    </>
  );
}