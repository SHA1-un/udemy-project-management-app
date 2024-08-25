import ProjectList from "./ProjectList"

export default function Sidebar({projects, onCreateNewProject}) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Projects</h2>
      <button onClick={onCreateNewProject} className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100">+ Add Project</button>
      {/* list containing all of the added projects - need to split out to its own component */}
      <ProjectList projects={projects}/>
    </aside>
  )
}