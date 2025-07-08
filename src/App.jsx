import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import ImageSlider from "./components/ImageSlider";
import MainSection2 from "./components/MainSection2";
import MainSection3 from "./components/MainSection3";
import MainSection4 from "./components/MainSection4";
import Footer from "./components/Footer";
import CyberCampus from "./components/CyberCampus.jsx";

import FrontEndCurriculum from './components/front-end curriculum.jsx';
import BackEndCurriculum from './components/back-end curriculum.jsx';
import DesignCurriculum from './components/design curriculum.jsx';
import Person from './components/person.jsx';
import TeamIntro from './components/teamintro.jsx';
import Contact from './components/contact.jsx';
import Project from './components/project.jsx';
import ProjectTab from './components/project_tab.jsx';

const Home = () => (
  <>
    <ImageSlider />
    <MainSection2 />
    <MainSection3 />
    <MainSection4 />
  </>
);

const App = () => {
  const location = useLocation(); // Get current location
  const isCyberCampus = location.pathname === "/cyberCampus"; // Check if on CyberCampus route

  return (
    <div className={`w-full relative z-0 min-h-screen ${isCyberCampus ? 'bg-white' : 'bg-black'}`}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/frontend" element={<FrontEndCurriculum />} />
        <Route path="/backend" element={<BackEndCurriculum />} />
        <Route path="/pm_design" element={<DesignCurriculum />} />
        <Route path="/person" element={<Person />} />
        <Route path="/teamintro" element={<TeamIntro />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Project />} />
        <Route path="/project_tab" element={<ProjectTab />} />
        <Route path="/cyberCampus" element={<CyberCampus />} />
      </Routes>
      <Footer isCyberCampus={isCyberCampus} />
    </div>
  );
};

export default App;
