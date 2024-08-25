export default function Task({projectTask, onClear}) {
  return (
    <li>
      <label >{projectTask.title}</label>
      <button onClick={onClear}>Clear</button>
    </li>
  )
}