import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import PageNotFound from "./pages/PageNotFound";
import CircleFollow from "./ui/CircleFollow";
import UpBtn from "./ui/UpBtn";

function App() {
  return (
    <div className="mx-auto container">
      <div className="hidden sm:block">
        <CircleFollow />
      </div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      <UpBtn />
    </div>
  );
}

export default App;
