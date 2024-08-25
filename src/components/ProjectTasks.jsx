import Task from "./Task";

export default function ProjectTasks({ project }) {
  const projectTasks = project.tasks ?? [];

  return (
    <div>
      <h2></h2>
      <input type="text" />
      <button></button>

      {!!projectTasks &&
        <ul>
          {projectTasks.map(task => <Task projectTask={task} />)}
        </ul>
      }
    </div>
  )
}