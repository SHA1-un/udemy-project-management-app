export default function ProjectList({ projects, onProjectSelect, selectedProject }) {
  return (
    <>
      {projects &&
        <ul className="mt-8">
          {...projects.map((project) => {
            let styleClass = "w-full text-left px-2 py-1 rounded-sm my-1";
            if (project.id === selectedProject?.id) {
              styleClass += " text-stone-200 bg-stone-800";
            } else {
              styleClass += " hover:text-stone-200 hover:bg-stone-800";
            }

            return <button onClick={() => onProjectSelect(project)} className={styleClass}>{project.title}</button>
          })}
        </ul>
      }
    </>
  )
}