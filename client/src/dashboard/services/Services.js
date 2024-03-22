import { useReducer, useState } from "react";
import { FaEdit, FaPlus, FaTrash } from "react-icons/fa";
import Button from "../../components/Button";
import { useUpdateService } from "./useUpdateService";
import Overlay from "../../components/Overlay";
import { useDispatch, useSelector } from "react-redux";
import { getServices } from "../../features/services/servicesSlice";
import updateCallback from "../../utils/updateCallback";
import Alerts from "../../components/Alerts";
import { useAddService } from "./useAddService";
import { useDeleteService } from "./useDeleteService";
import deleteCallback from "../../utils/deleteCallback";
import { useQueryClient } from "@tanstack/react-query";

const initialState = { id: "", name: "", description: "", icon: "" };

function Services() {
  const data = useSelector(getServices);
  const [{ id, name, description, icon }, setState] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    initialState
  );
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  const [isEdited, setIsEdited] = useState(false);
  const [isNew, setIsNew] = useState(false);
  const { updateService, isUpdatting } = useUpdateService();
  const { addService, isCreatting } = useAddService();
  const { deleteService, isDeletting } = useDeleteService();

  function handleSubmit(e) {
    e.preventDefault();

    if (isNew) {
      addService(
        { name, description, icon },
        updateCallback(setIsEdited, dispatch, queryClient, "services")
      );
    } else {
      updateService(
        { _id: id, name, description, icon },
        updateCallback(setIsEdited, dispatch, queryClient, "services")
      );
    }
  }

  function handleUpdate(id) {
    setIsEdited((edited) => !edited);
    setIsNew(false);
    const service = data.find((service) => service._id === id);
    const { name, description, icon } = service;
    setState({
      id,
      name,
      description,
      icon,
    });
  }

  function handleAdd() {
    setIsEdited((edited) => !edited);
    setIsNew(true);

    setState(initialState);
  }

  function handleDelete(id) {
    deleteService(id, deleteCallback(dispatch, queryClient, "services"));
  }

  return (
    <section className="dashboard-services">
      <h1>
        <span>My Services</span>

        <Button className="secondary" onClick={handleAdd}>
          <FaPlus />
        </Button>
      </h1>
      <Alerts />
      {data.length > 0 &&
        data.map((service) => {
          return (
            <div className="item dashboard-card" key={service._id}>
              <p>
                <strong>{service.name}</strong>
                <br />
                {service.description}
              </p>
              <div className="actions">
                <Button
                  className="secondary"
                  onClick={() => handleUpdate(service._id)}
                >
                  <FaEdit />
                </Button>
                <Button
                  className="primary"
                  disabled={isDeletting}
                  onClick={() => handleDelete(service._id)}
                >
                  <FaTrash />
                </Button>
              </div>
            </div>
          );
        })}

      {isEdited && (
        <Overlay>
          <form className="form-styles" onSubmit={handleSubmit}>
            <h2>{isNew ? "Add new" : "Update"} Service</h2>
            <>
              <input type="hidden" value={id} />
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter Your Name"
                value={name}
                disabled={isUpdatting}
                onChange={(e) => setState({ name: e.target.value })}
              />
            </>

            <>
              <label htmlFor="icon">Icon</label>
              <input
                type="text"
                id="icon"
                placeholder="Enter Service icon name"
                value={icon}
                disabled={isUpdatting}
                onChange={(e) => setState({ icon: e.target.value })}
              />
            </>

            <>
              <label htmlFor="description">description</label>
              <textarea
                id="description"
                cols="30"
                rows="10"
                placeholder="Enter Your description"
                value={description}
                disabled={isUpdatting}
                onChange={(e) => setState({ description: e.target.value })}
              ></textarea>
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

export default Services;
