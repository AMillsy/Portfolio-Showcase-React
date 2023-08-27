import "./styles/Styles.css";
import Layout from "./pages/Layout";
import Home from "./pages/Home";

import { useState } from "react";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

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
        return; //About me page

      default:
        return <Home />;
    }
  }

  return (
    <Layout setPage={setNewPage} page={currentPage}>
      {displayCurrentPage()}
    </Layout>
  );
}

export default App;
