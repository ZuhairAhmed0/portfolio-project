import { useQueryClient } from "@tanstack/react-query";
import { useReducer } from "react";
import { useDispatch } from "react-redux";
import { useLogin } from "./useLogin";
import Button from "../../components/Button";
import Alerts from "../../components/Alerts";
import { setSuccessOrError } from "../../store";
import { setAccessToken } from "../about/aboutSlice";
import { FaUserLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Login() {
  const [{ email, password }, setState] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    { email: "", password: "" }
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { login, isLoading } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    login(
      { email, password },
      {
        onSuccess: (res) => {
          dispatch(setAccessToken(res));
          queryClient.invalidateQueries("about");
          dispatch(setSuccessOrError(null));
          navigate("/dashboard");
        },
        onError: (err) => {
          dispatch(setSuccessOrError(null,err.response.data || err.message));
        },
      }
    );
  }
  return (
    <section className="contact">
      <div className="container">
        <h2>
          {" "}
          <FaUserLock /> Login
        </h2>
        <form className="form-styles" onSubmit={handleSubmit}>
          <Alerts />
          <>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              placeholder="Enter your email"
              value={email || ""}
              disabled={isLoading}
              onChange={(e) => setState({ email: e.target.value })}
            />
          </>
          <>
            <label htmlFor="password">Password</label>
            <input
              type="text"
              id="password"
              placeholder="Enter your password"
              value={password || ""}
              disabled={isLoading}
              onChange={(e) => setState({ password: e.target.value })}
            />
          </>

          <div className="actions">
            <Button className="secondary" type="submit">
              {isLoading ? "Please wait" : "Login"}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Login;
