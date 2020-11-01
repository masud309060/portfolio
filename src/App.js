import './App.css';
import Home from './components/Home/Home';
import CssBaseline from '@material-ui/core/CssBaseline';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Blogs from './components/Blogs/Blogs';

function App() {
  return (
    <>
    <Router>
      <CssBaseline>

        <Switch>
          <Route path="/home">
            <Home/>
          </Route>

          <Route path="/blogs">
            <Blogs/>
          </Route>

          <Route path="/projects">
            <Projects/>
          </Route>

          <Route path="/about">
            <About/>
          </Route>

          <Route path="/contact">
            <Contact/>
          </Route>

          <Route path="/">
            <Home/>
          </Route>
        </Switch>

      </CssBaseline>
    </Router>
    </>
  );
}

export default App;
