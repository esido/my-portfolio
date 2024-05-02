import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Preloader from "./components/Preloader/Preloader";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Skills from "./pages/Skills/Skills"
import Projects from "./pages/Projects/Projects"
import Contact from "./pages/Contact/Contact"


function App() {
  return (
    <>
      <Preloader/>
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/skills" element={<Skills/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
