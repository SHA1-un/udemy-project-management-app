export default function Task({projectTask, project, onClear}) {
  return (
    <li className="flex justify-between my-4">
      <label >{projectTask.name}</label>
      <button onClick={() => onClear(project, projectTask)} className="text-stone-700 hover:text-red-500">Clear</button>
    </li>
  )
}