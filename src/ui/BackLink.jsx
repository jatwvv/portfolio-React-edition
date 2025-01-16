import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";

function BackLink() {
  return (
    <div className="mt-24 ">
      <div className="flex items-center gap-1 cursor-pointer mb-3  text-[#5eead4] group transition-colors hover:text-[#4bbcab]">
        <AiOutlineArrowLeft className="transition-all group-hover:translate-x-[-4px]" />
        <Link to="/">Jasmine Tareq</Link>
      </div>
      <h1 className="text-4xl mb-[0.67em]">All Projects</h1>
    </div>
  );
}

export default BackLink;
