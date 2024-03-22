import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ScrollToUpButton from "./components/ScrollToUpButton";

function Layout() {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
      <Footer />
      <ScrollToUpButton />
    </div>
  );
}

export default Layout;
