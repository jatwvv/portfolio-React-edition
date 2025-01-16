import About from "./content/About";
import Experince from "./content/Experince";
import Projects from "./content/Projects";

function Content() {
  return (
    <div className="lg:w-[49%] lg:pt-20 lg:px-0 p-9">
      <div id="about" className="mb-48">
        <About />
      </div>
      <div id="experince" className="mb-48">
        <Experince />
      </div>
      <div id="projects" className="mb-48">
        <Projects />
      </div>
    </div>
  );
}

export default Content;
