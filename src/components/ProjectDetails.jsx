export default function ProjectDetails({project}) {
  return (
    <>
      <h2>{project.title}</h2>
      <button>Delete</button>
      <label>{project.dueDate}</label>
      <p>{project.description}</p>
    </>
  )
}