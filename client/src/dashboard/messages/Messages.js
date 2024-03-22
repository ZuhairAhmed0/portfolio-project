import { useDispatch, useSelector } from "react-redux";
import { getMessages } from "./messagesSlice";
import Alerts from "../../components/Alerts";
import Button from "../../components/Button";
import { AiOutlineSend, AiTwotoneDelete } from "react-icons/ai";
import { useDeleteMessage } from "./useDeleteMessage";
import deleteCallback from "../../utils/deleteCallback";
import { useReducer, useState } from "react";
import Overlay from "../../components/Overlay";
import { useQueryClient } from "@tanstack/react-query";
const initialState = {
  id: "",
  name: "",
  email: "",
  message: "",
};
function Messages() {
  const data = useSelector(getMessages);
  const [state, setState] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    initialState
  );

  const { deleteMessage } = useDeleteMessage();
  const [isEdited, setIsEdited] = useState(false);
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  function handleSubmit(e) {
    e.preventDefault();
    console.log(state);
  }

  function handleReply(id) {
    setIsEdited((edited) => !edited);

    const message = data.find((project) => project._id === id);

    const { name, email } = message;

    setState({
      id,
      name,
      email,
    });
  }
  function handleDelete(id) {
    deleteMessage(id, deleteCallback(dispatch, queryClient, "messages"));
  }
  return (
    <section className="dashboard-messages">
      <h1>
        <span>My Messages</span>
      </h1>
      <Alerts />
      {data.length > 0 &&
        data.map((message) => {
          return (
            <div className="item dashboard-card" key={message._id}>
              <p>
                <strong>{message.name}</strong> ({message.email})
                <br />
                {message.message}
              </p>
              <div className="actions">
                <Button
                  className="secondary"
                  onClick={() => handleReply(message._id)}
                >
                  <AiOutlineSend />
                </Button>
                <Button
                  className="primary"
                  onClick={() => handleDelete(message._id)}
                >
                  <AiTwotoneDelete />
                </Button>
              </div>
            </div>
          );
        })}

      {isEdited && (
        <Overlay>
          <form className="form-styles" onSubmit={handleSubmit}>
            <h2>Update Service</h2>
            <>
              <label htmlFor="description">description</label>
              <textarea
                id="description"
                cols="30"
                rows="10"
                placeholder="Enter project description"
                value={state.message}
                onChange={(e) => setState({ message: e.target.value })}
              ></textarea>
            </>

            <div className="actions">
              <Button className="secondary" type="submit">
                {true ? "Please wait" : "Send"}
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

export default Messages;
