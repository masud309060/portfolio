import "./App.css";
import { Routes, Route } from "react-router";
import { CssBaseline } from "@mui/material";
import ParticlesLayout from "./components/common/ParticlesLayout";
import Home from "./components/Home/Home";
import About from "./components/About/About";
// import Projects from "./components/Projects/Projects";
// import Contact from "./components/Contact/Contact";
// import Blogs from "./components/Blogs/Blogs";

const App = () => {
  return (
    <div>
      <CssBaseline />
      <Routes>
        <Route index element={<ParticlesLayout />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        {/* <Route path="step-3" element={<StepThree />} /> */}
      </Routes>
    </div>
  );
};

export default App;
