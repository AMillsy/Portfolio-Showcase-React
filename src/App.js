import "./styles/Styles.css";
import Layout from "./pages/Layout";
import Home from "./pages/Home";

import { useState } from "react";

function App() {
  const [currentPage, setPage] = useState("Home");

  function setNewPage(page) {
    setPage(page);
  }

  function displayCurrentPage() {
    switch (currentPage) {
      case "Home":
        return <Home />;

      case "Portfolio":
        return; //Portfolio page

      case "Resume":
        return; //Resume Page

      case "Contacts":
        return; //Contact page

      case "About me":
        return; //About me page

      default:
        return <Home />;
    }
  }

  return <Layout setPage={setNewPage}>{displayCurrentPage()}</Layout>;
}

export default App;
