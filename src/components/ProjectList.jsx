export default function ProjectList({ projects, handleProjectSelect }) {
  return (
    <>
      {projects &&
        <ul className="mt-8">
          {...projects.map((project) => <button onClick={handleProjectSelect} className="w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800">{project.title}</button>)}
        </ul>
      }
    </>
  )
}