import React, {useEffect} from "react";
import "./index.css"
import Home from "./routes/Home"
import About from "./routes/About"
import Projects from "./routes/Project"
import Contact from "./routes/Contact"

import {Route, Routes} from "react-router-dom"

function App() {
  useEffect(() => {
    document.title = "Vince Dionisio CMPE CV";
  }
)
  return (
    <>
      <Routes>
        <Route path="/" element = {<Home />}/>
        <Route path="/projects" element = {<Projects />}/>
        <Route path="/about" element = {<About />}/>
        <Route path="/contact" element = {<Contact />}/>
      </Routes>
    </>
  );
}

export default App;
