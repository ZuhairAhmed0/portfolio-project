import { FcExpired } from "react-icons/fc";
import Back from "./Back";

function NotFound() {
  return (
    <div className="notfound">
      <FcExpired fontSize="4rem" />
      <p>
        The page you are trying to access dose not exist. The address may be
        wrong or the page has been moved
      </p>
      <Back />
    </div>
  );
}

export default NotFound;
