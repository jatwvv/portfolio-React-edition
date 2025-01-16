import data from "../data/projectsList.json";
import Row from "../ui/Row";
function Table() {
  return (
    <div className="overflow-x-auto">
      <table className="w-[100%] mb-[80px] "> 
        <thead>
          <tr className="border-b mb-5 text-left text-slate-50">
            <th className="p-2" scope="col">Year</th>
            <th className="p-2" scope="col">Project</th>
            <th className="p-2" scope="col">Built with</th>
            <th className="p-2" scope="col">Link</th>
          </tr>
        </thead>
        <tbody>
          {data.projectList.map((project) => (
            <Row
              key={project.id}
              title={project.title}
              year={project.year}
              link={project.link}
              features={project.features}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
