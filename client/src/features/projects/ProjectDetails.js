import { imageUrl } from "../../api/axios";
import { Link, useParams } from "react-router-dom";
import Button from "../../components/Button";
import Back from "../../components/Back";
import { useSelector } from "react-redux";
import { getProjects } from "./projectsSlice";
import Tools from "./Tools";

function ProjectDetails() {
  const data = useSelector(getProjects);
  const params = useParams();

  const projectName = params.name.split("-").join(" ");

  const project = data && data.find((project) => project.name === projectName);

  return (
    <div className="projects">
      <section className="details">
        {project && (
          <div className="container">
            <div className="card">
              <img src={`${imageUrl}/${project.image}`} alt={project.name} />
              <div className="text">
                <div className="project-name">
                  <h3>{project.name}</h3>
                  <Button className="secondary">
                    <Link target="_blank" to={project.liveDemo}>
                      Live Demo
                    </Link>
                  </Button>
                </div>
                <div className="description">
                  <h3>Details</h3>
                  <p>{project.description}</p>
                  <Tools tools={project.tools} />
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
      <Back />
    </div>
  );
}

export default ProjectDetails;
