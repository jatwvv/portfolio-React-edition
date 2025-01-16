import Header from "./sidebar/Header";
import NavList from "./sidebar/NavList";
import Social from "./sidebar/Social";

// eslint-disable-next-line react/prop-types
function Sidebar({ sections, activeSection }) {
  return (
    <div className="flex flex-col justify-between h-dvh left-0 lg:w-[47%] top-0 py-20 ps-9 lg:ps-28 lg:sticky">
      <Header />
      <NavList
        sections={sections}
        activeSection={activeSection}
      />
      <Social />
    </div>
  );
}

export default Sidebar;
