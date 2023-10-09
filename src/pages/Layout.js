import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
const Layout = function ({ children, setPage, page }) {
  return (
    <>
      <Navigation setPage={setPage} page={page} />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
