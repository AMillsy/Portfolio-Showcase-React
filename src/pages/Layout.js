import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
const Layout = function ({ children, setPage, page }) {
  return (
    <>
      <Navigation setPage={setPage} page={page} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
