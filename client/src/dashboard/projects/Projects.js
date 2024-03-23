import Alerts from "../../components/Alerts";
import { useDispatch, useSelector } from "react-redux";
import { getProjects } from "../../features/projects/projectsSlice";
import { FaEdit, FaLink, FaPlus, FaTrash } from "react-icons/fa";
import { useReducer, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Overlay from "../../components/Overlay";
import { useUpdateProject } from "./useUpdateProject";
import updateCallback from "../../utils/updateCallback";
import { useAddProject } from "./useAddProject";
import Tools from "../../features/projects/Tools";
import { useDeleteProject } from "./useDeleteProject";
import deleteCallback from "../../utils/deleteCallback";
import { useQueryClient } from "@tanstack/react-query";
import { setSuccessOrError } from "../../store";
const initialState = {
  id: "",
  name: "",
  description: "",
  tools: [],
  liveDemo: "",
  sourceCode: "",
  image: "",
};

function Projects() {
  const data = useSelector(getProjects);
  const [
    { id, name, description, tools, sourceCode, liveDemo, image },
    setState,
  ] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    initialState
  );

  const [isEdited, setIsEdited] = useState(false);
  const [isNew, setIsNew] = useState(false);
  const { updateProject, isUpdatting } = useUpdateProject();
  const { addProject, isCreatting } = useAddProject();
  const { deleteProject } = useDeleteProject();
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("tools", tools);
    formData.append("sourceCode", sourceCode);
    formData.append("liveDemo", liveDemo);
    formData.append("image", image);

    if (!name || !description || !tools || !sourceCode || !liveDemo || !image) {
      dispatch(setSuccessOrError(null, "all fields are required"));
      setTimeout(() => dispatch(setSuccessOrError(null)), 3000);
    } else {
      if (isNew) {
        addProject(
          formData,
          updateCallback(setIsEdited, dispatch, queryClient, "projects")
        );
      } else {
        formData.append("_id", id);
        updateProject(
          formData,
          updateCallback(setIsEdited, dispatch, queryClient, "projects")
        );
      }
    }
  }
  function handleUpdate(id) {
    setIsEdited((edited) => !edited);
    setIsNew(false);
    const project = data.find((project) => project._id === id);

    const { name, description, liveDemo, sourceCode, image, tools } = project;

    setState({
      id,
      name,
      description,
      liveDemo,
      sourceCode,
      tools,
      image,
    });
  }

  function handleAdd() {
    setIsEdited((edited) => !edited);
    setIsNew(true);

    setState(initialState);
  }

  function handleDelete(id) {
    deleteProject(id, deleteCallback(dispatch, queryClient, "projects"));
  }

  return (
    <section className="dashboard-Projects">
      <h1>
        <span>My Projects</span>
        <Button className="secondary" onClick={handleAdd}>
          <FaPlus />
        </Button>
      </h1>

      {data.length > 0 &&
        data.map((project) => {
          return (
            <div className="dashboard-card item" key={project._id}>
              <div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <Tools tools={project.tools} />
              </div>
              <div className="actions">
                <Button className="primary">
                  <FaEdit onClick={() => handleUpdate(project._id)} />
                </Button>
                <Button className="secondary">
                  <Link to={`/projects/${project.name.split(" ").join("-")}`}>
                    Details
                  </Link>
                </Button>
                <Button className="primary">
                  <Link target="_blank" to={project.liveDemo}>
                    <FaLink />
                  </Link>
                </Button>
                <Button className="secondary">
                  <Link target="_blank" to={project.sourceCode}>
                    Source Code
                  </Link>
                </Button>
                <Button
                  className="primary"
                  onClick={() => handleDelete(project._id)}
                >
                  <FaTrash />
                </Button>
              </div>
            </div>
          );
        })}
      <Alerts />

      {isEdited && (
        <Overlay>
          <form className="form-styles" onSubmit={handleSubmit}>
            <Alerts />
            <h2>{isNew ? "Add new" : "Update"} Project</h2>
            <>
              <input type="hidden" value={id} />
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter project Name"
                value={name}
                disabled={isUpdatting}
                onChange={(e) => setState({ name: e.target.value })}
              />
            </>

            <>
              <label htmlFor="description">description</label>
              <textarea
                id="description"
                cols="30"
                rows="10"
                placeholder="Enter project description"
                value={description}
                disabled={isUpdatting}
                onChange={(e) => setState({ description: e.target.value })}
              ></textarea>
            </>

            <>
              <label htmlFor="tools">Tools</label>
              <input
                type="text"
                id="tools"
                placeholder="Enter project tools"
                value={tools}
                disabled={isUpdatting}
                onChange={(e) => setState({ tools: e.target.value })}
              />
            </>

            <>
              <label htmlFor="live">Live Demo Link</label>
              <input
                type="text"
                id="live"
                placeholder="Enter project live demo link"
                value={liveDemo}
                disabled={isUpdatting}
                onChange={(e) => setState({ liveDemo: e.target.value })}
              />
            </>

            <>
              <label htmlFor="sourceCode">source code</label>
              <input
                type="text"
                id="sourceCode"
                placeholder="Enter project source code"
                value={sourceCode}
                disabled={isUpdatting}
                onChange={(e) => setState({ sourceCode: e.target.value })}
              />
            </>

            <>
              <label htmlFor="image">Project image</label>
              <input
                type="file"
                id="image"
                filename={image}
                disabled={isUpdatting}
                onChange={(e) => setState({ image: e.target.files[0] })}
              />
            </>

            <div className="actions">
              <Button className="secondary" type="submit">
                {isUpdatting || isCreatting
                  ? "Please wait"
                  : isNew
                  ? "Add"
                  : "Save"}
              </Button>
              <Button
                className="primary"
                type="button"
                onClick={() => setIsEdited(false)}
              >
                close
              </Button>
            </div>
          </form>
        </Overlay>
      )}
    </section>
  );
}

export default Projects;
