import React from 'react';
import Main from "../../Components/Main/Main";
import Submain from "../../Components/Submain/Submain";
import Aboutme from "../../Components/Aboutme/Aboutme";
import Skills from "../../Components/Skills/Skills";
import Projects from "../../Components/Projects/Projects";
import Contact from "../../Components/Contact/Contact";

const Home = () => {
  return (
    <div>
      <Main />
      <Submain />
      <Aboutme />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
