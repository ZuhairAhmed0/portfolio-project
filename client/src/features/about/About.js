import Button from "../../components/Button";
import { FcAbout } from "react-icons/fc";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function About() {
  const data = useSelector((store) => store.about);

  return (
    <section className="about" id="about">
      {data && (
        <div className="container">
          <h2>
            <FcAbout /> About Me
          </h2>
          <p>
            Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology
          </p>
          <h3>Get to know me!</h3>
          <p>{data.info}</p>
          <p>
            I'm open to <strong>Job</strong> opportunities where I can
            contribute, learn and grow. If you have a good opportunity that
            matches my skills and experisn then don't hesitate to{" "}
            <strong>contact</strong> me.
          </p>
         <Link to="https://app.flowcv.com/api/public/download_resume?token=ulo1t00a8d">
          <Button className="primary" type="button">
            Download CV
          </Button>
          </Link>
        </div>
      )}
    </section>
  );
}

export default About;
