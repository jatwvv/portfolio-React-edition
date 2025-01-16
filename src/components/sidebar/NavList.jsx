import PropTypes from "prop-types";
const NavList = ({ sections, activeSection }) => {
  return (
    <ul>
      {sections.map((section) => (
        <li
          key={section.id}
          className={
            activeSection === section.id
              ? "text-slate-50 group py-2 relative flex items-center uppercase w-fit gap-2 transition-all duration-500 cursor-pointer"
              : "group hover:text-slate-50 py-2 relative flex items-center uppercase w-fit gap-2 transition-all duration-500 cursor-pointer"
          }
          onClick={() => {
            document
              .getElementById(section.id)
              .scrollIntoView({ behavior: "smooth" });
          }}
        >
          <span
            className={
              activeSection === section.id
                ? "w-16 bg-slate-50 transition-all duration-500 block rounded-xl h-[2px]"
                : "group-hover:w-16 group-hover:bg-slate-50 w-8 transition-all duration-500 block rounded-xl h-[2px] bg-slate-500 "
            }
          ></span>

          {section.title}
        </li>
      ))}
    </ul>
  );
};

NavList.propTypes = {
  sections: PropTypes.any,
  activeSection: PropTypes.any,
  onNavigate: PropTypes.any,
};

export default NavList;
