import PropTypes from "prop-types";
import { GoLinkExternal } from "react-icons/go";

function ProjectBox({ img, projectName, desc, skills = [], link }) {
  return (
    <a target="_blank" href={link}>
      <div className="hover:shadow-hoveredBox hover:bg-[#1e293b80] group bg-transparent sm:flex justify-between p-5 rounded-lg cursor-pointer transition-all shadow-normalBox duration-300">
        <div className=" mt-2">
          <img
            className="mr-2 w-[150px] rounded-md border-2 border-solid border-transparent transition-all duration-300 group-hover:border-[#94a3b8]"
            src={img}
            alt="thumbnail "
          />
        </div>
        <div className="sm:w-[400px]">
          <h3 className="text-slate-50 text-2xl mb-2 flex items-center gap-2 group-hover:text-[#5eead4] duration-300 transition-all">
            {projectName} <GoLinkExternal />
          </h3>
          <p className="text-xs mb-4">{desc}</p>
          <ul className="flex flex-wrap gap-2 -ml-2">
            {skills.map((skill, index) => (
              <li
                className="text-xs mx-1 p-2 px3 bg-[#122b39] text-[#5eead4] rounded-full font-medium"
                key={index}
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </a>
  );
}
ProjectBox.propTypes = {
  img: PropTypes.any,
  projectName: PropTypes.any,
  skills: PropTypes.any,
  desc: PropTypes.any,
  link: PropTypes.any,
};

export default ProjectBox;
