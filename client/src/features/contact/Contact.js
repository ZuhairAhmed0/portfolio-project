import { FcContacts } from "react-icons/fc";
import Button from "../../components/Button";
import { useState } from "react";
import { useCreateMessage } from "./useCreateMessage";
import Alerts from "../../components/Alerts";
import updateCallback from "../../utils/updateCallback";
import { useDispatch } from "react-redux";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { createMessage, isCreating } = useCreateMessage();
  
  // eslint-disable-next-line
  const [isEdited, setIsEdited] = useState(false);
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();

    createMessage({ name, email, message }, updateCallback(setIsEdited, dispatch));
    setName("");
    setMessage("");
    setEmail("");
  }
  return (
    <section className="contact" id="contact">
      <div className="container" data-aos="fade-up">
        <h2>
          {" "}
          <FcContacts /> Contact Me
        </h2>
        <p>
          Feel free to Contact me by submitting the form below and i will get
          back to you as soon as possible
        </p>
        <form className="form-styles" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter Your Name"
              value={name}
              disabled={isCreating}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter Your Email"
              value={email}
              disabled={isCreating}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              cols="30"
              rows="10"
              placeholder="Enter Your Message"
              value={message}
              disabled={isCreating}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div>
            <Button className="secondary" type="submit">
              {isCreating ? "Submitting" : "Submit"}
            </Button>
          </div>
          <Alerts />
        </form>
      </div>
    </section>
  );
}

export default Contact;
