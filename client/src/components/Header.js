import Button from "./Button";
import Social from "./Social";
import { HashLink } from "react-router-hash-link";
import { useSelector } from "react-redux";

function Header() {
  const { bio } = useSelector((store) => store.about);

  return (
    <header>
      <div className="container">
        <div className="info">
          <h3>Hey, I'm Zuhair Ahmed</h3>
          <p>{bio}</p>
          <HashLink to="/#projects">
          <Button className="primary">
            Projects
          </Button>
         </HashLink>
        </div>
        <div className="img"></div>
      </div>
      <Social />
    </header>
  );
}

export default Header;
