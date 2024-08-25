import Task from "./Task";

import { useRef } from "react";

export default function ProjectTasks({ project, handleAddProjectTask, handleRemoveProjectTask}) {
  const projectTasks = project?.tasks;
  const taskInput = useRef();

  function onAddTask() {
    const taskName = taskInput.current.value;
    handleAddProjectTask(project, {name: taskName});
  }

  return (
    <div className="w-[35rem] mt-16">
      <h2 className="text-xl font-bold text-stone-700 my-4">Tasks</h2>
      <input ref={taskInput} type="text" className="w-64 px-2 py-1 rounded-sm bg-stone-200" />
      <button onClick={onAddTask} className="text-stone-600 hover:text-stone-950">Add Task</button>

      {projectTasks &&
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {projectTasks.map(task => <Task key={task.id} projectTask={task} project={project} onClear={handleRemoveProjectTask}/>)}
        </ul>
      }
    </div>
  )
}