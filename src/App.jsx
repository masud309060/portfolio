import "./App.css";
import { Routes, Route } from "react-router";
import ParticlesLayout from "./components/common/ParticlesLayout";
import Home from "./components/Home/Home";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import Projects from "./components/Projects/Projects";
// import About from "./components/About/About";
// import Contact from "./components/Contact/Contact";
// import Blogs from "./components/Blogs/Blogs";

const App = () => {
  return (
    <div>
      <Routes>
        <Route index element={<ParticlesLayout />} />
        <Route path="home" element={<Home />} />
        {/* <Route path="step-3" element={<StepThree />} /> */}
      </Routes>
    </div>
  );
};

export default App;
