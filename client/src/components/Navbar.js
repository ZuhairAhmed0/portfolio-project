import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { HashLink as Link } from "react-router-hash-link";
import Logo from "./Logo";
import { useSelector } from "react-redux";

function Navbar() {
  const [active, setActive] = useState("");
  const [openNavbar, setOpenNavbar] = useState(false);
  const { accessToken } = useSelector((store) => store.about);

  function handleActive(link) {
    setOpenNavbar((open) => !open);
    setActive(link);
  }

  return (
    <nav className="navbar">
      <div className="container">
        <Logo />

        {openNavbar ? (
          <FaTimes
            className="bars"
            onClick={() => setOpenNavbar((open) => !open)}
          />
        ) : (
          <FaBars
            className="bars"
            onClick={() => setOpenNavbar((open) => !open)}
          />
        )}

        <ul style={{ height: `${openNavbar ? "91vh" : "0"}` }}>
          <li>
            <Link
              to="/#"
              className={active === "" ? "active" : ""}
              onClick={() => handleActive("")}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/#about"
              className={active === "about" ? "active" : ""}
              onClick={() => handleActive("about")}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/#services"
              className={active === "services" ? "active" : ""}
              onClick={() => handleActive("services")}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/#projects"
              className={active === "projects" ? "active" : ""}
              onClick={() => handleActive("projects")}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/#contact"
              className={active === "contact" ? "active" : ""}
              onClick={() => handleActive("contact")}
            >
              Contact Me
            </Link>
          </li>
          {accessToken && (
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
