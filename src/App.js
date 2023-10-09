import "./styles/Styles.css";
import Layout from "./pages/Layout";
import Home from "./pages/Home";

import { useState } from "react";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import AboutMe from "./pages/AboutMe";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [currentPage, setPage] = useState("Home");

  function setNewPage(page) {
    setPage(page);
  }

  function displayCurrentPage() {
    switch (currentPage) {
      case "Home":
        return <Home setPage={setNewPage} />;

      case "Portfolio":
        return <Portfolio />;

      case "Resume":
        return <Resume />;

      case "Contacts":
        return <Contact />;

      case "About me":
        return <AboutMe />;

      default:
        return <Home />;
    }
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
