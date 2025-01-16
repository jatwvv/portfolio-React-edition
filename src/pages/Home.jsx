import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Content from "../components/Content";

const sections = [
  { id: "about", title: "About" },
  { id: "experince", title: "Experince" },
  { id: "projects", title: "Projects" },
];

function Home() {
  const [activeSection, setActiveSection] = useState(sections[0].id);

  useEffect(() => {
    function handleScroll() {
      let currentSectionId = sections[0].id;
      for (let section of sections) {
        const sectionElement = document.getElementById(section.id);
        if (sectionElement) {
          const sectionTop = sectionElement.offsetTop;
          if (window.scrollY >= sectionTop - 50) {
            currentSectionId = section.id;
          }
        }
      }
      setActiveSection(currentSectionId);
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="lg:flex ">
      <Sidebar sections={sections} activeSection={activeSection} />
      <Content sections={sections} />
    </div>
  );
}

export default Home;
