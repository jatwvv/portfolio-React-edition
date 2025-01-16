import { GoLinkExternal } from "react-icons/go";
import PropTypes from "prop-types";

function Row({ title, link, features = [], year }) {
  return (
    <tr className="border-b border-[#cccccc26] text-left h-12">
      <th scope="row">{year}</th>
      <td className="text-slate-50">{title}</td>
      <td>
        <ul className="flex gap-2 ml-2">
          {features.map((skill, index) => (
            <li
              className="text-xs mx-1 p-2 px3 bg-[#122b39] text-[#5eead4] rounded-full font-medium"
              key={index}
            >
              {skill}
            </li>
          ))}
        </ul>
      </td>
      <td>
        <a target="_blank" className="flex items-center gap-1 transition-colors hover:text-[#5eead4]" href={link}>
          Demo
          <GoLinkExternal />
        </a>
      </td>
    </tr>
  );
}

Row.propTypes = {
  title: PropTypes.any,
  link: PropTypes.any,
  features: PropTypes.any,
  year: PropTypes.any,
};
export default Row;
