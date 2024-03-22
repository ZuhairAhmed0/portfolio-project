import { Link } from "react-router-dom";
import Logo from "./Logo";
function DashboardNavbar() {
  return (
    <aside className="dashboard-navbar">
      <Logo />
      <ul>
        <li>
          <Link to="/dashboard">home</Link>
        </li>
        <li>
          <Link to="about">About</Link>
        </li>
        <li>
          <Link to="services">Services</Link>
        </li>
        <li>
          <Link to="projects">Projects</Link>
        </li>
        <li>
          <Link to="messages">Messages</Link>
        </li>
      </ul>
    </aside>
  );
}

export default DashboardNavbar;
