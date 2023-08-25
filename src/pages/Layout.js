import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
const Layout = function ({ children, setPage }) {
  return (
    <>
      <Navigation setPage={setPage} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
