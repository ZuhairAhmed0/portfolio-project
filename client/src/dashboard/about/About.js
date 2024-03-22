import { useReducer, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/Button";
import { useUpdateAbout } from "./useUpdateAbout";
import Overlay from "../../components/Overlay";
import updateCallback from "../../utils/updateCallback";
import Alerts from "../../components/Alerts";
import { useQueryClient } from "@tanstack/react-query";

function About() {
  const data = useSelector((store) => store.about);
  const [{ bio, info, skills }, setState] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    data
  );

  const [isEdited, setIsEdited] = useState(false);
  const { updateAboutInfo, isUpdatting } = useUpdateAbout();
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  function handleSubmit(e) {
    e.preventDefault();
    updateAboutInfo(
      { _id: data._id, bio, info, skills },
      updateCallback(setIsEdited, dispatch, queryClient, "about")
    );
  }

  function handleUpdate() {
    setIsEdited((edited) => !edited);

    setState({
      bio: data.bio,
      info: data.info,
      skills: data.skills,
    });
  }

  return (
    <section className="dashboard-about">
      <h1>
        <span>About Me</span>
        {!isEdited && <FaEdit onClick={handleUpdate} />}
      </h1>

      <Alerts />

      <div className="dashboard-card">{bio}</div>
      <div className="dashboard-card">{info}</div>

      <div className="skills dashboard-card">
        {skills.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </div>
      {isEdited && (
        <Overlay>
          <form className="form-styles" onSubmit={handleSubmit}>
            <h2>Update About Me</h2>
            <>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter Your Name"
                disabled={isUpdatting}
                value={bio}
                onChange={(e) => setState({ bio: e.target.value })}
              />
            </>

            <>
              <label htmlFor="info">information</label>
              <textarea
                id="info"
                cols="30"
                rows="10"
                placeholder="Enter Your information"
                disabled={isUpdatting}
                value={info}
                onChange={(e) => setState({ info: e.target.value })}
              ></textarea>
            </>

            <>
              <label htmlFor="skills">Skills</label>
              <input
                type="text"
                id="skills"
                placeholder="Enter your skills"
                value={skills}
                disabled={isUpdatting}
                onChange={(e) =>
                  setState({ skills: e.target.value.split(",") })
                }
              />
            </>

            <div className="actions">
              <Button className="secondary" type="submit">
                {isUpdatting ? "Please wait" : "Save"}
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

export default About;
