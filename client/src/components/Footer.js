import { useSelector } from "react-redux";
import Social from "./Social";
function Footer() {
  const data = useSelector((store) => store.about);
  return (
    <footer className="footer">
      <div className="container links">
        <Social>
          <h2>Social</h2>
        </Social>
        <p>{data.bio}</p>
        <p className="copyright">
          &copy; Copyright 2021 - {new Date().getFullYear()}. Mode by Zuhair
          Ahmed
        </p>
      </div>
    </footer>
  );
}

export default Footer;
