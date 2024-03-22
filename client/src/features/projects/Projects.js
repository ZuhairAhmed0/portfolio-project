import { FaProjectDiagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { imageUrl } from "../../api/axios";
import { useSelector } from "react-redux";
import { getProjects } from "./projectsSlice";

function Projects() {
  const data = useSelector(getProjects)

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2>
          <FaProjectDiagram /> My Projects
        </h2>
        <div className="project">
          {data.map((project, i) => {
            return (
              <div className="card" key={project._id}>
                <img src={`${imageUrl}/${project.image}`} alt={project.name} />
                <div className="text">
                  <span className="count">{i + 1}</span>
                  <div className="project-name">
                    <p>{project.name}</p>

                    <i className="bx bx-like likes" data-id={project._id}>
                      <samp>{project.likes}</samp>
                    </i>
                  </div>
                  <div className="overlay">
                    <Link to={`projects/${project.name.split(" ").join("-")}`}>
                      Case Study
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
