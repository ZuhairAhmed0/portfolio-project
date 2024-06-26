import {
  SiTailwindcss,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiBootstrap,
  SiSass,
  SiGit,
  SiReact,
  SiNodedotjs,
  SiJavascript,
  SiCss3,
  SiHtml5,
} from "react-icons/si";
import { FaTools } from "react-icons/fa";
import { useSelector } from "react-redux";

function Skills() {
  const data = useSelector((store) => store.about);
  return (
    <section className="skills">
      <div className="container">
        <h2>
          <FaTools /> Skills
        </h2>
        <div className="skill">
          {data && data.skills &&
            data.skills.map((skill) => (
              <p key={skill}>
                {skill === "Html5" ? (
                  <SiHtml5 />
                ) : skill === "Css3" ? (
                  <SiCss3 />
                ) : skill === "Javascript" ? (
                  <SiJavascript />
                ) : skill === "NodeJs" ? (
                  <SiNodedotjs />
                ) : skill === "ReactJs" ? (
                  <SiReact />
                ) : skill === "Git" ? (
                  <SiGit />
                ) : skill === "Sass" ? (
                  <SiSass />
                ) : skill === "Bootstrap" ? (
                  <SiBootstrap />
                ) : skill === "Mongodb" ? (
                  <SiMongodb />
                ) : skill === "Mysql" ? (
                  <SiMysql />
                ) : skill === "ExpressJs" ? (
                  <SiExpress />
                ) : skill === "Tailwind" ? (
                  <SiTailwindcss />
                ) : (
                  ""
                )}
                {skill}
              </p>
            ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
