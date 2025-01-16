import PropTypes from "prop-types";

function Box({ date, jobTitle, desc, skills = [] }) {
  return (
    <div className="hover:shadow-hoveredBox hover:bg-[#1e293b80] group bg-transparent sm:flex justify-between p-5 rounded-lg cursor-pointer transition-all shadow-normalBox duration-300">
      <div className="text-[14px] mt-2">{date}</div>
      <div className="sm:w-[400px]">
        <h3 className="text-slate-50 text-2xl mb-2  group-hover:text-[#5eead4] duration-300 transition-all">
          {jobTitle}
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
  );
}
Box.propTypes = {
  date: PropTypes.any,
  jobTitle: PropTypes.any,
  skills: PropTypes.any,
  desc: PropTypes.any,
};

export default Box;
