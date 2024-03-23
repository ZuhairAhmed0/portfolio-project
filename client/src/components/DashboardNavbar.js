import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import Logo from "./Logo";
import { setAccessToken } from "../features/about/aboutSlice";

function DashboardNavbar() {
  const dispatch = useDispatch()
  function handlLogout() {
    dispatch(setAccessToken(null))
  }
  return (
    <aside className="dashboard-navbar">
      <Logo />
      <ul>
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
        
        <li>
          <Link to="/" onClick={handlLogout}>Logout</Link>
        </li>
      </ul>
    </aside>
  );
}

export default DashboardNavbar;
