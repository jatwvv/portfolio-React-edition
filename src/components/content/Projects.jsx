import ProjectBox from "../../ui/ProjectBox";
import { GoLinkExternal } from "react-icons/go";
import projects from "../../data/projects.json";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <div className="flex flex-col gap-7 py-10">
      {projects.projects.map((project) => (
        <ProjectBox
          key={project.id}
          projectName={project.title}
          desc={project.description}
          link={project.link}
          img={project.cover}
          skills={project.features}
        />
      ))}

      <Link
        to="/projects"
        className="text-slate-50 transition-all duration-500 font-semibold ml-[20px] flex items-center gap-1 hover:text-[#5eead4]"
      >
        View All Projects
        <GoLinkExternal />
      </Link>
    </div>
  );
}

export default Projects;
