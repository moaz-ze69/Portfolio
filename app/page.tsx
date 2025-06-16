import React from "react";
import Home from "./components/Home";
import Skill from "./components/Skill";
import Experience from "./components/Experience";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";

export default function Landing() {
  return (
    <div className="p-5 md:p-10">
      <Home />
      <Skill />
      <Experience />
      <About />
      <Project />
      <Contact />
    </div>
  );
}
