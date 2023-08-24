import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
const Layout = function ({ children }) {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
