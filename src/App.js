import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Blogs from './components/Blogs/Blogs';
import ProjectsMain from './components/Projects/ProjectsMain/ProjectsMain';
import AboutMe from './components/AboutMe/AboutMe';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/blogs">
          <Blogs />
        </Route>
        <Route path="/projects">
          <ProjectsMain />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/about-me">
          <AboutMe />
        </Route>
      </Switch>

      <Footer></Footer>
    </Router>
  );
}

export default App;
